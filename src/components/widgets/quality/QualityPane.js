import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { RowGappedList } from "../../common/LinearGappedList";
import { ColumnEdgePane } from "components/widget/WidgetPane";

const StarsRow = ({ rating, ...props }) => {
    const stars = [];
    while (stars.length < 5) {
        if (rating >= 1) {
            stars.push(<IoMdStar key={stars.length} />);
            rating -= 1;
        } else if (rating >= 0.5) {
            stars.push(<IoMdStarHalf key={stars.length} />);
            rating -= 0.5;
        } else {
            stars.push(<IoMdStarOutline key={stars.length} />);
        }
    }
    return <RowGappedList className="size-normal" {...props}>{stars}</RowGappedList>;
};

export const QualityPane = ({ rating, title, ...props }) => {
    return <ColumnEdgePane {...props}
        top={<span className="size-medium bold">{title}</span>}
        bottom={<StarsRow rating={rating} />}
    />
}

/*
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
*/