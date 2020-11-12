import React from 'react';
import './ButtonIcon.css';

const ButtonIcon = (props) => {
  const { Icon } = props;
  if (!Icon) {
    return null;
  }
  return <Icon className="button__icon-logout" fill="currentColor" />;
};

export default ButtonIcon;
