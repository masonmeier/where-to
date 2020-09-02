import React, {Component, useContext} from 'react';
import Nav from 'react-bootstrap/Nav';
import {useHistory} from 'react-router-dom';
import QuizProvider, {QuizContext} from '../QuizProvider';


const ResultNavBar = (props) => {
  const quizContext = useContext(QuizContext);
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
  const capital = quizContext.resultCountry.capital_city;
  const isoTwo = quizContext.resultCountry.iso2;

  return (
    <Nav fill variant="tabs" defaultActiveKey="/results/stats">
      <Nav.Item className='resultNavLink'>
        <Nav.Link className='resultNavLinkText' onClick={viewStats}>Statistics</Nav.Link>
      </Nav.Item>
      <Nav.Item className='resultNavLink'>
        <Nav.Link className='resultNavLinkText' onClick={viewNews}>News</Nav.Link>
      </Nav.Item>
      <Nav.Item className='resultNavLink'>
        <Nav.Link className='resultNavLinkText' onClick={viewWeather}>Weather</Nav.Link>
      </Nav.Item>
      <Nav.Item className='resultNavLink'>
        <a
          target={capital}
          className='resultNavLinkText nav-link'
          href={`https://www.google.com/maps/dir/Current+Location/${capital}%20${isoTwo}`}>Flights</a>
      </Nav.Item>
    </Nav>
  );

};

export default ResultNavBar;