import React, { Component } from 'react';
import '../../App.css'

export default class Signature extends Component {
  render() {
    return (
      <div className='Signature'>
        <a id="sigText" href="https://github.com/masonmeier">Mason Meier 2020</a>
        <div className='BottomTriangle'></div>
      </div>
    );
  }
}