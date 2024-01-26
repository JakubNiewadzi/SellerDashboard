import { ProductsRankingWidget } from "components/widgets/products_ranking/ProductsRankingWidget";
import { OpinionsWidget } from "../components/widgets/opinions/OpinionsWidget";
import { OrdersWidget } from "../components/widgets/orders/OrdersWidget";
import { QualityWidget } from "../components/widgets/quality/QualityWidget";
import { ChartWidget } from "components/widgets/chart/ChartWidget";

export const DashboardPage = () => {
    return <div className="Dashboard-page">
        <div className="dashboard-grid-container">
            <div>
                <OrdersWidget />
                <ProductsRankingWidget />
            </div>
            <div>
                <ChartWidget />
                <OpinionsWidget />
            </div>
            <div>
                <QualityWidget />
            </div>
        </div>
    </div>
}