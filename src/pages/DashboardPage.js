import {ProductsRankingWidget} from "components/widgets/products_ranking/ProductsRankingWidget";
import {OpinionsWidget} from "../components/widgets/opinions/OpinionsWidget";
import {OrdersWidget} from "../components/widgets/orders/OrdersWidget";
import {QualityWidget} from "../components/widgets/quality/QualityWidget";
import {ChartWidget} from "components/widgets/chart/ChartWidget";
import {useRef, useState} from "react";

export const DashboardPage = () => {
    const draggedWidget = useRef(0)
    const draggedOverWidget = useRef(0)
    const [widgets, setWidgets] = useState([<OrdersWidget/>,
        <ProductsRankingWidget/>,
        <OpinionsWidget/>,
        <ChartWidget/>,
        <QualityWidget/>])
    const handleSort = ()=>{
        const widgetsClone = [...widgets]
        const temp = widgetsClone[draggedWidget.current]
        widgetsClone[draggedWidget.current] = widgetsClone[draggedOverWidget.current]
        widgetsClone[draggedOverWidget.current] = temp
        setWidgets(widgetsClone)
    }
    return <div className="Dashboard-page">
        {widgets.map((widget, index) => <div draggable
                                             onDragStart={() => draggedWidget.current = index}
        onDragEnter={() => draggedOverWidget.current=index}
        onDragOver={(e)=> e.preventDefault()}
        onDragEnd={handleSort}> {widget}</div>)}
    </div>
}