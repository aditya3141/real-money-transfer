import React from 'react';

const FeatureCardThree = ({ title, text, icon }) => {
  return (
    <div className="feature-card-3">
      <div className="feature-card-3__icon-wrapper">
        <img src={icon} alt="feature icon" />
      </div>
      <h4 className="feature-card-3__title">{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default FeatureCardThree;