import BlogCardLarge from "@components/Cards/BlogLarge";
import data from "./data";
import Pagination from "@components/Widgets/Pagination";
import BlogSidebar from "@components/Blog/Sidebar/BlogSidebar";
const BlogMainSection = () => {
  return (
    <>
      <div className="blog_main-section section-padding-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="blog_content">
                <div className="blog-card-large-row">
                  {data?.map((item, index) => (
                    <BlogCardLarge key={index} {...item} />
                  ))}
                </div>
              </div>
              <Pagination />
            </div>
            <div className="col-xl-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogMainSection;
