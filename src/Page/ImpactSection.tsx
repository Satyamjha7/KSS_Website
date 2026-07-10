import React from "react";
import CountUp from "react-countup";
import "./ImpactSection.css";

const ImpactSection = () => {
    const impactData = [
        { value: 128, suffix: "+", label: "children and their families are impacted every year" },
        { value: 2000, suffix: "+", label: "Villages and slums are reached across the country" },
        { value: 400, suffix: "+", label: "Projects focused on education, healthcare, and women empowerment" },
        { value: 100, suffix: "+", label: "Villages in Saharsa District covered through direct intervention and outreach programs." },
    ];

    return (
        <div className="impact-section">
            <h2 className="impact-title">OUR FOOTPRINTS</h2>
            <div className="impact-container">
                {impactData.map((item, index) => (
                    <div key={index} className="impact-card">
                        <CountUp
                            start={0}
                            end={item.value}
                            duration={3}
                            separator=","
                            suffix={item.suffix}
                            className="impact-number"
                        />
                        <p className="impact-label">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImpactSection;
