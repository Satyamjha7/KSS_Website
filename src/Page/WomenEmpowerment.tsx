import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  CheckCircle2,
  HandHeart,
  HeartPulse,
  Landmark,
  Lightbulb,
  Megaphone,
  ShieldCheck,
  Sparkles,
  UsersRound,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import heroImage from "../assets/women-back.JPG";
import womenImage from "../assets/women.jpg";
import communityImage from "../assets/178.jpg";

type FocusArea = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const focusAreas: FocusArea[] = [
  {
    icon: BookOpenCheck,
    title: "Education & awareness",
    description:
      "Rights awareness, literacy support, health information, and practical sessions that help women make informed decisions.",
  },
  {
    icon: WalletCards,
    title: "Livelihood & financial literacy",
    description:
      "Skill-building, savings habits, entrepreneurship support, and confidence to participate in household and community economies.",
  },
  {
    icon: Megaphone,
    title: "Leadership & voice",
    description:
      "Encouraging women to speak in public forums, participate in local institutions, and lead community conversations.",
  },
  {
    icon: HeartPulse,
    title: "Health, nutrition & dignity",
    description:
      "Awareness around health, menstrual hygiene, nutrition, care practices, and access to essential services.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & protection",
    description:
      "Creating safer spaces for women and girls through community dialogue, referrals, and responsive local support networks.",
  },
  {
    icon: UsersRound,
    title: "Collective action",
    description:
      "Strengthening self-help groups, peer learning circles, and women-led local action for lasting change.",
  },
];

const stats = [
  ["10,000+", "Women reached through awareness and empowerment initiatives"],
  ["500+", "Participants connected with skill-building opportunities"],
  ["300+", "Women supported toward enterprise and livelihood pathways"],
];

const pathway = [
  "Listen to women’s priorities",
  "Build confidence and skills",
  "Connect groups with services",
  "Support women-led local action",
];

const stories = [
  {
    quote:
      "The training helped me begin earning with dignity. Today, I contribute to my family and feel confident making decisions.",
    name: "Renu Devi",
    location: "Saharsa",
  },
  {
    quote:
      "I used to hesitate to speak in meetings. Now I help other women understand their rights and access local schemes.",
    name: "Sunita Kumari",
    location: "Mahishi",
  },
];

