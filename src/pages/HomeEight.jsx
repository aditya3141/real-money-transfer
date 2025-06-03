import Header from "@components/Header";
import HeroSection from "@sections/home-8/Hero/Hero";
import StatsSection from "@sections/home-8/Stats";
import ContentSectionOne from "@sections/home-8/ContentOne";
import ContentSectionTwo from "@sections/home-8/ContentTwo";
import ServiceSection from "@sections/home-8/Service";
import ContentSectionThree from "@sections/home-8/ContentThree";
import VideoSection from "@sections/home-8/Video";
import PricingSection from "@sections/home-8/Pricing";
import TeamSection from "@sections/home-8/Team";
import BlogSection from "@sections/home-8/Blog";
import CtaSection from "@sections/home-8/Cta";
import FooterLayoutOne from "@components/Footer/FooterOne";
import Layout from "@components/Layout/PageWrapper/PageWrapper";
const HomepageEight = () => {
  return (
    <>
      {" "}
      <Layout>
        <Header
          scroll={true}
          logoUrl="/image/logo-6.png"
          btnAnimation={false}
          signUpButtonClass="btn-masco btn-masco--header btn-primary-l08 btn-fill--slide"
        />
        <HeroSection />
        <StatsSection />
        <ContentSectionOne />
        <ContentSectionTwo />
        <ServiceSection />
        <ContentSectionThree />
        <VideoSection />
        <PricingSection />
        <TeamSection />
        <BlogSection />
        <CtaSection />
        <FooterLayoutOne
          socialClass="list-social list-social--primary-l5"
          className="footer-padding-default footer--dark-v2 footer-l08"
          logo="logo-10.svg"
        />{" "}
      </Layout>
    </>
  );
};

export default HomepageEight;
