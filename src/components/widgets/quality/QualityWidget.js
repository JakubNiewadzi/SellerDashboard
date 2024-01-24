import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { opinions } from "../../../fakebackend/FakeBackend";
import { NavLink } from "react-router-dom";
import { WidgetComponent } from "../../widget/WidgetComponent";
import { StdButtonLarge, StdButtonTiny } from "../../common/StdButton";
import { ColumnMediumGappedList, RowTinyGappedList } from "../../common/LinearGappedList";
import { QualityPane } from "./QualityPane";

export const QualityWidget = () => {
    const messages = useSelector(state => state.context.translation.qualityWidget)
    const qualityInfo = useSelector(state => state.quality)

    const worstAspectsPanes = qualityInfo.worstAspects?.map((as) =>
        <QualityPane title={as.name} rating={as.grade} />
    );

    return <WidgetComponent
        title={messages.mainTitle} isLoading={qualityInfo.isLoading}
    >
        <ColumnMediumGappedList>
            {qualityInfo.isPresent ? <>
                <QualityPane title={messages.cumulativeGradeTitle} rating={qualityInfo.cumulativeGrade} />
                <span>{messages.worstAspectsTitle}</span>
                {worstAspectsPanes}
                <StdButtonLarge tag={NavLink} to='/quality'>
                    {messages.gradesPresentButtonLabel}
                </StdButtonLarge>
            </> : <>
                <span>{messages.gradesNotPresentMessage}</span>
                <StdButtonLarge tag={NavLink} to='/quality'>
                    {messages.gradesNotPresentButtonLabel}
                </StdButtonLarge>
            </>}
        </ColumnMediumGappedList>
    </WidgetComponent>;
}
