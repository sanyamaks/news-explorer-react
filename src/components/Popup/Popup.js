import React from 'react';
import ReactDOM from 'react-dom';
import './Popup.css';
import { ReactComponent as Icon } from '../../assets/icons/icon-close-popup.svg';
import FormSignIn from '../Form/FormSignIn/FormSignIn';
import FormSignUp from '../Form/FormSignUp/FormSignUp';
import Notification from '../Notification/Notification';

const Popup = (props) => {
  console.log('Popup');

  const { isActive, closePopup, children } = props;
  if (!isActive) {
    return null;
  }

  const popupClick = (event) => {
    if (event.target === document.querySelector('.popup')) {
      closePopup();
    }
  };

  return ReactDOM.createPortal(
    <div className="popup" onClick={popupClick}>
      <div className="popup__content popup__content_transition">
        <button
          className="popup__button-close"
          type="button"
          onClick={closePopup}
        >
          <Icon className="popup__icon-close" />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('root-popup')
  );
};

export default React.memo(Popup);
