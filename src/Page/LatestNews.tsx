import React from 'react';
import './LatestNews.css';
import { useNavigate } from 'react-router-dom';
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.JPG";
import img3 from "../assets/img3.JPG";
/*APIs to use*/
const LatestNews = () => {
    const navigate = useNavigate();

    const newsData = [
        {
            image: img1,
            title: "Empowering Women through Skill Development",
            description: "Kosi Seva Sadan conducts a workshop to empower women with sustainable skills.",
        },
        {
            image: img2,
            title: "Educational Support for Underprivileged Children",
            description: "Continuing the mission of spreading education to every child.",
        },
        {
            image: img3,
            title: "Healthcare Camp in Rural Villages",
            description: "Free medical check-ups and health awareness programs organized.",
        },
    ];

    return (
        <section className="news-section">
            <h2 className="news-heading">LATEST</h2>
            <div className="news-container">
                {newsData.map((news, index) => (
                    <div key={index} className="news-card">
                        <img src={news.image} alt={news.title} className="news-image" />
                        <div className="news-content">
                            <h3>{news.title}</h3>
                            <p>{news.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="view-all-btn" onClick={() => navigate('/all-news')}>
                View All News
            </button>
        </section>
    );
};

export default LatestNews;
