import CtaSection from "@sections/home-4/Cta/CtaSection";
import HeroSection from "@sections/home-4/Hero";
import SectionDividerCream from "@sections/home-4/SectionDividerCream";
import SectionDividerCreamDark from "@sections/home-4/SectionDividerCreamDark";
import ContentSectionOne from "@sections/home-4/ContentOne";
import ContentSectionTwo from "@sections/home-4/ContentTwo";
import FaqSection from "@sections/home-4/Faq";
import FeatureSection from "@sections/home-4/Feature";
import Topic from "@sections/home-4/Topic/Topic";
import CourseSection from "@sections/home-4/Course";
import TestimonialSection from "@sections/home-4/Testimonial";
import FooterLayoutOne from "@components/footer/FooterOne";
import Header from "@components/Header";
import Layout from "@components/Layout/PageWrapper/PageWrapper";
let settingProps = {
  footer: {
    socialClass: "list-social--hvr-primary-l4",
    className: "footer-padding-default footer--light footer-l04",
    logo: "logo-4.png",
  },
};

const HomepageFour = () => {
  return (
    <>
      {" "}
      <Layout>
        <Header
          scroll={true}
          logoUrl="/image/logo-4.png"
          btnAnimation={false}
          signUpButtonClass="btn-masco btn-masco btn-primary-l04 btn-shadow btn-shadow--reverse btn-shadow--reverse-center rounded-pill"
        />
        <HeroSection />
        <FeatureSection />
        <ContentSectionOne />
        <Topic />
        <SectionDividerCream />
        <CourseSection />
        <SectionDividerCreamDark />
        <ContentSectionTwo />
        <TestimonialSection />
        <SectionDividerCream />
        <FaqSection />
        <SectionDividerCreamDark />
        <CtaSection />
        <SectionDividerCream />
        <FooterLayoutOne {...settingProps.footer} />{" "}
      </Layout>
    </>
  );
};

export default HomepageFour;
