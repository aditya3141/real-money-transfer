export default function AccordionTrigger({
  className,
  children,
  decoratedOnClick,
  isCurrentEventKey,
}) {
  return (
    <div
      type="button"
      className={` ${className} ${isCurrentEventKey ? "" : "collapsed"}`}
      onClick={() => decoratedOnClick()}
    >
      {children}
    </div>
  );
}
