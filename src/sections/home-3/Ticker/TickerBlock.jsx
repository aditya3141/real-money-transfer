import { hasClassProps } from "@utils/helpers";
const TickerBlock = ({ className }) => {
  return (
    <>
      <div className={`ticker-01_content${hasClassProps(className)}`}>
        <div className="ticker-item">
          <p>Start keeping your body and mind healthy</p>
          <p>💪</p>
        </div>
        <div className="ticker-item">
          <p>Start keeping your body and mind healthy</p>
          <p>💪</p>
        </div>
        <div className="ticker-item">
          <p>Start keeping your body and mind healthy</p>
          <p>💪</p>
        </div>
        <div className="ticker-item">
          <p>Start keeping your body and mind healthy</p>
          <p>💪</p>
        </div>
      </div>
    </>
  );
};

export default TickerBlock;
