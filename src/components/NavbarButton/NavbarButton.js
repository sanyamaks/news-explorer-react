import React from 'react';
import cn from 'classnames';
import './NavbarButton.css';

const NavbarButton = (props) => {
  const { modifier, onClick } = props;

  return (
    <button className="nav-btn" onClick={onClick}>
      <span
        className={cn('nav-btn__line', {
          'nav-btn__line_white': modifier === 'white',
        })}
      />
      <span
        className={cn('nav-btn__line', {
          'nav-btn__line_white': modifier === 'white',
        })}
      />
    </button>
  );
};

export default NavbarButton;
