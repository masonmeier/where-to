import React, { Component } from "react";
import LoadingPage from "components/pages/LoadingPage";
import { QuizContext } from "components/QuizProvider";
import ResultNavBar from "components/Structure/ResultNavBar";
import NavBar from "components/Structure/NavBar";
import "CSS/weatherPage.css";
import { remoteServerURL } from "components/QuizProvider";
import Signature from "components/Structure/Signature";

class ResultsPageWeather extends Component {
  static contextType = QuizContext;

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      temperatureSelection: "c",
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  //look into promise.all for multiple
  // fetch requests

  componentDidMount() {
    const capital = this.context.resultCountry.capital_city;
    fetch(`${remoteServerURL}/weather?q=` + capital)
      .then((res) => res.json())
      .then(
        (result) => {
          return result;
        },
        (error) => {
          throw error;
        }
      )
      .then((json) => this.setState({ loading: false, data: json }));
  }

  onChangeValue(e) {
    this.setState({ temperatureSelection: e.target.value });
  }

  renderWeather = (data) => {
    this.state.data.list.forEach((day) => (day.date = new Date(day.dt_txt)));

    const fiveDayForecast = this.state.data.list.filter(
      (day) => day.date.getHours() === 12
    );
    fiveDayForecast.forEach((day) => {
      day.main.tempC = Math.round((day.main.temp - 273.15) * 100) / 100;
      day.main.tempF = Math.round((day.main.tempC * 1.8 + 32) * 100) / 100;
    });

    return (
      <div className="results-page-weather">
        <fieldset onChange={this.onChangeValue}>
          <h2 className="weather-page-title">
            How's the weather in {this.context.resultCountry.capital_city}?
          </h2>
          <div className="conversion-toggle">
            <legend className="conversion-legend">Conversion°</legend>
            <div className="temp-holder">
              <input
                type="radio"
                id="celsius"
                name="radio-btn"
                className="temp-radio-btn"
                value="c"
                defaultChecked
              />
              <label className="temp-label-holder" htmlFor="celsius">
                C°
              </label>
            </div>
            <div className="temp-holder">
              <input
                type="radio"
                id="fahrenheit"
                name="radio-btn"
                className="temp-radio-btn"
                value="f"
              />
              <label className="temp-label-holder" htmlFor="fahrenheit">
                F°
              </label>
            </div>
          </div>
        </fieldset>
        <div className="five-day-forecast">
          {fiveDayForecast.map((day) => (
            <div className="daily-forecast" key={day.date}>
              <h2 className="date">{day.date.toDateString()}</h2>
              <div className="weather-icon-container">
                <img
                  alt="daily-weather-icon"
                  className="weather-image"
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`}
                />
              </div>
              <h3 className="cloud-coverage">{day.weather[0].description}</h3>
              {this.state.temperatureSelection === "c" ? (
                <h3>{day.main.tempC}°C</h3>
              ) : (
                <h3>{day.main.tempF}°F</h3>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  render() {
    const { loading, data } = this.state;
    return (
      <div className="weather-results">
        <NavBar />
        <ResultNavBar />
        {loading ? <LoadingPage /> : this.renderWeather(data)}
        <Signature />
      </div>
    );
  }
}

// function ResultsPage(props) {
//   return (
//     <div className="questionBody">
//       <h1>Results page text</h1>
//       <ResultsCalculator/>
//
//     </div>
//   );
// }
//
export default ResultsPageWeather;
