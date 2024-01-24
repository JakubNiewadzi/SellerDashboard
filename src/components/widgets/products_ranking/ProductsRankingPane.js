import { ColumnTinyGappedList } from "../../common/LinearGappedList";
import { RowEdgeWidgetPane } from "../../widget/WidgetPane";

export const ProductsRankingPane = ({ name, img, subtextBottom, subtextBottomValue, subtextTop, subtextTopValue }) => {
    return <RowEdgeWidgetPane
        left={<ColumnTinyGappedList>
            <span>{name}</span>
            <span style={{ fontSize: '13px', fontWeight: 'normal', fontFamily: "Noto Sans" }}>{subtextTop}:{subtextTopValue}</span>
            <span style={{ fontSize: '13px', fontWeight: 'normal', fontFamily: "Noto Sans" }}>{subtextBottom}:{subtextBottomValue}</span>
        </ColumnTinyGappedList>}

        right={<img src={img} />}
    />;
}