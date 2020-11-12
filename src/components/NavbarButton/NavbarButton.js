import React from 'react';
import cn from 'classnames';
import './NavbarButton.css';

const Navbar = (props) => {
  const { modifier } = props;

  const onClick = () => {
    console.log(1);
  }
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

export default Navbar;
