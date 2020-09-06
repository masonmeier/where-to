import React, {Component, useContext} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../CSS/index.css';
import {useHistory} from 'react-router-dom';
import {QuizContext} from '../QuizProvider';


const NavBar = (props) => {
  const quizContext = useContext(QuizContext);
  const quizReset = quizContext.resetQuestionValues;
  let history = useHistory();
  const restart = () => {
    quizReset();
    history.push('/');
  };

  return (
    <div className='navBar'>
      <Dropdown className="dropdown">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Menu
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={restart}>Restart</Dropdown.Item>
          <Dropdown.Item href="#/action-2">About the Author</Dropdown.Item>
          <Dropdown.Item href="#/action-3">LinkedIn</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default NavBar;
