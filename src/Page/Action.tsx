import React from 'react';
import './Action.css';

const Action = () => {
    return (
        <div className="action-container">
            <div className="action-content">
                <div className="action-image">
                    <img src="/images/Flood.jpg" alt="Flood Relief Work" />
                </div>
                <div className="action-text">
                    <h1 className="action-heading">Surviving the Flood</h1>
                    <p className="action-description">
                        In the flood-prone district of Saharsa, Bihar, life revolves around water. While farmers in other regions struggle with water scarcity, the people of Saharsa have learned to live with excess water, adapting their farming methods and livelihoods to survive the annual floods.

                        For generations, farmers here have cultivated summer paddy (garma dhan) — a crop that thrives in waterlogged conditions. After embankments were constructed, farmers turned to garma dhan to make productive use of their flood-locked land. Sown around February and harvested in May, this crop ensures a steady supply of food and income during the lean seasons.
                    </p>
                    <button className="donate-button1">DONATE NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Action;
