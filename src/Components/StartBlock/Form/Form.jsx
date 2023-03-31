import "./Form.css"

const Form = ({ help }) => {
    return (
        <form action="" className="form">
            <input type="text" placeholder={help} className="form__input" />
            <button className="form__btn">Search Now!</button>
        </form>
    )
}

export default Form;