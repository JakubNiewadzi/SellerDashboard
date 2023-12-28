import {useState} from "react";
import {ButtonComponent} from "../components/ButtonComponent";

export const OpinionsWidget = () => {
    const [clickedButton, setClickedButton] = useState(3);

    const handleRadioButtonClick = (buttonId) => {
        setClickedButton(buttonId)
    }

    const radioButtonGroup = <>
        <ButtonComponent color={clickedButton === 1 ? 'success' : 'primary'}
                         onClick={() => handleRadioButtonClick(1)}
                         text='Pozytywne'/> {" "}
        <ButtonComponent color={clickedButton === 2 ? 'success' : 'primary'}
                         onClick={() => handleRadioButtonClick(2)}
                         text='Negatywne'/> {" "}
        <ButtonComponent color={clickedButton === 3 ? 'success' : 'primary'}
                         onClick={() => handleRadioButtonClick(3)}
                         text='Wszystkie'/>
    </>

    return radioButtonGroup;
}