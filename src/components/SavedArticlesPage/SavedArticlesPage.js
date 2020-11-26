import React from 'react';
import './SavedArticlesPage.css';
import InfoSavedArticles from '../../components/InfoSavedArticles/InfoSavedArticles';
import SavedArticles from '../../components/SavedArticles/SavedArticles';
import fakeData from '../../assets/temp/fakeData';

const SavedArticlesPage = () => {
  return (
    <main>
      <InfoSavedArticles />
      <SavedArticles isActive={true} articles={fakeData} />
    </main>
  );
};

export default SavedArticlesPage;
