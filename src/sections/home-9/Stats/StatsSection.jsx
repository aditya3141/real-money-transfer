const StatsSection = () => {
  return (
    <div className="home-9_stats-section section-padding-100">
      <div className="container">
        <div className="row row--custom ">
          <div className="col-lg-5 col-md-7">
            <div className="home-9_stats-wrapper">
              <div className="home-9_stats-single">
                <h2 className="home-9_stats-single__count ">64,739</h2>
                <img
                  src="/image/home-9/stats-icon-1.svg"
                  alt="image alt"
                  className="stats-single__icon"
                />
                <span>Years of experience</span>
              </div>
              <div className="home-9_stats-single">
                <h2 className="home-9_stats-single__count ">4.8/5</h2>
                <img
                  src="/image/home-9/stats-icon-2.svg"
                  alt="image alt"
                  className="stats-single__icon"
                />
                <span>Customers worldwide</span>
              </div>
            </div>
          </div>
          <div className="offset-xl-1 col-xl-6 col-lg-7 col-md-9">
            <div className="home-9_stats-text-block">
              <h2 className="home-9_stats-title heading-lg heading-lg--syne text-black-3">
                Easy time-tracking software for you
              </h2>
              <p>
                Trusted by the most innovative companies worldwide and still
                growing to increase their productivity
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
