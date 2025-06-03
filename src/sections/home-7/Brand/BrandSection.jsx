const BrandSection = () => {
  return (
    <div className="brand-section">
      <div className="container">
        <div className="brands-wrapper-inner">
          <div className="brands-wrapper filter-grayscale">
            {Array.from(Array(5)).map((_, i) => (
              <div
                key={i}
                className="single-brand"
                data-aos-duration={1000}
                data-aos="fade-left"
                data-aos-delay={800}
              >
                <img src={`/image/home/brand-${i + 1}.png`} alt="brand-logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
