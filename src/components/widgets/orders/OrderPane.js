import {useNavigate} from "react-router-dom";
import { RowEdgeWidgetPane } from "components/widget/WidgetPane";

export const OrderPane = ({ type, count }) => {
    const navigate = useNavigate()
    return <RowEdgeWidgetPane onClick={() => navigate('/orders')} style={{cursor:'pointer'}}
        left={<span className='order-type-container'>{type}</span>}
        right={<span className='order-count-container'>{count}</span>}
    ></RowEdgeWidgetPane>;
}
