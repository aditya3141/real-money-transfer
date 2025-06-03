const PortfolioArticleSection = () => {
  return (
    <>
      <div className="portfolio-details_article">
        <div className="container">
          <article className="portfolio-details_article-block">
            <div className="portfolio-details_thumbnail-block">
              <img
                className="portfolio-details_thumbnail-image"
                src="/image/portfolio-details/detail.png"
                alt="image alt"
              />
              <div className="portfolio-details_thumbnail-list">
                <div className>
                  <h3>Client:</h3>
                  <p>Adam Smith</p>
                </div>
                <div>
                  <h3>Category:</h3>
                  <p>UI/UX Design</p>
                </div>
                <div>
                  <h3>Duration:</h3>
                  <p>1 Week</p>
                </div>
                <div>
                  <h3>Website Link:</h3>
                  <p>example@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="portfolio-details_article-body">
              <div>
                <h2>Project overview</h2>
                <p>
                  Mobile UX design is the design of user experiences for
                  hand-held and wearable devices. Designers create solutions
                  (typically applications) to meet mobile users' unique
                  requirements and restrictions. Designers focus on
                  accessibility, discoverability and efficiency to optimize
                  on-the-go interactive experiences.
                </p>
                <p>
                  User Interface (UI) determines how the app will look like,
                  while UX determines what problem it will solve in the users'
                  life. UI is revolves around visually directing the user about
                  the app interface, while UX includes researching, testing,
                  developing the app.
                </p>
              </div>
              <div>
                <h3>What we did for this project</h3>
                <p>
                  A user can engage with a product or service by using a user
                  interface (UI), which is essentially a collection of screens,
                  pages, visual elements (such as buttons and icons). The phrase
                  “User Experience” refers to how a person reacts to each
                  component.
                </p>
                <ul className="list">
                  <li>Strategic Discovery</li>
                  <li>Web application redesign and optimization</li>
                  <li>Mobile application redesign and optimization</li>
                  <li>Landing page redesign and optimization</li>
                  <li>Component-based UI-Kit</li>
                  <li>Product design sprints to explore new functionality</li>
                </ul>
              </div>
              <img
                src="/image/portfolio-details/detail-2.png"
                alt="image alt"
              />
              <div>
                <h2>Project results</h2>
                <p>
                  The UI/UX design of software and applications helps improve
                  customer experience and satisfaction. This ultimately helps
                  increase the number of people using your product. If users
                  encounter roadblocks when trying to complete actions on your
                  product, they are very likely to drop off.
                </p>
                <p>
                  Creating a brand with clear and targeted messaging was crucial
                  in increasing conversions. Together with the Webflow team, we
                  have compiled a new product page structure using the App model
                  and packed that in an excellent cover 🙂
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default PortfolioArticleSection;
