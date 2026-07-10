import React from "react";
import { Link } from "react-router-dom";
import "./Support.css";

const Support = () => {
    return (
        <div className="support-container">
            <header className="support-header">
                <h1>Support Our Initiatives</h1>
                <p>Your contribution helps us create a lasting impact in the community.</p>
            </header>

            <section className="initiatives-section">
                <h2>Our Initiatives</h2>
                <div className="initiatives-grid">
                    <div className="initiative-card">
                        <h3>Education for All</h3>
                        <p>Providing quality education and resources to underprivileged children.</p>
                    </div>
                    <div className="initiative-card">
                        <h3>Healthcare Support</h3>
                        <p>Ensuring healthcare accessibility through medical camps and aid.</p>
                    </div>
                    <div className="initiative-card">
                        <h3>Women Empowerment</h3>
                        <p>Skill training and support programs for women to achieve financial independence.</p>
                    </div>
                    <div className="initiative-card">
                        <h3>Disaster Relief</h3>
                        <p>Immediate relief and long-term rehabilitation for disaster-affected areas.</p>
                    </div>
                </div>
            </section>

            <section className="bank-details">
                <h2>Bank Account Details</h2>
                <div className="bank-info">
                    <div className="bank-card">
                        <h3>FCRA Bank Account</h3>
                        <p><strong>Account Name:</strong> Kosi Seva Sadan</p>
                        <p><strong>Account Number:</strong> 123456789012</p>
                        <p><strong>Bank Name:</strong> State Bank of India</p>
                        <p><strong>IFSC Code:</strong> SBIN0001234</p>
                        <p><strong>Branch:</strong> New Delhi</p>
                    </div>
                    <div className="bank-card">
                        <h3>National Bank Account</h3>
                        <p><strong>Account Name:</strong> Kosi Seva Sadan</p>
                        <p><strong>Account Number:</strong> 987654321098</p>
                        <p><strong>Bank Name:</strong> Punjab National Bank</p>
                        <p><strong>IFSC Code:</strong> PUNB0123456</p>
                        <p><strong>Branch:</strong> Patna</p>
                    </div>
                </div>
            </section>

            <section className="donation-section">
                <h2>Join Us in Making a Difference</h2>
                <p>Your generosity fuels our mission. Every contribution matters.</p>
                <Link to="/donation-features" className="donate-button">Donate Now</Link>
            </section>
        </div>
    );
};

export default Support;
