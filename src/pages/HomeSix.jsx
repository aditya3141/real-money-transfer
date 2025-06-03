import BrandSection from "@sections/home-6/Brand/BrandSection";
import CtaSection from "@sections/home-6/Cta/CtaSection";
import HeroSection from "@sections/home-6/Hero/Hero";
import ProcessSection from "@sections/home-6/Process";
import Header from "@components/Header";
import FooterLayoutOne from "@components/Footer/FooterOne";
import ContentSectionOne from "@sections/home-6/ContentOne";
import ContentSectionTwo from "@sections/home-6/ContentTwo";
import ServiceSection from "@sections/home-6/Service";
import TopicSection from "@sections/home-6/Topic/TopicSection";
import TestimonialSection from "@sections/home-6/Testimonial/TestimonialSection";
import FaqSection from "@sections/home-6/Faq/FaqSection";
import Layout from "@components/Layout/PageWrapper/PageWrapper";
let settingProps = {
  footer: {
    className: " footer-padding-default footer--dark-v1",
    logo: "logo-white.svg",
  },
};
const HomepageSix = () => {
  return (
    <>
      {" "}
      <Layout>
        <Header
          scroll={true}
          btnAnimation={false}
          signUpButtonClass="btn-masco btn-masco btn-masco btn-masco--header btn-fill--up"
        />
        <HeroSection />
        <BrandSection />
        <ProcessSection />
        <ContentSectionOne />
        <ContentSectionTwo />
        <ServiceSection />
        <TestimonialSection />
        <FaqSection />
        <TopicSection />
        <CtaSection />
        <FooterLayoutOne {...settingProps.footer} />{" "}
      </Layout>
    </>
  );
};

export default HomepageSix;
