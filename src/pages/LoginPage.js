import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { login } from "../services/state/slices/authSlice";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { StdButtonAny } from "components/common/StdButton";

export const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const dispatch = useDispatch()
    const messages = useSelector(state => state.context.translation.loginPage);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    useEffect(() => {
        if (isLoggedIn === true) {
            navigate("/")
        }
    }, [isLoggedIn]);

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(username, password));
    }

    return <div className="app page-container">
        <Form className="form" onSubmit={handleSubmit}>
            <FormGroup>
                <Label for='username'>{messages.username}</Label>
                <Input
                    id='username'
                    name='username'
                    placeholder={messages.usernamePh}
                    type='text'
                    onChange={(e) => setUsername(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label for='password'>{messages.password}</Label>
                <Input
                    id='password'
                    name='password'
                    placeholder={messages.passwordPh}
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FormGroup>
            <FormGroup className="login-page-button-wrapper">
                <StdButtonAny type='submit' className="size-large ">{messages.signin}</StdButtonAny>
            </FormGroup>
        </Form>
    </div>;
}
