import { WidgetComponent } from "../../widget/WidgetComponent";
import { ColumnGappedList } from "../../common/LinearGappedList";
import { CHART_TYPE_BAR, CHART_TYPE_LINE, ChartDisplay } from "./ChartDisplay";
import { useDispatch, useSelector } from "react-redux";
import { StdButtonAny } from "components/common/StdButton";
import { useEffect, useState } from "react";
import { CHART_MONTH, CHART_WEEK, CHART_DAY, CHART_MEASURE_SOLD, CHART_MEASURE_REVENUE } from "fakebackend/FakeBackend";
import { clearPreviousPeriod, updateCurrentPeriod, updatePreviousPeriod } from "services/state/slices/chartSlice";
import { LoadingWrapper } from "components/common/LoadingWrapper";

export const ChartWidget = () => {
    const dispatch = useDispatch();
    const [measureType, setMeasureType] = useState(CHART_MEASURE_SOLD);
    const [timeFrame, setTimeFrame] = useState(CHART_DAY);
    const [chartType, setChartType] = useState(CHART_TYPE_BAR);
    const [extraDataSeries, setExtraDataSeries] = useState(false);
    const messages = useSelector(state => state.context.translation.chartWidget)
    const info = useSelector(state => state.chart)
    const user = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(updateCurrentPeriod(user.user, user.currentAccount, messages.currentPeriod, timeFrame));
        setExtraDataSeries(false);
    }, [timeFrame]);

    useEffect(() => {
        if(extraDataSeries) {
            dispatch(updatePreviousPeriod(user.user, user.currentAccount, messages.currentPeriod, timeFrame));
        } else {
            dispatch(clearPreviousPeriod())
        }
    }, [extraDataSeries]);

    const getRadioButton = (type, selectedType, setter, message) => {
        return <StdButtonAny
            className="size-small"
            color={selectedType === type ? 'success' : 'primary'}
            onClick={() => setter(type)}
        >{message}</StdButtonAny>;
    }

    return <WidgetComponent title={messages.mainTitle}>
        <div className="chart-wrapper">
            <LoadingWrapper size="100px" isLoading={info.isLoading}>
                <ChartDisplay
                    dataSelector={measureType}
                    title={measureType === CHART_MEASURE_REVENUE
                        ? messages.revenueChartTitle
                        : messages.soldChartTitle
                    }
                    mainData={{[messages.currentPeriod]: info.currentPeriod}}
                    secondaryData={{[messages.previousPeriod]: info.previousPeriod}}
                    ChartType={chartType}
                />
            </LoadingWrapper>
        </div>
        <ColumnGappedList className="size-normal padding-zero">
            <ColumnGappedList className="size-zero">
                <div className="chart-buttons-grid-container">
                    <ColumnGappedList className="minor-padding">
                        <span className="size-normal">{messages.measure.title}:</span>
                        <ColumnGappedList className="size-tiny">
                            {getRadioButton(CHART_MEASURE_REVENUE, measureType, setMeasureType, messages.measure.revenue)}
                            {getRadioButton(CHART_MEASURE_SOLD, measureType, setMeasureType, messages.measure.sales)}
                        </ColumnGappedList>
                    </ColumnGappedList>
                    <ColumnGappedList className="minor-padding">
                        <span className="size-normal">{messages.timeFrame.title}:</span>
                        <ColumnGappedList className="size-tiny">
                            {getRadioButton(CHART_DAY, timeFrame, setTimeFrame, messages.timeFrame.today)}
                            {getRadioButton(CHART_WEEK, timeFrame, setTimeFrame, messages.timeFrame.thisWeek)}
                            {getRadioButton(CHART_MONTH, timeFrame, setTimeFrame, messages.timeFrame.thisMonth)}
                        </ColumnGappedList>
                    </ColumnGappedList>
                    <ColumnGappedList className="minor-padding">
                        <span className="size-normal">{messages.chartType.title}:</span>
                        <ColumnGappedList className="size-tiny">
                            {getRadioButton(CHART_TYPE_BAR, chartType, setChartType, messages.chartType.bar)}
                            {getRadioButton(CHART_TYPE_LINE, chartType, setChartType, messages.chartType.line)}
                        </ColumnGappedList>
                    </ColumnGappedList>
                </div>
                <div><div className="minor-padding">
                    <div className="size-tiny">
                        <StdButtonAny
                            className="size-small width-100percent"
                            color={extraDataSeries === true ? 'success' : 'primary'}
                            onClick={() => setExtraDataSeries(!extraDataSeries)}
                        >{messages.addDataSeriesButtonLabel}</StdButtonAny>
                    </div>
                </div></div>
            </ColumnGappedList>
        </ColumnGappedList>
    </WidgetComponent>;
}
