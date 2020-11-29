import React, { useState } from 'react';
import './SearchForm.css';
import Button from '../../Button/Button';
import SearchInput from '../SearchInput/SearchInput';
import SearchPrompt from '../SeachPrompt/SearchPrompt';

const SearchForm = () => {
  const handleClick = () => {
    console.log('Отправить данные');
  };

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
      <Button
        className="search__button"
        text="Искать"
        variant="blue"
        onClick={handleClick}
      />
    </form>
  );
};

export default SearchForm;
