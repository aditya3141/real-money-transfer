import PortfolioWidgetOne from "@components/Widgets/Portfolio/One/PortfolioWidgetOne";
import data from "./data";
import { useState, useEffect } from "react";
import Isotope from "isotope-layout";
const PortfolioSection = () => {
  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    setIsotope(
      new Isotope(".filter-container", {
        itemSelector: ".filter-item",
        layoutMode: "fitRows",
      })
    );
  }, []);
  useEffect(() => {
    setTimeout(() => {
      if (isotope) {
        filterKey === "*"
          ? isotope.arrange({ filter: `*` })
          : isotope.arrange({ filter: `.${filterKey}` });
      }
    }, 1000);
  }, [isotope, filterKey]);
  return (
    <>
      <section className="section-padding">
        <div className="container">
          <div className="row portfolio-v4">
            <div className="col-xl-3">
              <ul className="navigation-list navigation-list--block">
                {data?.navListInline?.map(({ title, data_filter }, index) => (
                  <li
                    key={index}
                    onClick={() => setFilterKey(data_filter)}
                    className={`${data_filter === filterKey ? "active" : ""}`}
                  >
                    <button className="nav-list-btn">{title}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-xl-8">
              <div className="row  row--custom navigation-active isotope-navigation filter-container">
                {data?.portfolioContent?.map((item, index) => (
                  <div
                    key={index}
                    className={`col-12  grid-item filter-item ${item?.data_filter}`}
                  >
                    <PortfolioWidgetOne
                      {...item}
                      buttonText="View More"
                      className="portfolio-widget--shadow height-4"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioSection;
