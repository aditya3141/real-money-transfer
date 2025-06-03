import Button from "@components/Buttons/Button";

const ErrorSection = () => {
  return (
    <>
      <section className="error-section bg-light-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-5 col-lg-6 col-sm-7 col-xs-8 col-9">
              <div className="error-content">
                <div className="error-content__image">
                  <img src="/image/404.png" alt="image alt" />
                </div>
                <h2 className="heading-md text-black">Page not found</h2>
                <p>
                  The requested URL you are looking for doesn’t exist on this
                  server.
                </p>
                <div className="error-content__button">
                  <Button animation={false} className="rounded-pill">
                    {" "}
                    Back to Homepage
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorSection;
