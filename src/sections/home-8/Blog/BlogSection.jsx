import BlogCard from "@components/Cards/Blog/BlogCard";
import data from "./data";
import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";
const settingProps = {
  sectionHeading: {
    title: "Browse our articles and resources to learn more",
    column: "col-xxl-7 col-xl-8 col-lg-9 col-md-10 col-auto",
    text: "A lot of information is given in our blogs. You can learn more about startup by reading our blogs. It’s time to brainstorm ideas for your business",
    classes: {
      title: "heading-lg text-black-2",
      row: "justify-content-center text-center",
    },
  },
};
const BlogSection = () => {
  return (
    <>
      <div
        className="home-8_blog-section padding-bottom-120 bg-cream"
        id="blog"
      >
        <div className="container">
          <SectionHeading {...settingProps.sectionHeading} />

          <div className="row gutter-y-default justify-content-center">
            {data?.map((item, index) => (
              <BlogCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
