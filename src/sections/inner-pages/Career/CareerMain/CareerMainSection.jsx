import Button from "@components/Buttons/Button";
import CareerCard from "@components/Cards/Career/CareerCard";
import data from "./data";
import { useState, useEffect } from "react";
import "./style.css";
import Isotope from "isotope-layout";
const CareerMainSection = () => {
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
      <div className="career_main-section section-padding-120">
        <div className="container">
          <div className="career_main-image">
            <img src="/image/career/career-image.png" alt="image" />
          </div>
          <div className="career-main__section-heading">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-7 col-md-9">
                <h2 className="heading-md text-black career_main-title">
                  Curently open positions
                </h2>
              </div>
              <div className="col-xl-6 col-lg-5">
                <ul className="navigation-list navigation-list--inline">
                  {data?.careerFilterNav?.map(
                    ({ title, data_filter }, index) => (
                      <li
                        key={index}
                        data-filter={data_filter}
                        onClick={() => setFilterKey(data_filter)}
                        className={`${
                          data_filter === filterKey ? "active" : ""
                        }`}
                      >
                        <button className="btn rounded-pill">{title}</button>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="row career-card-row navigation-active isotope-navigation filter-container">
            {data?.careerCard?.map((item, index) => (
              <div
                key={index}
                className={`col-lg-6 grid-item filter-item ${item.data_filter}`}
              >
                <CareerCard {...item} />
              </div>
            ))}
          </div>
          <div className="section-button">
            <Button
              href="#"
              animation={false}
              className="btn-masco rounded-pill btn-fill--up"
            >
              <span>Can’t find your role? Contact us</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerMainSection;
