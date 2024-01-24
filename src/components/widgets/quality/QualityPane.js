import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { RowSmallGappedList } from "../../common/LinearGappedList";
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
    return <RowSmallGappedList {...props}>{stars}</RowSmallGappedList>;
};

export const QualityPane = ({ rating, title, ...props }) => {
    return <ColumnEdgePane {...props}
        top={<span>{title}</span>}
        bottom={<StarsRow rating={rating} />}
    />
}
