import React from 'react';
import Title from '../Structure/Title';
import '../../CSS/landingPage.css';
import {useHistory} from 'react-router-dom';
import NavBar from '../Structure/NavBar';


function LandingPage() {
  const history = useHistory();
  const startQuiz = () => {
    history.push('/questions');
  };

  return (
    <div className="landingPage">
      <NavBar/>
      <div id="container">
        <img alt="bg1" src={require('./images/backgrounds/bg1.jpg')}/>
        <img alt="bg2" src={require('./images/backgrounds/bg2.jpg')}/>
        <img alt="bg3" src={require('./images/backgrounds/bg3.jpg')}/>
        <img alt="bg4" src={require('./images/backgrounds/bg4.jpg')}/>
        <img alt="bg5" src={require('./images/backgrounds/bg5.jpg')}/>
        <img alt="bg6" src={require('./images/backgrounds/bg6.jpg')}/>
        <img alt="bg7" src={require('./images/backgrounds/bg7.jpg')}/>
        <img alt="bg8" src={require('./images/backgrounds/bg8.jpg')}/>
      </div>
      <div className="backgroundMask"/>
      <div className="centerContent">
        <Title/>
        <hr className="hr-light"/>
        <button onClick={startQuiz} className="StartButton">Start</button>
        <div className="signature">
          <p className="signatureText">Mason Meier 2020</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;