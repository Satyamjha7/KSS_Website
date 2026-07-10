import {
  BatteryCharging,
  Leaf,
  Lightbulb,
  Recycle,
  SunMedium,
  Trees,
} from "lucide-react";
import WorkPageLayout from "./WorkPageLayout";
import heroImage from "../assets/163.jpg";
import featureImage from "../assets/178.jpg";
import closingImage from "../assets/133.jpeg";

const Environment = () => (
  <WorkPageLayout
    themeLabel="Environment & Clean Energy"
    eyebrow="Cleaner choices, greener communities"
    title="Environment action"
    highlight="with community ownership."
    intro="KSS supports environmental awareness, clean energy thinking, local conservation, waste reduction, and community-led action for healthier rural surroundings."
    heroImage={heroImage}
    featureImage={featureImage}
    closingImage={closingImage}
    whyTitle="Environmental care becomes powerful when communities own it."
    whyText="Clean surroundings, responsible resource use, tree cover, and energy awareness all shape community health and resilience. Local action helps environmental responsibility become part of everyday life."
    impactTitle="Encouraging greener habits and local environmental leadership."
    impactText="We focus on awareness, practical behavior, clean energy conversations, and community-level stewardship."
    focusTitle="Environment work that connects awareness with action."
    focusIntro="KSS encourages families, youth, and community groups to understand environmental risks and take practical steps toward cleaner, greener villages."
    pathwayTitle="From awareness to everyday environmental practice."
    pathwayText="The work grows through local meetings, youth engagement, community campaigns, and practical demonstrations."
    ctaTitle="Build cleaner and more climate-conscious communities."
    ctaText="Partner with KSS to strengthen environment education, local conservation, and clean energy awareness."
    stats={[
      { value: "100+", label: "Communities reached through KSS programs" },
      { value: "4", label: "Action areas: awareness, waste, energy, conservation" },
      { value: "1", label: "Goal: healthier rural environments" },
    ]}
    focusAreas={[
      {
        icon: Trees,
        title: "Local conservation",
        description: "Promoting care for trees, common spaces, natural resources, and village surroundings.",
      },
      {
        icon: Recycle,
        title: "Waste awareness",
        description: "Encouraging cleaner habits, reduced littering, reuse, and responsible disposal practices.",
      },
      {
        icon: SunMedium,
        title: "Clean energy awareness",
        description: "Helping communities understand safer, cleaner, and more efficient energy choices.",
      },
      {
        icon: Leaf,
        title: "Green behavior",
        description: "Making environmental responsibility practical for households, youth, and community groups.",
      },
      {
        icon: BatteryCharging,
        title: "Energy efficiency",
        description: "Conversations on saving energy, reducing costs, and making cleaner daily choices.",
      },
      {
        icon: Lightbulb,
        title: "Youth leadership",
        description: "Encouraging young people to lead awareness campaigns and local environmental action.",
      },
    ]}
    pathway={[
      "Discuss local environmental risks",
      "Promote cleaner community habits",
      "Encourage green local action",
      "Build youth and group leadership",
    ]}
    stories={[
      {
        quote: "When young people lead cleanliness conversations, the whole village starts noticing its surroundings.",
        name: "Youth volunteer",
        location: "Saharsa",
      },
      {
        quote: "Environmental awareness becomes real when families can connect it with health, cost, and daily dignity.",
        name: "Community facilitator",
        location: "Kosi region",
      },
    ]}
  />
);

export default Environment;
