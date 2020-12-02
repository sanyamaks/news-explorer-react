import React from 'react';
import cn from 'classnames';
import './Button.css';
import ButtonIcon from './ButtonIcon/ButtonIcon';

const Button = (props) => {
  const { className, text, onClick, variant, Icon, ...otherProps } = props;

  return (
    <button
      className={cn(
        'button',
        {
          button_outline_white: variant === 'outline-white',
          button_background_white: variant === 'white',
          button_background_blue: variant === 'blue',
          button_disabled: variant === 'disabled',
        },
        className
      )}
      type="button"
      onClick={onClick}
      {...otherProps}
    >
      <span className="button__text">{text}</span>
      <ButtonIcon Icon={Icon} />
    </button>
  );
};

export default React.memo(Button);
