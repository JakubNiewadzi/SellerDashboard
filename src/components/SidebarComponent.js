import {useDispatch, useSelector} from "react-redux";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input} from "reactstrap";
import {useGlobalContext} from "../services/globalContext";
import {FaUserCircle} from "react-icons/fa";
import {CiDark, CiLight} from "react-icons/ci";
import {MdDashboard, MdLogout} from "react-icons/md";
import {useState} from "react";
import {PiUserSwitchBold} from "react-icons/pi";
import {changeAccount, logout} from "../services/state/slices/authSlice";
import {IoLanguage} from "react-icons/io5";
import {languages, users} from "../fakebackend/FakeBackend";


export const SidebarComponent = () => {
    const {isDark, toggleTheme, language, changeLanguage } = useGlobalContext()
    const currentAccount = useSelector(state => state.auth.currentAccount)
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.auth.user)
    const accounts = users[currentUser].accounts

    const UserInfo = () => {
        return <>
            <div className='UserInfo'>
                <span style={{marginRight: '6px'}}>{currentUser}</span>
                <FaUserCircle height='32' width='32'/>
            </div>
            <hr className={`horizontal-line ${isDark ? 'dark' : 'light'}`}/>
        </>
    }

    const SwitchThemeButton = () => {
        return <div className='SwitchThemeButton'>
            <CiLight/>
            <FormGroup switch style={{justifyContent: "center", display: "flex"}}>
                <Input
                    type='switch'
                    checked={isDark}
                    onClick={() => toggleTheme()}
                    color='success'/>
            </FormGroup>
            <CiDark/>
        </div>


    }

    const SidebarElementDropdown = ({text, icon, items, type}) => {
        const [dropdownOpen, setDropdownOpen] = useState(false)

        const toggleDropdown = () => {
            setDropdownOpen((prevState) => !prevState)
        };

        const handleAccountSelect = (account) =>{
            console.log(account)
            dispatch(changeAccount(account))
        }

        const handleLanguageSelect = (language) => {
            changeLanguage(language)
        }

        const itemsList = items.map(item => {
            return <DropdownItem value={item} onClick={type === 'account' ?
                () => handleAccountSelect(item) : () => handleLanguageSelect(item)}>{item}</DropdownItem>
        })

        return (<Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                <DropdownToggle tag="span" data-toggle="dropdown" aria-expanded={dropdownOpen}
                                className='SidebarElement'>
                    {icon}
                    <span style={{marginLeft: '15px'}}>
                        {text}
                        </span>
                </DropdownToggle>
                <DropdownMenu>
                    {itemsList}
                </DropdownMenu>
            </Dropdown>);
    }

    const SidebarElement = ({text, icon, onClick}) => {
        return (<div className='SidebarElement' onClick={onClick}>
                {icon}
                <span style={{marginLeft: '15px'}}>
                    {text}
                </span>
            </div>);
    }

    const handleLogout = () => {
        dispatch(logout())
    }

    console.log(currentAccount)
    return <div className={`Sidebar ${isDark ? 'dark' : 'light'}`}>
        <UserInfo/>
        <SidebarElement text='Dashboard' icon={<MdDashboard/>}/>
        <SidebarElementDropdown text={currentAccount} icon={<PiUserSwitchBold/>} items={accounts} type='account'/>
        <SidebarElementDropdown text={language} icon={<IoLanguage/>} items={languages} type='language'/>
        <SidebarElement text='Wyloguj' icon={<MdLogout/>} onClick={() => handleLogout}/>
        <SwitchThemeButton/>
    </div>

}