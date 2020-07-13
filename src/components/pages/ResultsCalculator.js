import React, {useContext} from 'react';
import {QuizContext} from '../QuizProvider';
import CountryData from '../../SQLDatabase';

function ResultsCalculator(props) {
  const quizContext = useContext(QuizContext);
  const userAnswers = quizContext.answerValues;
  const countriesArray = quizContext.countriesArray;

  const GDPminRange = 0;
  const GDPmaxRange = 60000;

  const GPIminRange = 40;
  const GPImaxRange = 160;

  const countryScores = {};
  

  /**
   * converts a slider percentage 0-100 to a corresponding value in the table
   * @param percentValFromUser from the user
   * @param minValFromTable from the table
   * @param maxValFromTable from the table
   */
  function convertPercentToScore(percentValFromUser, minValFromTable, maxValFromTable) {
    return (maxValFromTable - minValFromTable) * (percentValFromUser / 100) + minValFromTable;
    // 0 + 300
    // (62100 - 300) + 300
    /*
      0 => 300
      100 => 62100
    */
  }

  function addResult(countryName) {
    if (countryScores.hasOwnProperty(countryName)) {
      countryScores[countryName]++;
    } else {
      countryScores[countryName] = 1;
    }
  }

  userAnswers.forEach(function (item, index) {
    console.log('userAnswers Sanity check', index, item);
  });


  //gdp logic
  function setGDPPCRange(gdppcNum, minRange, maxRange) {
    return gdppcNum >= minRange && gdppcNum <= maxRange;
  }

  const gdppcResult = countriesArray.filter(function (cData) {
    // console.log('cData check', cData.gdp_pc);
    return setGDPPCRange(cData.gdp_pc, GDPminRange, GDPmaxRange);
  });

  const addGDPPCResult = gdppcResult.forEach(function (country) {
    addResult(country.country);
  });

  console.log('GDPPC sanity Check', countryScores);


  // gpi logic
  function setGPIRange(gpiNum, minRange, maxRange) {
    return gpiNum >= minRange && gpiNum <= maxRange;
  }

  const GPIResult = countriesArray.filter(function (cData) {
    return setGPIRange(cData.gpi_rank, GPIminRange, GPImaxRange);
  });

  const addGPIResult = GPIResult.forEach(function (country) {
    addResult(country.country);
  });

  console.log('GPI sanity check', countryScores);


  return (
    <div>
      results calculator dummy text
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