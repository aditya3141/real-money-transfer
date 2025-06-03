const TestimonialCard = ({ title, description, userName, userPosition }) => {
  return (
    <>
      <div className="testimonial-card-2 ">
        <div className="testimonial-card-2__image">
          <img
            src="/image/icons/star-five.svg"
            className="testimonial-card-2__star"
            alt="image alt"
          />
        </div>
        <div className="testimonial-card-2__body">
          <h3 className="testimonial-card-2__title">{title}</h3>
          <p>{description}</p>
        </div>
        <div className="testimonial-card-2__metadata">
          <h4 className="testimonial-card-2__user-name">{userName}</h4>
          <span className="testimonial-card-2__user-position">
            {userPosition}
          </span>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
/* 
<div class="testimonial-card-2 slick-slide" data-slick-index="0" aria-hidden="true" style="width: 523px; position: relative; left: 0px; top: 0px; z-index: 998; opacity: 0; transition: opacity 500ms linear 0s;" tabindex="-1" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00">
              <div class="testimonial-card-2__image">
                <img src="./image/icons/star-five.svg" class="testimonial-card-2__star" alt="image alt">
              </div>

              <div class="testimonial-card-2__body">
                <h3 class="testimonial-card-2__title">Masco is an Excellent company </h3>
                <p>Masco is an excellent company. in everything uptime, fast technical support,
                  sales, &amp; billing-friendly people.
                  If you want to open a web solutions must register.</p>
              </div>
              
              <div class="testimonial-card-2__metadata">
                <h4 class="testimonial-card-2__user-name">Karen Lynn</h4>
                <span class="testimonial-card-2__user-position">Founder @ Company</span>
              </div>
</div>
*/
