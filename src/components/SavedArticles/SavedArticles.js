import React from 'react';
import './SavedArticles.css';
import Articles from '../Articles/Articles';

const SavedArticles = (props) => {
  const { isActive, articles } = props;
  if (!isActive) {
    return null;
  }
  return (
    <section className="saved-articles">
      <Articles
        className="saved-articles__articles"
        type="delete"
        articles={articles}
      />
    </section>
  );
};

export default SavedArticles;
