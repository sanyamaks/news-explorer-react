import React, { useState } from 'react';
import './SearchBlock.css';
import SearchDescription from './SearchDescription/SearchDescription';
import Button from '../Button/Button';
import SearchForm from './SearchForm/SearchForm';

const SearchBlock = () => {
  const handleClick = () => {
    console.log('Отправить данные');
  };

  const [buttonState, setButtonState] = useState({
    className: 'search__button',
    text: 'Искать',
    variant: 'blue',
    onClick: handleClick,
  });

  return (
    <section className="search">
      <SearchDescription />
      <SearchForm />
    </section>
  );
};

export default SearchBlock;
