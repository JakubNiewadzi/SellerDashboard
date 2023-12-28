import {Button} from "reactstrap";
import button from "bootstrap/js/src/button";

export const ButtonComponent = (props) => {

    return <Button className='call-for-action-btn'
                   color={props.color}
                   onClick={props.onClick}>
        {props.text}
    </Button>
}