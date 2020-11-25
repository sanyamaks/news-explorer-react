import React from 'react';
import './Nav.css';
import NavItem from './NavItem/NavItem';

const Nav = (props) => {
  const { modifier, onClick } = props;
  return (
    <nav className="nav">
      <ul className="nav__list">
        <NavItem modifier={modifier} text="Главная" to="/" onClick={onClick} />
        <NavItem
          modifier={modifier}
          text="Сохранённые статьи"
          to="/saved-articles"
          onClick={onClick}
        />
      </ul>
    </nav>
  );
};

export default Nav;
