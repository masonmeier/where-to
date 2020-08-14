import React, {useContext} from 'react';
import ResultNavBar from '../Structure/ResultNavBar';
import {QuizContext} from '../QuizProvider';
import {useHistory} from 'react-router-dom';
import NavBar from '../Structure/NavBar';
import Title from '../Structure/Title';


const ResultsPageStats = (props) => {
  const quizContext = useContext(QuizContext);
  const result = quizContext.resultCountry;
  console.log(result, 'result items check');
  const countryFlag = require(`./images/flagssvg/${result.iso2}.svg`);
  return (
    <div className="resultsPage">
      <NavBar/>
      <Title/>
      <ResultNavBar/>
      <div className="resultsPageStats">
        <h1 className="statsHeader">{result.country}!</h1>
        <div className="flagHolder">
          <img className="flag" alt="country flag" src={countryFlag}/>
        </div>

        <h3 className="countryStatsHeader">Statistics</h3>
        <div className="nationalStats">
          <ul className="statsList">
            <li className="statsListItem">In {result.country} you can expect to make ${result.gdp_pc} USD annually.</li>
            <li className="statsListItem">At least {result.size_of_gov}% of the population works for the government.
            </li>
            <li className="statsListItem">{result.country} ranks {result.gpi_rank_inverse} out of 158 on the <a
              href="http://visionofhumanity.org/indexes/global-peace-index/" target="_blank">Global Peace Index</a>
            </li>
            <li className="statsListItem">At least {result.percentage_non_religious}% of people in this nation identify
              as non religious.
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResultsPageStats;

//
// <img className="flag" alt="country flag" src={require(`images/flagssvg/${result.iso2}.svg`)}/>;