import React, {useState} from 'react';
import ResultsCalculator from './ResultsCalculator';
import LoadingPage from './LoadingPage';
import '../../CSS/resultspage.css';
import NavBar from '../Structure/NavBar';

export default function ResultsPage() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShow(!show);
    }, 2000);
  };

  if (loading) return <LoadingPage/>;

  return (
    <div className="results">
      <NavBar/>
      {!show &&
      <div className="getResultsHolder">
        <div className="getResultsTextHolder">
        </div>
        <button className="resultsButton" onClick={loadHandler}>so...where to?</button>
      </div>}
      {show && <ResultsCalculator/>}
      {/*{loading ? 'loading placeholder' : this.renderList(data)}*/}
    </div>
  );


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

// const {loading, data} = this.state;
