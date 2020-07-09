import React, {Component} from 'react';

class QuizProvider extends Component {
  //add a thing that allows us to compare peoples current country to their desired country.
  state = {
    //answerValues is where the inputs from the user will be stored
    answerValues: [],

    //questionValues is the stored text for all of the questions we are rendering
    questionValues: [
      {
        text: 'How important is it that you make as much money as possible',
        quality: 'gdp_pc',
        inputType: 'range',
        inputReference: 'qSlider',
        leftVal: 'Not Important',
        rightVal: 'Very Important',
        className: 'sliderInput'
      },
      {
        text: 'It is important to me that the government I live under values peace above all things.',
        quality: 'gpi_rank',
        inputType: 'range',
        inputReference: 'qSlider',
        leftVal: 'Not Important',
        rightVal: 'Very Important',
        className: 'sliderInput'
      },
      {
        text: 'It is important that I live in a nation with as few religious people as possible.',
        quality: 'percentage_non_religious',
        inputType: 'range',
        inputReference: 'qSlider',
        leftVal: 'Not Important',
        rightVal: 'Very Important',
        className: 'sliderInput'
      },
      {
        text: 'I want everyone around me to be as happy as possible.',
        quality: 'Happiness score',
        inputType: '',
        inputReference: 'qSlider',
        leftVal: 'Not Important',
        rightVal: 'Very Important',
        className: 'sliderInput'
      },

    ],
    currentQuestionIndex: 0,
  };

  //setQval pushes the user answer to the state array answervalues

  setQVal = (qVal) => {
    const answerVal = this.state.answerValues;
    answerVal.push(qVal);
    this.setState({answerValues: answerVal}, () => {
    });
  };

  setQBody = () => {
    this.setState({currentQuestionIndex: this.state.currentQuestionIndex + 1});
  };

  getCurrentQuestionNum = () => this.state.currentQuestionIndex;
  getCurrentQuestionObj = () => this.state.questionValues[this.getCurrentQuestionNum()];
  getUserAnswers = () => this.state.answerValues;

  render() {
    console.log('quizProvider sanity check', this.state.questionValues.inputType);
    return (
      <QuizContext.Provider
        value={{
          getCurrentQuestionNum: this.getCurrentQuestionNum,
          getCurrentQuestionObj: this.getCurrentQuestionObj,
          setQVal: this.setQVal,
          setQBody: this.setQBody,
          numberOfQuestions: this.state.questionValues.length,
          referenceType: this.state.questionValues.referenceType,
          getUserAnswers: this.getUserAnswers,
        }}
      >
        {this.props.children}
      </QuizContext.Provider>
    );
  }
}

export default QuizProvider;

export const QuizContext = React.createContext();
