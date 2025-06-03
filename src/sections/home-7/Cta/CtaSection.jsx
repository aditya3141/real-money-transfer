import Button from "@components/Buttons";

const CtaSection = () => {
  return (
    <div className="cta-home-7" id="contact">
      <div className="container">
        <div className="cta-content-block">
          <div className="cta-text-block">
            <h2 className=" heading-lg heading-lg--cabin text-white">
              Sign up for the best web hosting today
            </h2>
          </div>
          <div className="cta-form-wrapper">
            <form action="#">
              <div className="cta-form__input-block">
                <input type="text" placeholder="Enter your email" />
                <Button
                  animation={false}
                  className="btn-masco btn-primary-l07 rounded-pill"
                >
                  <span>Get Started</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
