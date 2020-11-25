import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { ReactComponent as GithubIcon } from '../../assets/icons/github_icon.svg';
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook_icon.svg';

const Footer = () => {
  console.log('Footer'); // temporary check
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2020 Supersite, Powered by News API</p>
      <div className="footer__info-links">
        <ul className="footer__nav">
          <li className="footer__nav-item">
            <Link className="footer__nav-link" to="/">
              Главная
            </Link>
          </li>
          <li className="footer__nav-item">
            <a
              className="footer__nav-link"
              href="https://praktikum.yandex.ru/"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
        </ul>
        <ul className="footer__socials">
          <li className="footer__socials-item">
            <a
              className="footer__socials-link"
              href="https://github.com/sanyamaks"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon className="footer__socials-image" />
            </a>
          </li>
          <li className="footer__socials-item">
            <a
              className="footer__socials-link"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon className="footer__socials-image" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
