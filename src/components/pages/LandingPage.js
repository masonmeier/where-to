import React from 'react';
import '../../CSS/landingPage.css';
import {useHistory} from 'react-router-dom';
import NavBar from '../Structure/NavBar';
import titleImage from './images/lpimages/title.png';
import planeWindow from './images/lpimages/10398-plane-window.gif';


function LandingPage() {
  const history = useHistory();
  const startQuiz = () => {
    history.push('/questions');
  };

  return (
    <div className="landing-Page">
      <NavBar/>
      <div className="w-row">
        <div className="w-col-9">
          <header id="hero" data-w-id="39ea50f5-681e-bdaf-a888-6d6d4a8942ba" className="hero">
            <div className="flex-container w-container">
              <div className="lp-hero-text">
                <h1 af-el="landing-page-header" className="heading">Have you ever wondered...</h1>
                <p af-el="landing-page-text" className="paragraph">Where in the world you would actually fit
                  in?<br/>‍<br/>Where-To is an application that tests your preferences against dozens of
                  international <br/>ranking metrics to determine where you would actually enjoy living!</p>
                <button className="start-button w-button" onClick={startQuiz}>Start</button>
              </div>
              <div className="hero-image-mask">
                <img src={planeWindow}
                     sizes="(max-width: 479px) 87vw, (max-width: 767px) 92vw, 39vw"
                     alt="title image" className="hero-image"/>
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