import { hasClassProps } from "@utils/helpers";

const FooterLayoutOne = ({ className, logo, socialClass }) => {
  return (
    <div className={`footer${hasClassProps(className)}`}>
      <div className="container">
        <div className="row row--footer-main">
          <div className="col-md-8 col-lg-5 col-xl-5 col-xxl-4">
            <div className="footer__content-block">
              <div className="footer__content-text">
                <div className="footer-brand">
                  <img src={`/image/logo-white.png`} style={{maxWidth: "250px"}} alt="image alt" />
                </div>
                <p>
                  We are strategic & creative digital agency who are focused on
                  user experience, mobile, social, data gathering and
                  promotional offerings.
                </p>
              </div>

              <a href="#" className="footer-link">
                mascoexample@gmail.com
              </a>
              <br />
              <ul
                className={`list-social${socialClass ? ` ${socialClass}` : ""}`}
              >
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" col-lg-7 col-xl-6 col-xxl-7 offset-xl-1">
            <div className="row row--list-block">
              <div className="col-auto col-md-4 col-lg-auto col-xl-auto col-xxl-auto">
                <h3 className="footer-title">Primary Pages</h3>
                <ul className="footer-list">
                  <li>
                    <a href="#">Demos</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="col-auto col-md-4 col-lg-auto col-xl-auto col-xxl-auto">
                <h3 className="footer-title">Utility pages</h3>
                <ul className="footer-list">
                  <li>
                    <a href="#">Instructions</a>
                  </li>
                  <li>
                    <a href="#">Style guide</a>
                  </li>
                  <li>
                    <a href="#">Licenses</a>
                  </li>
                  <li>
                    <a href="#">404 Not found</a>
                  </li>
                  <li>
                    <a href="#">Password protected</a>
                  </li>
                </ul>
              </div>
              <div className="col-auto col-md-4 col-lg-auto col-xl-auto col-xxl-auto">
                <h3 className="footer-title">Resources</h3>
                <ul className="footer-list">
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Privacy policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Strategic finance</a>
                  </li>
                  <li>
                    <a href="#">Video guide</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-block">
        <div className="container">
          <div className="copyright-inner text-center  copyright-border">
            <p>© Copyright 2025, All Rights Reserved by Real Money Transfer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLayoutOne;
