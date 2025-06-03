import PortfolioWidgetOne from "@components/Widgets/Portfolio/One/PortfolioWidgetOne";
import SectionHeading from "@components/Layout/SectionHeading";
import Button from "@components/Buttons/Button";

const settings = {
  sectionTitle: {
    columnLeft: "col-xl-6  col-md-8",
    className: "text-center text-md-initial",
    title: "We create world-class web design, & branding",
    titleClass: "heading-md text-black",
    buttonClass: "btn-masco rounded-pill btn-fill--up",
    buttonText: "See more works",
    link: "portfolio.html",
  },
  cardOne: {
    image: "/image/home-1/porfolio-img1.png",
    title: "App — The power of communication",
    category: "UI/UX Design",
    url: "/portfolio-details",
    button: true,
  },
  cardTwo: {
    image: "/image/home-1/porfolio-img2.png",
    title: "Website — The future lifestyle platform.",
    category: "Branding",
    url: "/portfolio-details",
    button: true,
  },
};

let settingProps = {
  sectionHeading: {
    type: "double",
    title: "We create world-class web design, & branding",
    buttonText: "See more works",
    classes: {
      columnLeft: "col-xl-6  col-md-8 ",
      columnRight: "col-xl-3 col-lg-4 col-md-4",
      className: "text-center text-md-initial",
      title: "heading-md text-black",
      row: "text-center text-md-initial",
    },
  },
};
const Portfolio = () => {
  return (
    <div
      className="home-1_portfolio-section section-padding-120"
      id="portfolio"
    >
      <div className="portfolio-shape">
        <img src="/image/home-1/portfolio-shape.png" alt="shape" />
      </div>
      <div className="container">
        <SectionHeading {...settingProps.sectionHeading}>
          <Button
            href="/portfolio"
            className="btn-masco rounded-pill btn-fill--up"
          >
            See more works
          </Button>
        </SectionHeading>

        <div className="row row--portfolio-gutter">
          <div
            className="col-md-6 col-xs-10"
            data-aos-duration="1000"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <PortfolioWidgetOne {...settings.cardOne} />
          </div>
          <div
            className="col-md-6 col-xs-10"
            data-aos-duration="1000"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <PortfolioWidgetOne {...settings.cardTwo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
