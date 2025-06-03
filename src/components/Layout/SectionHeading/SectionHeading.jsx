import { hasClassProps } from "@utils/helpers";

const SectionHeading = ({ type, ...rest }) => {
  if (type === "Double" || type === "double") {
    return <SectionHeadingSecondary {...rest} />;
  } else return <SectionHeadingDefault {...rest} />;
};
const SectionHeadingDefault = ({
  column,
  classes = {},
  badge,
  title,
  text,
  children,
}) => {
  const rowClasses = `row${hasClassProps(classes.row)}`;
  const sectionHeadingClasses = `section-heading${
    classes.className ? ` ${classes.className}` : ""
  }`;
  const badgeClasses = badge ? `badge ${badge.class}` : "";
  const titleClasses = `section-heading__title${
    classes.title ? ` ${classes.title}` : ""
  }`;

  if (column) {
    return (
      <div className={rowClasses}>
        <div className={column}>
          <div className={sectionHeadingClasses}>
            {badge && <span className={badgeClasses}>{badge.text}</span>}
            <h2 className={titleClasses}>{title}</h2>
            {text && <p>{text}</p>}
            {children}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={sectionHeadingClasses}>
        {badge && <span className={badgeClasses}>{badge.text}</span>}
        <h2 className={titleClasses}>{title}</h2>
        {text && <p>{text}</p>}
        {children}
      </div>
    );
  }
};

const SectionHeadingSecondary = ({ classes = {}, title, children, text }) => {
  const rowClasses = `section-heading section-heading--row${hasClassProps(
    classes.className
  )}`;
  const rowRowClasses = `row${hasClassProps(classes.row)}`;
  const titleClasses = `section-heading__title${hasClassProps(classes.title)}`;

  return (
    <div className={rowClasses}>
      <div className={rowRowClasses}>
        <div className={classes.columnLeft}>
          <h2
            className={titleClasses}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>

        {text && (
          <div className={classes.columnRight}>
            <p>{text}</p>
          </div>
        )}
        {children && (
          <div className={classes.columnRight}>
            <div className="section-heading__button">{children}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionHeading;
