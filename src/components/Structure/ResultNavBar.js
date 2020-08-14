import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
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
  const viewMap = () => {
    history.push('/results/map');
  };


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
        <Nav.Link className='resultNavLinkText' onClick={viewMap}>Map</Nav.Link>
      </Nav.Item>
    </Nav>
  );

};

export default ResultNavBar;