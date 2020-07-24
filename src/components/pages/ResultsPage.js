import React, {Component} from 'react';
import ResultsCalculator from './ResultsCalculator';

class ResultsPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: true,
//       title: null
//     };
//   }
//
// //look into promise.all for multiple fetch requests
//   componentDidMount() {
//
//     fetch(`http://localhost:3002/news?q=${}`)
//       .then(res => res.json())
//       .then(
//         (result) => {
//           console.log('news article sanity check', result);
//           return result;
//         },
//         (error) => {
//           throw error;
//         }
//       )
//       .then(json => this.setState({loading: false, data: json}));
//   }
//
//   renderList = data => {
//     console.log('data sanity check', data);
//     return (
//       <ul>
//         {data.articles.map(item => (
//           <li key={item.id}>
//             {item.title}
//           </li>
//         ))}
//       </ul>
//     );
//   };

  render() {
    // const {loading, data} = this.state;
    return (
      <div>
        <h1>Results page text</h1>
        <ResultsCalculator/>
        {/*{loading ? 'loading placeholder' : this.renderList(data)}*/}
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
export default ResultsPage;