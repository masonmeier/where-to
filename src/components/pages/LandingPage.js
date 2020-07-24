import React from 'react';
import StartPage from '../Structure/startPage';
import Title from '../Structure/Title';
import Topbar from '../Structure/Topbar';
import '../../App.css';

function LandingPage() {
  return (
    <div className='landingPage'>
      <Topbar/>
      <Title/>
      <div id="startText">
        <p className="infoText">
          Take a brief, anonymous test that will help you determine what nation you would be happiest in.
        </p>
      </div>
      <br/>
      <StartPage/>
    </div>
  );
}

export default LandingPage;