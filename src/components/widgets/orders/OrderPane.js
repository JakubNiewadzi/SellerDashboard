import { useNavigate } from "react-router-dom";
import { RowEdgeWidgetPane } from "components/widget/WidgetPane";

export const OrderPane = ({ name, count, nav, style, ...props }) => {
    const na = useNavigate();
    const navigate = () => {na(nav)};
    return <RowEdgeWidgetPane onClick={navigate} style={{ cursor: 'pointer', ...style }} {...props}
        left={<span className='order-type-container'>{name}</span>}
        right={<span className='order-count-container'>{count}</span>}
    ></RowEdgeWidgetPane>;
}
