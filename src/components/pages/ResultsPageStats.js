import React, { useContext } from "react";
import ResultNavBar from "components/structure/ResultNavBar";
import { QuizContext } from "components/QuizProvider";
import NavBar from "components/structure/NavBar";
import "styles/resultsPage.css";
import Signature from "components/structure/Signature";

const ResultsPageStats = (props) => {
  const quizContext = useContext(QuizContext);
  const result = quizContext.resultCountry;
  const countryFlag = require(`images/flagssvg/${result.iso2}.svg`);
  return (
    <div className="results-page">
      <NavBar />
      <ResultNavBar />
      <div className="stats-header-holder">
        <h1 className="stats-header">
          Your closest matching nation is {result.country}!
        </h1>
      </div>
      <div className="national-flag-holder">
        <img className="national-flag" alt="country flag" src={countryFlag} />
      </div>
      <div className="result-page-stats">
        <h3 className="country-stats-header">Statistics</h3>
        <div className="national-stats">
          <ul className="stats-list">
            <li className="stats-list-item">
              In {result.country} you can expect to make ${result.gdp_pc} USD
              annually.
            </li>
            <li className="stats-list-item">
              At least {result.size_of_gov}% of the population works for the
              government.
            </li>
            <li className="stats-list-item">
              {result.country} ranks {result.gpi_rank_inverse} out of 158 on the{" "}
              <a
                href="http://visionofhumanity.org/indexes/global-peace-index/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Global Peace Index
              </a>
            </li>
            <li className="stats-list-item">
              At least {result.percentage_non_religious}% of people in this
              nation identify as non religious.
            </li>
          </ul>
        </div>
      </div>
      <Signature />
    </div>
  );
};

export default ResultsPageStats;
