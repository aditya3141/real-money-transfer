const Banner = ({ title, url, text }) => {
  return (
    <>
      <div className="inner_banner-section">
        <img
          className="inner_banner-background-image"
          src="./image/common/inner-bg.png"
          alt="image alt"
        />
        <div className="container">
          <div className="inner_banner-content-block">
            <h3 className="inner_banner-title">{title}</h3>
            <ul className="banner__page-navigator">
              <li>
                <a href="/">Home</a>
              </li>
              <li className="active">
                <a href={url}>{text}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
