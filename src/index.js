import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import App from "./components/App/App";
import GlobalState from "./context/Global/globalState";

const jsx = (
  //the Provider HOC expects the created store as props.
  <GlobalState>
    <App />
  </GlobalState>
);
ReactDOM.render(jsx, document.getElementById("root"));
registerServiceWorker();
