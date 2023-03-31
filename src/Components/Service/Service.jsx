import "./Service.css";

const Service = () => {
    return (
        <section className="service__container">
            <h1 className="service__title">Service...</h1>
            <article className="service__article article">
                <div className="article__icon icon1"></div>
                <div className="article__content">
                    <h4 className="article__title">Lorem ipsum dolor sit amet.</h4>
                    <p className="article__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto aliquam iste, accusamus officiis corrupti dignissimos ad commodi sint reprehenderit.</p>
                    <button className="article__btn">Read more</button>
                </div>
            </article>
            <article className="service__article article">
                <div className="article__icon icon2"></div>
                <div className="article__content">
                    <h4 className="article__title">Lorem ipsumsit amet.</h4>
                    <p className="article__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto aliquam iste, accusamus officiis corrupti dignissimos ad commodi sint reprehenderit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi doloremque quibusdam porro nam aliquam. Distinctio dicta repellendus, voluptates molestiae similique illo aliquam cumque quisquam libero esse doloribus veniam itaque nihil!</p>
                    <button className="article__btn">Read more</button>
                </div>
            </article>
            <article className="service__article article">
                <div className="article__icon icon3"></div>
                <div className="article__content">
                    <h4 className="article__title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
                    <p className="article__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto aliquam iste, accusamus officiis corrupti dignissimos ad commodi sint reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    <button className="article__btn">Read more</button>
                </div>
            </article>
        </section>
    )
}

export default Service;