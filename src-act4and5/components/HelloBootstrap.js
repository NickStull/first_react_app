import React from "react";
import Card from "./Card"

function HelloBootstrap() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Hello, world!</h1>
        <p>I'm a jumbotron!</p>
        <p>
          <button className="btn btn-primary btn-lg">Learn more</button>
        </p>
      </div>
      <Card />
      <Card />
    </div>
  );
}

export default HelloBootstrap;
