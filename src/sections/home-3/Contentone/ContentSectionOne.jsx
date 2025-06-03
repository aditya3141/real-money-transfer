import Button from '@components/Buttons'
const ContentSectionOne = () => {
    return (
        <div className="home-3_content-section-1 padding-top-120 padding-bottom-150 bg-light-2" id="about">
  <div className="container">
    <div className="row row--custom ">
      <div className="offset-lg-1 col-xxl-auto col-md-3  col-xs-4 col-5" data-aos-duration={1000} data-aos="fade-right">
        <div className="home-3_content-image-1-block ">
          <div className="home-3_content-image-1">
            <img src="/image/home-3/content-1.png" alt="alternative text" />
          </div>
          <div className="home-3_content-image-1-shape absolute-center">
            <img src="/image/home-3/content-1-shape.svg" alt="image shape" />
          </div>
        </div>
      </div>
      <div className="offset-xl-1 col-xl-6 col-lg-7 col-md-10 col-auto" data-aos-duration={1000} data-aos="fade-left">
        <div className="content">
          <div className="content-text-block">
            <h2 className="content-title heading-md text-black">
              Keep your body and mind healthy in a modern way
            </h2>
            <p>It allows users to track data, such as volume, time, weight, and goals, to compare their progress. Acting as a type of digital workout journal, this app helps you log workouts and utilize helpful graphs.</p>
            <p>The app also allows users to create their own custom workout plans, down to the number of sets &amp; reps for everyone, from beginner level.</p>
          </div>
          <div className="content-button-block">
            <Button href="/about" animation={false} className="btn-primary-l03 btn-shadow rounded-pill">Discover More</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
}

export default ContentSectionOne;