import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {authenticate} from "../services/authService";
import {login, logout} from "../services/state/slices/authSlice";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {useNavigate} from "react-router-dom";
import {useGlobalContext} from "../services/globalContext";

export const LoginPage = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const {isDark} = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault()
        const authResult = authenticate(username, password)
        if (authResult) {
            dispatch(login(authResult))
            navigate("/")
        }
    }
    return (
        <div className={`app ${isDark ? 'dark' : 'light'} page-container`}>
            <Form className={`form ${isDark ? 'dark' : 'light'}`} onSubmit={(e) => handleSubmit(e)}>
                <FormGroup>
                    <Label for='username'>
                        Username
                    </Label>
                    <Input
                        id='username'
                        name='username'
                        placeholder='Your username'
                        type='text'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='password'>
                        Password
                    </Label>
                    <Input
                        id='password'
                        name='password'
                        placeholder='Your password'
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Button className='call-for-action-btn'
                            color='primary'
                            type='submit'
                            style={{width: '100%', marginTop: '15px'}}>Submit</Button>
                </FormGroup>
            </Form>
        </div>
    )
}