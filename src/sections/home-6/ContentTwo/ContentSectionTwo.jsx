import ContentWidgetTwo from "@components/Widgets/Content/Two/ContentWidgetTwo";

const ContentSectionTwo = () => {
  return (
    <div className="home-6_content-section-2 padding-bottom-120">
      <div className="container">
        <div className="row row--custom ">
          <div
            className=" col-xl-6 col-lg-6 col-md-6 col-7"
            data-aos-duration={1000}
            data-aos="fade-left"
          >
            <div className="home-6_content-image-1-block ">
              <div className="home-6_content-image-2 content-image--mobile-width">
                <img
                  src={"/image/home-6/content-image-2.png"}
                  alt="alternative text"
                />
              </div>
              <div className="home-6_content-image-2-card">
                <img
                  src={"/image/home-6/content-image-2-card.png"}
                  alt="alternative text"
                />
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-10 col-auto"
            data-aos-duration={1000}
            data-aos="fade-right"
          >
            <div className="content">
              <div className="content-text-block">
                <h2 className="content-title heading-md heading-md--general-sans text-l5-secondary">
                  Achieve more productivity and revenue for every rep
                </h2>
                <p>
                  Creating an effective cold email outreach strategy takes
                  continuous optimization. Our cold email experts help so you
                  can do more deals.
                </p>
              </div>
              <div className="content-widget-2__wrapper">
                <ContentWidgetTwo
                  title={"All clients in one place"}
                  text="Have all your clients under one roof and shift between client
                    profiles with just one click. Invite as many co-workers as you need to get the job done."
                />
                <ContentWidgetTwo
                  title={"Easily scale campaigns"}
                  text="Ready to send more volume? Just add an inbox (or five) to your existing campaign 
                    and we’ll start sending the same campaign from multiple inboxes."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionTwo;
