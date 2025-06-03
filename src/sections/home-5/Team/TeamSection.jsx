import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";
import data from "./data";
import Button from "@components/Buttons/Button";
const TeamSection = () => {
  const settingProps = {
    sectionHeading: {
      title: "Our SEO experts are available to assist you",
      type: "double",
      classes: {
        title: "heading-md heading-md--general-sans text-l5-secondary",
        row: "justify-content-center text-center text-md-initial justify-content-md-between",
        columnLeft: "col-xl-5 col-lg-6 col-md-8 col-xs-10",
        columnRight: "col-xl-3 col-lg-4 col-md-4",
      },
    },
  };
  return (
    <div className="home-5_team-section section-padding" id="team">
      <div className="container">
        <SectionHeading {...settingProps.sectionHeading}>
          <Button
            href="/team"
            animation={false}
            className="btn-masco btn-primary-l05 btn-fill--up"
          >
            Meet All Members
          </Button>
        </SectionHeading>

        <div className="row team-card-row">
          {data?.map((item, index) => (
            <div key={index} className="col-lg-3 col-sm-6">
              <div className="team-card">
                <img src={item.image} alt="Team Member Image" />
                <div className="team-card__body">
                  <h4 className="team-card__name">{item.name}</h4>
                  <div className="team-card__body-bottom">
                    <span className="team-card__position">{item.position}</span>
                    <div className="team-card__social-links">
                      <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
