const FormSection = () => {
  return (
    <>
      <div className="contact-2_form-section padding-top-120 padding-bottom-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="contact_main-comment-box-wrapper border-none">
                <div className="contact_main-comment-box__inner">
                  <div className="form-box-style__form-wrapper">
                    <form className="form-box-style">
                      <div className="row form--row-custom form-box-style__form-inner">
                        <div className="col-lg-6 col-12">
                          <div className="form-box-style__form-input">
                            <h3 className="form-box-style-title">Your name</h3>
                            <input
                              className="form-control bg-light-2"
                              type="text"
                              placeholder="Enter your full name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-12 ">
                          <div className="form-box-style__form-input">
                            <h3 className="form-box-style-title">
                              Email address
                            </h3>
                            <input
                              className="form-control bg-light-2"
                              type="text"
                              placeholder="Enter your email"
                            />
                          </div>
                        </div>
                        <div className=" col-12">
                          <div className="form-box-style__form-input">
                            <h3 className="form-box-style-title">Subject</h3>
                            <input
                              className="form-control bg-light-2"
                              type="text"
                              placeholder="Enter subject"
                            />
                          </div>
                        </div>
                        <div className=" col-12">
                          <div className="form-box-style__form-input">
                            <h3 className="form-box-style-title">
                              Write your message
                            </h3>
                            <textarea
                              className="form-control bg-light-2 textarea"
                              placeholder="Write us your questions here..."
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-box-style__form-input-button">
                        <button
                          type="submit"
                          className="btn-masco rounded-pill"
                        >
                          Submit Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormSection;
