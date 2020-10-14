import React, {Component} from 'react';
import LoadingPage from 'components/pages/LoadingPage';
import {remoteServerURL} from 'constants/index';
import {QuizContext} from 'providers/QuizProvider';
import 'styles/resultsPage.css';
import NavBar from 'components/structure/NavBar';
import ResultNavBar from 'components/structure/ResultNavBar';

class ResultsPageNews extends Component {
  static contextType = QuizContext;

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      title: null,
      urlToImage: null,
      url: null,
      country: null,
    };
  }

  componentDidMount() {
    this.setState({
      country: this.context.resultCountry.country,
    });

    fetch(`${remoteServerURL}/news?q=` + this.context.resultCountry.country)
      .then((res) => res.json())
      .then(
        (result) => {
          return result;
        },
        (error) => {
          throw error;
        }
      )
      .then((json) => this.setState({loading: false, data: json}))
      .catch(console.log);
  }

  renderList = (data) => {
    return (
      <div className="news-container">
        <div className="news-page">
          <h2 className="news-page-header">News from {this.state.country}</h2>
          <ul className="related-news">
            {data.articles.map((item) => (
              <li className="news-list-item" key={item.url}>
                <div className="news-article">
                  <div className="article-text-holder">
                    <a
                      className="article-text"
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </a>
                  </div>
                  <img
                    alt="News Story"
                    className="news-article-image"
                    src={item.urlToImage}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  render() {
    const {loading, data} = this.state;
    return (
      <div>
        <NavBar/>
        <ResultNavBar/>
        {loading ? <LoadingPage/> : this.renderList(data)}
      </div>
    );
  }
}

export default ResultsPageNews;
