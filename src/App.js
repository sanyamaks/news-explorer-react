import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { Switch, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import SavedArticlesPage from './components/SavedArticlesPage/SavedArticlesPage';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';
import Notification from './components/Notification/Notification';
import FormSignUp from './components/Form/FormSignUp/FormSignUp';
import FormSignIn from './components/Form/FormSignIn/FormSignIn';
import fakeData from './assets/temp/fakeData';

const App = () => {
  const [isMainPage, setIsMainPage] = useState(true);
  const [isActivePopup, setIsActivePopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const location = useLocation();

  // fakeLoader
  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === '/') {
      setIsMainPage(true);
    }
    if (location.pathname === '/saved-articles') {
      setIsMainPage(false);
    }
  }, [location.pathname]);

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
    <div className={cn('app', { app_background: isMainPage })}>
      <Header
        modifier={isMainPage ? 'white' : null}
        handleClick={openFormSignUp}
      />
      <Switch>
        <Route path="/saved-articles">
          <SavedArticlesPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
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
