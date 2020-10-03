import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import LoadingPage from './LoadingPage';
import NavBar from '../Structure/NavBar';
import ResultsForm from './ResultsForm';


const SubmitPage = (props) => {
  const [loading, setLoading] = useState(false);

  let history = useHistory();

  const getLoadingPage = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      history.push('/results/stats');
    }, 2000);
  };

  if (loading) return <LoadingPage/>;

  return (
    <div className="results">
      <NavBar/>
      <div className="getResultsHolder">
        <ResultsForm getLoadingPage={getLoadingPage}/>
      </div>
    </div>
  );
};
export default SubmitPage;
