// make React available
import React from "react";
import ReactDOM from "react-dom";
//import tested components start
import App from "../App";
//pages
import Error from '../components/pages/error';
import LoadingPage from '../components/pages/LoadingPage';
import ResultsCalculator from '../components/pages/ResultsCalculator';
import Signature from '../components/structure/Signature';
//import tested component end

//App
it("renders App without crashing", () => {
  const div = document.createElement("div");
   ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//Error
it("renders Error without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Error />, div);
  ReactDOM.unmountComponentAtNode(div);
});
//LoadingPage
it("renders LoadingPage without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LoadingPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
//ResultsCalculator
it("renders ResultsCalculator without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ResultsCalculator />, div);
  ReactDOM.unmountComponentAtNode(div);
});
//Signature
it("renders Signature without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Signature  />, div);
  ReactDOM.unmountComponentAtNode(div);
});
