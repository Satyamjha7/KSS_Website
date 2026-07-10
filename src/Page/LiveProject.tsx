import React from "react";
import "./LiveProject.css";

const projects = [
    {
        id: 1,
        name: "Community Nutrition Program",
        description: "Providing nutritious meals to underprivileged children.",
        received: 500000,
        utilized: 350000,
        progress: 70,
        image: "163.jpg",
    },
    {
        id: 2,
        name: "Education for All",
        description: "Scholarships and study materials for needy students.",
        received: 300000,
        utilized: 150000,
        progress: 50,
        image: "163.jpg",
    },
    {
        id: 3,
        name: "Women Empowerment Workshops",
        description: "Training sessions for skill development and financial independence.",
        received: 400000,
        utilized: 200000,
        progress: 50,
        image: "163.jpg",
    },
];

const LiveProjects = () => {
    return (
        <div className="live-projects-container">
            <h2>Live & Ongoing Projects</h2>
            <div className="projects-list">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                
                        <img
                            src={`/assets/${project.image}`}
                            alt={project.name}
                            className="project-image"
                            onError={(e) => (e.target.src = "/assets/default.jpg")}
                        />
                        <div className="project-info">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <div className="funding-details">
                                <p>Funds Received: ₹{project.received.toLocaleString()}</p>
                                <p>Funds Utilized: ₹{project.utilized.toLocaleString()}</p>
                            </div>
                            <div className="progress-bar-container">
                                <div className="progress-bar" style={{ width: `${project.progress}%` }}></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LiveProjects;
