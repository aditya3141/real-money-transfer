import { useEffect, useState } from "react";
import Dropdown from "./MenuWithDropdown/Dropdown";
import data from "./data";
import { Link } from "react-router-dom";
import BrandLogo from "../BrandLogo/BrandLogo";
import Button from "../Buttons/Button";

const Header = ({
  signUpButtonClass,
  btnAnimation = true,
  logoUrl,
  scroll = false,
}) => {
  /* Header scrolling and reveal */
  const [scrolling, setScrolling] = useState("");
  const [reveal, setReveal] = useState("");

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position

    if (scrollPosition > 80) {
      setScrolling("scrolling");
    } else {
      setScrolling("");
    }

    if (scrollPosition > 700) {
      setReveal("reveal-header");
    } else {
      setReveal("");
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling, reveal]);
  /* Mobile menu */
  const [showMenu, setShowMenu] = useState(false);
  const [transition, setTransition] = useState(false);

  const handleNavShow = () => {
    setShowMenu(!showMenu);
    setTransition(true);
  };

  return (
    <header
      className={`site-header site-header--transparent ${
        scroll ? "site-header--sticky" : ""
      } ${scroll ? scrolling : ""} ${scroll ? reveal : ""} `}
    >
      <div className="container">
        <nav className={`navbar site-navbar `}>
          <div className="brand-logo">
            <Link to="/">
              {/* light version logo (logo must be black)*/}
              <BrandLogo logoUrl={logoUrl} />
            </Link>
          </div>
          <div className="menu-block-wrapper ">
            <div
              className={`menu-overlay ${transition ? "transition" : ""} ${
                showMenu ? "active" : ""
              }`}
              onClick={() => handleNavShow()}
            />
            <nav
              className={`menu-block ${transition ? "transition" : ""} ${
                showMenu ? "active" : ""
              } `}
              id="append-menu-header"
            >
              <div className="mobile-menu-head">
                <Link to="/index">
                  <BrandLogo type="white" />
                </Link>
                <div className="current-menu-title" />
                <div
                  className="mobile-menu-close"
                  onClick={() => handleNavShow()}
                >
                  ×
                </div>
              </div>
              <ul className="site-menu-main">
                {data?.map((menuItem, index) => (
                  <Dropdown key={index} {...menuItem} />
                ))}
              </ul>
            </nav>
          </div>

          <div className="mobile-menu-trigger" onClick={() => handleNavShow()}>
            <span />
          </div>

          <div className="header-cta-btn-wrapper">
            <a
              href="#"
              className="btn-masco btn-masco--header btn-masco--header-secondary"
            >
              <span>Login</span>
            </a>

            <Button
              href="#"
              animation={btnAnimation}
              className={signUpButtonClass}
            >
              Sign up free
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
