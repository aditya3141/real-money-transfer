import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="cta-home-2 section-padding-100">
      <div className="container">
        <div className="cta-home-2-shape-wrapper">
          <div className="cta-home-2-shape-1">
            <img src="/image/home-2/cta-shape-1.svg" alt="image alt" />
          </div>
          <div className="cta-home-2-shape-2">
            <img src="/image/home-2/cta-shape-2.svg" alt="image alt" />
          </div>
        </div>
        <div className="cta-content-block">
          <h2 className="cta-home-2__title heading-md text-white">
            Sign up for your free trial today &amp; add live chat to your site
          </h2>
          <Link
            href="/contact"
            className="btn-masco btn-secondary-l02 btn-fill--up"
          >
            <span>Get started free</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
