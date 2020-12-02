import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import './NavItem.css';

const NavItem = (props) => {
  const { text, modifier, to, onClick } = props;
  return (
    <li className="nav__item">
      <Link
        className={cn('nav__link', 'nav__link_checked', {
          //checked  - захардкожено
          nav__link_white: modifier === 'white',
        })}
        to={to}
        onClick={onClick}
      >
        {text}
      </Link>
    </li>
  );
};

export default React.memo(NavItem);
