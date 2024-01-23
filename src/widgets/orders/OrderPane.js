import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";
import { RowEdgeContainer } from "../../components/common/EdgeContainer";
import { ColumnTinyGappedList } from "../../components/common/LinearGappedList";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export const OrderPane = ({ type, count }) => {
    const navigate = useNavigate()
    return <RowEdgeContainer className="Pane" onClick={() => navigate('/orders')} style={{cursor:'pointer'}}

        left={<span className='order-type-container'>{type}</span>}

        right={<span className='order-count-container'>{count}</span>}

    ></RowEdgeContainer>;
}


export const OrderComponent = ({type, count}) => {
    const navigate = useNavigate()
    return <div style={{cursor:'pointer'}}  onClick={() => navigate('/orders')}>
        <span className='order-type-container'>{type}</span>
        <span className='order-count-container'>{count}</span>
    </div>
}