import React from 'react';
import ReactDOM from 'react-dom/client';
import 'typeface-lexend-deca';
import 'typeface-noto-sans'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import './styles/custom.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./services/state/Store";
import {ContextProvider} from "./services/globalContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ContextProvider>
                <Provider store={store}>
                    <App/>
                </Provider>
            </ContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
