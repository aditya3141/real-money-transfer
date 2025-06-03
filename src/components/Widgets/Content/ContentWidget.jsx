const ContentWidget = ({ imgSrc, title, description }) => {
  return (
    <>
      <div className="content-widget">
        <div className="content-widget__icon">
          <img src={imgSrc} alt="icon" />
        </div>
        <div className="content-widget__body">
          <h3 className="content-widget__title">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ContentWidget;
