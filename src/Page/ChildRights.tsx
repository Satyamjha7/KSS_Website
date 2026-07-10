import {
  Baby,
  BookOpenCheck,
  HeartHandshake,
  Megaphone,
  School,
  ShieldCheck,
} from "lucide-react";
import WorkPageLayout from "./WorkPageLayout";
import heroImage from "../assets/114.jpeg";
import featureImage from "../assets/178.jpg";
import closingImage from "../assets/133.jpeg";

const ChildRights = () => (
  <WorkPageLayout
    themeLabel="Child Rights"
    eyebrow="Every child deserves safety and opportunity"
    title="Protecting childhood,"
    highlight="nurturing potential."
    intro="KSS works with families, communities, and local systems to strengthen child protection, education access, participation, and dignity."
    heroImage={heroImage}
    featureImage={featureImage}
    closingImage={closingImage}
    whyTitle="Children thrive when communities protect their rights together."
    whyText="Child rights work is strongest when families, schools, community leaders, and institutions share responsibility. Awareness and early support help reduce vulnerability and keep children connected to safe, healthy development."
    impactTitle="Building safer spaces for children to learn and grow."
    impactText="We focus on awareness, prevention, school connection, and community vigilance around child wellbeing."
    focusTitle="A child-centered approach rooted in protection and participation."
    focusIntro="The work connects rights awareness with practical support so children are seen, heard, protected, and encouraged."
    pathwayTitle="From awareness to protective community action."
    pathwayText="KSS supports communities to identify risks, discuss rights, connect children with systems, and respond earlier."
    ctaTitle="Stand with children and families."
    ctaText="Support KSS in strengthening child protection, education access, and community awareness."
    stats={[
      { value: "4", label: "Core rights: survival, protection, development, participation" },
      { value: "100+", label: "Communities engaged through broader KSS work" },
      { value: "1", label: "Goal: safe childhood with dignity" },
    ]}
    focusAreas={[
      {
        icon: ShieldCheck,
        title: "Child protection",
        description: "Awareness around safety, prevention, reporting, and early community response to risks.",
      },
      {
        icon: School,
        title: "Education continuity",
        description: "Encouraging families and communities to keep children connected to learning.",
      },
      {
        icon: Baby,
        title: "Early childhood care",
        description: "Supporting attention to nutrition, health, care, and development in early years.",
      },
      {
        icon: Megaphone,
        title: "Child participation",
        description: "Helping children and adolescents express concerns, aspirations, and ideas safely.",
      },
      {
        icon: BookOpenCheck,
        title: "Rights awareness",
        description: "Community sessions that make rights, entitlements, and responsibilities easier to understand.",
      },
      {
        icon: HeartHandshake,
        title: "Family support",
        description: "Working with caregivers so protection is practiced at home and in the community.",
      },
    ]}
    pathway={[
      "Raise rights awareness",
      "Identify child protection risks",
      "Connect families with support",
      "Strengthen community vigilance",
    ]}
    stories={[
      {
        quote: "When parents understand child rights, they become stronger supporters of education and safety.",
        name: "Field facilitator",
        location: "Saharsa",
      },
      {
        quote: "Children need adults who listen. Community meetings helped us discuss safety more openly.",
        name: "Village participant",
        location: "Kosi region",
      },
    ]}
  />
);

export default ChildRights;
