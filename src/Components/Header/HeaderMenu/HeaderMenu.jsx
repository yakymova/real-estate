import { NavLink } from "react-router-dom";
import "./HeaderMenu.css";

const HeaderMenu = ({ links }) => {
    return (
        <div className="header__menu">
            <ul className="header__items">
                {
                    links.map(link => <NavLink to={link.address} className="header__item" key={link.name}>{link.name}</NavLink>)
                }
            </ul>
        </div>
    )
}

export default HeaderMenu;