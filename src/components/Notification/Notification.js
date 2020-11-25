import React from 'react';
import './Notification.css';

const Notification = (props) => {
  const { text, buttonText, handleClickToggle } = props;

  const renderButton = () => {
    if (!buttonText) {
      return null;
    }
    return (
      <button className="notification__choice" type="button" onClick={handleClickToggle}>
        {buttonText}
      </button>
    );
  };

  return (
    <div className="notification notification_disabled">
      <h3 className="notification__title">{text}</h3>
      {renderButton()}
    </div>
  );
};

export default Notification;
