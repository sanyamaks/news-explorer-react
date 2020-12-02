import React from 'react';
import './NotFound.css';
import { ReactComponent as Icon } from '../../assets/icons/icon-not-found.svg';

const NotFound = (props) => {
  console.log("NotFound");
  const { isActive } = props;

  if (!isActive) {
    return null;
  }
  return (
    <section className="no-results no-results_disabled">
      <Icon className="no-results__icon-not-found" />
      <h2 className="no-results__title">Ничего не найдено</h2>
      <p className="no-results__subtitle">
        К сожалению по вашему запросу ничего не найдено.
      </p>
    </section>
  );
};

export default React.memo(NotFound);
