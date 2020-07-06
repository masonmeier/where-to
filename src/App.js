import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Question1 from './components/pages/questions/question1';
import Question2 from './components/pages/questions/question2';
import QuizProvider from './components/QuizProvider';
import LandingPage from './components/pages/LandingPage';
import QuizStructure from './components/pages/questions/Input'
import QuestionStructure from './components/pages/questions/QuestionStructure';

function App() {

  const routes = [
    {
      path: '/',
      component: LandingPage,
    },
    {
      path: '/questions',
      component: QuestionStructure,
    },
  ];

  const routeComponents = routes.map(({path, component}, key) =>
      <Route
        exact path={path}
        component={component}
        key={key}
      />
    );

  return (
    <BrowserRouter>
      <QuizProvider>
        {routeComponents}
      </QuizProvider>
    </BrowserRouter>
  )
}

export default App;