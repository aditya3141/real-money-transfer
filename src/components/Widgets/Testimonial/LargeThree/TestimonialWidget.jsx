const TestimonialWidget = ({ imgSrc, description, userName, position }) => {
  return (
    <>
      <div className="row testimonial-widget-large-3-row">
        <div className="col-lg-3 col-md-4 col-xs-5 col-6">
          <div className="testimonial-widget-large-3__image">
            <img src={imgSrc} alt="image alt" />
          </div>
        </div>
        <div className="col-lg-9  col-md-10">
          <div className="testimonial-widget-large-3__body">
            <p>{description}</p>
            <div className="testimonial-widget-large-3__user-block">
              <h4 className="testimonial-widget-large-3__user-name">
                {userName}
              </h4>
              <span className="testimonial-widget-large-3__user-position">
                {position}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialWidget;
