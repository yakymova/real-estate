import "./Main.css";
import HowItWorks from "./HowItWorks/HowItWorks";
import Deals from "./Deals/Deals";
import Featured from "./Featured/Featured";

const Main = (props) => {
    return (
        <main className="main__container">
            <HowItWorks text={props.main.howitworks} />
            <Deals deals={props.main.deals} />
            <Featured info={props.main.featured} />
        </main>
    )
}

export default Main;