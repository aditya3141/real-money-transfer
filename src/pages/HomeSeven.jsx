import Header from "@components/Header";
import BrandSection from "@sections/home-7/Brand";
import CtaSection from "@sections/home-7/Cta";
import FactSection from "@sections/home-7/Fact";
import HeroSection from "@sections/home-7/Hero";
import TestimonialSection from "@sections/home-7/Testimonial";
import ServiceSection from "@sections/home-7/Service";
import ContentSectionTwo from "@sections/home-7/ContentTwo";
import ContentSectionOne from "@sections/home-7/ContentOne";
import PricingSection from "@sections/home-7/Pricing";
import FooterLayoutOne from "../components/Footer/FooterOne";
import Layout from "@components/Layout/PageWrapper/PageWrapper";
const HomepageSeven = () => {
  return (
    <>
      {" "}
      <Layout>
        <Header
          scroll={true}
          logoUrl="/image/logo-6.png"
          btnAnimation={false}
          signUpButtonClass="btn-masco btn-primary-l07 rounded-pill btn-shadow"
        />
        <HeroSection />
        <FactSection />
        <ContentSectionOne />
        <ServiceSection />
        <ContentSectionTwo />
        <PricingSection />
        <TestimonialSection />
        <BrandSection />
        <CtaSection />
        <FooterLayoutOne
          socialClass="list-social--hvr-black"
          className="footer-padding-default footer--light footer-l02"
          logo="logo-6.png"
        />{" "}
      </Layout>
    </>
  );
};

export default HomepageSeven;
