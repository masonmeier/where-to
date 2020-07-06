import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Question1 from './components/pages/questions/question1';
import Question2 from './components/pages/questions/question2';
import QuizProvider from './components/QuizProvider';
import LandingPage from './components/pages/LandingPage';

function App() {
  const routes = [
    {
      path: '/',
      component: LandingPage,
    },
    {
      path: '/questions',
      component: questionStructure,
    }
  ];
return (

<BrowserRouter>
  <QuizProvider>
    <Route path='/' component={LandingPage} exact />
    <Route path='/q1' component={Question1}/>
    <Route path='/q2' component={Question2}/>

  </QuizProvider>
</BrowserRouter>
)
}

export default App;