import Header from "@components/Header";
import HeroSection from "@sections/home-9/Hero/Hero";
import StatsSection from "@sections/home-9/Stats";
import FeatureSection from "@sections/home-9/Feature";
import ContentSectionTwo from "@sections/home-9/ContentTwo";
import ContentSectionOne from "@sections/home-9/ContentOne";
import CtaSection from "@sections/home-9/Cta";
import TabSection from "@sections/home-9/TabSection";
import TestimonialSection from "@sections/home-9/Testimonial";
import FooterLayoutOne from "@components/Footer/FooterOne";
import PricingSection from "@sections/home-9/Pricing";
import FaqSection from "@sections/home-9/Faq/FaqSection";
import Layout from "@components/Layout/PageWrapper/PageWrapper";
let settingProps = {
  footer: {
    className: " footer-padding-default footer--dark-v1",
    logo: "logo-3-white.svg",
  },
};
const HomepageNine = () => {
  return (
    <>
      {" "}
      <Layout>
        <Header
          scroll={true}
          logoUrl="/image/logo-8.png"
          btnAnimation={false}
          signUpButtonClass="btn-masco btn-masco--header btn-primary-l09 rounded-pill btn-fill--down"
        />
        <HeroSection />
        <StatsSection />
        <FeatureSection />
        <ContentSectionOne />
        <TabSection />
        <ContentSectionTwo />
        <PricingSection />
        <TestimonialSection />
        <FaqSection />
        <CtaSection />
        <FooterLayoutOne {...settingProps.footer} />;{" "}
      </Layout>
    </>
  );
};

export default HomepageNine;
