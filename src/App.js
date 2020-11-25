import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SearchBlock from './components/SearchBlock/SearchBlock';
import Loader from './components/Loader/Loader';
import AboutAuthor from './components/AboutAuthor/AboutAuthor';
import Footer from './components/Footer/Footer';
import Results from './components/Results/Results';
import InfoSavedArticles from './components/InfoSavedArticles/InfoSavedArticles';
import SavedArticles from './components/SavedArticles/SavedArticles';
import NotFound from './components/NotFound/NotFound';
import Popup from './components/Popup/Popup';
import Notification from './components/Notification/Notification';
import FormSignUp from './components/Form/FormSignUp/FormSignUp';
import FormSignIn from './components/Form/FormSignIn/FormSignIn';
import fakeData from './assets/temp/fakeData'

const App = () => {
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

  const [isActivePopup, setIsActivePopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const openFormSignUp = () => {
    console.log('OpenSignUp');
    setIsActivePopup(true);
    setPopupContent(
      <FormSignUp
        handleClickSignUp={openNotification}
        handleClickToggle={openFormSignIn}
      />
    );
  };

  const openFormSignIn = () => {
    setIsActivePopup(true);
    setPopupContent(<FormSignIn handleClickToggle={openFormSignUp} />);
  };

  const openNotification = () => {
    setIsActivePopup(true);
    setPopupContent(
      <Notification
        text="Пользователь успешо зарегистирован"
        buttonText="Войти"
        handleClickToggle={openFormSignIn}
      />
    );
  };

  return (
    <div className="App">
      <Switch>
        <Route
          path="/saved-articles"
          render={() => (
            <div className="root">
              <Header />
              <main>
                <InfoSavedArticles />
                <SavedArticles isActive={true} articles={fakeData} />
              </main>
            </div>
          )}
        />
        <Route
          path="/"
          render={() => (
            <div className="root root_background">
              <Header modifier="white" handleClick={openFormSignUp} />
              <main>
                <SearchBlock />
                <Loader isActive={fakeState.isLoaderActive} />
                <Results
                  isActive={fakeState.isResultsActive}
                  articles={fakeData}
                />
                <NotFound isActive={true} />
                <AboutAuthor />
              </main>
            </div>
          )}
        />
      </Switch>
      <Footer />
      <Popup
        isActive={isActivePopup}
        closePopup={() => setIsActivePopup(false)}
      >
        {popupContent}
      </Popup>
    </div>
  );
};

export default App;
//https://dev.to/alexandprivate/your-next-react-modal-with-your-own-usemodal-hook-context-api-3jg7
//https://codesandbox.io/s/eloquent-hamilton-vgbyq?file=/src/modalContext.js
// https://levelup.gitconnected.com/build-a-modal-using-react-context-portals-and-hooks-bd0c4e54537e
