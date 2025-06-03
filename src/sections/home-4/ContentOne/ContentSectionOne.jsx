import Button from "@components/Buttons";

const ContentSectionOne = () => {
  return (
    <div
      className="home-4_content-section-1 section-padding-120 bg-cream"
      id="about"
    >
      <div className="content-shape">
        <img src="/image/home-4/content-shape.svg" alt="book" />
      </div>
      <div className="container">
        <div className="row row--custom ">
          <div
            className="col-lg-5 col-md-6 col-7"
            data-aos-duration="1000"
            data-aos="fade-right"
          >
            <div className="home-4_content-image-1 ">
              <img
                src="/image/home-4/content-image-1.png"
                alt="alternative text"
              />
            </div>
          </div>
          <div
            className="offset-xl-1 col-xl-6 col-lg-7 col-md-10 col-auto"
            data-aos-duration="1000"
            data-aos="fade-left"
          >
            <div className="content">
              <div className="content-text-block">
                <h2 className="content-title heading-md heading-md--dm-sans text-black">
                  Propel your career & expand your knowledge at any level
                </h2>
                <p>
                  {" "}
                  Masco is an online course className that provides various
                  categories of courses ranging from design, photography,
                  marking, and many more. With more than 250 schools and
                  colleges and 50,000+ students
                </p>
                <p>
                  from multiple countries. With this curriculum, it is hoped
                  that students can learn with experts in their respective
                  fields anytime & anywhere.
                </p>
              </div>
              <div className="content-button-block">
                <Button
                  animation={false}
                  href="/about"
                  className="btn-primary-l04 btn-shadow btn-shadow--reverse btn-shadow--reverse-center rounded-pill"
                >
                  Explore more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionOne;
