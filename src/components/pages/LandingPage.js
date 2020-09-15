import React from 'react';
import '../../CSS/landingPage.css';
import {useHistory} from 'react-router-dom';
import NavBar from '../Structure/NavBar';


function LandingPage() {
  const history = useHistory();
  const startQuiz = () => {
    history.push('/questions');
  };

  return (
    <div className="landing-Page">
      <NavBar/>
      <div className="w-row">
        <div className="w-col w-col-9">
          <header id="hero" className="hero">
            <div className="flex-container w-container">
              <div>
                <h1 className="heading">Have you ever wondered...</h1>
                <p className="paragraph">Where in the world you would actually fit in?<br/>‍<br/>Where-To is an
                  application that tests your preferences against dozens of international <br/>ranking metrics to
                  determine where you<br/>would actually enjoy living!</p>
                <button onClick={startQuiz} className="start-button w-button">Start</button>
              </div>
              <div className="hero-image-mask"><img
                src={require('./images/lpimages/title.png')}
                alt='' className='hero-image'/>
              </div>
            </div>
          </header>
        </div>
        <div className="column w-col w-col-3">
          <img src={require('./images/lpimages/10398-plane-window.gif')}
               loading="lazy"
               alt=""
               className="image"/>
        </div>
      </div>
      <div className="signature-holder">
        <div className="signature">Mason Meier 2020</div>
      </div>
    </div>
  );
}

export default LandingPage;