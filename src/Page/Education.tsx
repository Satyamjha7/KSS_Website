import {
  BookOpenCheck,
  GraduationCap,
  Library,
  Lightbulb,
  School,
  UsersRound,
} from "lucide-react";
import WorkPageLayout from "./WorkPageLayout";
import heroImage from "../assets/156.jpg";
import featureImage from "../assets/img1.jpg";
import closingImage from "../assets/178.jpg";

const Education = () => (
  <WorkPageLayout
    themeLabel="Education & Awareness"
    eyebrow="Learning that opens doors"
    title="Education, awareness,"
    highlight="and confidence for life."
    intro="KSS promotes learning, awareness, and community participation so children, youth, women, and families can make informed decisions and access opportunities."
    heroImage={heroImage}
    featureImage={featureImage}
    closingImage={closingImage}
    whyTitle="Education is more than schooling—it is the confidence to participate."
    whyText="Awareness helps communities understand rights, services, health, livelihoods, and institutions. Learning becomes powerful when it connects classroom knowledge with life skills and community action."
    impactTitle="Supporting learners and families with awareness that lasts."
    impactText="Our work helps children stay connected to learning while families build confidence to use information and services."
    focusTitle="Learning support that connects children, youth, and communities."
    focusIntro="Education and awareness programs create bridges between households, schools, local institutions, and the aspirations of young people."
    pathwayTitle="From information to participation."
    pathwayText="We work through group learning, awareness sessions, school/community engagement, and practical guidance that supports informed choices."
    ctaTitle="Help communities learn, participate, and grow."
    ctaText="Partner with KSS to strengthen education, awareness, and life-skills support in rural communities."
    stats={[
      { value: "100+", label: "Villages connected through awareness initiatives" },
      { value: "3", label: "Key groups: children, youth, and families" },
      { value: "1", label: "Shared aim: informed community action" },
    ]}
    focusAreas={[
      {
        icon: School,
        title: "School engagement",
        description: "Helping children and families stay connected to learning and local education systems.",
      },
      {
        icon: BookOpenCheck,
        title: "Rights awareness",
        description: "Sessions on entitlements, safety, inclusion, and community responsibilities.",
      },
      {
        icon: Library,
        title: "Learning resources",
        description: "Encouraging reading, curiosity, and access to information that supports growth.",
      },
      {
        icon: GraduationCap,
        title: "Youth aspirations",
        description: "Guidance for adolescents and youth around confidence, skills, and future pathways.",
      },
      {
        icon: Lightbulb,
        title: "Life skills",
        description: "Practical learning around communication, decision-making, health, and resilience.",
      },
      {
        icon: UsersRound,
        title: "Community learning",
        description: "Using groups and local meetings to make awareness shared, repeated, and actionable.",
      },
    ]}
    pathway={[
      "Understand learning gaps",
      "Build awareness in groups",
      "Connect families with services",
      "Encourage lifelong learning",
    ]}
    stories={[
      {
        quote: "Awareness sessions helped parents understand how important regular learning is for children.",
        name: "Community educator",
        location: "Saharsa",
      },
      {
        quote: "When children see support from the community, they feel more confident about continuing education.",
        name: "Village volunteer",
        location: "Kosi region",
      },
    ]}
  />
);

export default Education;
