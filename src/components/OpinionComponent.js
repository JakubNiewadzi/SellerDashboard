import { IoMdThumbsUp } from "react-icons/io";
import { IoMdThumbsDown } from "react-icons/io";
import {useSelector} from "react-redux";

export const OpinionComponent = ({from, opinion, isPositive}) => {
    const isDark = useSelector(state => state.context.isDark)
    return <div className={`OpinionComponent ${isDark ? 'dark' : 'light'}`}>
        <div className='opinion-text-container'>
            <span>{from}</span>
            <span style={{fontSize: '13px', fontWeight: 'normal', fontFamily:"Noto Sans"}}>{opinion}</span>
        </div>
        <div className='thumb-container'>
            {isPositive ? <IoMdThumbsUp/> : <IoMdThumbsDown/>}
        </div>
    </div>
}