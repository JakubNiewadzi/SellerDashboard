import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

export const ProtectedRoute = () => {
    const auth = useSelector(state => state.auth.isLoggedIn)
    if(!auth){
        return <Navigate to="/login" />
    }
    return <Outlet/>
}