import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./store/Reducer.js";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));
const jsx = (
    <Provider store={store}> 
        <App /> 
    </Provider>);
ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
