import { hasClassProps } from "@utils/helpers";

const FooterLayoutTwo = ({ className, logo, socialClass }) => {
  return (
    <div className={`footer-v2${hasClassProps(className)}`}>
      <div className="container">
        <div className="row row--footer-main">
          <div className="col-md-6 col-lg-5 col-xl-auto">
            <div className="footer-v2__content-block">
              <div className="footer-v2__content-text">
                <div className="footer-brand">
                  <img src={`/image/${logo}`} alt="image alt" />
                </div>
                <p>
                  Email, SMS, Facebook, Chat, CRM, & more, all-in-one platform
                  to help you grow your business through building stronger
                  customer relationships.
                </p>
              </div>
              <ul className={`list-social${hasClassProps(socialClass)}`}>
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
          <div className="col-lg-12 col-xl-auto">
            <div className="footer-v2__list-block">
              <div className="row row--list-block">
                <div className="col-auto col-md-3 col-lg-auto col-xl-auto">
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
                <div className="col-auto col-md-3 col-lg-auto col-xl-auto">
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
                <div className="col-auto col-md-3 col-lg-auto col-xl-auto">
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
                <div className="col-auto col-md-3 col-lg-auto col-xl-auto">
                  <h3 className="footer-title">Download now</h3>
                  <div className="footer-store-buttons">
                    <a href="#">
                      <img src="/image/common/app-store.png" alt="image alt" />
                    </a>
                    <a href="#">
                      <img src="/image/common/play-store.png" alt="image alt" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-block">
        <div className="container">
          <div className="copyright-inner text-center  copyright-border">
            <p>© Copyright 2023, All Rights Reserved by Mthemeus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLayoutTwo;
