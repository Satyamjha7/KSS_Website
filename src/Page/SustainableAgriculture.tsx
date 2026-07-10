import {
  CloudSun,
  Droplets,
  Leaf,
  Recycle,
  Sprout,
  Tractor,
} from "lucide-react";
import WorkPageLayout from "./WorkPageLayout";
import heroImage from "../assets/img2.JPG";
import featureImage from "../assets/img1.jpg";
import closingImage from "../assets/178.jpg";

const SustainableAgriculture = () => (
  <WorkPageLayout
    themeLabel="Sustainable Agriculture"
    eyebrow="Resilient farming, resilient families"
    title="Sustainable agriculture"
    highlight="for food and livelihoods."
    intro="KSS promotes eco-friendly, climate-sensitive, and livelihood-oriented agricultural practices that support small and marginal farming families."
    heroImage={heroImage}
    featureImage={featureImage}
    closingImage={closingImage}
    whyTitle="Small farmers need practices that protect both income and nature."
    whyText="Agriculture in vulnerable regions faces climate stress, soil degradation, water uncertainty, and market pressure. Sustainable practices help farmers reduce risk, improve productivity, and protect natural resources."
    impactTitle="Helping farmers adopt practical, climate-sensitive methods."
    impactText="Our agriculture work supports knowledge, local experimentation, resource conservation, and income resilience."
    focusTitle="Agriculture support rooted in ecology and household security."
    focusIntro="The approach combines soil, water, seed, crop diversity, climate awareness, and farmer learning."
    pathwayTitle="From field learning to resilient farming."
    pathwayText="KSS works with farmers through demonstrations, meetings, awareness, and peer learning to encourage practical sustainable methods."
    ctaTitle="Support farming systems that sustain families and land."
    ctaText="Partner with KSS to promote climate-smart agriculture, resource conservation, and farmer resilience."
    stats={[
      { value: "100+", label: "Villages connected through community initiatives" },
      { value: "5", label: "Core themes: soil, water, seeds, climate, income" },
      { value: "1", label: "Goal: resilient farming households" },
    ]}
    focusAreas={[
      {
        icon: Sprout,
        title: "Soil health",
        description: "Promoting practices that maintain soil fertility, organic matter, and long-term productivity.",
      },
      {
        icon: Droplets,
        title: "Water stewardship",
        description: "Encouraging water-smart farming practices and awareness of local water stress.",
      },
      {
        icon: Leaf,
        title: "Eco-friendly practices",
        description: "Supporting reduced dependency on harmful inputs and better use of local resources.",
      },
      {
        icon: CloudSun,
        title: "Climate-smart planning",
        description: "Helping farmers think through seasonal risk, crop choices, and resilience strategies.",
      },
      {
        icon: Tractor,
        title: "Farmer learning",
        description: "Peer exchange, demonstrations, and field-level discussions that make adoption practical.",
      },
      {
        icon: Recycle,
        title: "Resource recycling",
        description: "Encouraging composting, reuse, and circular practices that reduce waste and costs.",
      },
    ]}
    pathway={[
      "Understand farmer constraints",
      "Demonstrate practical methods",
      "Encourage peer learning",
      "Support resilient adoption",
    ]}
    stories={[
      {
        quote: "Learning about soil and water helped us think beyond one crop season and plan better.",
        name: "Farmer participant",
        location: "Kosi region",
      },
      {
        quote: "Sustainable farming works best when farmers can see practical results in their own fields.",
        name: "Field facilitator",
        location: "Saharsa",
      },
    ]}
  />
);

export default SustainableAgriculture;
