const CtaSection = () => {
  return (
    <section className="cta-home-4 bg-cream">
      <div className="container position-relative">
        <div className="cta-home-4__shape shape-1">
          <img src="/image/cta/cta-4-shape-1.png" alt="image alt" />
        </div>
        <div className="cta-home-4__shape shape-2">
          <img src="/image/cta/cta-4-shape-2.png" alt="image alt" />
        </div>
        <div className="cta-content-block">
          <div className="cta-text-block">
            <h2 className="cta-home-4-title heading-md text-black heading-md--dm-sans">
              Start learning today and expand your knowledge at any level
            </h2>
            <p>
              We have easily downloadable learning app on any device and
              anywhere to experience an exclusive e-learning platform for
              world-class education.
            </p>
          </div>
          <div className="cta-button-group">
            <a href="#">
              <img src="/image/common/app-store-rounded.png" alt="image" />
            </a>
            <a href="#">
              <img src="/image/common/play-store-rounded.png" alt="image" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
