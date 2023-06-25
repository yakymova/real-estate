import { NavLink } from "react-router-dom";
import "./HeaderMenu.css";
import { useEffect, useState } from "react";

const HeaderMenu = ({ links }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    let changeMenuVisible = () => {
        setIsMenuVisible(() => !isMenuVisible);
    }

    useEffect(() => {
        const handleClick = e => {
            let click = e.composedPath().includes(document.querySelector('.menu__btn'));

            if (!click) {
                document.querySelector('.header__items').classList.remove('active');
                document.querySelector('.menu__btn').classList.remove('active');
            }
        }
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [])

    return (
        <div className="header__menu">
            <ul className={`header__items ${isMenuVisible ? 'active' : ''}`}>
                {
                    links.map(link => <NavLink to={link.address} className="header__item" key={link.name}>{link.name}</NavLink>)
                }
            </ul>
            <div className={`menu__btn ${isMenuVisible ? 'active' : ''}`} onClick={changeMenuVisible}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default HeaderMenu;