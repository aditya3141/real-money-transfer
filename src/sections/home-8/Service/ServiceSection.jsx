import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";

const settingProps = {
  sectionHeading: {
    title: "Great services for adding your business value",
    column: "col-xxl-7 col-xl-8 col-lg-9 col-md-10 col-auto",
    text: "We provide services that act as a startup mentor or have consulting services as part of adding value proposition of your business.",
    classes: {
      title: "heading-lg text-cream",
      row: "justify-content-center text-center",
    },
  },
};
const ServiceSection = () => {
  return (
    <>
      <div className="home-8_service-section section-padding-120" id="features">
        <div className="service-shape">
          <img
            src="./image/home-8/service-shape.png"
            alt="image alt"
            className="service-shape"
          />
        </div>
        <div className="particles">
          <img
            src="./image/icons/particle-circle-1.svg"
            alt="image alt"
            className="particle-1"
          />
          <img
            src="./image/icons/particle-circle-2.svg"
            alt="image alt"
            className="particle-2"
          />
          <img
            src="./image/icons/particle-circle-3.svg"
            alt="image alt"
            className="particle-3"
          />
        </div>
        <div className="container">
          <SectionHeading {...settingProps.sectionHeading} />
          <div className="row row--service-list">
            <div className="col-lg-6">
              <ul className="home-8_service-list">
                <li className="home-8_service-list__item">
                  <a href="#">
                    <span>1. Engage in project management</span>{" "}
                    <i className="fa-solid fa-arrow-right" />
                  </a>
                </li>
                <li className="home-8_service-list__item">
                  <a href="#">
                    <span>2. Creating operations and delegations </span>
                    <i className="fa-solid fa-arrow-right" />
                  </a>
                </li>
                <li className="home-8_service-list__item">
                  <a href="#">
                    <span>3. Human resource management</span>
                    <i className="fa-solid fa-arrow-right" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="home-8_service-list">
                <li className="home-8_service-list__item">
                  <a href="#">
                    <span>4. Gradual development of process</span>
                    <i className="fa-solid fa-arrow-right" />
                  </a>
                </li>
                <li className="home-8_service-list__item">
                  <a href="#">
                    <span>5. Ensuring overall quality &amp; standards</span>
                    <i className="fa-solid fa-arrow-right" />
                  </a>
                </li>
                <li className="home-8_service-list__item">
                  <a href="#">
                    <span>6. Compare project A/B testing</span>{" "}
                    <i className="fa-solid fa-arrow-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
