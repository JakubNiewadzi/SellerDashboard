import { OpinionsWidget } from "../components/widgets/opinions/OpinionsWidget";
import { SidebarComponent } from "../components/SidebarComponent";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { OrdersWidget } from "../components/widgets/orders/OrdersWidget";
import { QualityWidget } from "../components/widgets/quality/QualityWidget";
import { useDispatch } from 'react-redux';
import { updateQualityInformation } from "services/state/slices/qualitySlice";

export const DashboardPage = () => {

    const user = useSelector(state => state.auth)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(updateQualityInformation(user.user, user.currentAccount));
    }, [dispatch, user]);

    return <div className='Dashboard-page {!isDarkTheme ? "light" : "dark"}'>
        <OpinionsWidget />
        <OrdersWidget />
        <QualityWidget />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Aliquam malesuada
        bibendum arcu vitae. Rutrum tellus pellentesque eu tincidunt tortor aliquam
        nulla facilisi cras. Nulla pharetra diam sit amet. Sed ullamcorper morbi
        tincidunt ornare. Ac feugiat sed lectus vestibulum mattis ullamcorper velit
        sed. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Lorem
        mollis aliquam ut porttitor leo a diam sollicitudin. Fusce ut placerat orci nulla
        pellentesque dignissim enim sit. Amet nulla facilisi morbi tempus iaculis urna id.
        Enim sit amet venenatis urna. Tempus egestas sed sed risus pretium quam vulputate.
        Viverra aliquet eget sit amet tellus. Pulvinar pellentesque habitant morbi tristique
        senectus. Vitae tortor condimentum lacinia quis vel.
    </div>
}