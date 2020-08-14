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

  componentDidMount() {
    const quizContext = this.context;
    console.log(quizContext, 'a');
  }

  //
  // // const quizContext = useContext(QuizContext);
  // // const getUserGeoLocationDetails = quizContext.getGeoLocation;

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
            <Form.Text className="text-muted">
              This data is to provide custom results
            </Form.Text>
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
        </Form>
      </div>
    );
  }

}

export default ResultsForm;