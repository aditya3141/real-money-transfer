import Button from "@components/Buttons/Button";

const CtaSection = () => {
  return (
    <div className="cta-home-8">
      <div className="container">
        <div className="cta-home-8-wrapper">
          <div className="cta-home-8-shape-wrapper">
            <div className="cta-home-8-shape">
              <img src="/image/cta/cta-8-shape.png" alt="image alt" />
            </div>
          </div>
          <div className="cta-content-block">
            <div className="cta-text-block">
              <h2 className="cta-title heading-md text-cream">
                Contact us today to get a free consultation!
              </h2>
              <p>
                Send us a message to get answers to any of your questions &amp;
                we'll get back to you within 24-48 hours or as soon as possible.
              </p>
            </div>
            <div className="cta-button-group">
              <Button
                className="btn-masco btn-primary-l08 btn-fill--slide"
                animation={false}
                href="#"
              >
                <span>Get In Touch</span>
              </Button>
              <Button
                className="btn-masco btn-outline-l08 btn-fill--slide-reverse"
                animation={false}
                href="#"
              >
                <span>View Services</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="curved-bg">
        <img src="/image/home-8/curve.png" alt="image alt" />
      </div>
    </div>
  );
};

export default CtaSection;
