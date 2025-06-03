import ComingSoonSection from "@sections/coming-soon/ComingSoonSection";

const ComingSoonPage = () => {
  return (
    <>
      <a
        href="/"
        className="d-flex justify-content-center section-padding-top-120"
      >
        <img src="/image/logo.png" alt="image alt" />
      </a>

      <ComingSoonSection />
    </>
  );
};

export default ComingSoonPage;
