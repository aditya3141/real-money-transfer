const TestimonialWidget = ({ text,rating="4.5",totalReview }) => (
    <div className="testimonial-widget">
      <div className="testimonial-widget__body">
        <div className="testimonial-widget__stars">
          <img src="/image/icons/star.svg" alt="Rated Star" />
        </div>
        <p>{text}</p>
      </div>
  
      <div className="testimonial-widget__rating">
        <strong>Rated {rating}/5 -</strong><span>from over {totalReview} reviews</span>
      </div>
    </div>
  );
  
  export default TestimonialWidget;