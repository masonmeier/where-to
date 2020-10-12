import React, { useContext } from "react";
import { QuizContext } from "providers/QuizProvider";
import { getCountryData } from "api/quiz";
import SubmitPage from "components/pages/SubmitPage";

function ResultsCalculator(props) {
  const [countriesArray, setCountriesArray] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [result, setResult] = React.useState(null);
  const quizContext = useContext(QuizContext);

  React.useEffect(() => {
    // get sql data on component mount
    getCountryData()
      .then((countryData) => setCountriesArray(countryData))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  React.useEffect(() => {
    // when quizContext or countriesArray change, re-evaluate results
    // console.log('quiz data', quizContext);
    // console.log('sql data', countriesArray);

    if (countriesArray.length === 0) {
      return; // wait for sql data
    } else if (quizContext.resultCountry !== null) {
      //we have already calculated the result country at this point
      return;
    }

    const { questionValues } = quizContext;

    // map of country name -> country score
    const scoreMap = new Map(
      countriesArray.map((countryData) => [countryData.country, 0])
    );

    // increment(n) returns another function, which takes a Country Object from sql data & increments its score
    const increment = (n) => ({ country }) => {
      scoreMap.set(country, scoreMap.get(country) + n);
    };

    questionValues.forEach(({ quality, value }) => {
      // array of numeric Country Values from sql data for this question
      const countryValues = countriesArray.map((country) => country[quality]);
      const min = Math.min(...countryValues);
      const max = Math.max(...countryValues);

      if (isNaN(min) || isNaN(max)) {
        // data is missing for this quality, do not use it for calculations
        // console.error('missing country values for ' + quality);
        return;
      }

      const userPreference = (value / 100) * (max - min) + min;

      // sort the list of Country Objects from sql data by closest-to-user-preference
      const sortedByPreference = countriesArray.sort((a, b) => {
        const aDiff = Math.abs(userPreference - a[quality]);
        const bDiff = Math.abs(userPreference - b[quality]);
        return aDiff - bDiff;
      });

      // console.log('min', min, 'max', max, 'userPreference (' + value + '%)', userPreference);
      // console.log('question', quality, value);
      // console.log('sortedPreference', sortedByPreference);

      // increment best match by 2
      sortedByPreference.slice(0, 1).forEach(increment(2));

      // increment next 4 best matches by 1
      sortedByPreference.slice(1, 4).forEach(increment(1));
    });

    // sort the countries by highest score
    const sortedByScore = countriesArray.sort(
      ({ country: a }, { country: b }) => {
        return scoreMap.get(b) - scoreMap.get(a);
      }
    );

    const resultCountryData = sortedByScore[0];

    quizContext.updateProviderResult(resultCountryData);
    setResult(resultCountryData);
  }, [quizContext, countriesArray]);
  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>An error occurred fetching the data.</div>;
  }

  return (
    <div className="resultsPage">
      <SubmitPage result={result} />
    </div>
  );
}

export default ResultsCalculator;
