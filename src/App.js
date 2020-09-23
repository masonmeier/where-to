import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import QuizProvider from './components/QuizProvider';
import LandingPage from './components/pages/LandingPage';
import QuestionStructure from './components/pages/questions/QuestionStructure';
import UserInput from './components/pages/questions/Input';
import ResultsPageNews from './components/pages/ResultsPageNews';
import ResultsCalculator from './components/pages/ResultsCalculator';
import ResultsPageStats from './components/pages/ResultsPageStats';
import ResultsPageWeather from './components/pages/ResultsPageWeather';


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
      component: ResultsCalculator,
    },
    {
      path: '/results/stats',
      component: ResultsPageStats,
    },
    {
      path: '/results/news',
      component: ResultsPageNews,
    },
    {
      path: '/results/weather',
      component: ResultsPageWeather,
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