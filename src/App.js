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

  const fakeData = [
    {
      _id: '5f9abc89e6f924229a38247f',
      keyword: 'Hi tech',
      title: 'ByteDance launches its first gadget in a big education push',
      text:
        'ByteDance on Thursday unveiled its first consumer hardware product, a smart light lamp with a display, that it says is part of its education technology portfolio as the Chinese internet giant continues to expand to categories beyond social video. The Dali sma…',
      date: '29 Октября, 2020',
      source: 'TechCrunch',
      link:
        'https://techcrunch.com/2020/10/29/bytedance-announces-its-first-gadget-in-a-big-education-push/',
      image:
        'https://techcrunch.com/wp-content/uploads/2020/10/bytedance-dali-smart-lamp.jpg?w=665',
      owner: {
        _id: '5f9abc54e6f924229a38247e',
        email: 'ilya@gmail.com',
        name: 'password',
        __v: 0,
      },
      __v: 0,
    },
    {
      _id: '5f9abc8be6f924229a382480',
      keyword: 'Hi tech',
      title:
        'Slingshot Aerospace raises $8 million to help it expand to new verticals beyond aerospace and defense',
      text:
        'Austin and El Segundo-based Slingshot Aerospace was born out of a realization that while there is a massive amount of information collected by observation technology aboard satellites, airplanes, drones and beyond, the analytics and turnaround of said info in…',
      date: '29 Октября, 2020',
      source: 'TechCrunch',
      link:
        'https://techcrunch.com/2020/10/29/slingshot-aerospace-raises-8-million-to-help-it-expand-to-new-verticals-beyond-aerospace-and-defense/',
      image:
        'https://techcrunch.com/wp-content/uploads/2020/10/SlingshotAerospace.png?w=602',
      owner: {
        _id: '5f9abc54e6f924229a38247e',
        email: 'ilya@gmail.com',
        name: 'password',
        __v: 0,
      },
      __v: 0,
    },
    {
      _id: '5f9beca6e6f924229a38248d',
      keyword: 'apple',
      title: 'Самый маленький iPhone показали вживую',
      text:
        'В сети появился первый обзор iPhone 12 mini. Автором обзора оказался румынский блогер Джордж Бухничи (George Buhnici). Бухничи выложил на свой канал 40-минутное видео, в котором продемонстрировал внешний вид и габариты самого доступного смартфона Apple, а так…',
      date: '30 Октября, 2020',
      source: 'Lenta',
      link: 'https://lenta.ru/news/2020/10/30/minimini/',
      image:
        'https://icdn.lenta.ru/images/2020/10/29/14/20201029141003462/share_5bf412bd4787d0570bda718c5fdd6951.jpg',
      owner: {
        _id: '5f9bec83e6f924229a38248c',
        email: 'review@mail.com',
        name: 'Review',
        __v: 0,
      },
      __v: 0,
    },
    {
      _id: '5f9beca9e6f924229a38248e',
      keyword: 'apple',
      title: 'Tech giants start to step further into rivals’ territory',
      text:
        'Push by Apple into the search business signals rising competition in core areas',
      date: '30 Октября, 2020',
      source: 'Financial Times',
      link: 'https://www.ft.com/content/dd17fd4c-2c98-429d-b91e-632bf2dec8e4',
      image:
        'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F6fb34f58-ca36-4ad6-b561-3f5a6c980e0a.jpg?source=next-opengraph&fit=scale-down&width=900',
      owner: {
        _id: '5f9bec83e6f924229a38248c',
        email: 'review@mail.com',
        name: 'Review',
        __v: 0,
      },
      __v: 0,
    },
    {
      _id: '5f9becabe6f924229a38248f',
      keyword: 'apple',
      title: 'Apple’s Asian Suppliers Slip as Market Awaits iPhone 12 Boost',
      text: 'Без текста',
      date: '30 Октября, 2020',
      source: 'Bloomberg',
      link:
        'https://www.bloomberg.com/news/articles/2020-10-30/apple-s-asian-suppliers-slip-as-market-awaits-iphone-12-boost',
      image: 'https://smmis.ru/wp-content/uploads/2015/05/pustota.jpg',
      owner: {
        _id: '5f9bec83e6f924229a38248c',
        email: 'review@mail.com',
        name: 'Review',
        __v: 0,
      },
      __v: 0,
    },
    {
      _id: '5f9becc1e6f924229a382493',
      keyword: 'netflix',
      title: 'Netflix just made its best two plans a bit more expensive',
      text:
        'You’ll soon have to spend a few more Washingtons to watch your favorite Netflix content in the US. The standard plan — HD resolution, with up to two simultaneous streams — is going up from $13 a month to $14 a month. If you’re fancy and use the premium 4K tie…',
      date: '30 Октября, 2020',
      source: 'The Next Web',
      link:
        'https://thenextweb.com/plugged/2020/10/30/netflix-just-made-its-best-two-plans-a-bit-more-expensive/',
      image:
        'https://img-cdn.tnwcdn.com/image/plugged?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F06%2FNetflix-Blur-vibration-haptic-feedback-project-rumble-pak.jpg&signature=6eaa8c7ccdbcd41b00108accf1bfcf8f',
      owner: {
        _id: '5f9bec83e6f924229a38248c',
        email: 'review@mail.com',
        name: 'Review',
        __v: 0,
      },
      __v: 0,
    },
    {
      _id: '5f9becd9e6f924229a382495',
      keyword: 'Putin',
      title: 'Axios World: Special report — Trump, Putin and nuclear weapons',
      text: 'Без текста',
      date: '23 Октября, 2020',
      source: 'Axios',
      link:
        'https://www.axios.com/newsletters/axios-world-8572c20b-f61d-4cd0-96d6-e5e22b28542f.html',
      image: 'https://smmis.ru/wp-content/uploads/2015/05/pustota.jpg',
      owner: {
        _id: '5f9bec83e6f924229a38248c',
        email: 'review@mail.com',
        name: 'Review',
        __v: 0,
      },
      __v: 0,
    },
    {
      _id: '5faabf1fe6f924229a3824a3',
      keyword: 'Ss',
      title: 'Långa straff efter smuggling av amfetaminolja',
      text:
        'Paret försökte smuggla in 97 liter amfetaminolja från Nederländerna, men greps vid gränsen. Nu döms den 43-årige mannen, som satt på passagerarplats i skåpbilen, till 10 års fängelse. Den kvinnliga chauffören får fem år.',
      date: '10 Ноября, 2020',
      source: 'Göteborgs-Posten',
      link:
        'http://www.gp.se/nyheter/g%C3%B6teborg/l%C3%A5nga-straff-efter-smuggling-av-amfetaminolja-1.36849193',
      image:
        'http://www.gp.se/image/policy:1.35777874:1605022132/image.jpg?f=Wide%26w=1200%26%24p%24f%24w=834285a',
      owner: {
        _id: '5f99efabf3647120597cc592',
        email: 'sanyamaks04@yandex.ru',
        name: 'Алекс',
        __v: 0,
      },
      __v: 0,
    },
  ];

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
