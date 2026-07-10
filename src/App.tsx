import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import NewsletterPopup from "./components/Popup";
import KSSLoader from "./components/Loader"; 
import RouterWithLoader from "./components/RouterWithLoader";
import Home from "./Page/Home";
import WhoWeAre from "./Page/WhoWeAre";
import Team from "./Page/Team";
import Values from "./Page/Values";
import Policies from "./Page/Policies";
import Financials from "./Page/Financials";
import Mission from "./Page/Mission";
import AnnualReport from "./Page/AnnualReport";
import ImpactSection from "./Page/ImpactSection";
import Subscription from "./Page/Subscription";
import Contact from "./Page/Contact";
import LatestNews from "./Page/LatestNews";
import AllNews from "./Page/AllNews";
import WomenEmpowerment from "./Page/WomenEmpowerment";
import Health from "./Page/Health";
import Watsan from "./Page/Watsan";
import Education from "./Page/Education";
import ChildRights from "./Page/ChildRights";
import ClimateChange from "./Page/ClimateChange";
import SkillDevelopment from "./Page/SkillDevelopment";
import Environment from "./Page/Environment";
import SustainableAgriculture from "./Page/SustainableAgriculture";
import LivelihoodPromotion from "./Page/LivelihoodPromotion";
import StorytellingVideos from "./Page/StoryTellingVideos";
import DonationFeature from "./Page/DonationFeatures";
import DonateButton from "./components/DonateButton";
import Gallery from "./Page/Gallery";
import Stories from "./Page/Stories";
import PaperClips from "./Page/PaperClips";
import Updates from "./Page/Updates";
import Action from "./Page/Action";
import Support from "./Page/Support";
import LiveProjects from "./Page/LiveProject";
import FCRA from "./Page/FCRA";
import OrganisationDocs from "./Page/OrganisationDocs";
import UnderMaintenance from "./Page/UnderMaintenance";
import Careers from "./Page/Careers";
import TestimonialCarousel from "./Page/TestimonialCarousel";
import PartnersCarousel from "./Page/PartnersCarousel";
import Rights from "./components/Rights";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <RouterWithLoader>
      <div className="app-container">
        {loading ? (
          <KSSLoader />
        ) : (
          <>
            <Navbar />
            <div className="main-content home-page">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/impactsection" element={<ImpactSection />} />
                <Route path="/mission" element={<Mission />} />
                <Route path="/who-we-are" element={<WhoWeAre />} />
                <Route path="/team" element={<Team />} />
                <Route path="/values" element={<Values />} />
                <Route path="/policies" element={<Policies />} />
                <Route path="/financials" element={<Financials />} />
                <Route path="/annual-report" element={<AnnualReport />} />
                <Route path="/subscription" element={<Subscription />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/latest-news" element={<LatestNews />} />
                <Route path="/all-news" element={<AllNews />} />
                <Route path="/women-empowerment" element={<WomenEmpowerment />} />
                <Route path="/health-nutrition" element={<Health />} />
                <Route path="/watsan" element={<Watsan />} />
                <Route path="/education-awareness" element={<Education />} />
                <Route path="/child-rights" element={<ChildRights />} />
                <Route path="/drr-climate" element={<ClimateChange />} />
                <Route path="/skills-development" element={<SkillDevelopment />} />
                <Route path="/environment" element={<Environment />} />
                <Route path="/sustainable-agriculture" element={<SustainableAgriculture />} />
                <Route path="/livelihood-promotion" element={<LivelihoodPromotion />} />
                <Route path="/testimonial-carousel" element={<TestimonialCarousel />} />
                <Route path="/story-videos" element={<StorytellingVideos />} />
                <Route path="/donation-features" element={<DonationFeature />} />
                <Route path="/donate-button" element={<DonateButton />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/stories" element={<Stories />} />
                <Route path="/updates" element={<Updates />} />
                <Route path="/paper-clips" element={<PaperClips />} />
                <Route path="/action" element={<Action />} />
                <Route path="/support" element={<Support />} />
                <Route path="/live-projects" element={<LiveProjects />} />
                <Route path="/fcra" element={<FCRA />} />
                <Route path="/organization-docs" element={<OrganisationDocs />} />
                <Route path="*" element={<UnderMaintenance />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/partners" element={<PartnersCarousel />} />
                <Route path="/rights" element={<Rights />} />
              </Routes>
            </div>
            <Footer />
            {showPopup && <NewsletterPopup onClose={() => setShowPopup(false)} />}
          </>
        )}
      </div>
      </RouterWithLoader>
    </Router>
  );
};

export default App;
