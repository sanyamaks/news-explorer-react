import React from 'react';
import './Nav.css';
import NavItem from './NavItem/NavItem';

const Nav = (props) => {
  const { modifier } = props;
  return (
    <nav className="nav">
      <ul className="nav__list">
        <NavItem modifier={modifier} text="Главная" />
        <NavItem modifier={modifier} text="Сохранённые статьи" />
      </ul>
    </nav>
  );
};

export default Nav;
