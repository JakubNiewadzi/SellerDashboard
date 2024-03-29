import { useNavigate } from "react-router-dom";
import { RowEdgeWidgetPane } from "components/widget/WidgetPane";

export const OrderPane = ({ name, count, nav, ...props }) => {
    const navigate = useNavigate();
    const navigateThunk = () => { navigate(nav) }//ten thunk musi być!!
    return <RowEdgeWidgetPane
        onClick={navigateThunk}
        className="order-pan flex-align-center cursor-pointer"
        left={<span className="bold size-medium">{name}</span>}
        right={<span className="size-medium bold">{count}</span>}
        {...props}
    />;
}
