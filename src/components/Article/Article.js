import React from 'react';
import cn from 'classnames';
import './Article.css';
import SaveArticleElements from './SaveArticleElements/SaveArticleElements';
import DeleteArticleElements from './DeleteArticleElements/DeleteArticleElements';

const Article = (props) => {
  const { className, type, article, isAuth } = props;

  console.log('Article');

  const renderArticleElements = () => {
    if (type === 'save') {
      return <SaveArticleElements isAuth={isAuth} />;
    }
    if (type === 'delete') {
      return <DeleteArticleElements keyword={article.keyword} />;
    }
    return null;
  };

  return (
    <article className={cn('article', className)}>
      {renderArticleElements()}
      <img
        className="article__image"
        src={article.image}
        alt="Изображение карточки"
      />
      <div className="article__info">
        <p className="article__date">{article.date}</p>
        <h3 className="article__title">{article.title}</h3>
        <p className="article__description">{article.text}</p>
        <a
          className="article__source"
          href={article.link}
          target="_blank"
          rel="noreferrer"
        >
          {article.source}
        </a>
      </div>
    </article>
  );
};

export default React.memo(Article);
