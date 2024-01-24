import { useSelector } from "react-redux";
import { orders } from "../../../fakebackend/FakeBackend";
import { useEffect, useState } from "react";
import { OrderPane } from "./OrderPane";
import { WidgetComponent } from "../../widget/WidgetComponent";
import { ColumnMediumGappedList } from "../../common/LinearGappedList";

export const OrdersWidget = () => {
    const translation = useSelector(state => state.context.translation)
    const user = useSelector(state => state.auth.user)
    const currentAccount = useSelector(state => state.auth.currentAccount)
    const [filteredOrders, setFilteredOrders] = useState(orders
        .filter(order => order.user.username === user && order.user.account === currentAccount))

    useEffect(() => {
        setFilteredOrders(orders
            .filter(order => order.user.username === user && order.user.account === currentAccount))
    }, [currentAccount]);

    return <WidgetComponent title={translation['orders']}>
        <ColumnMediumGappedList>
            {orders.length !== 0 ? filteredOrders.map((filteredOrder, index) => {
                return <OrderPane key={index}
                    type={translation[filteredOrder.type]}
                    count={filteredOrder.count} />
            }) : <span className='no-content-text'>{translation['noOpinionsFound']}</span>}
        </ColumnMediumGappedList>
    </WidgetComponent>;
}