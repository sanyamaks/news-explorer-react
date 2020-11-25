import React from 'react';
import './Results.css';
import Articles from '../Articles/Articles';
import Button from '../Button/Button';

const Results = (props) => {
  const { isActive, articles } = props;

  if (!isActive) {
    return null;
  }
  return (
    <section className="results">
      <h2 className="results__title">Результаты поиска</h2>
      <p className="results__error">
        Во время запроса произошла ошибка. Возможно, проблема с соединением или
        сервер недоступен. Подождите немного и попробуйте ещё раз
      </p>
      <Articles
        className="results__articles"
        type="save"
        articles={articles}
        isAuth={false}
      />
      <Button className="results__button" variant="white" text="Показать ещё" />
    </section>
  );
};

export default Results;
