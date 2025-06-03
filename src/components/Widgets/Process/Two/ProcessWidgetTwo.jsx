const ProcessWidgetTwo = ({ count, title, text }) => {
  return (
    <>
      <div className="col-md-6 col-lg-4 col-8">
        <div className="process-widget-2">
          <div className="process-widget-2__count">
            <span>{count}</span>
          </div>
          <div className="process-widget-2__body">
            <h3 className="process-widget-2__title">{title}</h3>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessWidgetTwo;
