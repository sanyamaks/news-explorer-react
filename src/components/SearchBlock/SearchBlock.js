import React from 'react';
import './SearchBlock.css';
import SearchDescription from './SearchDescription/SearchDescription';
import SearchForm from './SearchForm/SearchForm';

const SearchBlock = () => {
  return (
    <section className="search">
      <SearchDescription />
      <SearchForm />
    </section>
  );
};

export default SearchBlock;
