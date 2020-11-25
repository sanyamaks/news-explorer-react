import React, { useState } from 'react';
import './SearchForm.css';
import Button from '../../Button/Button';
import SearchInput from '../SearchInput/SearchInput';
import SearchPrompt from '../SeachPrompt/SearchPrompt';

const SearchForm = () => {
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
    <form className="search__form" onSubmit={handleClick} noValidate>
      <SearchInput
        className="search__input"
        type="text"
        name="key"
        placeholder="Введите тему новости"
        required={true}
      />
      <SearchPrompt isActive={true} />
      <Button {...buttonState} />
    </form>
  );
};

export default SearchForm;
