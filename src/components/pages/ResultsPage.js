import React, {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import LoadingPage from './LoadingPage';
import '../../CSS/resultspage.css';
import NavBar from '../Structure/NavBar';
import {QuizContext} from '../QuizProvider';
import ResultsForm from '../Structure/ResultsForm';


const ResultsPage = (props) => {
  // const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  // const result = props.result;

  let history = useHistory();
  const quizContext = useContext(QuizContext);
  const loadHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      history.push('/results/stats');
    }, 2000);
  };
  const getLoadingPage = loadHandler;
  if (loading) return <LoadingPage/>;

  return (
    <div className="results">
      <NavBar/>
      <div className="backgroundMask"/>
      <div id="container">
        <img alt="bg1" src={require('./images/backgrounds/bg1.jpg')}/>
        <img alt="bg2" src={require('./images/backgrounds/bg2.jpg')}/>
        <img alt="bg3" src={require('./images/backgrounds/bg3.jpg')}/>
        <img alt="bg4" src={require('./images/backgrounds/bg4.jpg')}/>
        <img alt="bg5" src={require('./images/backgrounds/bg5.jpg')}/>
        <img alt="bg6" src={require('./images/backgrounds/bg6.jpg')}/>
        <img alt="bg7" src={require('./images/backgrounds/bg7.jpg')}/>
        <img alt="bg8" src={require('./images/backgrounds/bg8.jpg')}/>
      </div>
      <div className="getResultsHolder">
        <ResultsForm getLoadingPage={getLoadingPage}/>
      </div>
    </div>
  );
};
export default ResultsPage;


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
