import React, {Component} from 'react';

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

//look into promise.all for multiple fetch requests
  componentDidMount() {
    const country = this.props.result;
    fetch('http://localhost:3002/news?q=' + country)
      .then(res => res.json())
      .then(
        (result) => {
          console.log('news article sanity check', result);
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
            console.log('item sanity check', item),
              <li className="newsListItem" key={item.url}>
                <a className="articleText" href={item.url}>
                  {item.title}
                </a>
                <img className="newsImage" src={item.urlToImage}/>
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
        {loading ? 'loading placeholder' : this.renderList(data)}
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