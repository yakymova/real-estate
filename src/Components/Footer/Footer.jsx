import './Footer.css';

const Footer = ({ footer }) => {
    return (
        <footer className='footer__container'>
            <h3 className="footer__title">{footer.title}</h3>
            <h4 className="footer__subtitle">{footer.subtitle}</h4>
            <form action="" className="footer__form">
                <div className='footer__form-container'>
                    <p className="footer__form-help">{footer.formHelp}</p>
                    <input type="text" className='footer__input' placeholder='example@example.com' />
                </div>
                <button className="footer__btn">{footer.formButton}</button>
            </form>
            <div className="footer__logo-container">
                <p className="footer__copyring">{footer.copyring}</p>
                <div className="footer__logo">{footer.logo}</div>
            </div>
        </footer>
    )
}

export default Footer;