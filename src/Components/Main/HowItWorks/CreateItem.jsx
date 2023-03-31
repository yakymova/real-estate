const CreateItem = ({ item }) => {
    return (
        <div className="item">
            <div className="item__icon">
                <img src={item.icon} alt="" />
            </div>
            <h4 className="item__title">{item.title}</h4>
            <p className="item_text">{item.text}</p>
        </div>
    )
}

export default CreateItem;