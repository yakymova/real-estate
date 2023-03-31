import "./Deals.css";
import TabsDeals from './TabsDeals/TabsDeals';

const Deals = ({ deals }) => {
    return (
        <section className="deals__container">
            <div className="deals__header">
                <div className="deals__content">
                    <h2 className="deals__title">{deals.title}</h2>
                    <p className="deals__text">{deals.text}</p>
                </div>
                <button className="deals__main-btn">{deals.mainButton}</button>
            </div>
            <TabsDeals deals={deals} />
        </section>
    )
}

export default Deals;