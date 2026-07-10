import React, { useState } from "react";
import "./Styles.css";

import letter_icon from "../assets/email.png";

const NewsletterPopup = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        isOpen && (
            <div className="popup-overlay">
                <div className="popup-container">
                    <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
                    <div className="icon-container">
                        <img src={letter_icon} alt="Newsletter Icon" className="newsletter-icon" />
                    </div>
                    <h2 className="popup-title">Subscribe To Our Newsletter</h2>
                    <p className="popup-description">
                        Join Us and Stay up-to-dated on all the latest news and initiatives from Kosi Seva Sadan.
                    </p>
                    <div className="input-container">
                        <input type="email" placeholder="Enter your email" className="email-input" />
                    </div>
                    <button className="subscribe-btn">Subscribe</button>
                </div>
            </div>
        )
    );
};

export default NewsletterPopup;
