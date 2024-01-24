import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { WidgetComponent } from "../../widget/WidgetComponent";
import { StdButtonLarge, StdButtonTiny } from "../../common/StdButton";
import { ColumnMediumGappedList, RowTinyGappedList } from "../../common/LinearGappedList";
import { ProductsRankingPane } from "./ProductsRankingPane";
import { useDispatch } from 'react-redux';
import { PRODUCTS_RANKING_MOST_COMMON, PRODUCTS_RANKING_MOST_RARE } from "fakebackend/FakeBackend";
import { updateProductsRankingInfo } from "services/state/slices/productsRankingSlice";

export const ProductsRankingWidget = () => {
    const [clickedButton, setClickedButton] = useState(PRODUCTS_RANKING_MOST_COMMON);

    const dispatch = useDispatch();
    const messages = useSelector(state => state.context.translation.productsRanking)
    const info = useSelector(state => state.productsRanking)
    const user = useSelector(state => state.auth)

    useEffect(() => {
        updateRankingType(clickedButton);
    }, [dispatch, user]);

    const updateRankingType = (type) => {
        dispatch(updateProductsRankingInfo(user.user, user.currentAccount, type));
        setClickedButton(type);
    };

    const getRadioButton = (type, message) => {
        return <StdButtonTiny
            color={clickedButton === type ? 'success' : 'primary'}
            onClick={() => updateRankingType(type)}
        >{message}</StdButtonTiny>
    }

    return <WidgetComponent
        title={messages.mainTitle} isLoading={info.isLoading} remainder={info.isPresent && <RowTinyGappedList>
            <span>{messages.frequency}</span>
            {getRadioButton(PRODUCTS_RANKING_MOST_COMMON, messages.mostCommon)}
            {getRadioButton(PRODUCTS_RANKING_MOST_RARE, messages.mostRare)}
        </RowTinyGappedList>}
    >
        <ColumnMediumGappedList>
            {info.isPresent ? <>
                {info.entries?.map((o, index) => (<ProductsRankingPane
                    key={index}
                    name={o.name}
                    subtextTop={messages.sold} subtextTopValue={o.sold}
                    subtextBottom={clickedButton == PRODUCTS_RANKING_MOST_RARE 
                        ? messages.uniqueViews 
                        : messages.rotation
                    }
                    subtextBottomValue={clickedButton == PRODUCTS_RANKING_MOST_RARE
                        ? o.uniqueViews 
                        : o.rotation
                    }
                    img={o.img}
                />))}
            </> : <>
                <span className='no-content-text'>{messages.noProductsToShow}</span>
            </>}
        </ColumnMediumGappedList>
    </WidgetComponent>;
}
