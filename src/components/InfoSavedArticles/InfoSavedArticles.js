import React from 'react';
import './InfoSavedArticles.css';

const InfoSavedArticles = () => {
  return (
    <section className="info-saved-articles">
      <h2 className="info-saved-articles__title">Сохранённые статьи</h2>
      <p className="info-saved-articles__notice">
        <span className="info-saved-articles__name">Грета</span>, у вас
        <span className="info-saved-articles__number-articles"> 5 </span>{' '}
        сохранённых
        <span className="info-saved-articles__changing-case">статей</span>
      </p>
      <p className="info-saved-articles__keywords">
        По ключевым словам:
        <span className="info-saved-articles_enumeration-keywords">
          Природа, Тайга и 2-м другим
        </span>
      </p>
    </section>
  );
};

export default React.memo(InfoSavedArticles);
