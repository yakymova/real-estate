import "./About.css";
import img from "../../assets/images/about-image.png";

const About = () => {
    return (
        <section className="about__container">
            <h1 className="about__title">About...</h1>
            <div className="about__text-block">
                <p className="about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolorum temporibus iusto odit sunt assumenda delectus architecto deserunt voluptatum magni totam amet numquam odio</p>
                <p className="about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolorum temporibus iusto odit sunt assumenda delectus architecto deserunt voluptatum magni totam amet numquam odio</p>
                <button className="about__btn">Read more</button>
            </div>
            <div className="about__img">
                <img src={img} alt="about_photo" />
            </div>
        </section>
    )
}

export default About;