import React, { Component } from "react";
import "CSS/landingPage.css";

export default class Title extends Component {
  render() {
    return (
      <div className="title-image-container">
        <img
          className="titleImage"
          alt="title"
          src={require("components/pages/images/title.png")}
        />
      </div>
    );
  }
}
