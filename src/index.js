import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';
import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>,
    </Provider>,
    document.getElementById('root')
);
