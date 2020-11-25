import React from 'react';
import { ReactComponent as Icon } from '../../../assets/icons/delete-icon.svg';

const DeleteArticleElements = (props) => {
  const { keyword } = props;
  return (
    <>
      <p className="article__category">{keyword}</p>
      <button className="article__icon-container">
        <Icon className="article__icon article__icon_delete" />
      </button>
      <p className="article__tooltip article__tooltip_active">
        Убрать из сохраненных
      </p>
    </>
  );
};

export default DeleteArticleElements;
