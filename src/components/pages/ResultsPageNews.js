import React, {useContext} from 'react';
import ResultNavBar from '../Structure/ResultNavBar';
import NewsInformation from './ResultInformation/NewsInformation';
import {QuizContext} from '../QuizProvider';
import NavBar from '../Structure/NavBar';
import Title from '../Structure/Title';


//use context, using context, this is an example of using context in a functional component
const ResultsPageNews = (props) => {
  const quizContext = useContext(QuizContext);
  const result = quizContext.resultCountry;
  return (
    <div className="resultsPage">
      <NavBar/>
      <Title/>
      <ResultNavBar/>
      <div className="resultsPageNews">
        <h3 className="newsHeader">News From <br/>{result.country}</h3>
        <NewsInformation result={result.country}/>
      </div>
    </div>
  );
};

export default ResultsPageNews;