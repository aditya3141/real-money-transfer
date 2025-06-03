import FaqContentSectionFour from "../FaqContentFour/FaqContentSectionFour";
import FaqContentSectionOne from "../FaqContentOne/FaqContentSectionOne";
import FaqContentSectionTwo from "../FaqContentTwo/FaqContentSectionTwo";

const FaqSection = () => {
  return (
    <>
      <div className="faq-4_main-section section-padding-120">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-between gutter-y-40 ">
            <div className="col-xl-3 col-lg-4 col-md-7 col-sm-8">
              <ul
                className="faq-tab__nav faq-filter-list"
                role="tablist"
                id="cotent-tab"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="general-tab-nav"
                    data-bs-toggle="tab"
                    data-bs-target="#general-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="general-tab-pane"
                    aria-selected="true"
                  >
                    <span className="heading-xs faq-title">
                      General Question
                    </span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link "
                    id="account-tab-nav"
                    data-bs-toggle="tab"
                    data-bs-target="#account-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="account-tab-pane"
                    aria-selected="false"
                  >
                    <span className="heading-xs faq-title">
                      Account & Support
                    </span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link "
                    id="purchasing-tab-nav"
                    data-bs-toggle="tab"
                    data-bs-target="#purchasing-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="purchasing-tab-pane"
                    aria-selected="false"
                  >
                    <span className="heading-xs faq-title">
                      Purchasing Online
                    </span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link "
                    id="technical-tab-nav"
                    data-bs-toggle="tab"
                    data-bs-target="#technical-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="technical-tab-pane"
                    aria-selected="false"
                  >
                    <span className="heading-xs faq-title">
                      Technical Methods
                    </span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-lg-8 col-md-10 col-11">
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="general-tab-pane"
                  role="tabpanel"
                  aria-labelledby="cotent-tab"
                  tabindex="0"
                >
                  <FaqContentSectionOne />
                  {/* {% include "sections/faq-4/faq-content-1.njk" %} */}
                </div>
                <div
                  className="tab-pane fade "
                  id="account-tab-pane"
                  role="tabpanel"
                  aria-labelledby="cotent-tab"
                  tabindex="0"
                >
                  <FaqContentSectionTwo />
                  {/* {% include "sections/faq-4/faq-content-2.njk" %} */}
                </div>
                <div
                  className="tab-pane fade "
                  id="purchasing-tab-pane"
                  role="tabpanel"
                  aria-labelledby="cotent-tab"
                  tabindex="0"
                >
                  {/* {% include "sections/faq-4/faq-content-3.njk" %} */}
                </div>
                <div
                  className="tab-pane fade"
                  id="technical-tab-pane"
                  role="tabpanel"
                  aria-labelledby="cotent-tab"
                  tabindex="0"
                >
                  <FaqContentSectionFour />
                  {/* {% include "sections/faq-4/faq-content-4.njk" %} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
