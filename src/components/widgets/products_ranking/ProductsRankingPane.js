import { ColumnGappedList, RowGappedList } from "../../common/LinearGappedList";
import { RowEdgeWidgetPane } from "../../widget/WidgetPane";

export const ProductsRankingPane = ({ name, img, subtextTop, subtextTopValue, subtextBottom, subtextBottomValue }) => {
    const left = <ColumnGappedList className="size-tiny">
        <h3>{name}</h3>
        <ColumnGappedList className="size-zero">
            <RowGappedList className="size-zero">
                <h5>{subtextTop}:</h5>
                <h5 style={{ marginLeft: "5px" }}>{subtextTopValue}</h5>
            </RowGappedList>
            <RowGappedList className="size-zero">
                <h5>{subtextBottom}:</h5>
                <h5 style={{ marginLeft: "5px" }}>{subtextBottomValue}</h5>
            </RowGappedList>
        </ColumnGappedList>
    </ColumnGappedList>;
    const right = <img src={img} />;
    return <RowEdgeWidgetPane left={left} right={right} />;
}