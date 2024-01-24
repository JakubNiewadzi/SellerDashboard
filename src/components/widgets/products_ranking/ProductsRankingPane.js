import { ColumnTinyGappedList, ColumnZeroGappedList, RowZeroGappedList } from "../../common/LinearGappedList";
import { RowEdgeWidgetPane } from "../../widget/WidgetPane";

export const ProductsRankingPane = ({ name, img, subtextTop, subtextTopValue, subtextBottom, subtextBottomValue }) => {
    const left = <ColumnTinyGappedList>
        <h3>{name}</h3>
        <ColumnZeroGappedList>
            <RowZeroGappedList>
                <h5>{subtextTop}:</h5>
                <h5 style={{ marginLeft: "5px" }}>{subtextTopValue}</h5>
            </RowZeroGappedList>
            <RowZeroGappedList>
                <h5>{subtextBottom}:</h5>
                <h5 style={{ marginLeft: "5px" }}>{subtextBottomValue}</h5>
            </RowZeroGappedList>
        </ColumnZeroGappedList>
    </ColumnTinyGappedList>;
    const right = <img src={img} />;
    return <RowEdgeWidgetPane left={left} right={right} />;
}