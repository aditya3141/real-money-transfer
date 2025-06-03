import { hasClassProps } from "@utils/helpers";
const TickerBlock = ({ className }) => {
  return (
    <>
      <div className={`ticker-03_content${hasClassProps(className)}`}>
        <div className="ticker-item">
          <img src="/image/brand-logo/discord.png" alt="image alt" />
        </div>
        <div className="ticker-item">
          <img src="/image/brand-logo/spotify.png" alt="image alt" />
        </div>
        <div className="ticker-item">
          <img src="/image/brand-logo/slack.png" alt="image alt" />
        </div>
        <div className="ticker-item">
          <img src="/image/brand-logo/dropbox.png" alt="image alt" />
        </div>
        <div className="ticker-item">
          <img src="/image/brand-logo/mailchimp.png" alt="image alt" />
        </div>
        <div className="ticker-item">
          <img src="/image/brand-logo/whatsapp.png" alt="image alt" />
        </div>
        <div className="ticker-item">
          <img src="/image/brand-logo/skype.png" alt="image alt" />
        </div>
        <div className="ticker-item">
          <img src="/image/brand-logo/gmail.png" alt="image alt" />
        </div>
        <div className="ticker-item">
          <img src="/image/brand-logo/zoom.png" alt="image alt" />
        </div>
        <div className="ticker-item">
          <img src="/image/brand-logo/figma.png" alt="image alt" />
        </div>
        <div className="ticker-item">
          <img src="/image/brand-logo/snapchat.png" alt="image alt" />
        </div>
        <div className="ticker-item">
          <img src="/image/brand-logo/shopify.png" alt="image alt" />
        </div>
      </div>
    </>
  );
};

export default TickerBlock;
