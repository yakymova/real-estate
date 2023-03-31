import "./TabsDeals.css";
import React, { useState } from 'react';

const TabsDeals = (props) => {
    // let images = {
    //     agriculture: props.deals.images.agriculture,
    //     commercial: props.deals.images.commercial,
    //     industrial: props.deals.images.industrial,
    //     residential: props.deals.images.residential,
    // }

    let images = [props.deals.images.residential, props.deals.images.commercial, props.deals.images.agriculture, props.deals.images.industrial];
    const [state, setState] = useState(images[0]);
    const [status, setStatus] = useState(0);

    let changeState = ind => {
        setState(() => images[ind]);
        setStatus(() => ind);
    }

    return (
        <div className="deals__tabs">
            <div className="tabs__controls">
                {
                    props.deals.buttons.map((btn, ind) => <button className={`tabs__btn ${ind === status ? 'active' : ''}`} onClick={() => changeState(ind)}>{btn}</button>)
                }
            </div>
            <div className="tabs__images">
                {
                    state.map(img => <div className="tabs__images-item"><img src={img} alt="property" /></div>)
                }

            </div>
        </div>
    )
}

export default TabsDeals;