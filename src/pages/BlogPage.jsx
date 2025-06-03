import Header from "@components/Header";
import Banner from "@components/Banner/Banner";
import CtaSection from "@sections/home-1/Cta/CtaSection";
import FooterLayoutOne from "@components/Footer/FooterOne";
import BlogMainSection from "@sections/inner-pages/Blog/BlogMain";
import Layout from "@components/Layout/PageWrapper/PageWrapper";
let settingProps = {
  footer: {
    className: " footer-padding-default footer--dark-v1",
    logo: "logo-white.svg",
  },
};
const BlogPage = () => {
  return (
    <>
      {" "}
      <Layout>
        <Header signUpButtonClass="btn-masco btn-masco--header rounded-pill btn-fill--up" />
        <Banner title="Articles & Resources" text="Blog" />
        <BlogMainSection />
        <CtaSection />
        <FooterLayoutOne {...settingProps.footer} />{" "}
      </Layout>
    </>
  );
};

export default BlogPage;
