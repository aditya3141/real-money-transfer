const ContentSectionOne = () => {
  return (
    <div
      className="home-5_content-section-1 section-padding-120 bg-offwhite-3"
      id="about"
    >
      <div className="container">
        <div className="row row--custom ">
          <div
            className="col-xl-6 col-lg-5 col-md-6 col-7"
            data-aos-duration={1000}
            data-aos="fade-right"
          >
            <div className="home-5_content-image-1 ">
              <img
                src="/image/home-5/content-image-1.png"
                alt="alternative text"
              />
              <div className="home-5_content-image-1-shape">
                <img
                  src="/image/home-5/content-image-1-shape.svg"
                  alt="alternative text"
                />
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-7 col-md-10 col-auto"
            data-aos-duration={1000}
            data-aos="fade-left"
          >
            <div className="content">
              <div className="content-text-block">
                <h2 className="content-title heading-md heading-md--general-sans text-l5-secondary">
                  SEO agency that will evolve your search performance
                </h2>
                <p>
                  These days, no business can’t to ignore Search Engine
                  Optimization. SEO should plays a part in your online marketing
                  strategy as it helps people to find you online. Over time that
                  leads to more sales. .
                </p>
              </div>
              <div className="content__stats-block">
                <div className="stat-single">
                  <span className="stat-single__count "> 98%</span>
                  <span className="stat-single__text">
                    Average Conversion Rate
                  </span>
                </div>
                <div className="stat-single">
                  <span className="stat-single__count"> 60M+</span>
                  <span className="stat-single__text"> Traffic Generated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionOne;
