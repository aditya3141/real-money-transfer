import ContentBlock from "@components/Layout/Content/ContentBlock";

const settingProps = {
  contentBlock: {
    title: "Speed up your website outside of any hassle",
    titleClass: "heading-lg heading-lg--cabin text-l7-primary",
    text: [
      "Speed is a key factor in increasing your website in terms of visitors, purchase orders, user experience, and SEO.",
    ],
    lists: {
      items: [
        "99.99% uptime and security monitoring",
        "Hosting control panel contains multi-tools",
        "WordPress is quick and easy to setup",
      ],
      bullet_image: "icon-check-black.svg",
    },
    badge: {
      text: "More Speed, Less Latency",
      class: "badge badge--purple",
    },
  },
};
const ContentTwoSection = () => {
  return (
    <>
      <div className="home-7_content-section-2 padding-bottom-120 bg-light-2">
        <div className="container">
          <div className="row row--custom ">
            <div
              className=" col-xl-6 col-lg-5 col-auto"
              data-aos-duration={2000}
              data-aos="fade-right"
            >
              <div className="home-7_content-image-2 content-image--mobile-width">
                <img
                  src="./image/home-7/content-image-2.png"
                  alt="alternative text"
                />
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-7 col-md-9 col-auto"
              data-aos-duration={2000}
              data-aos="fade-left"
            >
              <ContentBlock {...settingProps.contentBlock} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentTwoSection;
