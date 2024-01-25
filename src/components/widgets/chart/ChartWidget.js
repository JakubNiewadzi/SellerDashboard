import { NavLink } from "react-router-dom";
import { WidgetComponent } from "../../widget/WidgetComponent";
import { ColumnGappedList } from "../../common/LinearGappedList";
import { CHART_TYPE_BAR, CHART_TYPE_LINE, Kicia, Kicia_v2, QualityPane } from "./Chartww";
import { useDispatch, useSelector } from "react-redux";
import { StdButtonAny } from "components/common/StdButton";
import { useEffect, useState } from "react";
import { updateQualityInfo } from "services/state/slices/qualitySlice";
import { ColumnEdgeContainer } from "components/common/EdgeContainer";
import { CHART_MONTH, CHART_WEEK, CHART_DAY, CHART_MEASURE_SOLD, CHART_MEASURE_REVENUE } from "fakebackend/FakeBackend";
import { addPeriodToChart } from "services/state/slices/chartSlice";
import { LoadingWrapper } from "components/common/LoadingWrapper";

export const ChartWidget = () => {
    const dispatch = useDispatch();
    const [measureType, setMeasureType] = useState(CHART_MEASURE_SOLD);
    const [timeFrame, setTimeFrame] = useState(CHART_DAY);
    const [chartType, setChartType] = useState(CHART_TYPE_BAR);
    const messages = useSelector(state => state.context.translation.chartWidget)
    const info = useSelector(state => state.chart)
    const user = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(addPeriodToChart(user.user, user.currentAccount, 'okuu', timeFrame));
        dispatch(addPeriodToChart(user.user, user.currentAccount, 'unyu', timeFrame));
        dispatch(addPeriodToChart(user.user, user.currentAccount, 'uwu', timeFrame));
        dispatch(addPeriodToChart(user.user, user.currentAccount, 'owo', timeFrame));
    }, [dispatch, timeFrame]);

    /*
    "chartWidget": {
        "mainTitle": "Zamówienia",
        "measure": {
            "title": "Miara",
            "obrot": "Obrót",
            "sprzedaz": "Sprzedaż"
        },
        "timeFrame": {
            "title": "Zakres czasu",
            "today": "Dziś",
            "thisWeek": "Ten tydzień",
            "thisMonth": "Ten miesiąc"
        },
        "chartType": {
            "title": "Typ wykresu",
            "bar": "Słupkowy",
            "line": "Liniowy"
        },
        "addDataSeriesButtonLabel": "Dodatkowa seria danych"
      }
    */

    const getRadioButton = (type, selectedType, setter, message) => {
        return <StdButtonAny
            className="size-small"
            color={selectedType === type ? 'success' : 'primary'}
            onClick={() => setter(type)}
        >{message}</StdButtonAny>;
    }

    return <WidgetComponent title={messages.mainTitle}>
        <LoadingWrapper isLoading={info.isLoading}>
            <Kicia_v2
                dataSelector={measureType}
                title={measureType === CHART_MEASURE_REVENUE
                    ? messages.revenueChartTitle
                    : messages.soldChartTitle
                }
                unformattedData={info.periods}
                ChartType={chartType}
            />
        </LoadingWrapper>
        <ColumnGappedList className="size-normal padding-zero">
            <ColumnGappedList className="size-zero">
                <div class="chart-buttons-grid-container">
                    <ColumnGappedList class="minor-padding">
                        <span className="size-normal">{messages.measure.title}:</span>
                        <ColumnGappedList className="size-tiny">
                            {getRadioButton(CHART_MEASURE_REVENUE, measureType, setMeasureType, messages.measure.revenue)}
                            {getRadioButton(CHART_MEASURE_SOLD, measureType, setMeasureType, messages.measure.sprzedaz)}
                        </ColumnGappedList>
                    </ColumnGappedList>
                    <ColumnGappedList class="minor-padding">
                        <span className="size-normal">{messages.timeFrame.title}:</span>
                        <ColumnGappedList className="size-tiny">
                            {getRadioButton(CHART_DAY, timeFrame, setTimeFrame, messages.timeFrame.today)}
                            {getRadioButton(CHART_WEEK, timeFrame, setTimeFrame, messages.timeFrame.thisWeek)}
                            {getRadioButton(CHART_MONTH, timeFrame, setTimeFrame, messages.timeFrame.thisMonth)}
                        </ColumnGappedList>
                    </ColumnGappedList>
                    <ColumnGappedList class="minor-padding">
                        <span className="size-normal">{messages.chartType.title}:</span>
                        <ColumnGappedList className="size-tiny">
                            {getRadioButton(CHART_TYPE_BAR, chartType, setChartType, messages.chartType.bar)}
                            {getRadioButton(CHART_TYPE_LINE, chartType, setChartType, messages.chartType.line)}
                        </ColumnGappedList>
                    </ColumnGappedList>
                </div>
                <div><div className="minor-padding">
                    <div className="size-tiny">
                        <StdButtonAny className="size-small width-100percent">
                            {messages.addDataSeriesButtonLabel}
                        </StdButtonAny>
                    </div>
                </div></div>
            </ColumnGappedList>
        </ColumnGappedList>
    </WidgetComponent>;
}
