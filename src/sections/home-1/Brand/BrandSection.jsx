import { hasClassProps } from "@utils/helpers";

const BrandSection = ({ className }) => {
  return (
    <div className={`brand-section${hasClassProps(className)}`}>
      <div className="container">
        <div className="brands-wrapper-inner">
          <div className="brand-heading">
            <h3 className="brand-heading__title">
              From start-ups to Fortune 500, we partner with brands of all sizes
            </h3>
          </div>
          <div className="brands-wrapper ">
            {Array.from(Array(5)).map((_, index) => (
              <div
                key={index}
                className="single-brand"
                data-aos-duration={1000}
                data-aos="fade-left"
                data-aos-delay={800}
              >
                <img
                  src={`/image/home/brand-${index + 1}.png`}
                  alt="brand-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
