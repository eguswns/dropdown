import { MENU_ITEMS } from "./menuData";
import "./NavMenu.scss";

export default function NavMenu() {
  return (
    <nav className="nav">
      <div className="nav__container">
        <ul className="nav__menu">
          {MENU_ITEMS.map((menu, idx) => (
            <li key={idx} className="nav__item">
              <div className="item__title">{menu.title}</div>
              <ul className="subMenu__list">
                {menu.subTitles.map((subTitle, subIdx) => (
                  <li key={subIdx} className="subMenu__item">
                    {subTitle}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
