import CountDown from "./CountDown/CountDown";

const ComingSoonSection = () => {
  return (
    <>
      <section className="coming-soon-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="coming-soon_content-wrapper">
                <CountDown />

                <h2 className="heading-md text-black">
                  We're coming! With something special for you. Stay with us
                </h2>
                <div className="coming-soon_newsletter">
                  <form action="#" className="newsletter-form-1">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="form-control"
                    />
                    <button className="btn-masco rounded-pill">
                      Get Notified
                    </button>
                  </form>
                  <p className="coming-soon_newsletter-bottom-text">
                    We do not share your information with any third party &amp;
                    no spam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComingSoonSection;
