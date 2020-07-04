import React, {Component} from 'react';
import Question1 from './pages/questions/question1';

class QuizProvider extends Component {
  state = {
    question1Val: '',
    question2Val: '',
    question3Val: '',
    question4Val: '',
    question5Val: '',
    question6Val: '',
    question7Val: '',
    question8Val: '',
    question9Val: '',
    question10Val: '',
    question11Val: '',
    question12Val: '',
    question13Val: '',
    question14Val: '',
    question15Val: '',
    question16Val: '',
    question17Val: '',
    question18Val: '',
  };

  setQ1Val = (q1Val) => {
    this.setState({question1Val: q1Val}, () => {
      console.log( "q1 Val", this.state.question1Val);
  });
  };

  setQ2Val = (q2Val) => {
    this.setState({question2Val: q2Val}, () => {
      console.log("q2 Val", this.state.question2Val);
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
