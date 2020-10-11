import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import QuestionStructure from "../pages/questions/QuestionStructure";
import UserInput from "../pages/questions/Input";
import ResultsPageNews from "../pages/ResultsPageNews";
import ResultsCalculator from "../pages/ResultsCalculator";
import ResultsPageStats from "../pages/ResultsPageStats";
import ResultsPageWeather from "../pages/ResultsPageWeather";

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
