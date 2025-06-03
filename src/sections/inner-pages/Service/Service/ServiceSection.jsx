import ServiceCardTwo from "@components/Cards/Service/Two/ServiceCardTwo";
import data from "./data";
const ServiceSection = () => {
  return (
    <>
      <div className="service_service-section padding-top-120">
        <div className="container">
          <div className="row gutter-y-default justify-content-center">
            {data?.map((item, index) => (
              <div key={index} className="col-xl-6 col-lg-6 col-md-10">
                <ServiceCardTwo {...item} />
              </div>
            ))}
          </div>
          <div className="service-divider" />
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
