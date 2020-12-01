import React from "react";
import { BrowserRouter } from "react-router-dom";
import QuizProvider from "providers/QuizProvider";
import Routes from "components/structure/Routes";
import ResultsForm from './components/pages/ResultsForm';


function App() {
  return (
    <BrowserRouter>
      <QuizProvider>
        <Routes />
      </QuizProvider>
    </BrowserRouter>
  );
}

export default App;
