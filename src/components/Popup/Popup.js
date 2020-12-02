import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';
import './Popup.css';
import { ReactComponent as Icon } from '../../assets/icons/icon-close-popup.svg';
import IconClose from './IconClose/IconClose';

const Popup = (props) => {
  console.log('Popup');

  const { closePopup, children } = props;

  const popupClick = useCallback(
    (event) => {
      if (event.target === document.querySelector('.popup')) {
        closePopup();
      }
    },
    [closePopup]
  );

  return ReactDOM.createPortal(
    <div className="popup" onClick={popupClick}>
      <div className="popup__content popup__content_transition">
        <button
          className="popup__button-close"
          type="button"
          onClick={closePopup}
        >
          <IconClose Icon={Icon} />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('root-popup')
  );
};

export default React.memo(Popup);
