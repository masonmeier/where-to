import React, { Component } from "react";
import "styles/landingPage.css";

export default class Title extends Component {
  render() {
    return (
      <div className="title-image-container">
        <img
          className="titleImage"
          alt="title"
          src={require("images/title.png")}
        />
      </div>
    );
  }
}
