const BlogCardLarge = ({
  imgSrc,
  userImg,
  userName,
  date,
  category,
  title,
  description,
}) => {
  return (
    <>
      <div className="blog-card-large">
        <div className="blog-card-large__image">
          <img src={imgSrc} alt="blog image" />
        </div>
        <div className="blog-card-large__body">
          <div className="blog-card-large__meta">
            <a href="#">
              <span className="blog-card-large__user">
                <img src={userImg} alt="user image" />
                {userName}
              </span>
            </a>
            <a href="#">
              <span className="blog-card-large__time">
                <img src="/image/blog/blog-card-icon.svg" alt="user image" />
                {date}
              </span>
            </a>
            <a href="#">
              <span className="blog-card-large__category">{category}</span>
            </a>
          </div>
          <a href="/blog-details">
            <h2 className="blog-card-large__title">{title}</h2>
          </a>
          <p>{description}</p>
          <a href="/blog-details" className="blog-card-large__link">
            <span>Read More</span>
            <i className="fa-solid fa-arrow-right" />
          </a>
        </div>
      </div>
    </>
  );
};

export default BlogCardLarge;
