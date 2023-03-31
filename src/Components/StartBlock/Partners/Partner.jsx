const Partner = ({ logo }) => {
    return (
        <div className="partners__item">
            <img src={logo} alt="partner-logo" className="partners__logo" />
        </div>
    )
}

export default Partner;