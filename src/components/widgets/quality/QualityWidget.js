import { NavLink } from "react-router-dom";
import { WidgetComponent } from "../../widget/WidgetComponent";
import { ColumnMediumGappedList } from "../../common/LinearGappedList";
import { QualityPane } from "./QualityPane";
import { useDispatch, useSelector } from "react-redux";
import { StdButtonLarge } from "components/common/StdButton";
import { useEffect } from "react";
import { updateQualityInfo } from "services/state/slices/qualitySlice";

export const QualityWidget = () => {
    const dispatch = useDispatch();
    const messages = useSelector(state => state.context.translation.qualityWidget)
    const info = useSelector(state => state.quality)
    const user = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(updateQualityInfo(user.user, user.currentAccount));
    }, [dispatch, user]);

    return <WidgetComponent
        title={messages.mainTitle} isLoading={info.isLoading}
    >
        <ColumnMediumGappedList>
            {info.isPresent ? <>
                <QualityPane title={messages.cumulativeGradeTitle} rating={info.cumulativeGrade} />
                <span>{messages.worstAspectsTitle}</span>
                {info.worstAspects?.map((a, index) => (
                    <QualityPane key={index} title={a.name} rating={a.grade} />
                ))}
                <StdButtonLarge tag={NavLink} to='/quality'>
                    {messages.gradesPresentButtonLabel}
                </StdButtonLarge>
            </> : <>
                <span className='no-content-text'>{messages.gradesNotPresentMessage}</span>
                <StdButtonLarge tag={NavLink} to='/quality'>
                    {messages.gradesNotPresentButtonLabel}
                </StdButtonLarge>
            </>}
        </ColumnMediumGappedList>
    </WidgetComponent>;
}
