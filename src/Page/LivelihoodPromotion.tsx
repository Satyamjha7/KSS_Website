import {
  BadgeIndianRupee,
  BriefcaseBusiness,
  Handshake,
  LineChart,
  Store,
  UsersRound,
} from "lucide-react";
import WorkPageLayout from "./WorkPageLayout";
import heroImage from "../assets/img3.JPG";
import featureImage from "../assets/women.jpg";
import closingImage from "../assets/178.jpg";

const LivelihoodPromotion = () => (
  <WorkPageLayout
    themeLabel="Livelihood Promotion"
    eyebrow="Income, dignity, and resilience"
    title="Sustainable livelihoods"
    highlight="for stronger households."
    intro="KSS supports livelihood promotion through skills, enterprise thinking, financial awareness, collective action, and locally rooted income opportunities."
    heroImage={heroImage}
    featureImage={featureImage}
    closingImage={closingImage}
    whyTitle="Livelihood security gives families choices and confidence."
    whyText="Income uncertainty affects education, nutrition, health, migration, and dignity. Livelihood promotion helps families diversify income, build skills, manage resources, and participate more confidently in local markets."
    impactTitle="Helping people move from survival to stability."
    impactText="We support skills, savings, enterprise, market awareness, and collective platforms that strengthen household resilience."
    focusTitle="Livelihood support designed for rural realities."
    focusIntro="The work connects practical skills with financial literacy, market understanding, group support, and local opportunity."
    pathwayTitle="From capability to income resilience."
    pathwayText="KSS works with communities through group-based learning, mentoring, enterprise support, and connections to services and markets."
    ctaTitle="Support livelihoods that strengthen families."
    ctaText="Partner with KSS to expand income opportunities, enterprise support, and rural economic resilience."
    stats={[
      { value: "300+", label: "Women supported toward enterprise pathways" },
      { value: "500+", label: "Participants connected with skill-building opportunities" },
      { value: "4", label: "Pillars: skills, savings, enterprise, markets" },
    ]}
    focusAreas={[
      {
        icon: BriefcaseBusiness,
        title: "Work readiness",
        description: "Helping participants build discipline, confidence, communication, and practical livelihood readiness.",
      },
      {
        icon: Store,
        title: "Micro-enterprise",
        description: "Encouraging small business planning, costing, customer understanding, and local enterprise confidence.",
      },
      {
        icon: BadgeIndianRupee,
        title: "Savings & finance",
        description: "Promoting savings habits, budgeting, financial awareness, and informed use of resources.",
      },
      {
        icon: UsersRound,
        title: "Collective platforms",
        description: "Supporting self-help groups, peer learning, and collective confidence around income activities.",
      },
      {
        icon: LineChart,
        title: "Income diversification",
        description: "Helping households explore multiple income sources to reduce vulnerability.",
      },
      {
        icon: Handshake,
        title: "Market linkages",
        description: "Connecting producers, learners, and entrepreneurs with local demand and support networks.",
      },
    ]}
    pathway={[
      "Identify household livelihood goals",
      "Build skills and financial habits",
      "Support enterprise planning",
      "Connect with markets and services",
    ]}
    stories={[
      {
        quote: "With group support and basic business guidance, I started thinking of income as something I can plan.",
        name: "SHG member",
        location: "Saharsa",
      },
      {
        quote: "Livelihood support is strongest when people gain both skills and confidence to use them.",
        name: "Field facilitator",
        location: "Kosi region",
      },
    ]}
  />
);

export default LivelihoodPromotion;
