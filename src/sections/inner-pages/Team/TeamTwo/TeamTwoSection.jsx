import TeamCardTwo from "@components/Cards/Team/Two/TeamCardTwo";
import data from "./data.json";
import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";
import Button from "@components/Buttons/Button";

const settingProps = {
  sectionHeading: {
    title: "The amazing team behind our creative products",
    column: "col-xxl-6 col-xl-7 col-lg-8 col-md-9 col-11",
    classes: {
      title: "heading-md--v3",
      row: "justify-content-center text-center",
    },
  },
};
const TeamTwoSection = () => {
  return (
    <>
      <div className="team-section padding-bottom-120 ">
        <div className="container">
          <SectionHeading {...settingProps.sectionHeading} />

          <div className="row team-card-2-row">
            {data?.map((item, index) => (
              <div key={index} className="col-lg-3 col-sm-6 col-8">
                <TeamCardTwo {...item} linkClass="hvr-blue" />
              </div>
            ))}
          </div>

          <div className="section-button">
            <Button href="#" className="btn-masco rounded-pill btn-fill--up">
              <span>Want to join us?</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamTwoSection;
