// // make React available
import React from 'react';
import ReactDOM from 'react-dom';
// //import tested components start
import LandingPage from '../components/pages/LandingPage';
import ResultsForm from '../components/pages/ResultsForm';
import ResultsPageNews from '../components/pages/ResultsPageNews';
import ResultsPageStats from '../components/pages/ResultsPageStats';
import ResultsPageWeather from '../components/pages/ResultsPageWeather';
import SubmitPage from '../components/pages/SubmitPage';
// //question structure
import UserInput from '../components/pages/questions/Input';
import QuestionBody from '../components/pages/questions/QuestionBody';
import QuestionStructure from '../components/pages/questions/QuestionStructure';
import QuizProvider from '../providers/QuizProvider';
// //general structure
import NavBar from '../components/structure/NavBar';
import ResultNavBar from '../components/structure/ResultNavBar';

// //NavBar
it('renders NavBar without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <QuizProvider>
      <NavBar/>
    </QuizProvider>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});
// //QuestionStructure
it('renders QuestionStructure without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <QuizProvider>
      <QuestionStructure/>
    </QuizProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
//QuestionBody
it('renders QuestionBody without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <QuizProvider>
      <QuestionBody/>
    </QuizProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
// //UserInput
it('renders UserInput without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <QuizProvider>
      <UserInput/>
    </QuizProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
// //SubmitPage
it('renders SubmitPage without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <QuizProvider>
      <SubmitPage/>
    </QuizProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
// //ResultsForm
it('renders ResultsForm without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <QuizProvider>
      <ResultsForm/>
    </QuizProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

//Result object dependent tests below

//ResultNavBar
it('renders ResultNavBar without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <QuizProvider>
      <ResultNavBar/>
    </QuizProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

//ResultsPageNews
it('renders ResultsPageNews without crashing', () => {
  const div = document.createElement('div');
  const resultCountry = {
    country: 'London'
  };
  ReactDOM.render(
    <QuizProvider resultCountry={resultCountry}>
      <ResultsPageNews/>
    </QuizProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
// //ResultsPageStats
it('renders ResultsPageStats without crashing', () => {
  const div = document.createElement('div');
  const resultCountry = {
    country: 'London',
    size_of_gov: '1',
    gdp_pc: '1',
    iso2: 'ad',
  };
  ReactDOM.render(
    <QuizProvider resultCountry={resultCountry}>
      <ResultsPageStats/>
    </QuizProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
// //ResultsPageWeather
it('renders ResultsPageWeather without crashing', () => {
  const div = document.createElement('div');
  const resultCountry = {
    country: 'London',
    size_of_gov: '1',
    gdp_pc: '1',
    iso2: 'ad',
  };
  ReactDOM.render(
    <QuizProvider resultCountry={resultCountry}>
      <ResultsPageWeather/>
    </QuizProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
//LandingPage
it('renders LandingPage without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <QuizProvider>
      <LandingPage/>
    </QuizProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});