const WomenEmpowerment = () => {
  return (
    <main className="overflow-hidden bg-[#f7f8f4] text-[#18322e]">
      <section
        className="relative isolate flex min-h-[720px] items-center overflow-hidden px-5 py-32 text-white sm:px-8 lg:min-h-[780px] lg:px-12 xl:px-20 2xl:px-24"
        aria-labelledby="women-empowerment-title"
      >
        <img src={heroImage} alt="" className="absolute inset-0 -z-30 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-20 bg-[#051f1b]/80" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#051f1b] via-[#051f1b]/75 to-[#051f1b]/30" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#051f1b] to-transparent" />

        <div className="relative z-10 mx-auto grid w-full max-w-[1240px] gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <nav
              className="mb-10 flex items-center gap-2.5 text-xs font-semibold text-white/55 sm:mb-12"
              aria-label="Breadcrumb"
            >
              <Link to="/" className="text-white/85 transition hover:text-[#f4b860]">
                Home
              </Link>
              <span>/</span>
              <span>Women empowerment</span>
            </nav>

            <p className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#f4c77f]">
              <Sparkles size={15} /> Strengthening women, strengthening communities
            </p>
            <h1
              id="women-empowerment-title"
              className="max-w-[860px] font-['Manrope'] text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              Women with agency.
              <span className="block text-[#f4b860]">Communities with power.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              Kosi Seva Sadan works with women and girls to build confidence, leadership,
              livelihood opportunities, health awareness, and collective voice in rural communities.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#focus-areas"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-[#173b35] transition hover:-translate-y-0.5 hover:bg-[#f4b860]"
              >
                Explore our work <ArrowRight size={18} />
              </a>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 text-sm font-extrabold text-white transition hover:border-white hover:bg-white hover:text-[#173b35]"
              >
                Support the mission <HandHeart size={17} />
              </Link>
            </div>
          </div>

          <aside className="rounded-[1.75rem] border border-white/15 bg-[#0b342d]/80 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-6 lg:justify-self-end">
            <div className="rounded-[1.35rem] border border-white/10 bg-white/10 p-5">
              <p className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#f4b860]">
                <BadgeCheck size={15} /> Impact snapshot
              </p>
              <p className="font-['Manrope'] text-2xl font-bold leading-tight tracking-[-0.035em] text-white sm:text-3xl">
                Supporting women to learn, earn, lead, and participate with dignity.
              </p>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <strong className="block font-['Manrope'] text-2xl text-[#f4b860]">{value}</strong>
                  <span className="mt-2 block text-xs leading-5 text-white/70">{label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1240px] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:py-32">
        <div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.15em] text-[#d85a3b]">
            Why it matters
          </p>
          <h2 className="font-['Manrope'] text-4xl font-bold leading-tight tracking-[-0.045em] text-[#173b35] sm:text-5xl lg:text-6xl">
            Empowerment begins when women are heard, trusted, and supported.
          </h2>
          <p className="mt-6 text-base leading-8 text-[#63756f]">
            Women are often the first responders to family needs, community wellbeing,
            and local resilience. When women have access to knowledge, skills, resources,
            and public voice, the benefits travel across households, children, livelihoods,
            and village institutions.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {pathway.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-[#dce6e1] bg-white px-4 py-3 text-[#31564e]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f4b860]/25 text-[#d85a3b]">
                  <CheckCircle2 size={16} />
                </span>
                <span className="text-sm font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-[#f4b860]/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.8rem] bg-[#173b35] shadow-[0_24px_70px_rgba(23,59,53,0.16)]">
            <img
              src={womenImage}
              alt="Women participating in community empowerment initiatives"
              className="h-[420px] w-full object-cover opacity-85 sm:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b302a] via-[#0b302a]/35 to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-xl p-6 text-white sm:p-9">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#f4b860]">
                Community-led change
              </p>
              <p className="mt-4 font-['Manrope'] text-2xl font-bold leading-tight tracking-[-0.035em] sm:text-3xl">
                Our work focuses on creating spaces where women can learn, decide,
                earn, lead, and support one another.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="focus-areas" className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.15em] text-[#d85a3b]">
                Focus areas
              </p>
              <h2 className="font-['Manrope'] text-4xl font-bold leading-tight tracking-[-0.045em] text-[#173b35] sm:text-5xl lg:text-6xl">
                Practical support across the moments that shape a woman’s life.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-[#687a74] lg:justify-self-end">
              Our women empowerment work connects awareness, livelihoods, health,
              protection, leadership, and collective action so change is not isolated
              to one training session—it becomes part of daily community life.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {focusAreas.map(({ icon: Icon, title, description }, index) => (
              <article
                key={title}
                className="group relative min-h-[300px] overflow-hidden rounded-[1.35rem] border border-[#dfe8e4] bg-[#f9fbf8] p-6 transition duration-300 hover:-translate-y-2 hover:border-[#f4b860]/70 hover:bg-white hover:shadow-[0_24px_60px_rgba(23,59,53,0.12)]"
              >
                <span className="absolute right-5 top-5 font-['Manrope'] text-5xl font-bold tracking-[-0.08em] text-[#173b35]/5">
                  0{index + 1}
                </span>
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#173b35] text-[#f4b860] transition group-hover:bg-[#d85a3b] group-hover:text-white">
                  <Icon size={25} strokeWidth={2.2} />
                </div>
                <h3 className="font-['Manrope'] text-xl font-bold tracking-[-0.025em] text-[#173b35]">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#667873]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8f4] px-5 py-20 sm:px-8 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.15em] text-[#d85a3b]">
              The pathway
            </p>
            <h2 className="font-['Manrope'] text-4xl font-bold leading-tight tracking-[-0.045em] text-[#173b35] sm:text-5xl lg:text-6xl">
              From participation to leadership.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#63756f]">
              Empowerment is a gradual process. KSS supports women through repeated
              engagement, peer learning, practical training, and links to services
              and institutions that help women move from awareness to action.
            </p>
          </div>

          <div className="grid gap-4">
            {pathway.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-[1.25rem] border border-[#dce6e1] bg-white p-5 shadow-[0_16px_40px_rgba(23,59,53,0.06)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#173b35] font-['Manrope'] text-sm font-bold text-[#f4b860]">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-['Manrope'] text-lg font-bold text-[#173b35]">{step}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#667873]">
                    Women’s groups are supported with conversation, skills, service
                    information, and confidence-building so they can shape local solutions.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.15em] text-[#d85a3b]">
                Impact & voices
              </p>
              <h2 className="font-['Manrope'] text-4xl font-bold leading-tight tracking-[-0.045em] text-[#173b35] sm:text-5xl lg:text-6xl">
                Change becomes visible in confidence, income, and leadership.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-[#687a74] lg:justify-self-end">
              Each training, group meeting, and awareness session is designed to help
              women take stronger decisions for themselves, their families, and their communities.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {stats.map(([value, label]) => (
              <article
                key={label}
                className="rounded-[1.35rem] border border-[#dfe8e4] bg-[#173b35] p-6 text-white shadow-[0_20px_55px_rgba(23,59,53,0.12)]"
              >
                <BadgeCheck className="mb-6 text-[#f4b860]" size={30} />
                <strong className="block font-['Manrope'] text-4xl font-bold tracking-[-0.06em] text-[#f4b860]">
                  {value}
                </strong>
                <p className="mt-3 text-sm leading-7 text-white/72">{label}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {stories.map((story) => (
              <blockquote
                key={story.name}
                className="rounded-[1.35rem] border border-[#dfe8e4] bg-[#f9fbf8] p-6 sm:p-8"
              >
                <Lightbulb className="mb-5 text-[#d85a3b]" size={28} />
                <p className="font-['Manrope'] text-xl font-bold leading-8 tracking-[-0.025em] text-[#173b35]">
                  “{story.quote}”
                </p>
                <footer className="mt-5 text-sm font-bold text-[#687a74]">
                  — {story.name}, {story.location}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#153e37] px-5 py-20 text-white sm:px-8 sm:py-24">
        <div className="absolute inset-0 opacity-15">
          <img src={communityImage} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[#153e37]/90" />

        <div className="relative mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.15em] text-[#f4b860]">
              <Landmark size={15} /> Partner for equitable communities
            </p>
            <h2 className="font-['Manrope'] text-4xl font-bold leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Support women-led change across rural Bihar.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f4b860] px-6 text-sm font-extrabold text-[#173b35] transition hover:-translate-y-0.5 hover:bg-white"
            >
              Work with us <ArrowRight size={18} />
            </Link>
            <Link
              to="/donate-button"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 text-sm font-extrabold text-white transition hover:border-white hover:bg-white hover:text-[#173b35]"
            >
              Donate <HandHeart size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WomenEmpowerment;
