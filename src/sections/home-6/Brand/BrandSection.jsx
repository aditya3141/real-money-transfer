const BrandSection = () => {
  return (
    <div className="brand-section">
      <div className="container">
        <div className="brands-wrapper-inner">
          <div className="brand-heading-2">
            <h3 className="brand-heading__title ">
              Trusted by the most innovative companies worldwide
            </h3>
          </div>
          <div className="brands-wrapper ">
            {Array.from(Array(5)).map((_, i) => (
              <div
                className="single-brand-2"
                data-aos-duration={1000}
                data-aos="fade-left"
                data-aos-delay={800}
                key={i}
              >
                <img src={`/image/home-6/brand-${i + 1}.png`} alt="brand-logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
