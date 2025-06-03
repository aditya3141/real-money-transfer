import Button from "@components/Buttons"
import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";
import { useState } from "react";
const PricingSection= () => {
  const [monthly,setMonthly] = useState(false);
   return (
   <div className="home-2_pricing-section section-padding-120 bg-primary-opacity-l2" id="pricing">
  <div className="container">
    <SectionHeading
      title="Choice the right pricing plan that suits your need"
      classes={{
        title:"heading-md text-black"
      }}
    >
      <div className="home-2_pricing-control-block">
        <div className="pricing-control">
          <span className={monthly ? "active":""} onClick={()=> setMonthly(true)}>Monthly</span>
          <span data-target="yearly" className={monthly ? "":"active"} onClick={()=> setMonthly(false)}>Yearly</span>
        </div>
      </div>
    </SectionHeading>

    <div className="row gutter-y-30 justify-content-center" data-plan-active={monthly?"monthly":"yearly"}>
      <div className="col-xl-4 col-lg-6 col-md-8 col-sm-9" data-aos-duration={1000} data-aos="fade-up">
        <div className="pricing-card h-100">
          <div className="pricing-card__head">
            <h3 className="pricing-card__plan">Free Plan</h3>
            <h3 className="pricing-card__price-block">$<span className="pricing-card__price dynamic-value">{monthly ? "00" : "00"}</span>/month</h3>
            <p>
              No credit card required
            </p>
          </div>
          <div className="pricing-card__body">
            <ul className="pricing-card__list">
              <li>Unlimited chats &amp; websites</li>
              <li>60-day conversations history</li>
              <li>Basic widget customization</li>
              <li>Web, desktop &amp; mobile apps</li>
              <li className="disabled">Engage visitors via visitor list</li>
              <li className="disabled">Engage with automatic messages</li>
            </ul>
            <div className="pricing-card__button">
              <Button href="/pricing-2" className="btn-outline w-100" animation={false}>Purchase now</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-8 col-sm-9" data-aos-duration={1000} data-aos="fade-up">
        <div className="pricing-card h-100 active">
          <div className="pricing-card__head">
            <h3 className="pricing-card__plan">Popular Plan</h3>
            <h3 className="pricing-card__price-block">$<span className="pricing-card__price">
            {monthly ? "199" : "159"}
            </span>/month</h3>
            <p>
              No credit card required
            </p>
          </div>
          <div className="pricing-card__body">
            <ul className="pricing-card__list">
              <li>Live chat + email + FB Messenger</li>
              <li>3-year conversations history</li>
              <li>Advanced widget customization</li>
              <li>24/7 system monitoring facility</li>
              <li>Engage visitors via visitor list</li>
              <li>Engage with automatic messages</li>
            </ul>
            <div className="pricing-card__button">
              <Button href="/pricing-2" className="btn-primary-l02 w-100" animation={false}>Purchase now</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-8 col-sm-9" data-aos-duration={1000} data-aos="fade-up">
        <div className="pricing-card h-100">
          <div className="pricing-card__head">
            <h3 className="pricing-card__plan">Standard Plan</h3>
            <h3 className="pricing-card__price-block">$<span className="pricing-card__price">{monthly ? "49" : "39"}</span>/month</h3>
            <p>
              No credit card required
            </p>
          </div>
          <div className="pricing-card__body">
            <ul className="pricing-card__list">
              <li>Live chat + email + FB Messenger</li>
              <li>1- year conversations history</li>
              <li>Advanced widget customization</li>
              <li>24/7 system monitoring facility</li>
              <li className="disabled">Engage visitors via visitor list</li>
              <li className="disabled">Engage with automatic messages</li>
            </ul>
            <div className="pricing-card__button">
              <Button href="/pricing-2" className="btn-outline w-100" animation={false}>Purchase now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  

   )
}

export default PricingSection;


