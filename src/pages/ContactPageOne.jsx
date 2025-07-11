import CtaSection from "@sections/home-1/Cta/CtaSection";
import FooterLayoutOne from "@components/Footer/FooterOne";
import Header from "@components/Header";
import Banner from "@components/Banner";
import ContactMainSection from "@sections/inner-pages/ContactOne/ContactMain";
import FeatureSection from "@sections/inner-pages/ContactOne/Feature";
import Layout from "@components/Layout/PageWrapper/PageWrapper";
let settingProps = {
  footer: {
    className: " footer-padding-default footer--dark-v1",
    logo: "logo-white.svg",
  },
};
const ContactPageOne = () => {
  return (
    <>
      {" "}
      <Layout>
        <Header scroll={true}  signUpButtonClass="btn-masco btn-masco--header rounded-pill btn-fill--up" />
        <Banner title="Contact Us" text="Contact Us" />
        <FeatureSection />
        <ContactMainSection />
        <CtaSection />
        <FooterLayoutOne {...settingProps.footer} />{" "}
      </Layout>
    </>
  );
};

export default ContactPageOne;
