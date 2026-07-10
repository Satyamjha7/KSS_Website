import {
  Apple,
  Baby,
  HeartPulse,
  Hospital,
  Salad,
  ShieldPlus,
} from "lucide-react";
import WorkPageLayout from "./WorkPageLayout";
import heroImage from "../assets/163.jpg";
import featureImage from "../assets/114.jpeg";
import closingImage from "../assets/178.jpg";

const Health = () => (
  <WorkPageLayout
    themeLabel="Health & Nutrition"
    eyebrow="Care that reaches the last household"
    title="Healthier families,"
    highlight="stronger communities."
    intro="Kosi Seva Sadan supports rural families with health awareness, nutrition education, maternal and child care linkages, and community-led prevention practices."
    heroImage={heroImage}
    featureImage={featureImage}
    closingImage={closingImage}
    whyTitle="Good health begins with awareness, access, and trust."
    whyText="In underserved rural areas, simple information and timely service linkages can prevent long-term hardship. Our work helps families understand nutrition, hygiene, preventive care, and available public health services."
    impactTitle="Making health guidance practical and community-owned."
    impactText="We focus on everyday practices that families can adopt, while helping communities connect with frontline workers and local systems."
    focusTitle="Practical health support for women, children, and families."
    focusIntro="The work combines prevention, nutrition, service linkages, and community conversations so health is not treated as a one-time camp but a sustained habit."
    pathwayTitle="From awareness to healthier daily practice."
    pathwayText="Field teams work with households, mothers, adolescent girls, caregivers, and local health actors to make knowledge accessible and action possible."
    ctaTitle="Help rural families access better health and nutrition."
    ctaText="Partner with KSS to strengthen community health awareness, nutrition practices, and service linkages."
    stats={[
      { value: "1,000+", label: "Families reached through health and nutrition awareness" },
      { value: "100+", label: "Community sessions and household interactions supported" },
      { value: "3", label: "Core focus groups: women, children, and adolescents" },
    ]}
    focusAreas={[
      {
        icon: HeartPulse,
        title: "Preventive health",
        description: "Awareness on common illnesses, timely care-seeking, hygiene, and household-level prevention.",
      },
      {
        icon: Salad,
        title: "Nutrition education",
        description: "Practical guidance on balanced meals, local food diversity, child nutrition, and anemia prevention.",
      },
      {
        icon: Baby,
        title: "Maternal & child care",
        description: "Support for mothers and caregivers to understand antenatal care, immunization, and early childhood needs.",
      },
      {
        icon: Apple,
        title: "Adolescent wellbeing",
        description: "Conversations on nutrition, menstrual hygiene, confidence, and healthy life skills for adolescent girls.",
      },
      {
        icon: Hospital,
        title: "Service linkages",
        description: "Helping families connect with health workers, public systems, schemes, and referral support.",
      },
      {
        icon: ShieldPlus,
        title: "Community resilience",
        description: "Building local awareness so families can respond earlier and reduce avoidable health risks.",
      },
    ]}
    pathway={[
      "Identify household health gaps",
      "Run practical awareness sessions",
      "Connect families with services",
      "Follow up through community groups",
    ]}
    stories={[
      {
        quote: "After the nutrition sessions, I understood how small changes in meals can help my children stay healthier.",
        name: "Meena Devi",
        location: "Saharsa",
      },
      {
        quote: "The health meetings helped us ask better questions at the health centre and use services with more confidence.",
        name: "Community participant",
        location: "Kosi region",
      },
    ]}
  />
);

export default Health;
