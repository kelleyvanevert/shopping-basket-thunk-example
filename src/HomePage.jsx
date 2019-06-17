import React from "react";

import { Link } from "react-router-dom";

export default class HomePage extends React.Component {
  render() {
    console.log("hello from home");
    return (
      <div>
        <div>
          <Link to="/">home</Link>
          <Link to="/shop">products</Link>
          <Link to="/basket">basket</Link>
        </div>
        <p>Welcome to Kelley van Evert store!</p>
      </div>
    );
  }
}
