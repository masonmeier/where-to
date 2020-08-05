import React from 'react';

export default function LoadingPage(props) {
  return (
    <div className="loadContainer">
      <img className="loadingGif" src={require('./images/loadingscreen.gif')} alt="loading..."/>
    </div>
  );
}