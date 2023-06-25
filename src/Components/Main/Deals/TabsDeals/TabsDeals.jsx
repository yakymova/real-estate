import "./TabsDeals.css";
import React, { useEffect, useState } from 'react';

let images = [];

const TabsDeals = (props) => {

    let inputImages = props.deals.images;

    const [image, setImage] = useState([]);
    const [activeLink, setActiveLink] = useState(0);

    let changeState = ind => {
        setActiveLink(() => ind);
        setImage(() => images[ind]);
    }

    useEffect(() => {
        function preload(path) {
            const img = new Image();
            img.src = path;
            return img;
        }

        for (const key in inputImages) {
            let item = [];
            inputImages[key].map(img => item.push(preload(img)));
            images.push(item);

        }

        setImage(images[0]);
    }, [inputImages])

    return (
        <div className="deals__tabs">
            <div className="tabs__controls">
                {
                    props.deals.buttons.map((btn, ind) => <button className={`tabs__btn ${ind === activeLink ? 'active' : ''}`} onClick={() => changeState(ind)}>{btn}</button>)
                }
            </div>
            <div className="tabs__images">
                {
                    image.map(img => <div className="tabs__images-item"><span>Featured</span><img src={img.src} alt="property" /></div>)
                }

            </div>
        </div>
    )
}

export default TabsDeals;