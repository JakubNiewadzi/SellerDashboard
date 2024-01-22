import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Button} from "reactstrap";
import {OpinionComponent} from "../components/OpinionComponent";
import {opinions} from "../fakebackend/FakeBackend";
import {ButtonComponent} from "../components/ButtonComponent";
import {RadioButtonComponent} from "../components/RadioButtonComponent";
import {NavLink} from "react-router-dom";

export const OpinionsWidget = () => {
    const [clickedButton, setClickedButton] = useState(3);
    const translation = useSelector(state => state.context.translation)
    const user = useSelector(state => state.auth.user)
    const currentAccount = useSelector(state => state.auth.currentAccount)
    const isDark = useSelector(state => state.context.isDark)
    const [filteredOpinions, setFilteredOpinions] =
        useState(opinions.filter(opinion => opinion.user.username === user && opinion.user.account === currentAccount).sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5))

    useEffect(() => {
        updateOpinions(clickedButton)
    }, [currentAccount]);

    const updateOpinions = (buttonId) => {
        switch (buttonId) {
            case 1:
                setFilteredOpinions(opinions.filter(opinion =>
                    opinion.isPositive && opinion.user.username === user && opinion.user.account === currentAccount)
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .slice(0, 5))
                break
            case 2:
                setFilteredOpinions(opinions.filter(opinion =>
                    !opinion.isPositive && opinion.user.username === user && opinion.user.account === currentAccount)
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .slice(0, 5))
                break
            default:
                setFilteredOpinions(opinions.filter(opinion =>
                    opinion.user.username === user && opinion.user.account === currentAccount)
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .slice(0, 5))
                break
        }
        setClickedButton(buttonId)
    }
    const RadioButtonGroup = () => {
        return opinions.length !== 0 ? <div className='radio-container'>
            <RadioButtonComponent
                    color={clickedButton === 1 ? 'success' : 'primary'}
                    onClick={() => updateOpinions(1)}>
                {translation['positive']}
            </RadioButtonComponent>
            <RadioButtonComponent
                    color={clickedButton === 2 ? 'success' : 'primary'}
                    onClick={() => updateOpinions(2)}>
                {translation['negative']}
            </RadioButtonComponent>
            <RadioButtonComponent
                    style={{marginRight: '0px'}}
                    color={clickedButton === 3 ? 'success' : 'primary'}
                    onClick={() => updateOpinions(3)}>
                {translation['all']}
            </RadioButtonComponent>
        </div> : <div></div>
    }

    return <div className={`Widget ${isDark ? 'dark' : 'light'}`}>
        <div className='header-container'>
            <div>{translation['opinions']}</div>
            <RadioButtonGroup/>
        </div>
        {opinions.length !== 0 ? filteredOpinions.map((filteredOpinion, index) => {
            return <OpinionComponent key={index}
                                       opinion={filteredOpinion.opinion}
                                       from={filteredOpinion.from}
                                       isPositive={filteredOpinion.isPositive}/>
        })  : <span className='no-content-text'>{translation['noOpinionsFound']}</span>}
        {opinions.length !== 0 ?<ButtonComponent tag={NavLink} to='/opinions'>{translation['moreOpinions']}</ButtonComponent> : ""}
    </div>;
}