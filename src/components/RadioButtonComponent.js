import {useSelector} from "react-redux";
import {Button} from "reactstrap";

export const RadioButtonComponent = ({children, color, onClick, style}) => {
    const isDark = useSelector(state => state.context.isDark)
    return <Button className={`radio-button ${isDark ? 'dark' : 'light'}`}
                   color={color} onClick={onClick} style={style}>
        {children}
    </Button>
}