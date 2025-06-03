import ContentBlock from "@components/Layout/Content/ContentBlock";

const settingProps = {
  contentBlock: {
    title: "SEO gains momentum by increasing your investment",
    titleClass: "text-black text-l5-secondary",
    text: [
      'SEO is often referred to as the "long-term game" in the marketing world. The more time you invest, the faster the benefits of SEO will accrue. As your website content (ie blog, service pages, etc.)',
      "Search engine optimization ensures that your online presence is both articulated properly and discoverable to potential customers.",
    ],
    button: {
      class: "btn-primary-l05 btn-fill--up",
      text: "Explore More",
      url: "about.html",
    },
  },
};
const ContentSectionTwo = () => {
  return (
    <div className="home-5_content-section-2 section-padding-120 bg-offwhite-3">
      <div className="container">
        <div className="row row--custom ">
          <div
            className="col-xl-6 col-lg-5 col-md-6 col-7"
            data-aos-duration="1000"
            data-aos="fade-left"
          >
            <div className="home-5_content-image-2 ">
              <img
                src="./image/home-5/content-image-2.png"
                alt="alternative text"
              />
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-7 col-md-10 col-auto"
            data-aos-duration="1000"
            data-aos="fade-right"
          >
            <ContentBlock {...settingProps.contentBlock} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionTwo;
