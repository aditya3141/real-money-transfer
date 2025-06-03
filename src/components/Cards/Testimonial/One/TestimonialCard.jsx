import React from 'react';

const TestimonialCardOne = ({ title, text, authorImage, authorName, authorPosition }) => {
  return (
      <div className="testimonial-card">
        <img
          src="/image/icons/star-five.svg"
          className="testimonial-card__star"
          alt="image alt"
        />
        <h3 className="testimonial-card__title">{title}</h3>
        <p>{text}</p>
        <div className="testimonial-card__author">
          <div className="testimonial-card__author-image">
            <img src={authorImage} alt="image alt" />
          </div>
          <div className="testimonial-card__author-info">
            <h4>{authorName}</h4>
            <span>{authorPosition}</span>
          </div>
        </div>
      </div>
  );
};

export default TestimonialCardOne;
