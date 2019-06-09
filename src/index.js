import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';

import reducer from "./store/Reducer.js"; //the reducer function. Pure redux thing. No connection with React at all.
//redux in itself is a standalone library with no connection to react.
import { Provider } from "react-redux"; // a react component that connects Redux with React, basically injects the
//store into the react application.
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));


const jsx = (
    //the Provider HOC expects the created store as props.
    <Provider store={store}> 
        <App /> 
    </Provider>);
ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
