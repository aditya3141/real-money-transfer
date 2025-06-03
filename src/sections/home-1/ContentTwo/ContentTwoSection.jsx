const ContentTwo = () => {
  return (
    <div className="home-1_content-section-2 padding-bottom-120">
      <div className="container">
        <div className="row row--custom">
          <div
            className="col-xl-5 col-lg-5 col-auto"
            data-aos-duration={1000}
            data-aos="fade-right"
          >
            <div className="home-1_content-image-2 content-image--mobile-width">
              <img
                src="/image/home-1/content-image-2.png"
                alt="alternative text"
              />
              <div className="home-1_content-image-2-shape">
                <img
                  src="/image/home-1/content-image-2-shape.svg"
                  alt="alternative text"
                />
              </div>
            </div>
          </div>
          <div
            className="offset-xl-1 col-xl-6 col-lg-7 col-md-11"
            data-aos-duration={1000}
            data-aos="fade-left"
          >
            <div className="content">
              <div className="content-text-block">
                <h2 className="content-title heading-md text-black">
                  Discover the latest digital strategies &amp; emerging ideas
                  for business growth
                </h2>
                <p>
                  Our brand tenders and marketing mixologists always serve up
                  unique, design-forward websites coded with today’s modern
                  technologies
                </p>
              </div>
              <div className="content-list-block">
                <ul className="content-list">
                  <li className="content-list-item">
                    <img
                      src="/image/icons/icon-check-blue.svg"
                      alt="alternative text"
                    />
                    Reach new business opportunities or test your product ideas.
                  </li>
                  <li className="content-list-item">
                    <img
                      src="/image/icons/icon-check-blue.svg"
                      alt="alternative text"
                    />
                    Automate your processes and get data-driven business
                    insights.
                  </li>
                  <li className="content-list-item">
                    <img
                      src="/image/icons/icon-check-blue.svg"
                      alt="alternative text"
                    />
                    Create lightweight, scalable, and easly accessible cloud
                    solution.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTwo;
