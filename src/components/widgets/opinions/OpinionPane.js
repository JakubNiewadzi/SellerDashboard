import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";
import { ColumnTinyGappedList } from "../../common/LinearGappedList";
import { RowEdgeWidgetPane } from "../../widget/WidgetPane";

export const OpinionPane = ({ opinionDTO }) => {
    return <RowEdgeWidgetPane
        left={<ColumnTinyGappedList>
            <span>{opinionDTO.from}</span>
            <span style={{ fontSize: '13px', fontWeight: 'normal', fontFamily: "Noto Sans" }}>{opinionDTO.opinion}</span>
        </ColumnTinyGappedList>}

        right={<div className='thumb-container'>
            {opinionDTO.isPositive ? <IoMdThumbsUp /> : <IoMdThumbsDown />}
        </div>}
    />;
}