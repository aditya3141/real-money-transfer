import React from 'react';

const FeatureWidget = ({ icon, title, text  }) => {
  return (
    <div className="feature-widget">
      <div className="feature-widget__icon">
        <img src={icon} alt="image alt" />
      </div>
      <div className="feature-widget__body">
        <h3 className="feature-widget__title">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default FeatureWidget;