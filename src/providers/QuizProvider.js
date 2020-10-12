import React, { Component } from "react";
import questionValues from "providers/questionValues";

class QuizProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      getCurrentQuestionNum: this.getCurrentQuestionNum,
      getCurrentQuestionObj: this.getCurrentQuestionObj,
      setQVal: this.setQVal,
      setQBody: this.setQBody,
      getUserAnswers: this.getUserAnswers,
      updateProviderResult: this.updateProviderResult,
      resetQuestionValues: this.resetQuestionValues,
      getBestMatches: this.getBestMatches,

      //answerValues is where the inputs from the user will be stored
      answerValues: [],

      //questionValues is the stored text for all of the questions we are rendering
      questionValues,

      currentQuestionIndex: 0,
      resultCountry: null,
      bestMatches: null,
    };
  }

  updateProviderResult = (countryObject) => {
    //this function takes in the country object and saves it to provider state
    this.setState({ resultCountry: countryObject });
  };
  //add a thing that allows us to compare peoples current country to their desired country.

  //setQval pushes the user answer to the state array answervalues

  setQVal = (qVal) => {
    const answerVal = this.state.answerValues;
    answerVal.push(qVal);
    this.setState({ answerValues: answerVal }, () => {});
  };

  setQBody = () => {
    this.setState({
      currentQuestionIndex: this.state.currentQuestionIndex + 1,
    });
  };

  getCurrentQuestionNum = () => this.state.currentQuestionIndex;
  getCurrentQuestionObj = () =>
    this.state.questionValues[this.getCurrentQuestionNum()];
  getUserAnswers = () => this.state.answerValues;

  resetQuestionValues = () =>
    this.setState({ currentQuestionIndex: 0, answerValues: [] });

  // getBestMatches = (questionNum) => this.setState({bestMatches: questionNum});

  render() {
    return (
      <QuizContext.Provider value={this.state}>
        {this.props.children}
      </QuizContext.Provider>
    );
  }
}

export default QuizProvider;
export const QuizContext = React.createContext();
// export const remoteServerURL = "https://where-to.world/backend";
export const remoteServerURL = "http://localhost:3002";
console.log(process.env.NODE_ENV, "node env test");
