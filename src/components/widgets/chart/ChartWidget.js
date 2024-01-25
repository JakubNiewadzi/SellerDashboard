import { NavLink } from "react-router-dom";
import { WidgetComponent } from "../../widget/WidgetComponent";
import { ColumnGappedList } from "../../common/LinearGappedList";
import { QualityPane } from "./Chartww";
import { useDispatch, useSelector } from "react-redux";
import { StdButtonAny } from "components/common/StdButton";
import { useEffect, useState } from "react";
import { updateQualityInfo } from "services/state/slices/qualitySlice";
import { ColumnEdgeContainer } from "components/common/EdgeContainer";

export const ChartWidget = () => {
    const dispatch = useDispatch();
    const [measureType, setMeasureType] = useState(0);
    const [timeFrame, setTimeFrame] = useState(0);
    const [chartType, setChartType] = useState(0);
    const messages = useSelector(state => state.context.translation.chartWidget)
    const info = useSelector(state => state.quality)
    const user = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(updateQualityInfo(user.user, user.currentAccount));
    }, [dispatch, user]);

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

    return <WidgetComponent
        title={messages.mainTitle} isLoading={info.isLoading}
    >
        <ColumnGappedList className="size-normal padding-zero">
            <ColumnGappedList className="size-zero">
                <div class="chart-buttons-grid-container">
                    <ColumnGappedList class="minor-padding">
                        <span className="size-normal">{messages.measure.title}:</span>
                        <ColumnGappedList className="size-tiny">
                            {getRadioButton(0, measureType, setMeasureType, messages.measure.obrot)}
                            {getRadioButton(1, measureType, setMeasureType, messages.measure.sprzedaz)}
                        </ColumnGappedList>
                    </ColumnGappedList>
                    <ColumnGappedList class="minor-padding">
                        <span className="size-normal">{messages.timeFrame.title}:</span>
                        <ColumnGappedList className="size-tiny">
                            {getRadioButton(0, timeFrame, setTimeFrame, messages.timeFrame.today)}
                            {getRadioButton(1, timeFrame, setTimeFrame, messages.timeFrame.thisWeek)}
                            {getRadioButton(2, timeFrame, setTimeFrame, messages.timeFrame.thisMonth)}
                        </ColumnGappedList>
                    </ColumnGappedList>
                    <ColumnGappedList class="minor-padding">
                        <span className="size-normal">{messages.chartType.title}:</span>
                        <ColumnGappedList className="size-tiny">
                            {getRadioButton(0, chartType, setChartType, messages.chartType.slupkowy)}
                            {getRadioButton(1, chartType, setChartType, messages.chartType.liniowy)}
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


            {/* {info.isPresent ? <>

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

            </>} */}
        </ColumnGappedList>
    </WidgetComponent>;
}
