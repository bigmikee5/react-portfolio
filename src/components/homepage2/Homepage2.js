import "../homepage2/homepage2.css";

import React, { Component } from "react";

class Homepage2 extends Component {
  render() {
    return (
      <div className="homepage2">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Homepage2;
