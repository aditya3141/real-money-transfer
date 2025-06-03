import React from 'react';

const ContentWidgetTwo = ({ title, text, iconSrc="/image/icons/icon-check-blue.svg" }) => {
  return (
    <div className="content-widget-2">
      <h3 className="content-widget-2__title">
        <img src={iconSrc} alt="icon" />{title}
      </h3>
      <p>
        {text}
      </p>
    </div>
  );
};

export default ContentWidgetTwo;