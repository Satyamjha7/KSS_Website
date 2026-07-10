import React, { useState } from "react";
import "./StoryTellingVideos.css";
import playButton from "../assets/play-button.png";

import thumbnailImg from "../assets/133.jpeg";

const StorytellingVideos = () => {
    const [videoVisible, setVideoVisible] = useState(false);

    return (
        <div className="video-container">
            <div className="video-header">
                <h2 className="video-title">
                    <span className="highlight">Our</span> Videos
                </h2>
                <p className="video-subtitle">Bringing Innovation</p>
                <p className="video-description">
                    We believe that innovation drives progress. Our videos showcase the impact
                    of our work, inspiring others to join us in building a better future.
                </p>
            </div>
            <div className="video-wrapper">
                {!videoVisible ? (
                    <div className="video-thumbnail" onClick={() => setVideoVisible(true)}>
                        <img
                            src={thumbnailImg}
                            alt="Video Thumbnail"
                            className="thumbnail-image"
                        />
                        <img src={playButton} alt="Play Button" className="play-button" />
                    </div>
                ) : (
                    <iframe
                        className="video-frame"
                        src="https://www.youtube.com/embed/1uLGCUgqDUE?autoplay=1"
                        title="Our Story"
                        allowFullScreen
                    ></iframe>
                )}
            </div>
        </div>
    );
};

export default StorytellingVideos;
