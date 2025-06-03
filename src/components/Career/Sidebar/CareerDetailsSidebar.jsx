const CareerDetailsSidebar = () => {
  return (
    <>
      <div className="career-details_sidebar">
        <div className="form-box-style__form-wrapper bg-light-2">
          <h3 className="form-box-style-heading__title">
            Apply for this position
          </h3>
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
                <h3 className="form-box-style-title">Write your message</h3>
                <textarea
                  className="form-control bg-white textarea"
                  placeholder="Write us your question here..."
                  defaultValue={""}
                />
              </div>
              <div className="form-box-style__condition-block">
                <div id="item-list">
                  <span className="form-box-style__condition">
                    <input type="checkbox" id="checkbox" />I agree to the
                    mthemeus privacy policy*
                  </span>
                </div>
              </div>
            </div>
          </form>
          <div className="form-box-style__form-input-button">
            <button type="submit" className="btn-masco rounded-pill w-100">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerDetailsSidebar;
