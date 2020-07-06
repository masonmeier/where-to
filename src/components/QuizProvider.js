import React, {Component} from 'react';
import Question1 from './pages/questions/question1';

class QuizProvider extends Component {
  state = {
    //answerValues is where the inputs from the user will be stored
    answerValues: [],

    //questionValues is the stored text for all of the questions we are rendering
    questionValues: []
  };

  //setQval pushes the user answer to the state array answervalues

  setQVal = (qVal) => {
    const answerVal = this.state.answerValues;
    answerVal.push(qVal);
    this.setState({answerValues: answerVal}, () => {
      console.log( "qVal", this.state);
    });
  };

  render() {
    return (
      <QuizContext.Provider
        value={{
          question1Val: this.state.question1Val,
          question2Val: this.state.question2Val,
          question3Val: this.state.question3Val,
          question4Val: this.state.question4Val,
          question5Val: this.state.question5Val,
          question6Val: this.state.question6Val,
          question7Val: this.state.question7Val,
          question8Val: this.state.question8Val,
          question9Val: this.state.question9Val,
          question10Val: this.state.question10Val,
          question11Val: this.state.question11Val,
          question12Val: this.state.question12Val,
          question13Val: this.state.question13Val,
          question14Val: this.state.question14Val,
          question15Val: this.state.question15Val,
          question16Val: this.state.question16Val,
          question17Val: this.state.question17Val,
          question18Val: this.state.question18Val,
          setQ1Val: this.setQ1Val,
          setQ2Val: this.setQ2Val

          //   handleClick: () => this.setState({
          //     stage: this.state.stage + 1
          //   })
        }}
      >
        {this.props.children}
      </QuizContext.Provider>
    )
  }
}

export default QuizProvider;

export const QuizContext = React.createContext();
