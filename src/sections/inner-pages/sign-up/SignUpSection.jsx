const SignUpSection = () => {
  return (
    <div className="account-section bg-light-2 section-padding-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-10">
            <div className="account-heading-block">
              <a href="/" className="account-brand d-block">
                <img src="/image/icons/brand.svg" alt="masco" />
              </a>
              <div className="account-heading">
                <h2 className="account-heading__title heading-md">
                  Create an account
                </h2>
                <p>Enter the information below to create your account</p>
              </div>
            </div>
            <form className="account_comment-box">
              <div className="account_comment-box__form-inner">
                <div className="account_comment-box__form-input">
                  <h2 className="account-title">Your name</h2>
                  <input
                    className="form-control bg-white"
                    type="text"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="account_comment-box__form-input">
                  <h2 className="account-title">Email address</h2>
                  <input
                    className="form-control bg-white"
                    type="text"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="account_comment-box__form-input">
                  <h2 className="account-title">Password*</h2>
                  <input
                    className="form-control bg-white"
                    type="text"
                    placeholder="typepassword"
                  />
                </div>
                <div className="account-condition-block">
                  <div id="item-list">
                    <span className="account-condition">
                      <input type="checkbox" id="checkbox" />I agree to the{" "}
                      <span>Terms</span> and <span>Conditions of Privacy</span>
                    </span>
                  </div>
                </div>
                <div className="account_comment-box__form-input-button">
                  <button
                    type="submit"
                    className="btn-masco rounded-pill w-100"
                  >
                    Create Account
                  </button>
                  <div className="button-bottom-text">
                    <span>
                      Already have an account? <a href="#">Sign in now</a>
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpSection;
