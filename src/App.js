import './styles/App.scss';
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";
import { OpinionsPage } from "./pages/OpinionsPage";
import { OrdersPage } from "./pages/OrdersPage";
import { ProductsPage } from "./pages/ProductsPage";
import { QualityOfSellerPage } from "./pages/QualityOfSellerPage";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";

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
                        <Route path='/orders' element={<OrdersPage />} />
                        <Route path='/products' element={<ProductsPage />} />
                        <Route path='/qualityofseller' element={<QualityOfSellerPage />} />
                    </Route>
                </Routes>
            </div>
        </IconContext.Provider>
    );
}

export default App;
