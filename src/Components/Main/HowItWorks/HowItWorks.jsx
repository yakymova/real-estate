import CreateItem from './CreateItem';
import './HowItWorks.css';

const HowItWorks = (props) => {
    return (
        <section className="how-it">
            <h2 className='how-it__title'>{props.text.title}</h2>
            <div className="how-it__items">
                {
                    props.text.items.map((item, index) => <CreateItem item={item} key={index} />)
                }
            </div>
        </section>
    )
}

export default HowItWorks;