const Badge = ({ text, className }) => {
  let badgeClass = "row" + (className ? " " + className : "");
  return <span className={badgeClass}>{text}</span>;
};
const ListBlock = ({ items, bullet_image }) => {
  return (
    <div className="content-list-block">
      <ul className="content-list">
        {items?.map((item, index) => {
          return (
            <li key={index} className="content-list-item">
              {bullet_image && (
                <img
                  src={`/image/icons/${bullet_image}`}
                  alt="alternative text"
                />
              )}
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const ContentBlock = ({
  badge,
  title,
  titleClass,
  text,
  lists,
  divider,
  button,
}) => {
  return (
    <>
      {badge && <span className={` ${badge.class}`}>{badge.text}</span>}
      <div className="content">
        <div className="content-text-block">
          <h2 className={`content-title heading-md ${titleClass}`}>{title}</h2>
          {text?.map((item, index) => (
            <p key={index}> {item}</p>
          ))}
        </div>
        {divider && <div className="content-divider"></div>}
        {lists && <ListBlock {...lists} />}
        {button && (
          <div className="content-button-block">
            <a href={button?.url} className={`btn-masco ${button?.class}`}>
              <span>{button?.text}</span>
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default ContentBlock;
