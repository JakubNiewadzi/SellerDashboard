import './styles/App.scss';
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";
import { OpinionsPage } from "./pages/phony/OpinionsPage";
import { OrdersRoutes } from "./pages/phony/OrdersPage";
import { ProductsPage } from "./pages/phony/ProductsPage";
import { QualityPage } from "./pages/phony/QualityPage";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import { SellProductPage } from 'pages/phony/SellProductPage';
import { PromotePage } from 'pages/phony/PromotePage';

function App() {
    const isDark = useSelector(state => state.context.isDark);
    const iconColor = isDark ? '#c1c1c1' : '#001d1a'
    const themeClassName = isDark ? 'dark' : 'light';
    return (
        <IconContext.Provider value={{ size: '2em', color: iconColor }}>
            <div className={`app ${themeClassName}`}>
                <Routes>
                    <Route path='/login' element={<LoginPage />} />
                    <Route element={<ProtectedRoute />}>
                        <Route index element={<DashboardPage />} />
                        <Route path='/opinions' element={<OpinionsPage />} />
                        <Route path="/orders/*" element={<OrdersRoutes />} />
                        <Route path='/products' element={<ProductsPage />} />
                        <Route path='/quality' element={<QualityPage />} />
                        <Route path='/sell_product' element={<SellProductPage />} />
                        <Route path='/promote' element={<PromotePage />} />
                    </Route>
                </Routes>
            </div>
        </IconContext.Provider>
    );
}

export default App;
