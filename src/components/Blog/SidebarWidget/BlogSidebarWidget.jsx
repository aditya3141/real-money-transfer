const BlogSidebarWidget = ({ imgSrc, url, title, date }) => {
  return (
    <>
      <div className="sidebar-blog-widget">
        <a href={url} className="sidebar-blog-widget__image">
          <img src={imgSrc} alt="blog image" />
        </a>
        <div className="sidebar-blog-widget__body">
          <a href={url} className="sidebar-blog-widget__date">
            <img src="/image/blog/calendar.svg" alt="calender" />
            {date}
          </a>
          <h3 className="sidebar-blog-widget__title">
            <a href={url}>{title}</a>
          </h3>
        </div>
      </div>
    </>
  );
};

export default BlogSidebarWidget;
