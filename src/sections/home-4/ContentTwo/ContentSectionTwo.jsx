import Button from "@components/Buttons";

const ContentSectionTwo = () => {
  return (
    <div className="home-4_content-section-2 section-padding bg-cream">
      <div className="container">
        <div className="row row--custom ">
          <div
            className="offset-xxl-1 col-lg-5 col-md-6 col-7"
            data-aos-duration={1000}
            data-aos="fade-left"
          >
            <div className="home-4_content-image-2 content-image--mobile-width">
              <img
                src="/image/home-4/content-image-2.png"
                alt="alternative text"
              />
            </div>
          </div>
          <div
            className="col-xxl-6 col-lg-7 col-md-11"
            data-aos-duration={1000}
            data-aos="fade-right"
          >
            <div className="content">
              <div className="content-text-block">
                <h2 className="content-title heading-md heading-md text-black heading-md--dm-sans">
                  Share your knowledge and experience with others
                </h2>
                <p>
                  We believe everyone has something to give. Share your unique
                  skills &amp; experience with students around the world by
                  teaching free or paid.
                </p>
              </div>
              <div className="content-list-block">
                <ul className="content-list">
                  <li className="content-list-item">
                    <img
                      src="/image/icons/icon-check-black.svg"
                      alt="alternative text"
                    />
                    Publish the course you want, in the way you want
                  </li>
                  <li className="content-list-item">
                    <img
                      src="/image/icons/icon-check-black.svg"
                      alt="alternative text"
                    />
                    Teach what you know and help learners gain new skills
                  </li>
                  <li className="content-list-item">
                    <img
                      src="/image/icons/icon-check-black.svg"
                      alt="alternative text"
                    />
                    Expand your professional network, build your expertise
                  </li>
                </ul>
              </div>
              <div className="content-button-block">
                <Button
                  animation={false}
                  href="/sign-up"
                  className="btn-primary-l04 btn-shadow btn-shadow--reverse btn-shadow--reverse-center rounded-pill"
                >
                  Become an instructor
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionTwo;
