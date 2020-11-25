import React from 'react';
import './InputWrapper.css';
import Input from '../Input/Input';
import cn from 'classnames';

const InputWrapper = (props) => {
  const { className, text, errorText, isError, ...otherProps } = props;

  const renderErrorText = () => {
    if (!isError) {
      return null;
    }
    return (
      <p className="input-wrapper__prompt input-wrapper__prompt_disabled">
        {errorText}
      </p>
    );
  };
  return (
    <div className={cn('input-wrapper', className)}>
      <p className="input-wrapper__title">{text}</p>
      <Input className="input-wrapper__input" {...otherProps} />
      {renderErrorText()}
    </div>
  );
};

export default InputWrapper;
