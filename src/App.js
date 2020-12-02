import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import SavedArticlesPage from './components/SavedArticlesPage/SavedArticlesPage';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';
import Notification from './components/Notification/Notification';
import FormSignUp from './components/Form/FormSignUp/FormSignUp';
import FormSignIn from './components/Form/FormSignIn/FormSignIn';

const App = () => {
  const [isActivePopup, setIsActivePopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const match = useRouteMatch({ path: '/', exact: true });
  let openFormSignIn, openNotification;

  const openFormSignUp = useCallback(() => {
    console.log('openFromSignUp');
    setIsActivePopup(true);
    setPopupContent(
      <FormSignUp
        handleClickSignUp={openNotification}
        handleClickToggle={openFormSignIn}
      />
    );
  }, [openFormSignIn, openNotification]);

  openFormSignIn = useCallback(() => {
    console.log('openFromSignUp');
    setIsActivePopup(true);
    setPopupContent(<FormSignIn handleClickToggle={openFormSignUp} />);
  }, [openFormSignUp]);

  openNotification = useCallback(() => {
    setIsActivePopup(true);
    setPopupContent(
      <Notification
        text="Пользователь успешо зарегистирован"
        buttonText="Войти"
        handleClickToggle={openFormSignIn}
      />
    );
  }, [openFormSignIn]);

  const closePopup = useCallback(() => {
    setIsActivePopup(false);
  }, []);

  return (
    <div className={cn('app', { app_background: !!match })}>
      <Header handleClick={openFormSignUp} />
      <Switch>
        <Route path="/saved-articles">
          <SavedArticlesPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
      <Footer />
      {isActivePopup && <Popup closePopup={closePopup}>{popupContent}</Popup>}
    </div>
  );
};

export default App;
