import BlogSidebarWidget from "../SidebarWidget/BlogSidebarWidget";
import data from "./data";
const BlogSidebar = () => {
  return (
    <>
      <aside className="sidebar-wrapper">
        <div className="sidebar-search-input">
          <form action="#" className="input-wrapper">
            <span className="input-icon ">
              <i className="fa-solid fa-magnifying-glass" />
            </span>
            <input
              className="form-control"
              type="text"
              placeholder="Type to search..."
            />
          </form>
        </div>
        <div className="sidebar-single">
          <div className="sidebar-list">
            <div className="sidebar-title-block">
              <h3 className="sidebar-title">Blog Categories</h3>
            </div>
            <ul className="sidebar-category-list">
              <li className="sidebar-category-list-item">
                <a href="#" className="sidebar-category">
                  Business &amp; Marketing (18)
                </a>
              </li>
              <li className="sidebar-category-list-item">
                <a href="#" className="sidebar-category">
                  Technology (05)
                </a>
              </li>
              <li className="sidebar-category-list-item">
                <a href="#" className="sidebar-category">
                  Art &amp; Beauty (23)
                </a>
              </li>
              <li className="sidebar-category-list-item">
                <a href="#" className="sidebar-category">
                  Digital Agency (10)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar-single">
          <div className="sidebar-blog-suggestion">
            <div className="sidebar-title-block">
              <h3 className="sidebar-title ">Recent posts</h3>
            </div>
            <div className="sidebar-blog-widget-wrapper">
              {data?.map((item, index) => (
                <BlogSidebarWidget key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
        <div className="sidebar-single">
          <div className="sidebar-title-block">
            <h3 className="sidebar-title ">Tags</h3>
          </div>
          <ul className="sidebar-tag-list">
            <li className="sidebar-tag-list-item">
              <a href="#">Artical</a>
            </li>
            <li className="sidebar-tag-list-item">
              <a href="#">Business</a>
            </li>
            <li className="sidebar-tag-list-item">
              <a href="#">Digital</a>
            </li>
            <li className="sidebar-tag-list-item">
              <a href="#">Technology</a>
            </li>
            <li className="sidebar-tag-list-item">
              <a href="#">UI/UX</a>
            </li>
            <li className="sidebar-tag-list-item">
              <a href="#">Design</a>
            </li>
            <li className="sidebar-tag-list-item">
              <a href="#">NFT</a>
            </li>
            <li className="sidebar-tag-list-item">
              <a href="#">Crypto</a>
            </li>
            <li className="sidebar-tag-list-item">
              <a href="#">Finence</a>
            </li>
            <li className="sidebar-tag-list-item">
              <a href="#">Trends</a>
            </li>
            <li className="sidebar-tag-list-item">
              <a href="#">Web</a>
            </li>
            <li className="sidebar-tag-list-item">
              <a href="#">Asset</a>
            </li>
          </ul>
        </div>
        <div className="sidebar-single">
          <div className="sidebar-title-block">
            <h3 className="sidebar-title">Tags</h3>
          </div>
          <div className="sidebar-newsletter">
            <p>
              Subscribe to our newsletter and get the latest news updates
              lifetime
            </p>
            <form action="#" className="input-wrapper">
              <input
                className="form-control"
                type="text"
                placeholder="Enter your email address"
              />
            </form>
            <div className="sidebar-button">
              <a href="#" className="btn-masco btn-primary rounded-pill w-100">
                Subscribe Now
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default BlogSidebar;
