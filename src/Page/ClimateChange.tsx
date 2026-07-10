import {
  AlertTriangle,
  CloudRain,
  Home,
  Map,
  ShieldCheck,
  Waves,
} from "lucide-react";
import WorkPageLayout from "./WorkPageLayout";
import heroImage from "../assets/163.jpg";
import featureImage from "../assets/178.jpg";
import closingImage from "../assets/133.jpeg";

const ClimateChange = () => (
  <WorkPageLayout
    themeLabel="Climate Change & DRR"
    eyebrow="Prepared communities save lives"
    title="Climate resilience"
    highlight="for flood-prone communities."
    intro="KSS supports disaster risk reduction, climate awareness, preparedness, and community resilience in vulnerable areas of the Kosi region."
    heroImage={heroImage}
    featureImage={featureImage}
    closingImage={closingImage}
    whyTitle="Climate risk is local before it becomes global."
    whyText="Floods, erratic rainfall, heat, displacement, and livelihood shocks affect vulnerable rural families first. Community-based preparedness helps people reduce risk, protect assets, and recover with dignity."
    impactTitle="Helping communities prepare, respond, and recover."
    impactText="We work on risk awareness, preparedness planning, local coordination, and resilience practices for households and villages."
    focusTitle="Preparedness that reaches households before crisis strikes."
    focusIntro="Climate resilience combines awareness, early action, community planning, safer practices, and links with local institutions."
    pathwayTitle="From risk awareness to local preparedness."
    pathwayText="KSS works with communities to identify climate risks, plan responses, strengthen local capacity, and protect vulnerable groups."
    ctaTitle="Partner for climate-resilient rural communities."
    ctaText="Support KSS in strengthening preparedness, climate awareness, and disaster risk reduction in the Kosi region."
    stats={[
      { value: "100+", label: "Villages connected through community programming" },
      { value: "4", label: "Preparedness priorities: risk, response, recovery, resilience" },
      { value: "1", label: "Goal: safer, more resilient households" },
    ]}
    focusAreas={[
      {
        icon: Waves,
        title: "Flood preparedness",
        description: "Awareness and planning around recurring floods, safe movement, assets, and household readiness.",
      },
      {
        icon: CloudRain,
        title: "Climate awareness",
        description: "Helping communities understand changing weather patterns and their local impact.",
      },
      {
        icon: AlertTriangle,
        title: "Risk reduction",
        description: "Identifying vulnerable households, local hazards, and practical steps to reduce harm.",
      },
      {
        icon: Map,
        title: "Community planning",
        description: "Supporting local discussions on response roles, resources, routes, and coordination.",
      },
      {
        icon: Home,
        title: "Household resilience",
        description: "Promoting preparedness practices that protect families, documents, food, water, and livelihoods.",
      },
      {
        icon: ShieldCheck,
        title: "Protection in emergencies",
        description: "Attention to women, children, elderly people, and persons with special needs during crisis.",
      },
    ]}
    pathway={[
      "Map local climate risks",
      "Build preparedness awareness",
      "Support community response plans",
      "Strengthen recovery practices",
    ]}
    stories={[
      {
        quote: "Preparedness meetings helped our hamlet think ahead before the flood season arrived.",
        name: "Community volunteer",
        location: "Kosi basin",
      },
      {
        quote: "When families know what to keep ready, they feel less helpless during emergencies.",
        name: "Field team member",
        location: "Saharsa",
      },
    ]}
  />
);

export default ClimateChange;
