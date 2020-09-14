import React, {Component} from 'react';
import LoadingPage from '../LoadingPage';
import {remoteServerURL} from '../../QuizProvider';

class NewsInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      title: null,
      urlToImage: null,
      url: null
    };
  }

  componentDidMount() {
    const country = this.props.result;

    fetch(`${remoteServerURL}/news?q=` + country)
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
      <div className="newsContainer">
        <ul className="relatedNews">
          {data.articles.map(item => (
            <li className="newsListItem" key={item.url}>
              <a className="articleText" href={item.url} target="_blank">
                {item.title}
              </a>
              <img alt="News Story Image" className="newsImage" src={item.urlToImage}/>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  render() {
    const {loading, data} = this.state;
    return (
      <div>
        {loading ? <LoadingPage/> : this.renderList(data)}
      </div>
    );
  }

}


export default NewsInformation;