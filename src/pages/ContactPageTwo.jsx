import CtaSection from "@sections/home-1/Cta/CtaSection";
import FooterLayoutOne from "@components/Footer/FooterOne";
import Header from "@components/Header";
import Banner from "@components/Banner";
import FaqSection from "@sections/inner-pages/Service/FAQ/FaqSection";
import FormSection from "@sections/inner-pages/ContactTwo/Form";
import LocationSection from "@sections/inner-pages/ContactTwo/Location";
import Layout from "@components/Layout/PageWrapper/PageWrapper";
let settingProps = {
  footer: {
    className: " footer-padding-default footer--dark-v1",
    logo: "logo-white.svg",
  },
};
const ContactPageTwo = () => {
  return (
    <>
      {" "}
      <Layout>
        <Header signUpButtonClass="btn-masco btn-masco--header rounded-pill btn-fill--up" />
        <Banner title="Send us a message" text="Contact Us" />
        <FormSection />
        <LocationSection />
        <FaqSection />
        <CtaSection />
        <FooterLayoutOne {...settingProps.footer} />{" "}
      </Layout>
    </>
  );
};

export default ContactPageTwo;
