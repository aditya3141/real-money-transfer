const ContentSectionOne = () => {
  return (
    <div className="home-2_content-section-1 section-padding-120 " id="about">
  <div className="container">
    <div className="row row--custom">
      <div className="col-xl-5 col-lg-6 col-auto" data-aos-duration={1000} data-aos="fade-right">
        <div className="home-2_content-image-1 content-image--mobile-width">
          <img src="/image/home-2/content-1.png" alt="alternative text" />
        </div>
      </div>
      <div className="offset-xl-1 col-xl-6 col-lg-6 col-md-10 col-auto" data-aos-duration={1000} data-aos="fade-left">
        <div className="content">
          <div className="content-text-block">
            <h2 className="content-title heading-md text-black">
              A multi-channel messaging solution in one
              place here
            </h2>
            <p>
              Let your customers easily communicate with you via Live Chat,
              Facebook, Telegram, Viber, or many other tools. Direct response from
              snaga.
            </p>
          </div>
          <div className="content-divider" />
          <div className="content-list-block">
            <ul className="content-list">
              <li className="content-list-item">
                <img src="/image/icons/icon-check-black.svg" alt="alternative text" />
                Chat with visitors, prospects, and customers in real time.
              </li>
              <li className="content-list-item">
                <img src="/image/icons/icon-check-black.svg" alt="alternative text" />
                Have unlimited, personalized conversations easy at scale.
              </li>
              <li className="content-list-item">
                <img src="/image/icons/icon-check-black.svg" alt="alternative text" />
                Engage in contextual chat conversations wherever you go.
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

export default ContentSectionOne;
