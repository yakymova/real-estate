import "./Partners.css";
import Partner from "./Partner";

const Partners = ({ partners }) => {
    return (
        <section className="partners">
            <h3 className="partners__title">{partners.title}</h3>
            <div className="partners__items">
                {
                    partners.partners.map(partner => <Partner logo={partner.logo} key={partner.name} />)
                }
            </div>
        </section>
    )
}

export default Partners;