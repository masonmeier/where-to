import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, {useContext, useState} from 'react';
import '../../CSS/formPage.css';
import {QuizContext} from '../QuizProvider';


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

  submitUserData = () => {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: 'User Input Submission',
        guessInput: this.state.guessInput,
        nameText: this.state.nameText
      })
    };
    fetch('http://localhost:3000', requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          return result;
        },
        (error) => {
          throw error;
        }
      );
  };

  render() {
    let quizContext = this.context;
    return (
      <div className="formHolder">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>What's your name?</Form.Label>
            <Form.Control
              onChange={(e) => {
                this.setState({nameText: e.target.value});
              }}
              type="text"
              placeholder="Enter Your Name"/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
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
              label="share location data"/>
          </Form.Group>
          <Button
            onClick={() => {
              this.state.loadPage();
              quizContext.getGeoLocation();
            }}
            disabled={!this.state.checked || this.state.guessInput.length === 0 || this.state.nameText.length === 0}
            variant="primary"
            // type="submit"
          >
            Submit
          </Button>

          <Form.Text className="text-muted">
            Location is collected for custom results and is not stored
          </Form.Text>
        </Form>
      </div>
    );
  }

}

export default ResultsForm;