import React from 'react';
import cn from 'classnames';
import './NavItem.css';

const NavItem = (props) => {
  const { text, modifier } = props;
  return (
    <li className="nav__item">
      <a
        className={cn('nav__link', 'nav__link_checked', {
          //checked  - захардкожено
          nav__link_white: modifier === 'white',
        })}
        href="./index.html"
      >
        {text}
      </a>
    </li>
  );
};

export default NavItem;
