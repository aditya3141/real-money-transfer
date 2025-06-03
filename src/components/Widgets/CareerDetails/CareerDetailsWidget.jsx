const CareerDetailsWidget = ({ imgSrc, title, contact }) => {
  return (
    <>
      <div className="career-details_widget">
        <div className="career-details_widget__icon">
          <img src={imgSrc} alt />
        </div>
        <div className="career-details_widget__body">
          <h3 className="career-details_widget__title">{title}</h3>
          <span>{contact}</span>
        </div>
      </div>
    </>
  );
};

export default CareerDetailsWidget;
