import {hasClassProps} from "@utils/helpers"
const ProcessCard = ({ step, iconSrc, title, text,className }) => {
  return (
    <div className={`process-card${hasClassProps(className)}`}>
      <div className="process-card__icon-block">
        <img src={iconSrc} alt="process card icon" />
      </div>
      <div className="process-card__text-block">
        <span className="process-card__step">Step {step}</span>
        <h4 className="process-card__heading">{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ProcessCard;