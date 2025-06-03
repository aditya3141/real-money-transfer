import CareerDetailsSidebar from "@components/Career/Sidebar/CareerDetailsSidebar";
import data from "./data.json";
import CareerDetailsWidget from "@components/Widgets/CareerDetails/CareerDetailsWidget";
const CareerDetailsMainSection = () => {
  return (
    <>
      <div className="career-details_main-section section-padding-120">
        <div className="container">
          <div className="row row--custom">
            <div className="col-xl-7">
              <div className="career-details_main-block">
                <div className="career-details">
                  <h2 className="career-details_section__title">
                    Job Details:
                  </h2>
                  <p>
                    Product designers are involved in the entire design process
                    a of a product, while UX designers focus more on the
                    hands-on design portion of a best a process. Product
                    designers and user an experience (UX) designers are the
                    similar—in fact, sometimes the titles are used
                    interchangeably.
                  </p>
                  <div className="career-details_job-info">
                    <span>
                      <img src="/image/icons/clock.svg" alt="clock" />
                      Full Time
                    </span>
                    <span>
                      <img src="/image/icons/location.svg" alt="location" />
                      London, UK
                    </span>
                    <span>
                      <img src="/image/icons/cash.svg" alt="cash" />
                      $25k-$40k
                    </span>
                  </div>
                </div>
                <div className="career-details">
                  <h3 className="career-details_title">Job Responsibilities</h3>
                  <p>
                    By partnering with cross-functional teams and customers, for
                    you will turn your insights into delightful creative
                    environment that requires proven leadership skills and the
                    ability.
                  </p>
                  <div className="career-details_info list-style-bullet">
                    <ul className="list-style-bullet">
                      <li>
                        Set design requirements based on information from
                        internal teams &amp; research.
                      </li>
                      <li>Identify new product improvement opportunities.</li>
                      <li>
                        Analyze how a new product satisfies market needs &amp;
                        consumer preferences.
                      </li>
                      <li>
                        Stay up to date on current industry trends and market
                        conditions.
                      </li>
                      <li>
                        Coordinate with other design team members to ensure
                        communication.
                      </li>
                      <li>
                        Modify and revise existing designs to meet changing
                        customer preferences.
                      </li>
                      <li>
                        Work closely with product engineers to suggest
                        improvements for products.
                      </li>
                      <li>
                        Present product design ideas to cross-functional teams
                        and senior leadership.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="career-details">
                  <h3 className="career-details_title">Requirements</h3>
                  <p>
                    Proven experience in all phases of the design process
                    including user for a research, copywriting, wireframing,
                    prototyping, visual design, interaction design, and
                    usability testing
                  </p>
                  <div className="career-details_info">
                    <ul className="list-style-bullet">
                      <li>
                        An intuitive eye for customer needs beyond the obvious
                      </li>
                      <li>
                        Ability to collaborate with cross-functional team
                        members
                      </li>
                      <li>
                        Ability to collect and interpret both qualitative and
                        quantitative feedback
                      </li>
                      <li>
                        Ability to effectively communicate and persuade around
                        design concepts
                      </li>
                      <li>
                        Passion for design; not satisfied with the status quo
                        and always thinking
                      </li>
                      <li>
                        Dynamic, creative personality, effective at engaging and
                        influencing a variety
                      </li>
                      <li>
                        Provide assistance to product engineers when needed
                      </li>
                      <li>
                        Recommend new tools and technologies by staying abreast
                        of the latest trends
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="career-details">
                  <h3 className="career-details_title">
                    Skill &amp; Experience
                  </h3>
                  <div className="career-details_info">
                    <ul className="list-style-bullet">
                      <li>
                        You have at least 3 years’ experience working as a
                        Product Designer.
                      </li>
                      <li>
                        You have experience using Sketch and InVision or Framer
                        X and must figma
                      </li>
                      <li>
                        You have some previous experience working in an agile
                        environment
                      </li>
                      <li>
                        You are familiar using Jira and Confluence in your
                        workflow
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="career-details">
                  <h3 className="career-details_title">Need help?</h3>
                  <p>
                    Not sure exactly what we’re looking for or just want
                    clarification? We’d be happy to chat with you and clear
                    things up for you. Anytime
                  </p>
                  <div className="career-details_widget-row">
                    {data?.map((item, index) => (
                      <CareerDetailsWidget key={index} {...item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-10">
              <CareerDetailsSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerDetailsMainSection;
