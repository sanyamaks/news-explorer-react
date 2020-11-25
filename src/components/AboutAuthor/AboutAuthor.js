import React from 'react';
import './AboutAuthor.css';
import AvatarMin from '../../assets/images/avatar(320px).png';
import AvatarMid from '../../assets/images/avatar(768px).png';
import AvatarMax from '../../assets/images/avatar(1440px).png';

const AboutAuthor = () => {
  console.log('AboutAuthor'); // temporary check
  return (
    <section className="about-author">
      <picture>
        <source
          className="about-author__avatar"
          srcSet={AvatarMin}
          media="(max-width: 320px)"
        />
        <source
          className="about-author__avatar"
          srcSet={AvatarMid}
          media="(max-width: 768px)"
        />
        <img className="about-author__avatar" src={AvatarMax} alt="" />
      </picture>
      <div className="about-author__info">
        <h2 className="about-author__title">Об авторе</h2>
        <div className="about-author__description">
          <p className="about-author__description-text">
            Это блок с описанием автора проекта. Здесь следует указать, как вас
            зовут, чем вы занимаетесь, какими технологиями разработки владеете.
            Моё имя - Максимов Александр. Данный проект написан с использованием
            React на основе дипломного проекта Яндекс.Практикум.
          </p>
          <p className="about-author__description-text">
            Также можно рассказать о процессе обучения в Практикуме, чему вы тут
          </p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AboutAuthor);
