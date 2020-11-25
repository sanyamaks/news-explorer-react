import React from 'react';
import cn from 'classnames';
import { ReactComponent as Icon } from '../../../assets/icons/save-icon.svg';

const SaveArticleElements = (props) => {
  const { isAuth } = props;

  const renderTooltip = () => {
    if (isAuth) {
      return null;
    }
    return (
      <p className="article__tooltip article__tooltip_active">
        Войдите, чтобы сохранять статьи
      </p>
    );
  };

  return (
    <>
      <button className="article__icon-container">
        <Icon
          className={cn('article__icon', 'article__icon_save', {
            article__icon_save_active: isAuth,
          })}
        />
      </button>
      {renderTooltip()}
    </>
  );
};

export default SaveArticleElements;
