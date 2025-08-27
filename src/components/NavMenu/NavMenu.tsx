import { useState } from "react";
import { MENU_ITEMS } from "./menuData";
import "./NavMenu.scss";

export default function NavMenu() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className="nav">
      <div
        className="nav__container"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <ul className="nav__menu">
          {MENU_ITEMS.map((menu, idx) => (
            <li
              key={idx}
              className={`nav__item ${hoveredIndex === idx ? "active" : ""}`}
              onMouseEnter={() => setHoveredIndex(idx)}
            >
              <div className="item__title">{menu.title}</div>
            </li>
          ))}
        </ul>
        {hoveredIndex !== null && (
          <div className="subMenu">
            {MENU_ITEMS.map((menu, idx) => (
              <ul
                key={idx}
                className={`subMenu__list ${
                  hoveredIndex === idx ? "active" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(idx)}
              >
                {menu.subTitles.map((subTitle, subIdx) => (
                  <li
                    key={subIdx}
                    className={`subMenu__item ${
                      hoveredIndex === idx ? "active" : ""
                    }`}
                  >
                    {subTitle}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
