import FeatureCard from "@components/Cards/Contact/Feature";
import data from "./data";
const FeatureSection = () => {
  return (
    <>
      <div className="contact_feature-section section-padding">
        <div className="container">
          <div className="row justify-content-center gutter-y-default">
            {data?.map((item, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6"
                data-aos-duration={1000}
                data-aos="fade-left"
                data-aos-delay={item.aos}
              >
                <FeatureCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
