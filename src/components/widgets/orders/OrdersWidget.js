import { useDispatch, useSelector } from "react-redux";
import { OrderPane } from "./OrderPane";
import { WidgetComponent } from "../../widget/WidgetComponent";
import { ColumnGappedList } from "../../common/LinearGappedList";
import { StdButtonAny } from "components/common/StdButton";
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
        <ColumnGappedList className="size-normal padding-zero">
            {info.isPresent ? <>
                <OrderPane name={messages.notPaid} count={info.notPaid} />
                <OrderPane name={messages.notSent} count={info.notSent} />
                <OrderPane name={messages.returned} count={info.returned} />
            </> : <>
                <span className='size-normal align-self-center'>{messages.ordersNotPresentMessage}</span>
                <StdButtonAny tag={NavLink} to='/quality' className="size-large">
                    {messages.ordersNotPresentButtonLabel}
                </StdButtonAny>
            </>}
        </ColumnGappedList>
    </WidgetComponent>;
}
