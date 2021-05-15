import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "./reducers/index";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const state = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={state}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
