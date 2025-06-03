const BlogCard = ({ image, badge, user, calender, title }) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-8">
        <div className="blog-card h-100">
          <div className="blog-card__image">
            <img src={image} alt="image alt" />
            <a href="#" className="blog-card__badge">
              {badge}
            </a>
          </div>
          <div className="blog-card__body">
            <div className="blog-card__meta">
              <span>
                <img src="/image/home-8/blog-card-icon-1.svg" alt="icon" />
                {user}
              </span>
              <span>
                <img src="/image/home-8/blog-card-icon-2.svg" alt="calender" />
                {calender}
              </span>
            </div>
            <h3 className="blog-card__title">{title}</h3>
            <a href="#" className="blog-card__link btn-link btn-arrow ">
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
