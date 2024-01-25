import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { WidgetComponent } from "../../widget/WidgetComponent";
import { ColumnGappedList, RowGappedList } from "../../common/LinearGappedList";
import { ProductsRankingPane } from "./ProductsRankingPane";
import { useDispatch } from 'react-redux';
import { PRODUCTS_RANKING_MOST_SOLD, PRODUCTS_RANKING_LEAST_SOLD } from "fakebackend/FakeBackend";
import { updateProductsRankingInfo } from "services/state/slices/productsRankingSlice";
import { StdButtonAny } from "components/common/StdButton";

export const ProductsRankingWidget = () => {
    const [clickedButton, setClickedButton] = useState(PRODUCTS_RANKING_MOST_SOLD);

    const dispatch = useDispatch();
    const messages = useSelector(state => state.context.translation.productsRankingWidget)
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
        return <StdButtonAny
            color={clickedButton === type ? 'success' : 'primary'}
            className="size-small"
            onClick={() => updateRankingType(type)}
        >{message}</StdButtonAny>
    }

    return <WidgetComponent
        title={messages.mainTitle} isLoading={info.isLoading} remainder={info.isPresent && <RowGappedList className="size-tiny flex-align-center">
            <span className="size-small radio-button-hint">{messages.frequency}</span>
            {getRadioButton(PRODUCTS_RANKING_MOST_SOLD, messages.mostSold)}
            {getRadioButton(PRODUCTS_RANKING_LEAST_SOLD, messages.leastSold)}
        </RowGappedList>}
    >
        <ColumnGappedList className="size-normal padding-zero">
            {info.isPresent ? <>
                {info.entries?.map((o, index) => (<ProductsRankingPane
                    key={index}
                    name={o.name}
                    subtextTop={messages.sold} subtextTopValue={o.sold}
                    subtextBottom={clickedButton == PRODUCTS_RANKING_LEAST_SOLD 
                        ? messages.uniqueViews 
                        : messages.rotation
                    }
                    subtextBottomValue={clickedButton == PRODUCTS_RANKING_LEAST_SOLD
                        ? o.uniqueViews 
                        : o.rotation
                    }
                    img={o.img}
                />))}
            </> : <>
                <span className='size-normal align-self-center'>{messages.noProductsToShow}</span>
            </>}
        </ColumnGappedList>
    </WidgetComponent>;
}
