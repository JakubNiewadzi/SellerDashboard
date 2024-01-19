import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {SidebarComponent} from "../SidebarComponent";

export const ProtectedRoute = () => {
    const auth = useSelector(state => state.auth.isLoggedIn)
    const isDark = useSelector(state => state.context.isDark)
    if (!auth) {
        return <Navigate to="/login"/>
    }
    return <div className={`app ${ isDark ?  'dark' : 'light'}`}>
        <SidebarComponent/>
        <Outlet/>
    </div>
}