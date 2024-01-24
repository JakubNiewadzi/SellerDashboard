import { useNavigate } from "react-router-dom";
import { RowEdgeWidgetPane } from "components/widget/WidgetPane";

export const OrderPane = ({ name, count, nav, style, ...props }) => {
    const na = useNavigate();
    const navigate = () => {na(nav)};
    return <RowEdgeWidgetPane onClick={navigate} className="order-pane" style={{ cursor: 'pointer', ...style }} {...props}
        left={<h3 className='order-type-container'>{name}</h3>}
        right={<h3 className='order-count-container'>{count}</h3>}
    ></RowEdgeWidgetPane>;
}
