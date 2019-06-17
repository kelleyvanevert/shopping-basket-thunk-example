import React from "react";
import ReactDOM from "react-dom";

import store from "./store";

import { Provider } from 'react-redux'

import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./HomePage";
import ShoppingBasketPage from "./ShoppingBasketPage";
import ProductsPage from "./ProductsPage";

import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/basket" component={ShoppingBasketPage} />
        <Route exact path="/shop" component={ProductsPage} />
      </BrowserRouter>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
