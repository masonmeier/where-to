import React, {Component, useContext} from 'react';
import LoadingPage from './LoadingPage';
import {remoteServerURL} from '../QuizProvider';
import {QuizContext} from '../QuizProvider';
import '../../CSS/resultsPage.css';
import NavBar from '../Structure/NavBar';
import ResultNavBar from '../Structure/ResultNavBar';

class ResultsPageNews extends Component {
  static contextType = QuizContext;

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      title: null,
      urlToImage: null,
      url: null,
      country: 'england',
    };
  }

  componentDidMount() {
    console.log(this.context);
    this.setState({
      country: this.context.resultCountry.country
    });

    fetch(`${remoteServerURL}/news?q=` + this.state.country)
      .then(res => res.json())
      .then(
        (result) => {
          return result;
        },
        (error) => {
          throw error;
        }
      )
      .then(json => this.setState({loading: false, data: json}));
  }

  renderList = data => {
    return (
      <div className="news-container">
        <div className="news-page">
          <h2 className="news-page-header">News from {this.state.country}</h2>
          <ul className="related-news">
            {data.articles.map(item => (
              <li className='news-list-item' key={item.url}>
                <div className="news-article">
                  <div className="article-text-holder">
                    <a className='article-text' href={item.url} target='_blank'>
                      {item.title}
                    </a>
                  </div>
                  <img alt="News Story Image" className="news-article-image" src={item.urlToImage}/>
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

