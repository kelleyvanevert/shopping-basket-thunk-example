import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

class ProductsPage extends React.Component {

  addRandomProduct = () => {
    console.log("dispatch", this.props.dispatch);
    this.props.dispatch({
      type: "ADD_PRODUCT_TO_BASKET",
      payload: {
        title: "Random product",
        price: Math.random() * 100
      }
    });
  }

  render() {
    console.log("hello from product page");
    return (
      <div>
        <div>
          <Link to="/">home</Link>
          <Link to="/shop">products</Link>
          <Link to="/basket">basket</Link>
        </div>
        <p>products</p>
        <p><button onClick={this.addRandomProduct}>add random product</button></p>
      </div>
    );
  }
}

export default connect()(ProductsPage)
