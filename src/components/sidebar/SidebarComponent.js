import { useDispatch, useSelector } from "react-redux";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input } from "reactstrap";
import { FaUserCircle } from "react-icons/fa";
import { CiDark, CiLight } from "react-icons/ci";
import { MdDashboard, MdLogout } from "react-icons/md";
import { useState } from "react";
import { PiUserSwitchBold } from "react-icons/pi";
import { changeAccount, logout } from "../../services/state/slices/authSlice";
import { IoLanguage } from "react-icons/io5";
import { LANGUAGES, users } from "../../fakebackend/FakeBackend";
import { setLanguage, switchTheme } from "../../services/state/slices/contextSlice";
import { useNavigate } from "react-router-dom";

export const SidebarComponent = () => {
    const dispatch = useDispatch()
    const currentAccount = useSelector(state => state.auth.currentAccount)
    const isDark = useSelector(state => state.context.isDark)
    const language = useSelector(state => state.context.language)
    const user = useSelector(state => state.auth.user)
    const messages = useSelector(state => state.context.translation)
    const accounts = users[user].accounts

    const navigate = useNavigate()

    const UserInfo = () => {
        return <>
            <div className='UserInfo'>
                <span style={{ marginRight: '6px' }} className="size-normal">{user}</span>
                <FaUserCircle height='32' width='32' />
            </div>
            <hr className="horizontal-line" />
        </>
    }

    const SwitchThemeButton = () => {
        return <div className='SwitchThemeButton'>
            <CiLight />
            <FormGroup switch style={{ justifyContent: "center", display: "flex" }}>
                <Input
                    type='switch'
                    checked={isDark}
                    onClick={() => dispatch(switchTheme())}
                    color='success' />
            </FormGroup>
            <CiDark />
        </div>
    }

    const SidebarElementDropdown = ({ text, icon, items, type }) => {
        const [dropdownOpen, setDropdownOpen] = useState(false)

        const toggleDropdown = () => {
            setDropdownOpen((prevState) => !prevState)
        };
        const changeLanguage = (language) => {
            dispatch(setLanguage(LANGUAGES.filter(x => x.name === language)[0]))
        }

        const itemsList = items.map(item => {
            return <DropdownItem value={item} onClick={type === 'account' ?
                () => dispatch(changeAccount(item)) : () => changeLanguage(item)}>{item}</DropdownItem>
        })

        return (<Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle tag="span" data-toggle="dropdown" aria-expanded={dropdownOpen}
                className='SidebarElement'>
                {icon}
                <span style={{ marginLeft: '15px' }} className="size-normal">
                    {text}
                </span>
            </DropdownToggle>
            <DropdownMenu>
                {itemsList}
            </DropdownMenu>
        </Dropdown>);
    }

    const SidebarElement = ({ text, icon, onClick }) => {
        return (<div className='SidebarElement' onClick={onClick}>
            {icon}
            <span style={{ marginLeft: '15px' }}>
                {text}
            </span>
        </div>);
    }

    return <div className="Sidebar">
        <UserInfo />
        <SidebarElement onClick={() => navigate("/")} text={messages['dashboard']} icon={<MdDashboard />} />
        <SidebarElementDropdown text={currentAccount} icon={<PiUserSwitchBold />} items={accounts} type='account' />
        <SidebarElementDropdown text={language} icon={<IoLanguage />} items={LANGUAGES.map(x => x.name)} type='language' />
        <SidebarElement text={messages['logout']} icon={<MdLogout />} onClick={() => dispatch(logout())} />
        <SwitchThemeButton />
    </div>

}