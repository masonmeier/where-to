import React, {Component} from 'react';
import '../../CSS/landingPage.css';

export default class Title extends Component {
  render() {
    return (
      <div className='TitleImage'>
        <img className="titleImage" alt="title" src={require('../pages/images/title.png')}/>
      </div>
    );
  }
}

