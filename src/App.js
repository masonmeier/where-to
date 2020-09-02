import React from 'react';
import {BrowserRouter, useHistory, Route, Link} from 'react-router-dom';
import QuizProvider from './components/QuizProvider';
import LandingPage from './components/pages/LandingPage';
import QuestionStructure from './components/pages/questions/QuestionStructure';
import ResultsPage from './components/pages/ResultsPage';
import UserInput from './components/pages/questions/Input';
import ResultsPageNews from './components/pages/ResultsPageNews';
import ResultsCalculator from './components/pages/ResultsCalculator';
import ResultsPageStats from './components/pages/ResultsPageStats';
import WeatherInformation from './components/pages/ResultInformation/WeatherInformation';


function App() {
  console.log('app js render');
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
      component: WeatherInformation,
    },
    // {
    //   path: '/',
    //   component: ResultsPageImmigration
    // },
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