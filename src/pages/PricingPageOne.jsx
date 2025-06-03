import Header from "@components/Header";
import Banner from "@components/Banner/Banner";
import CtaSection from "@sections/home-1/Cta/CtaSection";
import FooterLayoutOne from "@components/Footer/FooterOne";
import PricingSection from "@sections/home-8/Pricing";
import Layout from "@components/Layout/PageWrapper/PageWrapper";
let settingProps = {
  footer: {
    className: " footer-padding-default footer--dark-v1",
    logo: "logo-white.svg",
  },
};
const PricingPageOne = () => {
  return (
    <>
      {" "}
      <Layout>
        <Header signUpButtonClass="btn-masco btn-masco--header rounded-pill btn-fill--up" />
        <Banner title="Pricing" text="Pricing" />
        <PricingSection />
        <CtaSection />
        <FooterLayoutOne {...settingProps.footer} />{" "}
      </Layout>
    </>
  );
};

export default PricingPageOne;
