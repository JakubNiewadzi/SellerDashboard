import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { opinions } from "../../../fakebackend/FakeBackend";
import { NavLink } from "react-router-dom";
import { WidgetComponent } from "../../widget/WidgetComponent";
import { StdButtonLarge, StdButtonTiny } from "../../common/StdButton";
import { ColumnMediumGappedList, RowTinyGappedList } from "../../common/LinearGappedList";
import { OpinionPane } from "./OpinionPane";

export const OpinionsWidget = () => {
    const [clickedButton, setClickedButton] = useState(3);
    const [filteredOpinions, setFilteredOpinions] = useState([])

    const translation = useSelector(state => state.context.translation)
    const user = useSelector(state => state.auth.user)
    const currentAccount = useSelector(state => state.auth.currentAccount)

    useEffect(() => {
        updateOpinions(clickedButton)
    }, [currentAccount]);

    useEffect(() => {
        updateOpinions(clickedButton);
    }, []);

    const updateOpinions = (buttonId) => {
        const checkOpinion = (opinion) => {
            if (buttonId === 1) return opinion.isPositive;
            if (buttonId === 2) return !opinion.isPositive;
            return true;
        };
        const filteredAndSortedOpinions = opinions
            .filter(opinion => checkOpinion(opinion) && opinion.user.username === user && opinion.user.account === currentAccount)
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 5);
        setFilteredOpinions(filteredAndSortedOpinions);
        setClickedButton(buttonId);
    };

    const RadioButtonGroup = () => {
        return <RowTinyGappedList>
            <StdButtonTiny
                color={clickedButton === 1 ? 'success' : 'primary'}
                onClick={() => updateOpinions(1)}
            >{translation['positive']}</StdButtonTiny>
            <StdButtonTiny
                color={clickedButton === 2 ? 'success' : 'primary'}
                onClick={() => updateOpinions(2)}>
                {translation['negative']}
            </StdButtonTiny>
            <StdButtonTiny
                color={clickedButton === 3 ? 'success' : 'primary'}
                onClick={() => updateOpinions(3)}>
                {translation['all']}
            </StdButtonTiny>
        </RowTinyGappedList>;
    };

    return <WidgetComponent
        title={translation['opinions']}
        remainder={<RadioButtonGroup />}
    >
        <ColumnMediumGappedList>
            {opinions.length !== 0 ? filteredOpinions.map((filteredOpinion, index) => {
                return <OpinionPane key={index} opinionDTO={filteredOpinion} />
            }) : <span className='no-content-text'>{translation['noOpinionsFound']}</span>}
            {
                opinions.length !== 0 && <StdButtonLarge tag={NavLink} to='/opinions'>
                    {translation['moreOpinions']}
                </StdButtonLarge>
            }
        </ColumnMediumGappedList>
    </WidgetComponent>;
}
