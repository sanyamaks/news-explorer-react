import React from 'react';

const IconClose = (props) => {
  const { Icon } = props;
  return <Icon className="popup__icon-close" />;
};

export default React.memo(IconClose);
