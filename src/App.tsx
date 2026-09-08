import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import SiteAnnouncement from "./components/SiteAnnouncement";
import Seo from "./components/Seo";
import Footer from "./components/footer";
import NewsletterPopup from "./components/Popup";
import KSSLoader from "./components/Loader"; 
import RouterWithLoader from "./components/RouterWithLoader";

const Home = lazy(() => import("./Page/Home"));
const WhoWeAre = lazy(() => import("./Page/WhoWeAre"));
const Team = lazy(() => import("./Page/Team"));
const Values = lazy(() => import("./Page/Values"));
const Policies = lazy(() => import("./Page/Policies"));
const Financials = lazy(() => import("./Page/Financials"));
const Mission = lazy(() => import("./Page/Mission"));
const AnnualReport = lazy(() => import("./Page/AnnualReport"));
const ImpactSection = lazy(() => import("./Page/ImpactSection"));
const Subscription = lazy(() => import("./Page/Subscription"));
const Contact = lazy(() => import("./Page/Contact"));
const AllNews = lazy(() => import("./Page/AllNews"));
const WomenEmpowerment = lazy(() => import("./Page/WomenEmpowerment"));
const Health = lazy(() => import("./Page/Health"));
const Watsan = lazy(() => import("./Page/Watsan"));
const Education = lazy(() => import("./Page/Education"));
const ChildRights = lazy(() => import("./Page/ChildRights"));
const ClimateChange = lazy(() => import("./Page/ClimateChange"));
const SkillDevelopment = lazy(() => import("./Page/SkillDevelopment"));
const Environment = lazy(() => import("./Page/Environment"));
const SustainableAgriculture = lazy(() => import("./Page/SustainableAgriculture"));
const LivelihoodPromotion = lazy(() => import("./Page/LivelihoodPromotion"));
const StorytellingVideos = lazy(() => import("./Page/StoryTellingVideos"));
const DonationFeature = lazy(() => import("./Page/DonationFeatures"));
const Gallery = lazy(() => import("./Page/Gallery"));
const Stories = lazy(() => import("./Page/Stories"));
const PaperClips = lazy(() => import("./Page/PaperClips"));
const Updates = lazy(() => import("./Page/Updates"));
const Action = lazy(() => import("./Page/Action"));
const LiveProjects = lazy(() => import("./Page/LiveProject"));
const FCRA = lazy(() => import("./Page/FCRA"));
const OrganisationDocs = lazy(() => import("./Page/OrganisationDocs"));
const UnderMaintenance = lazy(() => import("./Page/UnderMaintenance"));
const Careers = lazy(() => import("./Page/Careers"));
const TestimonialCarousel = lazy(() => import("./Page/TestimonialCarousel"));
const PartnersCarousel = lazy(() => import("./Page/PartnersCarousel"));
const Rights = lazy(() => import("./components/Rights"));
const Legal = lazy(() => import("./Page/Legal"));

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
      <Seo />
      <RouterWithLoader>
      <div className="app-container">
        {loading ? (
          <KSSLoader />
        ) : (
          <>
            <SiteAnnouncement />
            <Navbar />
            <div className="main-content home-page">
              <Suspense fallback={<div className="grid min-h-[40vh] place-items-center bg-[#f7f8f4] text-sm font-bold text-[#567069]" role="status">Loading page…</div>}>
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
                <Route path="/latest-news" element={<Navigate to="/updates" replace />} />
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
                <Route path="/donate-button" element={<Navigate to="/donation-features" replace />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/stories" element={<Stories />} />
                <Route path="/updates" element={<Updates />} />
                <Route path="/paper-clips" element={<PaperClips />} />
                <Route path="/action" element={<Action />} />
                <Route path="/support" element={<Navigate to="/donation-features" replace />} />
                <Route path="/live-projects" element={<LiveProjects />} />
                <Route path="/fcra" element={<FCRA />} />
                <Route path="/organization-docs" element={<OrganisationDocs />} />
                <Route path="/privacy-policy" element={<Legal type="privacy" />} />
                <Route path="/terms-conditions" element={<Legal type="terms" />} />
                <Route path="/copyright" element={<Legal type="copyright" />} />
                <Route path="*" element={<UnderMaintenance />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/partners" element={<PartnersCarousel />} />
                <Route path="/rights" element={<Rights />} />
              </Routes>
              </Suspense>
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
