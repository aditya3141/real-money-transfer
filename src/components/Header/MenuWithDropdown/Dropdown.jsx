import { Link } from "react-router-dom";
import SubMenuDropdown from "../SubMenuDropdown/SubMenuDropdown";
import { useState } from "react";

const Dropdown = ({ title, link = "/", subMenuItem }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const handleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };
  return (
    <>
      {subMenuItem ? (
        <li className="nav-item nav-item-has-children">
          <a
            className="nav-link-item drop-trigger"
            onClick={() => handleSubMenu()}
          >
            {title}
            <i className="fas fa-angle-down" />
          </a>
          <div
            className={`sub-menu ${subMenuOpen ? "active" : ""}`}
            id="submenu-1"
          >
            <ul className="sub-menu_list">
              {subMenuItem?.map((item, index) =>
                !item.link ? (
                  <SubMenuDropdown {...item} key={index} />
                ) : (
                  <li key={index} className="sub-menu_item">
                    <Link to={item?.link}>
                      <span className="menu-item-text">{item?.name}</span>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </li>
      ) : (
        <li className="nav-item">
          <Link to={link} className="nav-link-item drop-trigger">
            {title}
          </Link>
        </li>
      )}
    </>
  );
};

export default Dropdown;

/* 
 
*/
