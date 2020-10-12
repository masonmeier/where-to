import React from "react";
import "styles/landingPage.css";
import { useHistory } from "react-router-dom";
import NavBar from "components/structure/NavBar";
import planeWindow from "images/lpimages/10398-plane-window.gif";

function LandingPage() {
  const history = useHistory();
  const startQuiz = () => {
    history.push("/questions");
  };

  return (
    <div className="landing-Page">
      <NavBar />
      <div className="w-row">
        <div className="landing-column">
          <header
            id="hero"
            data-w-id="39ea50f5-681e-bdaf-a888-6d6d4a8942ba"
            className="hero"
          >
            <div className="flex-container w-container">
              <div className="lp-hero-text">
                <h1 className="heading">Have you ever wondered...</h1>
                <p className="paragraph">
                  Where in the world you would actually fit in?
                  <br />‍<br />
                  Where-To is an application that tests your preferences against
                  dozens of international ranking metrics to determine where you
                  would actually enjoy living!
                </p>
                <button className="start-button w-button" onClick={startQuiz}>
                  Start
                </button>
              </div>
              <div className="hero-image-mask">
                <img
                  src={planeWindow}
                  sizes="(max-width: 479px) 87vw, (max-width: 767px) 92vw, 39vw"
                  alt="moving title"
                  className="hero-image"
                />
              </div>
            </div>
          </header>
        </div>
      </div>
      <div className="signature-holder">
        <div className="signature">Mason Meier 2020</div>
      </div>
    </div>
  );
}

export default LandingPage;
