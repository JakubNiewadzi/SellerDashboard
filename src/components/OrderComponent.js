import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export const OrderComponent = ({type, count}) => {
    const isDark = useSelector(state => state.context.isDark)
    const navigate = useNavigate()
    return <div style={{cursor:'pointer'}}  onClick={() => navigate('/orders')} className={`WidgetElementComponent ${isDark ? 'dark' : 'light'}`}>
        <span className='order-type-container'>
        {type}
        </span>
        <span className='order-count-container'>{count}</span>
    </div>
}