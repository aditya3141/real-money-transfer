import Button from "@components/Buttons"
const IntegrationSection= () => {
    return (
   <div className="home-2_integration-section section-padding-120 " id="integration">
  <div className="container">
    <div className="row row--custom ">
      <div className="offset-xl-1 col-xl-5 col-lg-5 col-auto" data-aos-duration={1000} data-aos="fade-left">
        <div className="home-2_integration-image content-image--mobile-width">
          <img src="/image/home-2/integration-image.png" alt="alternative text" />
        </div>
      </div>
      <div className=" col-xl-6 col-lg-7 col-md-10 col-auto" data-aos-duration={1000} data-aos="fade-right">
        <div className="content">
          <div className="content_text-block">
            <h2 className="content_title heading-md text-black">
              Seamless integration with all your favorite tools
            </h2>
            <p>
              Connect our software with the apps you use and love. With the increasing number of integration with communications. Bring in customer data from your favourite tools.
            </p>
          </div>
          <div className="home-2_integration-button">
            <Button href="/" className="btn-secondary-l02 btn-fill--up">
              See all integration
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default IntegrationSection;