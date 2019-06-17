import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import apiFetchSavedCart from "./api";

import loadSavedCart from "./loadSavedCart"

function clearBasket () {
  return {
    type: "CLEAR_BASKET"
  };
}

class ShoppingBasketPage extends React.Component {

  componentDidMount() {
    console.log("componentdidmount");
    this.props.loadSavedCart();
  }

  removeAll = () => {
    this.props.clearBasket();
  }

  render() {
    console.log("hello", this.props.hello);
    return (
      <div>
        <div>
          <Link to="/">home</Link>
          <Link to="/shop">products</Link>
          <Link to="/basket">basket</Link>
        </div>
        <p>shopping basket ({this.props.hello}):</p>
        <p><button onClick={this.removeAll}>remove everything</button></p>
        <ul>
          {this.props.cart.map((product, i) => {
            return <li key={i}>
               product: {product.title}, price: {product.price}
            </li>
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log("redux state?", reduxState);
  return {
    hello: "world",
    cart: reduxState.cart
  }
}

export default connect(
  mapStateToProps,
  { loadSavedCart, clearBasket }
)(ShoppingBasketPage);
