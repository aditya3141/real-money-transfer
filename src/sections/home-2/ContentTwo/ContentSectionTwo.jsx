import Button from "@components/Buttons";
const ContentSectionTwo = () => {
  return (
    <div className="home-2_content-section-2 padding-bottom-150">
      <div className="container">
        <div className="row row--custom">
          <div
            className="col-xl-auto col-lg-5 col-auto"
            data-aos-duration={1000}
            data-aos="fade-left"
          >
            <div className="home-2_content-image-2 content-image--mobile-width">
              <img
                src="/image/home-2/content-image-2.png"
                alt="alternative text"
              />
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-7 col-md-10 col-auto"
            data-aos-duration={1000}
            data-aos="fade-right"
          >
            <div className="content">
              <div className="content-text-block">
                <h2 className="content-title heading-md text-black">
                  Perfect interface for quick support and with no coding
                </h2>
                <p>
                  Visual Builder empowers you to create the perfect AI chatbot
                  quickly and without any coding. Drag and drop conversational
                  elements and test them in real-time to design engaging
                  clients.
                </p>
                <p>
                  It is a modern messaging platform that combines everything you
                  need for effective support, sales, and engagement, all in a
                  simple interface.
                </p>
              </div>
              <div className="content-button-block">
                <Button
                  href="/about"
                  className="btn-masco btn-masco btn-secondary-l02 btn-fill--up"
                >
                  Learn more
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
