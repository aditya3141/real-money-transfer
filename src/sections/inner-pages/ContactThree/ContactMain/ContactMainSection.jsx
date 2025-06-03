const ContactMainSection = () => {
  return (
    <>
      <div className="contact-3_main-section section-padding-120">
        <div className="container">
          <div className="row row--custom">
            <div className="col-xl-5 col-lg-6">
              <div className="feature-widget-6-row">
                <div
                  className="feature-widget-6"
                  data-aos-duration={1000}
                  data-aos="fade-left"
                  data-aos-delay="{{item.aos}}"
                >
                  <div className="feature-widget-6__icon">
                    <img
                      src="/image/contact-details/feature-icon-1.svg"
                      alt="image alt"
                    />
                  </div>
                  <div className="feature-widget-6__body">
                    <h3 className="feature-widget-6__title">Chat with us</h3>
                    <p>
                      We're waiting to help you every Monday-Friday from 9 am to
                      5 pm EST easily.
                    </p>
                  </div>
                </div>
                <div
                  className="feature-widget-6"
                  data-aos-duration={1000}
                  data-aos="fade-left"
                  data-aos-delay="{{item.aos}}"
                >
                  <div className="feature-widget-6__icon">
                    <img
                      src="/image/contact-details/feature-icon-2.svg"
                      alt="image alt"
                    />
                  </div>
                  <div className="feature-widget-6__body">
                    <h3 className="feature-widget-6__title">Give us a call</h3>
                    <p>
                      Give us a ring at <span>(+088-234-567-90)</span>. Every
                      monday-friday from 9 am to 5 pm.
                    </p>
                  </div>
                </div>
                <div
                  className="feature-widget-6"
                  data-aos-duration={1000}
                  data-aos="fade-left"
                  data-aos-delay="{{item.aos}}"
                >
                  <div className="feature-widget-6__icon">
                    <img
                      src="/image/contact-details/feature-icon-3.svg"
                      alt="image alt"
                    />
                  </div>
                  <div className="feature-widget-6__body">
                    <h3 className="feature-widget-6__title">Email Us</h3>
                    <p>
                      Drop us an email at <span>example@gmail.com</span> and
                      you'll receive a reply within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-6 col-md-10">
              <div className="contact-3_main-comment-box-wrapper bg-light-2">
                <form className="contact-3_main-comment-box">
                  <div className="contact-3_main-comment-box__form-inner">
                    <h2 className="contact-title">Send us a message</h2>
                    <div className="contact-3_main-comment-box__form-input">
                      <input
                        className="form-control "
                        type="text"
                        placeholder="Enter your full name*"
                      />
                    </div>
                    <div className="contact-3_main-comment-box__form-input">
                      <input
                        className="form-control "
                        type="text"
                        placeholder="Enter your phone number*"
                      />
                    </div>
                    <div className="contact-3_main-comment-box__form-input">
                      <input
                        className="form-control "
                        type="text"
                        placeholder="Enter your email*"
                      />
                    </div>
                    <div className="contact-3_main-comment-box__form-input">
                      <textarea
                        className="form-control  textarea"
                        placeholder="Write us your question here..."
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="contact-3_main-comment-box__form-input-button">
                    <button
                      type="submit"
                      className="btn-masco rounded-pill w-100"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMainSection;
