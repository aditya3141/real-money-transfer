const ContactMainSection = () => {
  return (
    <>
      <div className="contact_main-section padding-bottom-120">
        <div className="container">
          <div className="row row--cuatom">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-11">
              <div className="contact_main-content">
                <div className="content">
                  <div className="content-text-block">
                    <h2 className="heading-md">
                      Fill out this form, We ‘ll quickly get back to you{" "}
                    </h2>
                    <p>
                      We are here to help you! Tell us how we can help and we’ll
                      get in touch within next 24hrs with expert
                    </p>
                    <div className="content-divider" />
                  </div>
                </div>
                <div className="content_main-testimonial">
                  <div
                    className="testimonial-widget-4"
                    data-aos="fade-left"
                    data-aos-delay="{{100 * loop.index}}"
                  >
                    <div className="testimonial-widget-4__rating">
                      <img
                        src="/image/icons/star-five-yellow.svg"
                        className="testimonial-widget-4__star"
                        alt="image alt"
                      />
                    </div>
                    <p>
                      "Snaga did an exceptional job for us. keep up the
                      excellent digital work. Man, this thing is getting better
                      and better as I learn more about it. I have gotten at
                      least 50 times the value from Snaga. It is worth much more
                      than I paid."
                    </p>
                    <div className="testimonial-widget-4__body">
                      <div className="testimonial-widget-4__user-image">
                        <img
                          src="/image/contact-details/user-Image.png"
                          alt="image alt"
                        />
                      </div>
                      <div className="testimonial-widget-4__user-metadeta">
                        <h4 className="testimonial-widget-4__user">
                          Brooklyn Simmons
                        </h4>
                        <span className="testimonial-widget-4__user-position">
                          CEO &amp; Co-founder @ Company
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="offset-xl-1 col-lg-6 col-md-10">
              <div className="form-box-style__form-wrapper bg-light-2">
                <form className="form-box-style">
                  <div className="form-box-style__form-inner">
                    <div className="form-box-style__form-input">
                      <h3 className="form-box-style-title">Your name</h3>
                      <input
                        className="form-control bg-white"
                        type="text"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-box-style__form-input">
                      <h3 className="form-box-style-title">Email address</h3>
                      <input
                        className="form-control bg-white"
                        type="text"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="form-box-style__form-input">
                      <h3 className="form-box-style-title">
                        Write your message
                      </h3>
                      <textarea
                        className="form-control bg-white textarea"
                        placeholder="Write us your question here..."
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </form>
                <div className="form-box-style__form-input-button">
                  <button
                    type="submit"
                    className="btn-masco rounded-pill w-100"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMainSection;
