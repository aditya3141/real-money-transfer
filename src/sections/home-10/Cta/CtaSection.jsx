import Button from "@components/Buttons/Button";

const CtaSection = () => {
  return (
    <div className="cta-home-10">
      <div className="container">
        <div className="cta-content-block">
          <div className="cta-text-block">
            <h2 className="cta-home-10-title heading-lg heading-lg--clash-display text-offwhite-2">
              Feel proud of everything you write with Masco
            </h2>
          </div>
          <div>
            <Button
              animation={false}
              href="#"
              className="btn-masco btn-secondary-l10 rounded-pill btn-fill--slide-left"
            >
              <span>Get started— it's free</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
