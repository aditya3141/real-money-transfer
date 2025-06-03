import Header from "@components/Header";
import Banner from "@components/Banner/Banner";
import FooterLayoutOne from "@components/Footer/FooterOne";
import CtaSection from "@sections/home-1/Cta/CtaSection";
import TeamOneSection from "@sections/inner-pages/Team/TeamOne";
import TeamTwoSection from "@sections/inner-pages/Team/TeamTwo";
import Layout from "@components/Layout/PageWrapper/PageWrapper";
let settingProps = {
  footer: {
    className: " footer-padding-default footer--dark-v1",
    logo: "logo-white.svg",
  },
};
const TeamPage = () => {
  return (
    <>
      {" "}
      <Layout>
        <Header signUpButtonClass="btn-masco btn-masco--header rounded-pill btn-fill--up" />
        <Banner title="Our Team" text="Team" />
        <TeamOneSection />
        <TeamTwoSection />
        <CtaSection />
        <FooterLayoutOne {...settingProps.footer} />{" "}
      </Layout>
    </>
  );
};

export default TeamPage;
