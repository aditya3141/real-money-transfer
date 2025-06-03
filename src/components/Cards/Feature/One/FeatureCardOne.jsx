import React from 'react';
import { hasClassProps } from '@utils/helpers';

const FeatureCard = ({ icon, title, text,className } ) => (
  <div className={`feature-card h-100 ${hasClassProps(className)}`}>
    <div className="feature-card__icon">
      <img src={icon} alt="Feature Card Icon" />
    </div>
    <div className="feature-card__body">
      <h3 className="feature-card__title">{title}</h3>
      <p>{text}</p>
    </div>
  </div>
);

export default FeatureCard;
