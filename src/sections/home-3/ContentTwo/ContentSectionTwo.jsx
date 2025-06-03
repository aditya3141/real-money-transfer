const ContentSectionTwo = () => {
    return (
        <div className="home-3_content-section-2 padding-bottom-120 bg-light-2">
  <div className="container">
    <div className="row row--custom ">
      <div className="col-xl-4 offset-lg-1 col-md-3 col-xs-4 col-5" data-aos-duration={1000} data-aos="fade-left">
        <div className="home-3_content-image-2-block content-image--mobile-width">
          <div className="home-3_content-image-2">
            <img src="/image/home-3/content-2.png" alt="alternative text" />
          </div>
          <div className="home-3_content-image-2-shape absolute-center">
            <img src="/image/home-3/content-2-shape.svg" alt="image shape" />
          </div>
        </div>
      </div>
      <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-10  " data-aos-duration={1000} data-aos="fade-right">
        <div className="content">
          <div className="content-text-block">
            <h2 className="content-title heading-md text-black">
              Fitness tracker that can help you reach your goals
            </h2>
            <p>Strong workout tracker is for those who mean business and have been working out long enough to know exactly what they want</p>
          </div>
          <div className="content-list-block">
            <ul className="content-list">
              <li className="content-list-item">
                <img src="/image/icons/icon-check-black.svg" alt="alternative text" />
                Free version can save unlimited workouts &amp; custom routines
              </li>
              <li className="content-list-item">
                <img src="/image/icons/icon-check-black.svg" alt="alternative text" />
                Track progress with graphs and automatically back up data
              </li>
              <li className="content-list-item">
                <img src="/image/icons/icon-check-black.svg" alt="alternative text" />
                Connect easily with instructor for tips, feedback and support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
}

export default ContentSectionTwo;