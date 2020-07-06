import React, {Component} from 'react';

class QuizProvider extends Component {
  state = {
    //answerValues is where the inputs from the user will be stored
    answerValues: [],

    //questionValues is the stored text for all of the questions we are rendering
    questionValues: [
      {
        text: "Your moms buck teeth",
        quality: "gdp_pc"
      },
      "stevie wonders drivers licence",
      "Dogs are soft"
    ],

    currentQuestion: 0,
  };

  //setQval pushes the user answer to the state array answervalues

  setQVal = (qVal) => {
    const answerVal = this.state.answerValues;
    answerVal.push(qVal);
    this.setState({answerValues: answerVal}, () => {
      console.log( "qVal", this.state);
    });
  };

  setQBody = () => {
    this.setState({currentQuestion: this.state.currentQuestion+1})
    };

  getCurrentQuestionNum = () => this.state.currentQuestion;
  getCurrentQuestionInfo = () => this.state.questionValues[this.getCurrentQuestionNum()];



  render() {
    return (
      <QuizContext.Provider
        value={{
          getCurrentQuestionNum: this.getCurrentQuestionNum,
          getCurrentQuestionInfo: this.getCurrentQuestionInfo,
          setQVal: this.setQVal,
          setQBody: this.setQBody,
          numberOfQuestions: this.state.questionValues.length,
        }}
      >
        {this.props.children}
      </QuizContext.Provider>
    )
  }
}

export default QuizProvider;

export const QuizContext = React.createContext();
