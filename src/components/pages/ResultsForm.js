import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from 'react';
import '../../CSS/formPage.css';
import {QuizContext} from '../QuizProvider';
import Signature from '../Structure/Signature';


class ResultsForm extends React.Component {
  static contextType = QuizContext;

  constructor(props) {
    super(props);
    this.state = {
      loadPage: props.getLoadingPage,
      checked: true,
      setChecked: true,
      guessInput: '',
      nameText: '',

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
  //       nameText: this.state.nameText
  //     })
  //   };
  //   fetch(remoteServerURL, requestOptions)
  //     .then(res => res.json())
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
        <div className="form-holder">
          <Form classname="submission-form">
            <Form.Group classname='name-submission-group'>
              <Form.Label>What's your name?</Form.Label>
              <Form.Control
                onChange={(e) => {
                  this.setState({nameText: e.target.value});
                }}
                type="text"
                placeholder="Enter Your Name"/>
            </Form.Group>

            <Form.Group className="guess-submission-group">
              <Form.Label>What country do you think you will get?</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Guess"
                onChange={(e) => {
                  this.setState({guessInput: e.target.value});
                }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                checked={this.state.checked}
                onChange={this.setCheck}
                type="checkbox"
                label="I accept that my name and guess will be saved"/>
            </Form.Group>
            <Button
              className="submit-button"
              onClick={() => {
                this.state.loadPage();
              }}
              disabled={this.state.guessInput.length === 0 || this.state.nameText.length === 0}
              variant="primary"
              // type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
        <div className="submit-image-holder">
          <img className="submit-image" alt="submission" src={require('../pages/images/lpimages/7561-planet2.gif')}/>
        </div>
        <Signature/>
      </div>

    );
  }

}

export default ResultsForm;