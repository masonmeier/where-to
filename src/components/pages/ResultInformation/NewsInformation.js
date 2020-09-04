import React, {Component} from 'react';
import LoadingPage from '../LoadingPage';

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

//look into promise.all for multiple
// fetch requests
  componentDidMount() {
    const country = this.props.result;
    fetch('http://localhost:3002/news?q=' + country)
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
export default NewsInformation;