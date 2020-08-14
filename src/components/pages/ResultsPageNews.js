import React, {useContext} from 'react';
import ResultNavBar from '../Structure/ResultNavBar';
import NewsInformation from './ResultInformation/NewsInformation';
import {QuizContext} from '../QuizProvider';
import NavBar from '../Structure/NavBar';
import Title from '../Structure/Title';

const ResultsPageNews = (props) => {
  const quizContext = useContext(QuizContext);
  const result = quizContext.resultCountry;
  console.log('result iso2 sanity check', result.iso2);
  return (
    <div className="resultsPage">
      <NavBar/>
      <Title/>
      <div className="resultsPageNews">
        <ResultNavBar/>
        <h3 className="newsHeader">News From <br/>{result.country}</h3>
        <NewsInformation result={result.country}/>
      </div>
    </div>
  );
};

export default ResultsPageNews;