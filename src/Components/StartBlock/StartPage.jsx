import "./StartPage.css";
import Form from "./Form/Form";
import Partners from "./Partners/Partners";

const StartPage = (props) => {
    return (
        <section className="home__container">
            <div className="home__text-block text-block">
                <h2 className="text-block__subtitle">{props.start.subtitle}</h2>
                <h1 className="text-block__title">{props.start.title}</h1>
                <p className="text-block__text">{props.start.text}</p>
                <Form help={props.start.formHelp} />
            </div>
            <div className="home__img-block">
                <img src={props.start.img} alt="house" />
            </div>
            <Partners partners={props.partners} />
        </section>
    )
}

export default StartPage;