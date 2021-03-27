import React from "react";
import 'fontsource-roboto';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import "./index.css";
import App from "./App";
import store from './redux/store'
import MainContainer from './components/UI/MainContainer'
//  

// console.log(store.dispatch(myAction(3)));

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
      <BrowserRouter>
      <MainContainer>
      <App />
      </MainContainer>
      </BrowserRouter>
      </PersistGate>
    </Provider>, 
  // </React.StrictMode>,
    
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
