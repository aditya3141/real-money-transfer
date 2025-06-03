import TeamCardTwo from "@components/Cards/Team/Two/TeamCardTwo";
import data from "./data.json";
const TeamOneSection = () => {
  return (
    <>
      <div className="team-section section-padding-100 ">
        <div className="container">
          <div className="row team-card-2-row">
            {data?.map((item, index) => (
              <div key={index} className="col-lg-3 col-sm-6 col-8">
                <TeamCardTwo {...item} linkClass="hvr-blue" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamOneSection;
