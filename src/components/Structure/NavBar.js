import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import { QuizContext } from "components/QuizProvider";
import titleimage from "components/pages/images/lpimages/title.png";

const NavBar = (props) => {
  const quizContext = useContext(QuizContext);
  const quizReset = quizContext.resetQuestionValues;
  let history = useHistory();
  const restart = () => {
    quizReset();
    history.push("/");
  };

  return (
    <div className="navBar">
      <header id="nav" className="sticky-nav">
        <nav className="w-container">
          <ul className="nav-grid">
            <li id="w-node-ded4bd0810a5-d3ab1131" className="logo-image-mask">
              <img
                src={titleimage}
                width="80"
                height="80"
                alt="title"
                className="nav-logo"
              />
            </li>
            <li>
              <p className="nav-link">Contact</p>
            </li>
            <li className="restart-container">
              <p onClick={restart} className="button w-button">
                Restart Quiz
              </p>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
