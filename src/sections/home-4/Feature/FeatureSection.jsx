
import SectionHeading from "@components/Layout/SectionHeading";
import data from "./data";
import FeatureCardThree from "@components/Cards/Feature/Three/FeatureCardThree";
let settings = {
  sectionHading: {
    title:"Special features that make our online courses the best",
    column:"col-xxl-6 col-xl-7 col-lg-8 col-md-9",
    classes: {
        title:"heading-md text-black heading-md--dm-sans",
        row:"justify-content-center text-center"
    },
  },
};

const FactSection = () => {
  return (
    <div
      className="home-4_feature-section section-padding bg-cream-dark"
      id="feature"
    >
      <div className="container position-relative z-1">
        <div className="home-4_feature-section__shape">
          <img src="/image/home-4/feature-shape.svg" alt="image" />
        </div>
        <SectionHeading {...settings.sectionHading} />

        <div className="row justify-content-center  gutter-y-default">
          {data.map(({title,text,icon}, index) => (
            <div className="col-md-6 col-lg-5 col-xl-3" key={index}>
              <FeatureCardThree
                title={title}
                text={text}
                icon={icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FactSection;
