import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { WidgetComponent } from "../../widget/WidgetComponent";
import { StdButtonAny } from "../../common/StdButton";
import { ColumnGappedList, RowGappedList } from "../../common/LinearGappedList";
import { OpinionPane } from "./OpinionPane";
import { useDispatch } from 'react-redux';
import { updateOpinionsInfo } from "services/state/slices/opinionsSlice";
import { OPINIONS_ALL, OPINIONS_POSITIVE, OPINIONS_NEGATIVE } from "fakebackend/FakeBackend";

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
        return <StdButtonAny
            color={clickedButton === type ? 'success' : 'primary'}
            className="size-small"
            onClick={() => updateOpinions(type)}
        >{message}</StdButtonAny>
    }

    return <WidgetComponent
        title={messages.mainTitle} isLoading={info.isLoading} remainder={info.isPresent && <RowGappedList className="size-tiny flex-align-center">
            {getRadioButton(OPINIONS_POSITIVE, messages.positive)}
            {getRadioButton(OPINIONS_NEGATIVE, messages.negative)}
            {getRadioButton(OPINIONS_ALL, messages.all)}
        </RowGappedList>}
    >
        <ColumnGappedList className="size-small padding-zero">
            {info.isPresent ? <>
                {info.opinions?.map((o, index) => (<OpinionPane key={index} {...o} />))}
                <StdButtonAny tag={NavLink} to='/opinions' className="size-large">
                    {messages.moreOpinionsButtonLabel}
                </StdButtonAny>
            </> : <>
                <span className='size-normal align-self-center'>{messages.noOpinionsPresentMessage}</span>
            </>}
        </ColumnGappedList>
    </WidgetComponent>;
}
