import { hasClassProps } from "~/utils/helpers";
import Link from "next/link";

export function ButtonPlay({ className }) {
  let classes = "btn-play sonar-emitter" + hasClassProps(className);
  return (
    <a href="https://www.youtube.com/watch?v=zo9dJFo8H8g" className={classes}>
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

const AnchorButton = ({ customIcon, className, href, children }) => {
  return (
    <a href={href} className={className}>
      {children}
      {customIcon ? (
        customIcon()
      ) : (
        <i className="fa-solid fa-arrow-right icon-arrow-corner"></i>
      )}
    </a>
  );
};
const RouteButton = ({ icon, customIcon, className, children, href }) => {
  return (
    <Link href={href} className={className}>
      {children}

      {customIcon ? (
        customIcon()
      ) : (
        <i className="fa-solid fa-arrow-right icon-arrow-corner"></i>
      )}
    </Link>
  );
};

const FormButton = ({ icon, customIcon, className, children }) => {
  return (
    <button className={className}>
      {children}

      {customIcon ? (
        customIcon()
      ) : (
        <i className="fa-solid fa-arrow-right icon-arrow-corner"></i>
      )}
    </button>
  );
};

export default function Button({
  type = false,
  animation = true,
  icon = true,
  customIcon,
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
    : " btn-primary";
  let animationClass = animation ? " hvr-fill-black" : "";
  let classes = "btn" + buttonType + animationClass + hasClassProps(className);

  let buttonSettings = {
    buttonType: buttonType,
    animationClass: animationClass,
    icon: icon,
    customIcon: customIcon,
    className: classes,
    children: children,
  };

  if (role === "submit") {
    return <FormButton {...buttonSettings} />;
  } else if (role === "route") {
    return <RouteButton {...buttonSettings} href={href} />;
  } else {
    return <AnchorButton {...buttonSettings} href={href} />;
  }
}
