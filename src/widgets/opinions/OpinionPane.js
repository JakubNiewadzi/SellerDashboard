import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";
import { RowEdgeContainer } from "../../components/common/EdgeContainer";
import { ColumnTinyGappedList } from "../../components/common/LinearGappedList";

export const OpinionPane = ({ opinionDTO }) => {
    return <RowEdgeContainer className="Pane"

        left={<ColumnTinyGappedList>
            <span>{opinionDTO.from}</span>
            <span style={{ fontSize: '13px', fontWeight: 'normal', fontFamily: "Noto Sans" }}>{opinionDTO.opinion}</span>
        </ColumnTinyGappedList>}

        right={<div className='thumb-container'>
            {opinionDTO.isPositive ? <IoMdThumbsUp /> : <IoMdThumbsDown />}
        </div>}

    ></RowEdgeContainer>;
}