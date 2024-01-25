import { ColumnGappedList, RowGappedList } from "../../common/LinearGappedList";
import { RowEdgeWidgetPane } from "../../widget/WidgetPane";

export const ProductsRankingPane = ({ name, img, subtextTop, subtextTopValue, subtextBottom, subtextBottomValue }) => {
    const left = <ColumnGappedList className="size-zero">
        <span className="size-medium bold">{name}</span>
        <ColumnGappedList className="size-zero">
            <RowGappedList className="size-zero">
                <span className="size-small bold">{subtextTop}:</span>
                <span className="size-small bold" style={{ marginLeft: "5px" }}>{subtextTopValue}</span>
            </RowGappedList>
            <RowGappedList className="size-zero">
                <span className="size-small bold">{subtextBottom}:</span>
                <span className="size-small bold" style={{ marginLeft: "5px" }}>{subtextBottomValue}</span>
            </RowGappedList>
        </ColumnGappedList>
    </ColumnGappedList>;

    const right = <img src={img} />;

    return <RowEdgeWidgetPane left={left} right={right} />;
}