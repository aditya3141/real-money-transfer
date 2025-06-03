import Header from "@components/Header";
import Banner from "@components/Banner/Banner";
import CtaSection from "@sections/home-1/Cta/CtaSection";
import FooterLayoutOne from "@components/Footer/FooterOne";
import BlogDetailsMainSection from "../sections/inner-pages/BlogDetails/BlogDetailsMain/BlogDetailsMainSection";
import Layout from "@components/Layout/PageWrapper/PageWrapper";
let settingProps = {
  footer: {
    className: " footer-padding-default footer--dark-v1",
    logo: "logo-white.svg",
  },
};
const BlogDetails = () => {
  return (
    <>
      <Layout>
        <Header signUpButtonClass="btn-masco btn-masco--header rounded-pill btn-fill--up" />
        <Banner
          title="How we use Slack, Trello, & TeamGantt for best project management as a digital agency"
          text="Blog Details"
        />
        <BlogDetailsMainSection />
        <CtaSection />
        <FooterLayoutOne {...settingProps.footer} />{" "}
      </Layout>
    </>
  );
};

export default BlogDetails;
