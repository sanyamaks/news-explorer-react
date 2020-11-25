import React from 'react';
import './SearchPrompt.css';

const SearchPrompt = (props) => {
  const { isActive } = props;
  if (!isActive) {
    return null;
  }
  return (
    <p className="search__input-prompt search__input-prompt_disabled">
      Это обязательное поле
    </p>
  );
};

export default SearchPrompt;
