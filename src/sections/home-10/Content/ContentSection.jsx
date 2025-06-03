import Button from "@components/Buttons/Button";

const ContentSection = () => {
  return (
    <div className="home-10_content-section section-padding-120">
      <div className="home-10_content-section-1 padding-bottom-120">
        <div className="container">
          <div className="row row--custom">
            <div
              className=" col-lg-5 col-md-6 col-xs-7 col-8"
              data-aos-duration={1000}
              data-aos="fade-right"
            >
              <div className="home-10_content-image-1 ">
                <img
                  src="/image/home-10/content-image-1.png"
                  alt="alternative text"
                />
              </div>
            </div>
            <div
              className="offset-xl-1 col-xl-6 col-lg-5 col-md-10 col-auto"
              data-aos-duration={1000}
              data-aos="fade-left"
            >
              <div className="content">
                <div className="content-text-block">
                  <h2 className="content-title heading-lg heading-lg--clash-display text-offwhite-2">
                    Fast communication tool with confidence
                  </h2>
                  <p>
                    We know what it's like to panic when you want to share
                    something you've written. It's frustrating when you can't
                    get your writing to do justice to the ideas you want to
                    write and say.
                  </p>
                  <p>
                    And so we came up with the Masco AI writing tool. Which
                    helps you write faster and more confidently and also saves
                    you time.
                  </p>
                </div>
                <div className="content-button-block">
                  <Button
                    href="#"
                    animation={false}
                    className="btn-masco btn-secondary-l10 rounded-pill btn-fill--slide-left"
                  >
                    <span>
                      <span>Learn more</span>
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-10_content-section-2">
        <div className="container">
          <div className="row row--custom">
            <div
              className="col-xl-auto col-lg-5 col-md-6 col-xs-7 col-8"
              data-aos-duration={1000}
              data-aos="fade-left"
            >
              <div className="home-10_content-image-2 ">
                <img
                  src="/image/home-10/content-image-2.png"
                  alt="alternative text"
                />
                <div className="home-10_content-image-2-card">
                  <img
                    src="/image/home-10/content-image-2-card.png"
                    alt="image alt"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-7 col-md-10 col-auto"
              data-aos-duration={1000}
              data-aos="fade-right"
            >
              <div className="content">
                <div className="content-text-block">
                  <h2 className="content-title heading-lg heading-lg--clash-display text-offwhite-2">
                    Use all languages and advanced grammar
                  </h2>
                  <p>
                    Masco catches 80% more language quality problems and than
                    other spelling &amp; grammar checkers using a machine
                    learning system trained on millions of English sentences.
                  </p>
                </div>
                <ul className="content-list">
                  <li className="content-list-item">
                    <a href="#">
                      <span>1. Engaging and authentic writing</span>
                      <i className="fa-solid fa-arrow-right" />
                    </a>
                  </li>
                  <li className="content-list-item">
                    <a href="#">
                      <span>2. 80+ AI copywriting templates</span>
                      <i className="fa-solid fa-arrow-right" />
                    </a>
                  </li>
                  <li className="content-list-item active">
                    <a href="#">
                      <span>3. Built-in plagiarism checker</span>
                      <i className="fa-solid fa-arrow-right" />
                    </a>
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

export default ContentSection;
