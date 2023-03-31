import "./Blog.css";

const Blog = () => {
    return (
        <section className="blog__container">
            <h1 className="blog__title">Blog...</h1>
            <article className="blog_article article">
                <div className="blog_article-img"></div>
                <h4 className="blog_article__title">Lorem ipsum dolor sit.</h4>
                <p className="article__text"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, atque, ipsum ea ex fugiat ducimus odit dolor, quaerat qui quibusdam officia eaque consequuntur voluptas maiores. Facilis dicta nobis reiciendis hic! Quos dolorum temporibus iusto odit sunt.</p>
                <button className="article__btn">Read more</button>
            </article>
            <article className="blog_article article">
                <h4 className="blog_article__title">Lorem ipsum dolor sit.</h4>
                <p className="article__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolorum temporibus iusto odit sunt assumenda delectus architecto deserunt voluptatum magni totam amet numquam odio, repellat autem nam cupiditate?</p>
                <button className="article__btn">Read more</button>
            </article>
            <article className="blog_article article">
                <h4 className="blog_article__title">Lorem ipsum dolor sit.</h4>
                <p className="article__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolorum temporibus iusto odit sunt assumenda delectus architecto deserunt voluptatum magni totam amet numquam odio, repellat autem nam cupiditate? Explicabo, tempore.</p>
                <button className="article__btn">Read more</button>
            </article>
            <article className="blog_article article">
                <h4 className="blog_article__title">Lorem ipsum dolor sit.</h4>
                <p className="article__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolorum temporibus iusto odit sunt assumenda delectus architecto deserunt voluptatum magni totam amet numquam odio</p>
                <button className="article__btn">Read more</button>
            </article>
        </section>
    )
}

export default Blog;