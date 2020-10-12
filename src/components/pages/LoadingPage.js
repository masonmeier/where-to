import React from "react";

export default function LoadingPage(props) {
  return (
    <div className="load-container">
      <div className="loading-image-resize">
        <img
          className="loading-gif"
          src={require("components/pages/images/loadingscreen.gif")}
          alt="loading..."
        />
      </div>
    </div>
  );
}
