import { useState } from "react";
import axios from "axios";
import "./Subscription.css";
import newsletterImage from "../assets/banner.png";

const Subscription = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/subscriptions", { email });
            setMessage(res.data.message);
            setEmail("");
        } catch (error) {
            setMessage("Subscription failed. Please try again.");
        }
    };

    return (
        <div className="subscription-section">
            <div className="text-section">
                <h2>Subscribe to Our Newsletter</h2>
                <p>
                    Stay updated with the latest news, trends, and special offers. Subscribe now and never miss out on exciting updates!
                </p>
                <form onSubmit={handleSubmit} className="subscription-form">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Subscribe</button>
                </form>
                {message && <p className="message">{message}</p>}
            </div>
            <div className="image-section">
                <img src={newsletterImage} alt="Newsletter" />
            </div>
        </div>
    );
};

export default Subscription;
