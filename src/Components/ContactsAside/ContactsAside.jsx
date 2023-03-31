import './ContactsAside.css';

const ContactsAside = ({ icons }) => {
    return (
        <div className='aside__contacts'>
            {
                icons.map((icon, ind) => <a className="aside__contact" href={icon.url} target="_blank" style={{ backgroundImage: `url(${icon.icon})` }} ></a>)
            }
        </div>
    )
}

export default ContactsAside;