import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import QuizProvider from './components/QuizProvider';
import LandingPage from './components/pages/LandingPage';
import QuestionStructure from './components/pages/questions/QuestionStructure';
import ResultsPage from './components/pages/ResultsPage';
import UserInput from './components/pages/questions/Input';


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
    {
      path: '/results',
      component: ResultsPage,
    },
    {
      path: '/input',
      component: UserInput,
    }
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
  );
}

export default App;