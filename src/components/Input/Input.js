import React from 'react';
import './Input.css';
import cn from 'classnames';

const Input = (props) => {
  const { className, ...otherProps } = props;
  return <input className={cn('input', className)} {...otherProps} />;
};

export default Input;
