import data from "./data";
import PortfolioWidgetOne from "@components/Widgets/Portfolio/One/PortfolioWidgetOne";
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
    if (isotope) {
      filterKey === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);
  return (
    <>
      <section className="section-padding">
        <div className="container">
          <ul className="navigation-list navigation-list--inline">
            {data?.navListInline?.map(({ title, data_filter }, index) => (
              <li
                key={index}
                data-filter={data_filter}
                onClick={() => setFilterKey(data_filter)}
                className={`${data_filter === filterKey ? "active" : ""}`}
              >
                <button className="btn rounded-pill">{title}</button>
              </li>
            ))}
          </ul>

          <div className="row navigation-active isotope-navigation portfolio-v3 filter-container">
            {data?.portfolioContent?.map((item, index) => (
              <div
                key={index}
                className={`col-xl-4 col-md-6 grid-item filter-item ${item?.data_filter}`}
              >
                <PortfolioWidgetOne
                  {...item}
                  className="portfolio-widget--shadow height-3"
                  buttonText="View More"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioSection;
