const HeroSection = () => {
  return (
    <div className="home-5_hero-section bg-offwhite-3" id="hero">
      <div className="container">
        <div className="row row--custom">
          <div
            className="col-lg-5 col-md-7 col-sm-8 col-10"
            data-aos-duration={1000}
            data-aos="fade-left"
            data-aos-delay={300}
          >
            <div className="home-5_hero-image-block">
              <div className="home-5_hero-image">
                <img src="/image/home-5/hero-image.png" alt="hero image" />
              </div>
            </div>
          </div>
          <div
            className="col-lg-7 col-md-10"
            data-aos-duration={1000}
            data-aos="fade-right"
            data-aos-delay={300}
          >
            <div className="home-5_hero-content">
              <div className="home-5_hero-content-text">
                <h1 className="home-5_hero-content__title heading-xl heading-xl--general-sans text-l5-secondary">
                  Bring additional qualified traffic to your website
                </h1>
                <p>
                  SEO is a digital marketing strategy that helps your website
                  appear in relevant search results in search engines. It
                  involves various techniques from using to keywords on your
                  pages to earning links to your site.
                </p>
              </div>
              <div className="home-5_hero-content-newsletter">
                <form action="#" className="newsletter-form-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="form-control"
                  />
                  <button className="btn-masco btn-primary-l05">
                    Get Started
                  </button>
                </form>
                <span className="home-5_hero-content-review-text">
                  <img src="/image/home-5/review-icon.svg" alt="image" />( 4.8
                  out of 5 Rating)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
