import React from 'react';
import 'styles/formPage.css';
import {QuizContext} from 'providers/QuizProvider';
import Signature from 'components/structure/Signature';
import NavBar from '../structure/NavBar';

class ResultsForm extends React.Component {
  static contextType = QuizContext;

  constructor(props) {
    super(props);
    this.state = {
      loadPage: props.getLoadingPage,
    };
    this.setCheck = this.setCheck.bind(this);
  }

  setCheck() {
    this.setState({checked: !this.state.checked});
  }

  //to-do: create user data submission

  // submitUserData = () => {
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //       title: 'User Input Submission',
  //       guessInput: this.state.guessInput,
  //       nameText: this.state.nameText,
  //     }),
  //   };
  //   fetch(`${remoteServerURL}/submit`, requestOptions)
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         return result;
  //       },
  //       (error) => {
  //         throw error;
  //       }
  //     );
  // };

  render() {
    return (
      <div className="form-page">
        <div className="submit-image-holder">
          <img
            className="submit-image"
            alt="submission"
            src={require('images/lpimages/7561-planet2.gif')}
          />
        </div>
        <div className="form-holder">
          <button
            className="submit-button"
            onClick={() => {
              this.state.loadPage();
            }}
            // type="submit"
          >
            Get Results
          </button>
        </div>
        <Signature/>
      </div>
    );
  }
}

export default ResultsForm;
