import React, {useState, useEffect} from 'react';
import './MainPage.css';
import SearchBlock from '../../components/SearchBlock/SearchBlock';
import Loader from '../../components/Loader/Loader';
import Results from '../../components/Results/Results';
import NotFound from '../../components/NotFound/NotFound';
import AboutAuthor from '../../components/AboutAuthor/AboutAuthor';
import fakeData from '../../assets/temp/fakeData';

const MainPage = () => {
  const [fakeState, setFakeState] = useState({
    isLoaderActive: true,
    isResultsActive: false,
  });

  useEffect(() => {
    setTimeout(() => {
      setFakeState({
        isLoaderActive: false,
        isResultsActive: true,
      });
    }, 0);
  }, []);

  return (
    <main>
      <SearchBlock />
      <Loader isActive={fakeState.isLoaderActive} />
      <Results isActive={fakeState.isResultsActive} articles={fakeData} />
      <NotFound isActive={true} />
      <AboutAuthor />
    </main>
  );
};

export default React.memo(MainPage);
