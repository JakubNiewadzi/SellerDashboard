import {useSelector} from "react-redux";
import {orders} from "../fakebackend/FakeBackend";
import {useEffect, useState} from "react";
import {OrderComponent} from "../components/OrderComponent";

export const OrdersWidget = () => {
    const translation = useSelector(state => state.context.translation)
    const user = useSelector(state => state.auth.user)
    const currentAccount = useSelector(state => state.auth.currentAccount)
    const isDark = useSelector(state => state.context.isDark)
    const [filteredOrders, setFilteredOrders] = useState(orders
        .filter(order => order.user.username === user && order.user.account === currentAccount))

    useEffect(() => {
        setFilteredOrders(orders
            .filter(order => order.user.username === user && order.user.account === currentAccount))
    }, [currentAccount]);


    return <div className={`Widget ${isDark ? 'dark' : 'light'}`}>
        <div className='header-container'>
            <div>{translation['orders']}</div>
        </div>
        {orders.length !== 0 ? filteredOrders.map((filteredOrder, index) => {
            return <OrderComponent key={index}
                                   type={translation[filteredOrder.type]}
                                   count={filteredOrder.count}/>
        }) : <span className='no-content-text'>{translation['noOpinionsFound']}</span>}
    </div>;
}