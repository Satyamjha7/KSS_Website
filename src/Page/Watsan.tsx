import {
  Droplets,
  Hand,
  Home,
  Recycle,
  ShieldCheck,
  Waves,
} from "lucide-react";
import WorkPageLayout from "./WorkPageLayout";
import heroImage from "../assets/133.jpeg";
import featureImage from "../assets/waterIcon.png";
import closingImage from "../assets/178.jpg";

const Watsan = () => (
  <WorkPageLayout
    themeLabel="Water & Sanitation"
    eyebrow="Safe water, dignity, and hygiene"
    title="Clean water and sanitation"
    highlight="for healthier villages."
    intro="KSS works with communities to improve water, sanitation, hygiene practices, and dignity-focused household behavior in flood-prone rural areas."
    heroImage={heroImage}
    featureImage={featureImage}
    closingImage={closingImage}
    whyTitle="Water and sanitation shape health, dignity, and resilience."
    whyText="Unsafe water and poor sanitation affect children’s health, women’s dignity, school attendance, and household wellbeing. Community-led WASH work helps families reduce disease risk and build cleaner surroundings."
    impactTitle="Improving habits and systems around water, sanitation, and hygiene."
    impactText="We support practical behavior change, local ownership, and awareness around safe water use and sanitation facilities."
    focusTitle="A WASH approach that connects infrastructure with daily habits."
    focusIntro="The strongest sanitation work happens when families understand, maintain, and take pride in clean household and community practices."
    pathwayTitle="From awareness to cleaner community systems."
    pathwayText="KSS works through meetings, demonstrations, household visits, and community groups to strengthen everyday WASH behavior."
    ctaTitle="Support safer water and sanitation practices."
    ctaText="Collaborate with KSS to improve hygiene awareness, sanitation dignity, and water safety across rural communities."
    stats={[
      { value: "100+", label: "Villages reached through community programs" },
      { value: "4", label: "Key areas: water, sanitation, hygiene, dignity" },
      { value: "24/7", label: "Need for safe water and clean surroundings" },
    ]}
    focusAreas={[
      {
        icon: Droplets,
        title: "Safe water use",
        description: "Awareness on clean water handling, storage, and household-level water safety practices.",
      },
      {
        icon: Home,
        title: "Household sanitation",
        description: "Encouraging toilet use, cleanliness, maintenance, and dignity-focused sanitation behavior.",
      },
      {
        icon: Hand,
        title: "Hygiene practices",
        description: "Handwashing, menstrual hygiene, waste handling, and prevention of water-borne diseases.",
      },
      {
        icon: Waves,
        title: "Flood-sensitive WASH",
        description: "Preparedness conversations for sanitation and water safety during flood and disaster periods.",
      },
      {
        icon: Recycle,
        title: "Clean surroundings",
        description: "Community action around waste, drainage, cleanliness, and shared responsibility.",
      },
      {
        icon: ShieldCheck,
        title: "Health protection",
        description: "Reducing avoidable illness through safe WASH behavior and local monitoring.",
      },
    ]}
    pathway={[
      "Map local WASH risks",
      "Promote household hygiene",
      "Strengthen sanitation behavior",
      "Support community monitoring",
    ]}
    stories={[
      {
        quote: "The hygiene discussions helped our group understand why clean storage and handwashing matter every day.",
        name: "Women’s group member",
        location: "Saharsa",
      },
      {
        quote: "When families work together on cleanliness, the whole hamlet feels safer and more dignified.",
        name: "Village volunteer",
        location: "Kosi region",
      },
    ]}
  />
);

export default Watsan;
