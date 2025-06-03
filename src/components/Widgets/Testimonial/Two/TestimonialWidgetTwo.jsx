
const TestimonialWidgetTwo = ({ text, author_image, author_name, author_position }) => {
  return (
    <div className="testimonial-widget-2">
      <div className="testimonial-widget-2__star">
        <img src="/image/icons/star-yellow.svg" alt="image alt" />
      </div>
      <div className="testimonial-widget-2__body">
        <p>{text}</p>
        <div className="testimonial-widget-2__user-block">
          <img src={author_image} alt="image" />
          <div className="author-info">
            <h4 className="testimonial-widget-2__user-name">{author_name}</h4>
            <span className="testimonial-widget-2__user-position">{author_position}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialWidgetTwo;