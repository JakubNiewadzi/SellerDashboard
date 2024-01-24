import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { WidgetComponent } from "../../widget/WidgetComponent";
import { StdButtonLarge, StdButtonTiny } from "../../common/StdButton";
import { ColumnMediumGappedList, RowTinyGappedList } from "../../common/LinearGappedList";
import { OpinionPane } from "./OpinionPane";
import { useDispatch } from 'react-redux';
import { updateOpinionsInfo } from "services/state/slices/opinionsSlice";
import { OPINIONS_ALL, OPINIONS_POSITIVE, OPINIONS_NEGATIVE } from "fakebackend/FakeBackend2";

export const OpinionsWidget = () => {
    const [clickedButton, setClickedButton] = useState(OPINIONS_ALL);

    const dispatch = useDispatch();
    const messages = useSelector(state => state.context.translation.opinionsWidget)
    const info = useSelector(state => state.opinions)
    const user = useSelector(state => state.auth)

    useEffect(() => {
        updateOpinions(clickedButton);
    }, [dispatch, user]);

    const updateOpinions = (type) => {
        dispatch(updateOpinionsInfo(user.user, user.currentAccount, type));
        setClickedButton(type);
    };

    const getRadioButton = (type, message) => {
        return <StdButtonTiny
            color={clickedButton === type ? 'success' : 'primary'}
            onClick={() => updateOpinions(type)}
        >{message}</StdButtonTiny>
    }

    return <WidgetComponent
        title={messages.mainTitle} isLoading={info.isLoading} remainder={<RowTinyGappedList>
            {getRadioButton(OPINIONS_POSITIVE, messages.positive)}
            {getRadioButton(OPINIONS_NEGATIVE, messages.negative)}
            {getRadioButton(OPINIONS_ALL, messages.all)}
        </RowTinyGappedList>}
    >
        <ColumnMediumGappedList>
            {info.isPresent ? <>
                {info.opinions?.map((o, index) => (
                    <OpinionPane key={index} opinionDTO={o} />
                ))}
                <StdButtonLarge tag={NavLink} to='/opinions'>
                    {messages.moreOpinionsButtonLabel}
                </StdButtonLarge>
            </> : <>
                <span className='no-content-text'>{messages.noOpinionsPresentMessage}</span>
            </>}
        </ColumnMediumGappedList>
    </WidgetComponent>;
}
