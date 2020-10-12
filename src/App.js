import React from "react";
import { BrowserRouter } from "react-router-dom";
import QuizProvider from "components/QuizProvider";
import Routes from "components/Structure/Routes";

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
