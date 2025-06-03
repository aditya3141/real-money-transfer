import TeamCardTwo from "@components/Cards/Team/Two/TeamCardTwo";
import data from "./data.json";
import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";

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
const TeamSection = () => {
  return (
    <>
      <div className="team-section section-padding-120 bg-light-2 ">
        <div className="container">
          <SectionHeading {...settingProps.sectionHeading} />

          <div className="row team-card-2-row">
            {data?.map((item, index) => (
              <div key={index} className="col-lg-3 col-sm-6 col-8">
                <TeamCardTwo {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamSection;
