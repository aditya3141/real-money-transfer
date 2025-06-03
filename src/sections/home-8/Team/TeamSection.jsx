import TeamWidget from "@components/Widget/Team/TeamWidget";
import data from "./data";
import Button from "../../../components/Buttons/Button";
const TeamSection = () => {
  return (
    <>
      <div className="home-8_team-section padding-bottom-150 bg-cream">
        <div className="container">
          <div className="row row--custom">
            <div className="col-xl-5 col-lg-6 col-md-8 col-10">
              <div className="content">
                <div className="content-text-block">
                  <h2 className="content-title text-black-2 heading-lg">
                    Meet members of our creative team
                  </h2>
                  <p>
                    We work to create the most attractive &amp; meaningful place
                    for small businesses. Our Team always ready to help you.
                  </p>
                  <ul className="content-list">
                    <li className="content-list-item">
                      <img
                        src="/image/icons/icon-check-purple.svg"
                        alt="icon check purple"
                      />
                      A team consisting of skilled members
                    </li>
                    <li className="content-list-item">
                      <img
                        src="/image/icons/icon-check-purple.svg"
                        alt="icon check purple"
                      />
                      Ready to help you 24/7 email &amp; phone support
                    </li>
                  </ul>
                </div>
                <div className="content-button-block">
                  <Button
                    href="#"
                    animation={false}
                    className="btn-masco btn-primary-l08 btn-fill--slide"
                  >
                    <span>View All Members</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="offset-xl-1 col-lg-6 col-md-12 col-xs-10 col-5">
              <div className="row gutter-y-default team-widget-row">
                {data?.map((item, index) => (
                  <TeamWidget key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamSection;
