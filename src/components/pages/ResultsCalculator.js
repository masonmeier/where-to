import React, {useContext} from 'react';
import {QuizContext} from '../QuizProvider';
import CountryData from '../../SQLDatabase';

function ResultsCalculator(props) {
  const quizContext = useContext(QuizContext);
  const userAnswers = quizContext.answerValues;
  const countriesArray = quizContext.countriesArray;
  // const cDataISO = countryData.map(a => a.iso);
  // const cDataCountry = countryData.map(a => a.country);
  // const cDatagdp_pc = countryData.map(a => a.gdp_pc);
  // const cDatagpi = countryData.map(a => a.gpi_rank);
  // const cDataPNR = countryData.map(a => a.percentage_non_religious);
  // const cDataHapScor = countryData.map(a => a.happiness_score);
  // const cDataTop100U = countryData.map(a => a.top_100_universities);
  // const cDataColComp = countryData.map(a => a.collegiate_completion_rate_top_);
  // const cDataHiComp = countryData.map(a => a.high_school_completion_rate);
  // const cDataTopEd = countryData.map(a => a.top_rated_overall_education);
  // const cDataSpiceyFood = countryData.map(a => a.spiciest_food);
  // const cDataComNat = countryData.map(a => a.communist_nation);
  // const cDataMostTemp = countryData.map(a => a.most_temperate_nations);
  // const cDataColdest = countryData.map(a => a.coldest_nations);
  // const cDataBestBeach = countryData.map(a => a.best_beaches);
  // const cDataEcFree = countryData.map(a => a.high_economic_freedom);
  // const cDataBestHealth = countryData.map(a => a.best_health_care);
  // const cDataBestInternet = countryData.map(a => a.best_internet_infrastructure);
  // const cDataHighestDensity = countryData.map(a => a.highest_pop_density);
  // const cDataLeastCor = countryData.map(a => a.least_corrupt);

  // console.log('countriesArray check', countriesArray);
  // const minRange = 30000;
  // const maxRange = 60000;


  // function setGDPPCRange(countries, minimumRange, maximumRange) {
  //   return countries.gdp_pc >= minRange && countries.gdp_pc <= maxRange;
  // }

  // const gdppcResult = countriesArray.filter(function (cData) {
  //   return setGDPPCRange(countriesArray.gdp_pc, minRange, maxRange);
  // });

  // console.log('gdp result check', gdppcResult);


  // console.log('compare gdp', gdppcResult);

  // countriesArray.forEach(function (item, index) {
  //   console.log('country data sanity check', item, index);
  // });

  // userAnswers.forEach(function (item, index) {
  //   console.log('userAnswers Sanity check', index, item);
  // });

  return (
    <div>
      your mom
    </div>
  );

}


export default ResultsCalculator;


// determineCountry = (userAnswers, countriesArray) = {
//   //numeric values for each answer
//   //tethered to an array position
//   //for each question set logic for the comparison operation
//   //compare numeric data with one index position and another from other table
//
// };
//
// // take the array of user answers and compare it to a sql database of values
// // ensure that each array object is paired to the correct sql value location
// // DO MATH