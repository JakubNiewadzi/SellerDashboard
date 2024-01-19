import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {authenticate} from "../services/authService";
import {login} from "../services/state/slices/authSlice";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {useNavigate} from "react-router-dom";

export const LoginPage = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const isDark = useSelector(state => state.context.isDark);
    const translation = useSelector(state => state.context.translation);

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
                        {translation['username']}
                    </Label>
                    <Input
                        id='username'
                        name='username'
                        placeholder={translation['usernamePh']}
                        type='text'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='password'>
                        {translation['password']}
                    </Label>
                    <Input
                        id='password'
                        name='password'
                        placeholder={translation['passwordPh']}
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Button color='primary'
                            type='submit'
                            style={{
                                width: '100%',
                                marginTop: '15px',
                                borderRadius: '2px',
                                color: isDark ? '#d2d2d2' : 'white'
                            }}>{translation['signin']}</Button>
                </FormGroup>
            </Form>
        </div>
    )
}