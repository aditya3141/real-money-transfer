import BrandSection from "@sections/home-5/Brand";
import FeatureSection from "@sections/home-5/Feature";
import Service from "@sections/home-5/Service";
import CtaSection from "@sections/home-5/Cta";
import HeroSection from "@sections/home-5/Hero";
import ContentSectionOne from "@sections/home-5/ContentOne";
import Header from "@components/Header/Header";
import ContentSectionTwo from "@sections/home-5/ContentTwo";
import ProcessSection from "@sections/home-5/Process";
import TeamSection from "@sections/home-5/Team";
import TestimonialSection from "@sections/home-5/Testimonial";
import PricingSection from "@sections/home-5/Pricing";
import FooterLayoutOne from "@components/footer/FooterOne";
import Layout from "@components/Layout/PageWrapper/PageWrapper";
let settingProps = {
  footer: {
    socialClass: "list-social list-social--primary-l5",
    className: "footer-padding-default footer--dark footer-l05 bg-black-3",
    logo: "logo-white.svg",
  },
};
const HomepageFive = () => {
  return (
    <>
      {" "}
      <Layout>
        <Header
          scroll={true}
          logoUrl="/image/logo-5.png"
          btnAnimation={false}
          signUpButtonClass="btn-masco btn-masco btn-masco btn-masco--header btn-primary-l05"
        />
        <HeroSection />
        <BrandSection />
        <FeatureSection />
        <ContentSectionOne />
        <Service />
        <ContentSectionTwo />
        <ProcessSection />
        <TeamSection />
        <PricingSection />
        <TestimonialSection />
        <CtaSection />
        <FooterLayoutOne {...settingProps.footer} />{" "}
      </Layout>
    </>
  );
};

export default HomepageFive;
