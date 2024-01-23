import { useSelector } from "react-redux";
import { orders } from "../../fakebackend/FakeBackend";
import { useEffect, useState } from "react";
import { OrderComponent } from "./OrderComponent";
import { OrderPane } from "./OrderPane";
import { WidgetComponent } from "components/widget/WidgetComponent";
import { ColumnMediumGappedList } from "components/common/LinearGappedList";

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

    return <WidgetComponent title={translation['orders']}>
        <ColumnMediumGappedList>
            {orders.length !== 0 ? filteredOrders.map((filteredOrder, index) => {
                return <OrderPane key={index}
                    type={translation[filteredOrder.type]}
                    count={filteredOrder.count} />
            }) : <span className='no-content-text'>{translation['noOpinionsFound']}</span>}
        </ColumnMediumGappedList>
    </WidgetComponent>;

    // return <WidgetComponent
    //     title={translation['opinions']}
    //     remainder={<RadioButtonGroup />}
    // >
    //     <ColumnMediumGappedList>
    //         {opinions.length !== 0 ? filteredOpinions.map((filteredOpinion, index) => {
    //             return <OpinionPane key={index} opinionDTO={filteredOpinion} />
    //         }) : <span className='no-content-text'>{translation['noOpinionsFound']}</span>}
    //         {
    //             opinions.length !== 0 && <StdButtonLarge tag={NavLink} to='/opinions'>
    //                 {translation['moreOpinions']}
    //             </StdButtonLarge>
    //         }
    //     </ColumnMediumGappedList>
    // </WidgetComponent>;

    return <div className={`Widget ${isDark ? 'dark' : 'light'}`}>
        <div className='header-container'>
            <div>{translation['orders']}</div>
        </div>
        {orders.length !== 0 ? filteredOrders.map((filteredOrder, index) => {
            return <OrderComponent key={index}
                type={translation[filteredOrder.type]}
                count={filteredOrder.count} />
        }) : <span className='no-content-text'>{translation['noOpinionsFound']}</span>}
    </div>;
}