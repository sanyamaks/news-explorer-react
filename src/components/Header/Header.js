import React, { useState } from 'react';
import './Header.css';
import TextLogo from '../TextLogo/TextLogo';
import NavbarButton from '../NavbarButton/NavbarButton';
import Nav from '../Nav/Nav';
import Button from '../Button/Button.js';
import { ReactComponent as Icon } from '../../assets/icons/Union_black.svg';

const Header = (props) => {
  const { modifier } = props;

  const handleClick = () => {
    setButtonProps({ ...buttonProps, variant: 'blue' });
  };

  const [buttonProps, setButtonProps] = useState({
    className: 'header__button',
    text: 'Регистрация',
    variant: 'outline-white',
    onClick: handleClick,
    Icon: Icon,
  });

  return (
    <header className="header">
      <TextLogo />
      <NavbarButton modifier={modifier} />
      <div className="header__nav-wrapper">
        <Nav modifier="white" />
        <Button {...buttonProps} />
      </div>
    </header>
  );
};

export default Header;
