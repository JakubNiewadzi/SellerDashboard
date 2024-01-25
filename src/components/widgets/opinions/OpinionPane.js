import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";
import { ColumnGappedList } from "../../common/LinearGappedList";
import { RowEdgeWidgetPane } from "../../widget/WidgetPane";

export const OpinionPane = ({ isPositive, from, opinion }) => {
    const left = <ColumnGappedList className="size-zero">
        <span className="size-medium">{from}</span>
        <span className="size-small">{opinion}</span>
    </ColumnGappedList>;

    const right = <div className='thumb-container'>
        {isPositive ? <IoMdThumbsUp /> : <IoMdThumbsDown />}
    </div>;

    return <RowEdgeWidgetPane left={left} right={right} />;
}

/*

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

*/