import { hasClassProps } from "../../../../utils/helpers";

const TeamCardTwo = ({ title, description, imgSrc, linkClass }) => {
  return (
    <>
      <div className="team-card-2">
        <img src={imgSrc} alt="Team Member Image" />
        <div className="team-card-2__body">
          <h4 className="team-card-2__name">{title}</h4>
          <span className="team-card-2__position">{description}</span>
          <div
            className={`team-card-2__social-links${hasClassProps(linkClass)}`}
          >
            <a href="#">
              <i className="fa-brands fa-twitter" />
            </a>
            <a href="#">
              <i className="fa-brands fa-facebook" />
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="#">
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCardTwo;
