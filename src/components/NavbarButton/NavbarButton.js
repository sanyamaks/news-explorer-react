import React from 'react';
import cn from 'classnames';
import './NavbarButton.css';

const NavbarButton = (props) => {
  const { modifier, isActive, onClick } = props;

  return (
    <button className="nav-btn" onClick={onClick}>
      <span
        className={cn(
          'nav-btn__line',
          {
            'nav-btn__line_white': modifier === 'white',
          },
          { 'nav-btn__line_enable': isActive }
        )}
      />
      <span
        className={cn(
          'nav-btn__line',
          {
            'nav-btn__line_white': modifier === 'white',
          },
          { 'nav-btn__line_enable': isActive }
        )}
      />
    </button>
  );
};

export default NavbarButton;
