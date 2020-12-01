import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { QuizContext } from "providers/QuizProvider";

const ResultNavBar = (props) => {
  const quizContext = useContext(QuizContext);
  let history = useHistory();
  const viewStats = () => {
    history.push("/results/stats");
  };
  const viewNews = () => {
    history.push("/results/news");
  };
  const viewWeather = () => {
    history.push("/results/weather");
  };
  const capital = quizContext.resultCountry.capital_city;
  const isoTwo = quizContext.resultCountry.iso2;

  return (
    <nav className="nav-header">
      <button className="result-nav-link" onClick={viewStats}>
        <h2 className="resultNavLinkText">
          Statistics
        </h2>
      </button>
      <button className="result-nav-link" onClick={viewNews}>
        <h2 className="resultNavLinkText">
          News
        </h2>
      </button>
      <button className="result-nav-link" onClick={viewWeather}>
        <h2 className="resultNavLinkText">
          Weather
        </h2>
      </button>
      {/*<Nav.Item className="resultNavLink">*/}
      {/*  <Nav.Link className="resultNavLinkText" onClick={viewNews}>*/}
      {/*    News*/}
      {/*  </Nav.Link>*/}
      {/*</Nav.Item>*/}
      {/*<Nav.Item className="resultNavLink">*/}
      {/*  <Nav.Link className="resultNavLinkText" onClick={viewWeather}>*/}
      {/*    Weather*/}
      {/*  </Nav.Link>*/}
      {/*</Nav.Item>*/}
      {/*<Nav.Item className="resultNavLink">*/}
    </nav>
  );
};

export default ResultNavBar;
