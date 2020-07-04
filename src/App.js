import React, {Component} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/pages/home';
import Question1 from './components/pages/questions/question1';
import Question2 from './components/pages/questions/question2';
// import Error from './components/pages/error';
import QuizProvider from './components/QuizProvider';

function App() {
return (

<BrowserRouter>
  <QuizProvider>
    <Route path='/' component={Home} exact />
    <Route path='/q1' component={Question1}/>
    <Route path='/q2' component={Question2}/>

  </QuizProvider>
</BrowserRouter>
)
}

export default App;