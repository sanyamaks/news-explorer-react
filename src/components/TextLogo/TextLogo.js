import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import './TextLogo.css';

const TextLogo = (props) => {
  const { modifier } = props;
  return (
    <Link
      className={cn('text-logo', { 'text-logo_white': modifier === 'white' })}
      to="/"
    >
      NewsExplorer
    </Link>
  );
};

export default TextLogo;
