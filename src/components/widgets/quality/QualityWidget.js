import { NavLink } from "react-router-dom";
import { WidgetComponent } from "../../widget/WidgetComponent";
import { ColumnGappedList } from "../../common/LinearGappedList";
import { QualityPane } from "./QualityPane";
import { useDispatch, useSelector } from "react-redux";
import { StdButtonAny } from "components/common/StdButton";
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
        <ColumnGappedList className="size-normal padding-zero">
            {info.isPresent ? <>

                <QualityPane title={messages.cumulativeGradeTitle} rating={info.cumulativeGrade} />
                <span className="size-medium bold align-self-center">{messages.worstAspectsTitle}</span>
                {info.worstAspects?.map((a, index) => (
                    <QualityPane key={index} title={a.name} rating={a.grade} />
                ))}
                <StdButtonAny tag={NavLink} to='/quality' className="size-large">
                    {messages.gradesPresentButtonLabel}
                </StdButtonAny>

            </> : <>

                <span className='size-normal align-self-center'>{messages.gradesNotPresentMessage}</span>
                <StdButtonAny tag={NavLink} to='/quality' className="size-large">
                    {messages.gradesNotPresentButtonLabel}
                </StdButtonAny>

            </>}
        </ColumnGappedList>
    </WidgetComponent>;
}
