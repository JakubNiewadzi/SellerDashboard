import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { SidebarComponent } from "../components/sidebar/SidebarComponent";

export const ProtectedRoute = () => {
    const auth = useSelector(state => state.auth.isLoggedIn)
    if (!auth) {
        return <Navigate to="/login" />
    }
    return <div className="app">
        <SidebarComponent />
        <Outlet />
    </div>
}