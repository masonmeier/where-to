import React from 'react';
import StartSignature from '../Structure/startSignature';
import Title from '../Structure/Title';
import Topbar from '../Structure/Topbar';
import '../../App.css'

function LandingPage() {
  return (
    <div className='landingPage'>
      <Topbar />
      <Title />
      <div id="startText">
      <p className="infoText">
        Take a brief, anonymous test that will help you determine what nation you would be happiest in.
      </p>
      </div>
      <br/>
      <StartSignature />
    </div>
  );
}

export default LandingPage;