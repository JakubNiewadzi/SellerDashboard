import {Button} from "reactstrap";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const ButtonComponent = ({children, to}) => {
    const isDark = useSelector(state => state.context.isDark)
    return <Button className={`redirect-button ${isDark ? 'dark' : 'light'}`}
                   color='primary'
    tag={Link} to={to}>
        {children}
    </Button>
}