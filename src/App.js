import './styles/App.css';
import {Route, Routes} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage";
import {DashboardPage} from "./pages/DashboardPage";
import {OpinionsPage} from "./pages/OpinionsPage";
import {OrdersPage} from "./pages/OrdersPage";
import {ProductsPage} from "./pages/ProductsPage";
import {QualityOfSellerPage} from "./pages/QualityOfSellerPage";
import {AuthService} from "./services/authService";

function App() {
    return (
        <>
            <Routes>
                <Route path='/login' element={<LoginPage/>}/>
                <Route element={<AuthService/>}>
                    <Route index element={<DashboardPage/>}/>
                    <Route path='/opinions' element={<OpinionsPage/>}/>
                    <Route path='/orders' element={<OrdersPage/>}/>
                    <Route path='/products' element={<ProductsPage/>}/>
                    <Route path='/qualityofseller' element={<QualityOfSellerPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
