import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { useState } from "react";
import Button from "@components/Buttons";
import { ButtonPlay } from "@components/Buttons/Button";
import CalculatorComponent from "@components/Calculator/CalculatorComponent";

const HeroSection = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="home-1_hero-section" id="hero">
      <div className="home-1_hero-shape-1">
        <img src="/image/home-1/hero-shape-1.svg" alt="hero shape One" />
      </div>
      <div className="home-1_hero-shape-2">
        {/* <img src="/image/home-1/hero-shape-2.svg" alt="hero shape two" /> */}
      </div>
      <div className="container">
        <div className="row row--hero-content">
          <div
            className="col-xxl-auto col-lg-6 col-md-7 col-sm-8 col-12  transform-none "
            
          >
            <div className="home-1_hero-image-block">
             <CalculatorComponent/>
            </div>
          </div>
          <div
            className="col-xxl-auto col-lg-6 col-md-10"
            data-aos-duration={1000}
            data-aos="fade-right"
            data-aos-delay={300}
          >
           <div className="home-1_hero-content">
  <div className="home-1_hero-content-text">
    <h1 className="hero-content__title heading-xxl">
      Fast, Secure, and Affordable Money Transfers
    </h1>
    <p>
      Send money across the globe with ease. Our platform offers reliable, real-time transfers with competitive exchange rates and zero hidden fees. Whether it's for family, business, or personal use — we’ve got you covered.
    </p>
  </div>


              <div className="home-1_hero-newsletter">
                
           <div className="cta-button-group ">
            <a href="#"><img src="/image/common/app-store.png" style={{maxWidth: "200px", height: "60px"}} alt="image alt" /></a>
            
            
            <a href="#" className="ms-2"><img src="/image/common/play-store.png" style={{maxWidth: "200px", height: "60px"}} alt="image alt" /></a></div></div>

              </div>
            
          </div>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;
