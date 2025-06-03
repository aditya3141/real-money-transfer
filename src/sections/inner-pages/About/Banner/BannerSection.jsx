const BannerSection = () => {
  return (
    <>
      <div className="about_banner-section">
        <div className="container">
          <div className="row justify-content-center row--custom">
            <div className="col-12">
              <div className="row banner_image-row padding-top-100">
                <div className="col-xs-4 col-7">
                  <div className="single-image-1">
                    <img
                      src="/image/about/banner-image-1.png"
                      alt="alternative text"
                    />
                  </div>
                </div>
                <div className="col-xs-4 col-7">
                  <div className="single-image-2">
                    <img
                      src="/image/about/banner-image-2.png"
                      alt="alternative text"
                    />
                  </div>
                </div>
                <div className="col-xs-4 col-7">
                  <div className="single-image-3">
                    <img
                      src="/image/about/banner-image-3.png"
                      alt="alternative text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
