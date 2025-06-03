import Aos from "aos";
import { useEffect, useState } from "react";
const Layout = ({ children }) => {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    Aos.init({
      once: true,
      duration: 1000,
      disable: function () {
        var maxWidth = 991;
        return window.innerWidth < maxWidth;
      },
    });
  }, []);

  return (
    <>
      {loading && (
        <div className="preloader-wrapper">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      <div className={`page-wrapper overflow-hidden`}>{children}</div>
    </>
  );
};

export default Layout;
