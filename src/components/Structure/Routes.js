import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "components/pages/LandingPage";
import QuestionStructure from "components/pages/questions/QuestionStructure";
import UserInput from "components/pages/questions/Input";
import ResultsPageNews from "components/pages/ResultsPageNews";
import ResultsCalculator from "components/pages/ResultsCalculator";
import ResultsPageStats from "components/pages/ResultsPageStats";
import ResultsPageWeather from "components/pages/ResultsPageWeather";

export default function Routes() {
  return (
    <>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/questions" component={QuestionStructure} />
      <Route exact path="/results" component={ResultsCalculator} />
      <Route exact path="/results/stats" component={ResultsPageStats} />
      <Route exact path="/results/news" component={ResultsPageNews} />
      <Route exact path="/results/weather" component={ResultsPageWeather} />
      <Route exact path="/input" component={UserInput} />
    </>
  );
}
