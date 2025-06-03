import Button from "@components/Buttons";

const CtaSection = () => {
  return (
    <div className="cta-base">
      <div className="container">
        <div className="cta-base__wrapper border-bottom-dark">
          <div className="row align-items-center justify-content-center justify-content-md-between gutter-y-20">
            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-7 col-10">
              <div className="cta-base__text-block">
                <h2 className="heading-md text-white">
                 Want to send money quickly and securely?
                </h2>
              </div>
            </div>
            <div className="col-xl-auto col-lg-4 col-md-5 col-xs-8 col-10">
              <div className="cta-base__button">
                <Button
                  href="/contact"
                  className="btn-masco rounded-pill btn-fill--up"
                >
                  <span>Send Money</span>
                </Button>
                <div className="cta-base__button-shape">
                  <img src="/image/home-1/cta-shape.svg" alt="image " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
