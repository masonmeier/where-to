import React, {Component} from 'react';
import '../../CSS/resultspage.css';

export default class Background extends Component {
  render() {
    return (
      <div className="backgroundContainer">
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
      </div>
    );
  }
}
