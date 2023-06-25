import './Featured.css';

const Featured = (props) => {
    let options = props.info.options;
    let keys = [];
    for (const key in options) {
        keys.push(key);
    }

    return (
        <section className="featured">
            <h2 className="featured__title">
                {props.info.title}
            </h2>
            <div className="featured__content">
                <div className="featured__images">
                    <div className='featured__main-img'>
                        <img src={props.info.imageFront} alt="img" />
                    </div>
                    <div className='featured__back-img'>
                        <img src={props.info.imageBack} alt="img" />
                    </div>
                </div>
                <div className="featured__text-block">
                    <h3 className="featured__subtitle">
                        {props.info.subtitle}
                    </h3>
                    <p className="featured__text">
                        {props.info.text}
                    </p>

                    <div className="featured__options">
                        {
                            keys.map(key => {
                                return (
                                    <div className="option">
                                        <span className="option__name">{key}</span>
                                        <span className="option__content">{options[key]}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button className="featured__btn">{props.info.btnText}</button>
                </div>
            </div>
        </section>
    )
}

export default Featured;