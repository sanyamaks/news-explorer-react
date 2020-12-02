import React, { useState, useCallback, useEffect } from 'react';
import cn from 'classnames';
import './Header.css';
import TextLogo from '../TextLogo/TextLogo';
import NavbarButton from '../NavbarButton/NavbarButton';
import Nav from '../Nav/Nav';
import Button from '../Button/Button.js';
import { ReactComponent as Icon } from '../../assets/icons/Union_black.svg';
import { useLocation } from 'react-router-dom';

const Header = (props) => {
  console.log('Header');
  const { handleClick } = props;

  const [modifier, setModifier] = useState('');
  const [isActiveNavWrapper, setActiveNavWrapper] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setModifier('white');
    } else {
      setModifier('');
    }
  }, [location.pathname]);

  const toggleNavWrapper = useCallback(() => {
    setActiveNavWrapper(!isActiveNavWrapper);
  }, [isActiveNavWrapper]);

  const resetNavWrapper = useCallback(() => {
    setActiveNavWrapper(false);
  }, []);

  const onClick = useCallback(() => {
    resetNavWrapper();
    if (handleClick) {
      return handleClick();
    }
  }, [handleClick, resetNavWrapper]);

  return (
    <header className={cn('header', { header_white: modifier })}>
      <TextLogo modifier={modifier} />
      <NavbarButton
        modifier={modifier}
        onClick={toggleNavWrapper}
        isActive={isActiveNavWrapper}
      />
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

export default React.memo(Header);
