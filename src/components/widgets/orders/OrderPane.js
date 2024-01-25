import { useNavigate } from "react-router-dom";
import { RowEdgeWidgetPane } from "components/widget/WidgetPane";

export const OrderPane = ({ name, count, nav, ...props }) => {
    const navigate = useNavigate();
    return <RowEdgeWidgetPane
        onClick={navigate(nav)}
        className="order-pane cursor-pointer flex-align-center"
        left={<span className="size-medium">{name}</span>}
        right={<span className="size-medium">{count}</span>}
        {...props}
    />;
}
