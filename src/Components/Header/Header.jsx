import "./Header.css";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

const Header = (props) => {
    return (
        <header>
            <div className="header__container">
                <div className="header__content">
                    <div className="header__logo">{props.header.logo}</div>
                    <HeaderMenu links={props.header.links} />
                </div>
            </div>
        </header>
    )
}

export default Header;