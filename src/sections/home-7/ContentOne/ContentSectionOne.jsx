import ContentBlock from "@components/Layout/Content/ContentBlock";

const settingProps = {
  contentBlock: {
    title: "Secure web hosting that grows with your business",
    titleClass: "content-title heading-lg heading-lg--cabin text-l7-primary",
    text: [
      "Our web host provides the hosting technology and resources required for your website's efficient and secure operation.",
      "We are responsible for keeping the servers running, implementing security measures, and ensuring that data such as text, photos, and other files are successfully transferred to visitors' browsers.",
    ],

    badge: {
      text: "Hosting For Every Website",
      class: "badge badge--yellow",
    },
  },
};

const ContentSectionOne = () => {
  return (
    <div className="home-7_content-section-1 padding-top-120 padding-bottom-150 bg-light-2">
      <div className="container">
        <div className="row row--custom ">
          <div
            className=" col-xl-6 col-lg-5 col-auto"
            data-aos-duration={1000}
            data-aos="fade-right"
          >
            <div className="home-7_content-image-1 content-image--mobile-width">
              <img
                src="/image/home-7/content-image-1.png"
                alt="alternative text"
              />
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-7 col-md-9 col-auto"
            data-aos-duration={1000}
            data-aos="fade-left"
          >
            <ContentBlock {...settingProps.contentBlock} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionOne;
