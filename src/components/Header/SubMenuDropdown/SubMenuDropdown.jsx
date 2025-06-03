import { useState } from "react";
import { Link } from "react-router-dom";

const SubMenuDropdown = ({ name, childSub }) => {
  const [childDropDownOpen, setChildDropDownOpen] = useState(false);
  const handleChildDropdown = () => setChildDropDownOpen(!childDropDownOpen);

  return (
    <>
      <li className="sub-menu_item nav-item-has-children child-item">
        <a
          className="sub-menu__item-link"
          onClick={() => handleChildDropdown()}
        >
          <span className="menu-item-text">{name}</span>
          <i className="fas fa-angle-right" />
        </a>
        <div
          className={`sub-menu child-sub ${childDropDownOpen ? "active" : ""}`}
          id="submenu-22"
        >
          <ul className="sub-menu_list">
            {childSub &&
              childSub?.map((item, index) => (
                <li className="sub-menu_item" key={index}>
                  <Link to={item?.link}>
                    <span className="menu-item-text">{item?.name}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </li>
    </>
  );
};

export default SubMenuDropdown;
