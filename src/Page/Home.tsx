import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import "./Home.css";
import Mission from "./Mission";
import ImpactSection from "./ImpactSection";
import Subscription from './Subscription';
import LatestNews from './LatestNews';
import TestimonialCarousel from "./TestimonialCarousel";
import StorytellingVideos from "./StoryTellingVideos";
import DonateButton from "../Components/DonateButton";
import Action from "./Action";
import PartnersCarousel from "./PartnersCarousel";
import LatestUpdatesSection from "../features/latestUpdates/LatestUpdatesSection";

const Home = () => {
  const slides = [
    {
      img: "/images/img1.jpeg",
      eyebrow: "Community-led change since 1981",
      heading: "Stronger communities.",
      highlight: "Brighter futures.",
      description:
        "We work alongside rural families in Bihar to build resilient livelihoods, expand opportunity, and restore hope.",
    },
    {
      img: "/images/img2.jpeg",
      eyebrow: "Locally rooted. Lasting impact.",
      heading: "Together, progress",
      highlight: "reaches everyone.",
      description: "From education and healthcare to women-led livelihoods, every initiative begins with the community.",
    },
    {
      img: "/images/img3.jpeg",
      eyebrow: "Opportunity for every generation",
      heading: "Turning possibility",
      highlight: "into lasting change.",
      description: "Your support helps children, women, and families shape safer, healthier, self-reliant futures.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="home-container">
      <section className="slider-container" aria-label="Kosi Seva Sadan introduction">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slider ${currentSlide === index ? "current-slide" : ""}`}
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="overlay" />
            <div className="slider-content">
              <p className="hero-eyebrow"><MapPin size={16} /> Bihar, India · {slide.eyebrow}</p>
              <h1>
                {slide.heading} <span>{slide.highlight}</span>
              </h1>
              <p className="hero-description">{slide.description}</p>
              <div className="slider-buttons">
                <Link to="/who-we-are" className="btn learn-more">Discover our work <ArrowRight size={18} /></Link>
                <Link to="/support" className="btn join-us">Support the mission</Link>
              </div>
            </div>
          </div>
        ))}
        <div className="hero-controls">
          <div className="slide-dots" aria-label="Choose a slide">
            {slides.map((_, index) => (
              <button
                key={index}
                className={currentSlide === index ? "active" : ""}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Show slide ${index + 1}`}
                aria-current={currentSlide === index}
              />
            ))}
          </div>
          <div className="arrow-controls">
            <button className="slider-arrow" onClick={handlePrev} aria-label="Previous slide"><ChevronLeft /></button>
            <button className="slider-arrow" onClick={handleNext} aria-label="Next slide"><ChevronRight /></button>
          </div>
        </div>
        <div className="hero-stat-strip">
          <div><strong>40+</strong><span>Years of service</span></div>
          <div><strong>100+</strong><span>Villages reached</span></div>
          <div><strong>10</strong><span>Focus areas</span></div>
        </div>
      </section>
      <LatestUpdatesSection />
      <Action />
      <Mission />
      <ImpactSection />
      <DonateButton />
      <StorytellingVideos />
      <LatestNews />
      <Subscription />
      <TestimonialCarousel />
      <PartnersCarousel />
    </div>
  );
};

export default Home;
