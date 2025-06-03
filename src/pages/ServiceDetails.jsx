import ServiceDetails from "@sections/inner-pages/service-details/ServiceDetails";
import Header from "@components/Header";
import Banner from "@components/Banner/Banner";
import FaqSection from "@sections/inner-pages/Service/FAQ/FaqSection";
import CtaSection from "@sections/home-1/Cta/CtaSection";
import FooterLayoutOne from "@components/Footer/FooterOne";
import Layout from "@components/Layout/PageWrapper/PageWrapper";
let settingProps = {
  footer: {
    className: " footer-padding-default footer--dark-v1",
    logo: "logo-white.svg",
  },
};
const Homepage = () => {
  return (
    <>
      {" "}
      <Layout>
        <Header signUpButtonClass="btn-masco btn-masco--header rounded-pill btn-fill--up" />
        <Banner title="Branding & Digital Strategies" text="Services Details" />
        <ServiceDetails /> <FaqSection />
        <CtaSection />
        <FooterLayoutOne {...settingProps.footer} />{" "}
      </Layout>
    </>
  );
};

export default Homepage;
