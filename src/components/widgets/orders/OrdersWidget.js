import { useDispatch, useSelector } from "react-redux";
import { OrderPane } from "./OrderPane";
import { WidgetComponent } from "../../widget/WidgetComponent";
import { ColumnMediumGappedList } from "../../common/LinearGappedList";
import { StdButtonLarge } from "components/common/StdButton";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { updateOrdersInfo } from "services/state/slices/ordersSlice";

export const OrdersWidget = () => {
    const dispatch = useDispatch();
    const messages = useSelector(state => state.context.translation.ordersWidget)
    const info = useSelector(state => state.orders)
    const user = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(updateOrdersInfo(user.user, user.currentAccount));
    }, [dispatch, user]);

    return <WidgetComponent
        title={messages.mainTitle} isLoading={info.isLoading}
    >
        <ColumnMediumGappedList>
            {info.isPresent ? <>
                <OrderPane name={messages.notPaid} count={info.notPaid} />
                <OrderPane name={messages.notSent} count={info.notSent} />
                <OrderPane name={messages.returned} count={info.returned} />
            </> : <>
                <span className='no-content-text'>{messages.ordersNotPresentMessage}</span>
                <StdButtonLarge tag={NavLink} to='/quality'>
                    {messages.ordersNotPresentButtonLabel}
                </StdButtonLarge>
            </>}
        </ColumnMediumGappedList>
    </WidgetComponent>;
}
