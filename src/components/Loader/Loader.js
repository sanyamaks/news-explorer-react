import React from 'react';
import './Loader.css';

const Loader = (props) => {
  const { isActive } = props;
  if (!isActive) {
    return null;
  }
  return (
    <section className="loader loader_disabled">
      <i className="loader__preloader" />
      <h2 className="loader__text">Идёт поиск новостей...</h2>
    </section>
  );
};

export default Loader;
