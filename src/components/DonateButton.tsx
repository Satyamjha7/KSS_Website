import { useNavigate } from "react-router-dom";
import "./Styles.css";
import donateImage from "../assets/156.jpg";

const DonateButton = () => {
    const navigate = useNavigate();
    return (
        <div className="donate-section" style={{ backgroundImage: `url(${donateImage})` }}>
            <div className="donate-overlay">
                <h2>Join Hands to Strengthen Our Community</h2>
                <button className="c-button c-button--gooey" onClick={() => navigate("/donation-features")}>
                    Donate Now
                    <div className="c-button__blobs">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: "block", height: 0, width: 0 }}>
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
                            <feBlend in="SourceGraphic" in2="goo"></feBlend>
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    );
};

export default DonateButton;
