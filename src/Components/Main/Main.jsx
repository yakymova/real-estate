import "./Main.css";
import HowItWorks from "./HowItWorks/HowItWorks";
import Deals from "./Deals/Deals";

const Main = (props) => {
    return (
        <main className="main__container">
            <HowItWorks text={props.main.howitworks} />
            <Deals deals={props.main.deals} />
        </main>
    )
}

export default Main;