import React, { useState } from 'react';
import cn from 'classnames';
import './Header.css';
import TextLogo from '../TextLogo/TextLogo';
import NavbarButton from '../NavbarButton/NavbarButton';
import Nav from '../Nav/Nav';
import Button from '../Button/Button.js';
import { ReactComponent as Icon } from '../../assets/icons/Union_black.svg';

const Header = (props) => {
  const { modifier, handleClick } = props;

  const [isActiveNavWrapper, setActiveNavWrapper] = useState(false);

  const toggleNavWrapper = () => {
    setActiveNavWrapper(!isActiveNavWrapper);
  };

  const resetNavWrapper = () => {
    setActiveNavWrapper(false);
  };

  const onClick = () => {
    resetNavWrapper();
    if (handleClick) {
      return handleClick();
    }
  };

  return (
    <header className={cn('header', { header_white: modifier === 'white' })}>
      <TextLogo modifier={modifier} />
      <NavbarButton modifier={modifier} onClick={toggleNavWrapper} isActive={isActiveNavWrapper}/>
      <div
        className={cn(
          'header__nav-wrapper',
          { 'header__nav-wrapper_enabled': isActiveNavWrapper },
          { 'header__nav-wrapper_white': modifier === 'white' }
        )}
      >
        <Nav modifier={modifier} onClick={resetNavWrapper} />
        <Button
          className="header__button"
          text="Регистрация"
          variant={modifier === 'white' ? 'outline-white' : null}
          onClick={onClick}
          Icon={Icon}
        />
      </div>
    </header>
  );
};

export default Header;
