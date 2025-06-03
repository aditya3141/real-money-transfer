import HeroSection from "@sections/home-1/Hero";
import TestimonialSection from "@sections/home-1/Testimonial";
import BrandSection from "@sections/home-1/Brand";
import CtaSection from "@sections/home-1/Cta";
import PortfolioSection from "@sections/home-1/Portfolio";
import ContentSectionOne from "@sections/home-1/ContentOne";
import ContentSectionTwo from "@sections/home-1/ContentTwo";
import FaqSection from "@sections/home-1/Faq";
import FooterLayoutOne from "@components/Footer/FooterOne";
import Header from "@components/Header";
import ServiceSection from "@sections/home-1/Service";
import Layout from "../components/Layout/PageWrapper/PageWrapper";

let settingProps = {
  footer: {
    className: " footer-padding-default footer--dark-v1",
    logo: "logo-white.svg",
  },
};
const Homepage = () => {
  return (
    <>
      <Layout>
        <Header
          scroll={true}
          signUpButtonClass="btn-masco btn-masco--header rounded-pill btn-fill--up"
        />
        <HeroSection />
        <BrandSection />
        <ServiceSection />
        <ContentSectionOne />
        <ContentSectionTwo />
        <PortfolioSection />
        <TestimonialSection />
        <FaqSection />
        <CtaSection />
        <FooterLayoutOne {...settingProps.footer} />
      </Layout>
    </>
  );
};

export default Homepage;
