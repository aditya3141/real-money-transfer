export default function AccordionTrigger({
  className,
  children,
  decoratedOnClick,
  isCurrentEventKey,
}) {
  return (
    <button
      type="button"
      className={`${className} ${isCurrentEventKey ? "" : "collapsed"}`}
      onClick={() => decoratedOnClick()}
    >
      {children}
    </button>
  );
}
