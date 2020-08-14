import React, {Component, useState} from 'react';
import questionValues from './questionValues';


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

      getGeoLocation: this.getUserGeoLocationDetails,
      details: null,
      setDetails: null,

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
    this.setState({resultCountry: countryObject});
  };
  //add a thing that allows us to compare peoples current country to their desired country.


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

  getUserGeoLocationDetails = () => {

    fetch('https://geolocation-db.com/json/697de680-a737-11ea-9820-af05f4014d91')
      .then(response => response.json())
      .then(data => {
        this.setState({setDetails: data});
        console.log(this.state.setDetails, 'details sanity check');
      });
  };

  getCurrentQuestionNum = () => this.state.currentQuestionIndex;
  getCurrentQuestionObj = () => this.state.questionValues[this.getCurrentQuestionNum()];
  getUserAnswers = () => this.state.answerValues;

  resetQuestionValues = () => this.setState({currentQuestionIndex: 0, answerValues: []});

  // getBestMatches = (questionNum) => this.setState({bestMatches: questionNum});

  render() {
    console.log(JSON.stringify(this.state), 'gimme dat shit boi');
    console.log('quizprovider render check');
    return (
      <QuizContext.Provider
        value={this.state}
        // delete from here down
        // value={{
        //   'answerValues': [{
        //     'text': 'How important is it that you make as much money as possible?',
        //     'quality': 'gdp_pc',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Not Important',
        //     'rightVal': 'Very Important',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'economic'
        //   }, {
        //     'text': 'It is important to you that the government you live under values peace.',
        //     'quality': 'gpi_rank_inverse',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Not Important',
        //     'rightVal': 'Very Important',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'social'
        //   }, {
        //     'text': 'It is important that you live in a nation with as few religious people as possible.',
        //     'quality': 'percentage_non_religious',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Not Important',
        //     'rightVal': 'Very Important',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'social'
        //   }, {
        //     'text': 'You want everyone you have ever met to be happy.',
        //     'quality': 'happiness_score',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'social'
        //   }, {
        //     'text': 'Your children must have access to the worlds most prestigious universities.',
        //     'quality': 'top_100_universities',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Not Important',
        //     'rightVal': 'Very Important',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'education'
        //   }, {
        //     'text': 'It is important that as many people complete college as possible.',
        //     'quality': 'collegiate_completion_rate_top_4',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Not Important',
        //     'rightVal': 'Very Important',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'education'
        //   }, {
        //     'text': 'It is important that as many people graduate high school as possible.',
        //     'quality': 'high_school_completion_rate',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Not Important',
        //     'rightVal': 'Very Important',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'education'
        //   }, {
        //     'text': 'Education should focus on preparing you for the work force.',
        //     'quality': 'top_rated_overall_education',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'education'
        //   }, {
        //     'text': 'You enjoy very spicy food.',
        //     'quality': 'spiciest_food',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'social'
        //   }, {
        //     'text': 'You want to live in a nation with strong socialist representation in government.',
        //     'quality': 'communist_nation',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'political'
        //   }, {
        //     'text': 'You want to live where it is hot.',
        //     'quality': 'most_temperate_nations',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'environment'
        //   }, {
        //     'text': 'You want to live where it is cold.',
        //     'quality': 'coldest_nations',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'environment'
        //   }, {
        //     'text': 'You want to live near the beach.',
        //     'quality': 'best_beaches',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'environment'
        //   }, {
        //     'text': 'People are generally responsible enough to determine how their money should be used.',
        //     'quality': 'highest_economic_freedom',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'economic'
        //   }, {
        //     'text': 'Your internet connection needs to be...',
        //     'quality': 'best_internet_infrastructure',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Somewhat Reliable',
        //     'rightVal': 'Always Reliable',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'economic'
        //   }, {
        //     'text': 'You want to live somewhere with a lot of people in one place.',
        //     'quality': 'high_pop_density',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'environment'
        //   }, {
        //     'text': 'The government should buy into and subsidize the economy.',
        //     'quality': 'gov_subsidies_percentage',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'economic'
        //   }, {
        //     'text': 'The rich should be heavily taxed.',
        //     'quality': 'top_margin_tax_rate',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'economic'
        //   }, {
        //     'text': 'The government should own property and financial assets.',
        //     'quality': 'state_asset_ownership',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'economic'
        //   }, {
        //     'text': 'The government should provide as many jobs as possible.',
        //     'quality': 'size_of_gov',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'political'
        //   }, {
        //     'text': 'The court system should be impartial and un influenced by politics.',
        //     'quality': 'judicial_independence',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'political'
        //   }, {
        //     'text': 'The military should assist in policing the population.',
        //     'quality': 'law_enf_mil_interference',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'political'
        //   }, {
        //     'text': 'The government should regulate the sale of properties.',
        //     'quality': 'prop_sale_reg',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Less Regulation',
        //     'rightVal': 'More Regulation',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'economic'
        //   }, {
        //     'text': 'Law enforcement should be a highly trained and well paid organization.',
        //     'quality': 'police_reliability',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'political'
        //   }, {
        //     'text': 'Imports and exports need to be heavily taxed.',
        //     'quality': 'foreign_trade_tariff',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'political'
        //   }, {
        //     'text': 'There should be regulations determining when someone can or cannot be fired.',
        //     'quality': 'hiring_firing_reg',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'economic'
        //   }],
        //   'questionValues': [{
        //     'text': 'How important is it that you make as much money as possible?',
        //     'quality': 'gdp_pc',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Not Important',
        //     'rightVal': 'Very Important',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'economic'
        //   }, {
        //     'text': 'It is important to you that the government you live under values peace.',
        //     'quality': 'gpi_rank_inverse',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Not Important',
        //     'rightVal': 'Very Important',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'social'
        //   }, {
        //     'text': 'It is important that you live in a nation with as few religious people as possible.',
        //     'quality': 'percentage_non_religious',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Not Important',
        //     'rightVal': 'Very Important',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'social'
        //   }, {
        //     'text': 'You want everyone you have ever met to be happy.',
        //     'quality': 'happiness_score',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'social'
        //   }, {
        //     'text': 'Your children must have access to the worlds most prestigious universities.',
        //     'quality': 'top_100_universities',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Not Important',
        //     'rightVal': 'Very Important',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'education'
        //   }, {
        //     'text': 'It is important that as many people complete college as possible.',
        //     'quality': 'collegiate_completion_rate_top_4',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Not Important',
        //     'rightVal': 'Very Important',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'education'
        //   }, {
        //     'text': 'It is important that as many people graduate high school as possible.',
        //     'quality': 'high_school_completion_rate',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Not Important',
        //     'rightVal': 'Very Important',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'education'
        //   }, {
        //     'text': 'Education should focus on preparing you for the work force.',
        //     'quality': 'top_rated_overall_education',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'education'
        //   }, {
        //     'text': 'You enjoy very spicy food.',
        //     'quality': 'spiciest_food',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'social'
        //   }, {
        //     'text': 'You want to live in a nation with strong socialist representation in government.',
        //     'quality': 'communist_nation',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'political'
        //   }, {
        //     'text': 'You want to live where it is hot.',
        //     'quality': 'most_temperate_nations',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'environment'
        //   }, {
        //     'text': 'You want to live where it is cold.',
        //     'quality': 'coldest_nations',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'environment'
        //   }, {
        //     'text': 'You want to live near the beach.',
        //     'quality': 'best_beaches',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'environment'
        //   }, {
        //     'text': 'People are generally responsible enough to determine how their money should be used.',
        //     'quality': 'highest_economic_freedom',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'economic'
        //   }, {
        //     'text': 'Your internet connection needs to be...',
        //     'quality': 'best_internet_infrastructure',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Somewhat Reliable',
        //     'rightVal': 'Always Reliable',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'economic'
        //   }, {
        //     'text': 'You want to live somewhere with a lot of people in one place.',
        //     'quality': 'high_pop_density',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'environment'
        //   }, {
        //     'text': 'The government should buy into and subsidize the economy.',
        //     'quality': 'gov_subsidies_percentage',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'economic'
        //   }, {
        //     'text': 'The rich should be heavily taxed.',
        //     'quality': 'top_margin_tax_rate',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'economic'
        //   }, {
        //     'text': 'The government should own property and financial assets.',
        //     'quality': 'state_asset_ownership',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'economic'
        //   }, {
        //     'text': 'The government should provide as many jobs as possible.',
        //     'quality': 'size_of_gov',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'political'
        //   }, {
        //     'text': 'The court system should be impartial and un influenced by politics.',
        //     'quality': 'judicial_independence',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'political'
        //   }, {
        //     'text': 'The military should assist in policing the population.',
        //     'quality': 'law_enf_mil_interference',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'political'
        //   }, {
        //     'text': 'The government should regulate the sale of properties.',
        //     'quality': 'prop_sale_reg',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Less Regulation',
        //     'rightVal': 'More Regulation',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'economic'
        //   }, {
        //     'text': 'Law enforcement should be a highly trained and well paid organization.',
        //     'quality': 'police_reliability',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'political'
        //   }, {
        //     'text': 'Imports and exports need to be heavily taxed.',
        //     'quality': 'foreign_trade_tariff',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'political'
        //   }, {
        //     'text': 'There should be regulations determining when someone can or cannot be fired.',
        //     'quality': 'hiring_firing_reg',
        //     'inputType': 'range',
        //     'inputReference': 'qSlider',
        //     'leftVal': 'Strongly Disagree',
        //     'rightVal': 'Strongly Agree',
        //     'className': 'sliderInput',
        //     'value': 50,
        //     'visual': 'economic'
        //   }],
        //   'currentQuestionIndex': 26,
        //   'resultCountry': {
        //     'index': '50',
        //     'iso': 'GBR',
        //     'iso2': 'gb',
        //     'gdp_pc': '34800',
        //     'gpi_rank_inverse': '130',
        //     'percentage_non_religious': '33.75',
        //     'country': 'United Kingdom',
        //     'happiness_score': '6.714',
        //     'top_100_universities': '2',
        //     'collegiate_completion_rate_top_4': '4',
        //     'high_school_completion_rate': '4',
        //     'top_rated_overall_education': '0',
        //     'spiciest_food': '0',
        //     'communist_nation': '0',
        //     'most_temperate_nations': '0',
        //     'coldest_nations': '5',
        //     'best_beaches': '0',
        //     'highest_economic_freedom': '8.09',
        //     'best_internet_infrastructure': '0',
        //     'high_pop_density': '2',
        //     'gov_subsidies_percentage': '5.48',
        //     'top_margin_tax_rate': '6',
        //     'state_asset_ownership': '6',
        //     'size_of_gov': '6.21',
        //     'judicial_independence': '8.56',
        //     'law_enf_mil_interference': '10',
        //     'prop_sale_reg': '8.02',
        //     'police_reliability': '8.31',
        //     'foreign_trade_tariff': '8.23',
        //     'hiring_firing_reg': '6.9'
        //   }
        // }}
        // //delete from here up
      >
        {this.props.children}
      </QuizContext.Provider>
    );
  }
}

export default QuizProvider;

export const QuizContext = React.createContext();
