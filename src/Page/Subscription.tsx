import { FormEvent, useState } from "react";
import "./Subscription.css";
import newsletterImage from "../assets/banner.png";

const Subscription = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        localStorage.setItem("kss-newsletter-email", email.trim());
        setMessage("Thank you for subscribing. We’ll share KSS updates with you soon.");
        setEmail("");
    };

    return (
        <div className="subscription-section">
            <div className="text-section">
                <h2>Subscribe to Our Newsletter</h2>
                <p>
                    Receive occasional updates on KSS programmes, community stories, and ways to support meaningful change in Bihar.
                </p>
                <form onSubmit={handleSubmit} className="subscription-form">
                    <label className="sr-only" htmlFor="subscription-email">Email address</label>
                    <input
                        id="subscription-email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        required
                    />
                    <button type="submit">Subscribe</button>
                </form>
                {message && <p className="message">{message}</p>}
            </div>
            <div className="image-section">
                <img src={newsletterImage} alt="Kosi Seva Sadan community programme in Bihar" loading="lazy" decoding="async" />
            </div>
        </div>
    );
};

export default Subscription;
