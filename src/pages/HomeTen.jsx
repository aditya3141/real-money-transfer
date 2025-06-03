import Header from "@components/Header";
import BrandSection from "@sections/home-10/Brand";
import ContentSection from "@sections/home-10/Content";
import CtaSection from "@sections/home-10/Cta";
import HeroSection from "@sections/home-10/Hero";
import FeatureSection from "@sections/home-10/Feature";
import ServiceSection from "@sections/home-10/Service";
import ProcessSection from "@sections/home-10/Process";
import IntegrationSection from "@sections/home-10/Integration";
import TestimonialSection from "@sections/home-10/Testimonial/TestimonialSection";
import FaqSection from "@sections/home-10/Faq/FaqSection";
import FooterLayoutOne from "@components/Footer/FooterOne";
import Layout from "@components/Layout/PageWrapper/PageWrapper";
let settingProps = {
  footer: {
    className: "footer-padding-default footer--dark-v1 footer-l10",
    logo: "logo-11-white.svg",
  },
};
const HomepageTen = () => {
  return (
    <>
      {" "}
      <Layout>
        <Header
          scroll={true}
          logoUrl="/image/logo-9.png"
          btnAnimation={false}
          signUpButtonClass="btn-masco btn-masco--header btn-primary-l10 rounded-pill btn-fill--slide-left"
        />
        <HeroSection />
        <BrandSection />
        <ContentSection />
        <FeatureSection />
        <ServiceSection />
        <ProcessSection />
        <TestimonialSection />
        <FaqSection />
        <IntegrationSection />
        <CtaSection /> <FooterLayoutOne {...settingProps.footer} />;{" "}
      </Layout>
    </>
  );
};

export default HomepageTen;
