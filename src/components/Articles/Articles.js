import React from 'react';
import cn from 'classnames';
import './Articles.css';
import Article from '../Article/Article';

const Articles = (props) => {
  console.log('Articles');
  const { className, type, articles, isAuth } = props;
  return (
    <div className={cn('articles', className)}>
      {articles.map((article) => (
        <Article
          type={type}
          article={article}
          isAuth={isAuth}
          key={article._id}
        />
      ))}
    </div>
  );
};

export default React.memo(Articles);
