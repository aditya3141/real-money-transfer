import { hasClassProps } from "@utils/helpers";
const TickerBlock = ({className}) => {
  return (
    <div className={`ticker-02_content${hasClassProps(className)}`}>
      <div className="ticker-tag ">Programming Languages</div>
      <div className="ticker-tag ">Time Management</div>
      <div className="ticker-tag ">iOS Development</div>
      <div className="ticker-tag ">Leadership Skills</div>
      <div className="ticker-tag ">Business</div>
      <div className="ticker-tag ">Photography</div>
      <div className="ticker-tag ">Digital Marketing</div>
      <div className="ticker-tag ">Lifestyle</div>
      <div className="ticker-tag ">Healthcare</div>
    </div>
  );
};

export default TickerBlock;
