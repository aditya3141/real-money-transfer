import Header from "@components/Header";
import Banner from "@components/Banner";
import FaqSection from "@sections/inner-pages/Service/FAQ";
import FooterLayoutOne from "@components/Footer/FooterOne";
import TeamSection from "@sections/inner-pages/About/Team";
import BrandSection from "@sections/home-1/Brand";
import CtaSection from "@sections/home-1/Cta";
import ContentSection from "@sections/inner-pages/About/Content";
import FactSection from "@sections/inner-pages/About/Fact";
import FeatureSection from "@sections/inner-pages/About/Feature";
import PortfolioSection from "@sections/inner-pages/About/Portfolio";
import BannerSection from "@sections/inner-pages/About/Banner";
import Layout from "@components/Layout/PageWrapper/PageWrapper";

let settingProps = {
  footer: {
    className: " footer-padding-default footer--dark-v1",
    logo: "logo-white.svg",
  },
};
const AboutPage = () => {
  return (
    <>
      <Layout>
        <Header  scroll={true} signUpButtonClass="btn-masco btn-masco--header rounded-pill btn-fill--up" />
        <Banner title="About Us" text="About" />
        <BannerSection />
        <BrandSection />
        <ContentSection />
        <FactSection />
        <FeatureSection />
        <PortfolioSection />
        <TeamSection />
        <FaqSection />
        <CtaSection />
        <FooterLayoutOne {...settingProps.footer} />
      </Layout>
    </>
  );
};

export default AboutPage;
