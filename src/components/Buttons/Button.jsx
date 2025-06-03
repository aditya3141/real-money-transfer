import { Link } from "react-router-dom";
import { hasClassProps } from "@utils/helpers";

export function ButtonPlay({ className, setOpen }) {
  let classes = "btn-play sonar-emitter" + `${hasClassProps(className)}`;
  return (
    <a
      onClick={() => setOpen(true)}
      // href="https://www.youtube.com/watch?v=zo9dJFo8H8g"
      className={classes}
    >
      <i className="fa-solid fa-play"></i>
    </a>
  );
}

export function ButtonLink({ className, href, children }) {
  let classes = "btn-link" + hasClassProps(className);
  return (
    <a href={href} className={classes}>
      {children}
      <i className="fa-solid fa-arrow-right icon-arrow-corner"></i>
    </a>
  );
}

const AnchorButton = ({ icon, iconPosition, className, href, children }) => {
  return (
    <a href={href} className={className}>
      {icon && iconPosition === "before" ? icon() : ""}
      <span>{children}</span>
      {icon && iconPosition === "after" ? icon() : ""}
    </a>
  );
};
const RouteButton = ({ icon, iconPosition, className, children, href }) => {
  return (
    <Link to={href} className={className}>
      {icon && iconPosition === "before" ? icon() : ""}
      <span>{children}</span>
      {icon && iconPosition === "after" ? icon() : ""}
    </Link>
  );
};

const FormButton = ({ icon, iconPosition, className, children }) => {
  return (
    <button className={className}>
      {icon && iconPosition === "before" ? icon() : ""}
      <span>{children}</span>
      {icon && iconPosition === "after" ? icon() : ""}
    </button>
  );
};

export default function Button({
  type = false,
  animation = true,
  icon = false,
  iconPosition,
  className,
  role,
  href,
  children,
}) {
  let buttonType = type
    ? type === "black"
      ? " btn-black"
      : type === "white"
      ? " btn-white"
      : ""
    : "";
  let animationClass = animation ? " btn-fill--up" : "";
  let classes =
    "btn-masco" + buttonType + animationClass + hasClassProps(className);

  let buttonSettings = {
    buttonType: buttonType,
    animationClass: animationClass,
    icon: icon,
    iconPosition: iconPosition,
    className: classes,
    children: children,
  };

  if (role === "submit") {
    return <FormButton {...buttonSettings} />;
  } else if (role === "Anchor") {
    return <AnchorButton {...buttonSettings} href={href} />;
  } else {
    return <RouteButton {...buttonSettings} href={href} />;
  }
}
