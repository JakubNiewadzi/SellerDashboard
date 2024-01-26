import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";
import { ColumnGappedList } from "../../common/LinearGappedList";
import { RowEdgeWidgetPane } from "../../widget/WidgetPane";

export const OpinionPane = ({ isPositive, from, opinion }) => {
    const left = <ColumnGappedList className="size-zero" style={{width: "75%"}}>
        <span className="size-medium bold">{from}</span>
        <p className="size-small two-line-ellipsis">{opinion}</p>
    </ColumnGappedList>;

    const right = <div className='thumb-container'>
        {isPositive ? <IoMdThumbsUp /> : <IoMdThumbsDown />}
    </div>;

    return <RowEdgeWidgetPane left={left} right={right} />;
}