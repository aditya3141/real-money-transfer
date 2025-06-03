import data from "./data.json";
const FaqSection = () => {
  return (
    <>
      <div className="section-padding-120">
        <div className="container">
          <div className="faq-grid-layout">
            {data?.map((item, index) => (
              <div
                key={index}
                className="faq-grid-single"
                data-aos="fade-up"
                data-aos-delay="{{100 * loop.index}}"
              >
                <h4 className="faq-grid__title">{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="section-button">
            <a href="#" className="btn-masco btn-fill--up rounded-pill">
              <span>Still, have any questions? Contact us</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
