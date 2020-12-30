import React from 'react';
import {useHistory} from 'react-router-dom';


const ResultNavBar = (props) => {
  let history = useHistory();
  const viewStats = () => {
    history.push('/results/stats');
  };
  const viewNews = () => {
    history.push('/results/news');
  };
  const viewWeather = () => {
    history.push('/results/weather');
  };

  return (
    <nav className="nav-header">
      <button className="result-nav-link" onClick={viewStats}>
        <h2 className="resultNavLinkText">
          Statistics
        </h2>
      </button>
      <button className="result-nav-link" onClick={viewNews}>
        <h2 className="resultNavLinkText">
          News
        </h2>
      </button>
      <button className="result-nav-link" onClick={viewWeather}>
        <h2 className="resultNavLinkText">
          Weather
        </h2>
      </button>
    </nav>
  );
};

export default ResultNavBar;
