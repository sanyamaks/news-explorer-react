import React from 'react';
import '../Form.css';
import InputWrapper from '../../InputWrapper/InputWrapper';
import Button from './../../Button/Button';

const FormSignIn = (props) => {
  const { errorText, handleClickToggle } = props;

  const renderErrorText = () => {
    if (!errorText) {
      return null;
    }
    return <p className="form__prompt">{errorText}</p>;
  };

  return (
    <form className="form" noValidate>
      <h3 className="form__title">Вход</h3>
      <InputWrapper
        className="form__input-wrapper"
        text="Email"
        errorText="Неправильный формат email"
        type="email"
        name="email"
        placeholder="Введите почту"
        minLength="2"
        maxLength="30"
        required
      />
      <InputWrapper
        className="form__input-wrapper"
        text="Пароль"
        errorText="Неправильный формат пароля"
        type="password"
        name="password"
        placeholder="Введите пароль"
        minLength="8"
        required
      />
      {renderErrorText()}
      <Button
        className="form__button"
        variant="disabled"
        text="Войти"
        disabled={true}
      />
      <p className="form__text">
        или{' '}
        <button className="form__choice" type="button" onClick={handleClickToggle}>
          Зарегистироваться
        </button>
      </p>
    </form>
  );
};

export default FormSignIn;
