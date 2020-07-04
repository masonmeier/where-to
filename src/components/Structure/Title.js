import React, { Component } from 'react';
import '../../App.css'

export default class Title extends Component {
  render() {
    return (
      <div className='TitleImage'>
        <img src={require('../images/title.png')} />
      </div>
    );
  }
}

