import { ArrowRight, Eye, Handshake, Heart, Leaf, MapPin, Target } from "lucide-react";
import { Link } from "react-router-dom";
import "./WhoWeAre.css";
import VisionImage from "../assets/114.jpeg";
import MissionImage from "../assets/182.jpg";
import ImpactImage from "../assets/178.jpg";
import AboutUsImage from "../assets/133.jpeg";

const pillars = [
  {
    icon: Eye,
    image: VisionImage,
    label: "The future we see",
    title: "Our Vision",
    description:
      "An egalitarian society where every individual—especially the poor, oppressed, and underprivileged—has the opportunity to realize their full potential.",
  },
  {
    icon: Target,
    image: MissionImage,
    label: "The work we do",
    title: "Our Mission",
    description:
      "Facilitating holistic development anchored in equity, justice, and sustainability by empowering communities to become self-sufficient and resilient.",
  },
  {
    icon: Handshake,
    image: ImpactImage,
    label: "The change we create",
    title: "Our Impact",
    description:
      "From Saharsa to communities across Bihar, our programs strengthen education, health, livelihoods, climate resilience, and collective agency.",
  },
];

const WhoWeAre = () => {
  return (
    <main className="who-page">
      <section
        className="who-hero"
        style={{ backgroundImage: `url(${AboutUsImage})` }}
        aria-labelledby="who-page-title"
      >
        <div className="who-hero-overlay" />
        <div className="who-hero-content">
          <div className="who-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Who we are</span>
          </div>
          <p className="who-eyebrow">Rooted in service since 1981</p>
          <h1 id="who-page-title">
            Change begins when communities <span>lead the way.</span>
          </h1>
          <p className="who-hero-copy">
            Kosi Seva Sadan is a Gandhian, community-led organization advancing
            equity, justice, and sustainable development across Bihar.
          </p>
          <a href="#our-story" className="who-hero-link">
            Read our story <ArrowRight size={18} />
          </a>
        </div>
        <div className="who-hero-fact">
          <strong>40+</strong>
          <span>years of walking alongside communities</span>
        </div>
      </section>

      <section className="who-story" id="our-story">
        <div className="who-story-visual">
          <img src={VisionImage} alt="Community members connected with Kosi Seva Sadan" />
          <div className="who-story-location">
            <MapPin size={18} />
            <span>Saharsa, Bihar</span>
          </div>
        </div>

        <div className="who-story-content">
          <p className="who-section-label">Our story</p>
          <h2>Born from a movement. Built with communities.</h2>
          <p className="who-story-lead">
            Kosi Seva Sadan is more than a non-profit—it is a movement rooted in
            the Gandhian ideals of equity, justice, and sustainability.
          </p>
          <p>
            Founded in 1981 from the powerful wave of the Jayaprakash Movement
            during the Bhoodan Andolan, KSS carries forward the legacy of
            non-violence and self-reliance envisioned by social reformer Late
            Jay Prakash Narayan.
          </p>
          <p>
            Our foundation was strengthened by the wisdom and mentorship of
            Late Prem Bhai of the Sarvodaya Movement, who inspired a dedicated
            group of young changemakers to act. Today, we continue that work
            through community-focused programs delivered with compassion,
            integrity, and purpose.
          </p>
          <div className="who-principles" aria-label="Our guiding principles">
            <span><Heart size={17} /> Equity</span>
            <span><Handshake size={17} /> Justice</span>
            <span><Leaf size={17} /> Sustainability</span>
          </div>
        </div>
      </section>

      <section className="who-quote" aria-label="Guiding quote">
        <div className="who-quote-mark">“</div>
        <blockquote>
          The best way to find yourself is to lose yourself in the service of others.
        </blockquote>
        <cite>— Mahatma Gandhi</cite>
      </section>

      <section className="who-pillars">
        <div className="who-section-heading">
          <div>
            <p className="who-section-label">What defines us</p>
            <h2>Purpose translated into action.</h2>
          </div>
          <p>
            Our vision, mission, and impact form one continuous promise: progress
            shaped with communities and sustained by local leadership.
          </p>
        </div>

        <div className="who-pillar-grid">
          {pillars.map(({ icon: Icon, image, label, title, description }) => (
            <article className="who-pillar-card" key={title}>
              <div className="who-pillar-image">
                <img src={image} alt="" />
                <div className="who-pillar-icon"><Icon size={22} /></div>
              </div>
              <div className="who-pillar-body">
                <span>{label}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="who-cta">
        <div>
          <p className="who-section-label">Move forward with us</p>
          <h2>Stronger communities are built together.</h2>
        </div>
        <div className="who-cta-actions">
          <Link to="/support" className="who-button who-button-primary">
            Support our mission <ArrowRight size={18} />
          </Link>
          <Link to="/contact" className="who-button who-button-secondary">
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
};

export default WhoWeAre;
