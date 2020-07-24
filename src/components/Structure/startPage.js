import React from 'react';
import '../../App.css';
import {useHistory} from 'react-router-dom';

export default function StartPage(props) {
  const history = useHistory();
  const startQuiz = () => {
    history.push('/questions');
  };

  return (
    <div className='Signature'>
      <a id="sigText" href="https://github.com/masonmeier">Mason Meier 2020</a>
      <form>
        <label>
          What city do you live in?
          <input type="text" name="cityName"/>
        </label>
        <button id="startButton" onClick={startQuiz}>Onward!</button>
        <div className='BottomTriangle'/>
      </form>
    </div>
  );

}

