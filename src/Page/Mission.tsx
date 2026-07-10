import React from "react";
import "./Mission.css";

import icon from "../assets/icon.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";

const Mission = () => {
    const missionData = [
        {
            icon: icon, 
            title: "Promote Equity",
            description:
                "Bridging the gaps in social and economic disparities by advocating for equal opportunities in education, healthcare, and livelihoods.",
        },
        {
            icon: icon1, 
            title: "Ensure Justice",
            description:
                "Upholding human rights, fostering a fair society, and empowering individuals with the knowledge and resources to claim their rights.",
        },
        {
            icon: icon2,
            title: "Champion Sustainability",
            description:
                "Encouraging responsible use of resources, implementing eco-friendly solutions, and working towards long-term, impactful change for a healthier planet.",
        },
    ];

    return (
        <section className="mission-section">
            <div className="mission-container">
                <h2 className="mission-title">OUR MISSION</h2>
                <p className="mission-description">
                    At our organization, we are deeply committed to fostering the holistic development of society by upholding the core principles of equity, justice, and sustainability.

                    We believe that true progress is achieved when every individual, regardless of their background, has access to opportunities that empower them to grow and thrive. Our approach is inclusive and community-driven, ensuring that the most vulnerable and marginalized sections of society are not left behind.
                </p>
                <div className="mission-cards">
                    {missionData.map((item, index) => (
                        <div key={index} className="mission-card">
                            <div className="mission-icon">
                                <img src={item.icon} alt={item.title} className="mission-icon-image" />
                            </div>
                            <h3 className="mission-card-title">{item.title}</h3>
                            <p className="mission-card-description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Mission;
