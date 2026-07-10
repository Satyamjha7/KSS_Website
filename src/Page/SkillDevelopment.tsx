import {
  BadgeIndianRupee,
  BriefcaseBusiness,
  GraduationCap,
  Handshake,
  Lightbulb,
  Wrench,
} from "lucide-react";
import WorkPageLayout from "./WorkPageLayout";
import heroImage from "../assets/156.jpg";
import featureImage from "../assets/img3.JPG";
import closingImage from "../assets/178.jpg";

const SkillDevelopment = () => (
  <WorkPageLayout
    themeLabel="Skills Development"
    eyebrow="Skills for dignity and opportunity"
    title="Building capabilities"
    highlight="that open livelihoods."
    intro="KSS supports practical skills, employability, entrepreneurship, financial confidence, and self-reliance among youth, women, and rural communities."
    heroImage={heroImage}
    featureImage={featureImage}
    closingImage={closingImage}
    whyTitle="Skills turn aspiration into action."
    whyText="Many rural youth and women have ambition but limited access to training, networks, and market information. Skill development helps people build confidence, income pathways, and economic independence."
    impactTitle="Connecting learning with real livelihood possibilities."
    impactText="We focus on practical training, confidence, market awareness, financial literacy, and pathways to work or enterprise."
    focusTitle="Skill-building designed for local realities."
    focusIntro="Training is most useful when it matches local opportunities, household constraints, market needs, and the confidence level of participants."
    pathwayTitle="From training to income pathways."
    pathwayText="KSS supports learners through awareness, training, mentoring, financial habits, and linkages that help skills become usable."
    ctaTitle="Support skills that create self-reliance."
    ctaText="Partner with KSS to help young people and women access practical skill-building and livelihood opportunities."
    stats={[
      { value: "500+", label: "Participants connected to skill-building opportunities" },
      { value: "300+", label: "Women supported toward enterprise pathways" },
      { value: "4", label: "Focus areas: skills, confidence, finance, markets" },
    ]}
    focusAreas={[
      {
        icon: Wrench,
        title: "Vocational skills",
        description: "Practical training aligned with local needs, livelihoods, and enterprise possibilities.",
      },
      {
        icon: GraduationCap,
        title: "Life skills",
        description: "Communication, confidence, planning, teamwork, and problem-solving for work readiness.",
      },
      {
        icon: BadgeIndianRupee,
        title: "Financial literacy",
        description: "Savings, budgeting, basic enterprise costing, and informed financial decision-making.",
      },
      {
        icon: BriefcaseBusiness,
        title: "Employability",
        description: "Helping youth understand work options, readiness, discipline, and opportunity pathways.",
      },
      {
        icon: Lightbulb,
        title: "Entrepreneurship",
        description: "Encouraging small business thinking, local innovation, and income diversification.",
      },
      {
        icon: Handshake,
        title: "Market linkages",
        description: "Connecting skills with local demand, networks, referrals, and practical support.",
      },
    ]}
    pathway={[
      "Identify local skill needs",
      "Build practical capabilities",
      "Strengthen financial confidence",
      "Connect skills with opportunities",
    ]}
    stories={[
      {
        quote: "Skill training gave me the confidence to start earning from home while supporting my family.",
        name: "Training participant",
        location: "Saharsa",
      },
      {
        quote: "When youth understand both skills and financial planning, they make stronger livelihood choices.",
        name: "Community facilitator",
        location: "Kosi region",
      },
    ]}
  />
);

export default SkillDevelopment;
