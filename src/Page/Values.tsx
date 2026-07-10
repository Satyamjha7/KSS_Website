import { Link } from "react-router-dom";
import {
  ArrowRight,
  Handshake,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import valueBackground from "../assets/133.jpeg";
import communityImage from "../assets/178.jpg";
import fieldImage from "../assets/182.jpg";

type ValueItem = {
  title: string;
  description: string;
  icon: typeof ShieldCheck;
};

const values: ValueItem[] = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We conduct our work with honesty, transparency, and accountability, keeping ethical practice at the center of every decision.",
  },
  {
    icon: HeartHandshake,
    title: "Empowerment",
    description:
      "We help people and communities build confidence, skills, and ownership so development can continue from within.",
  },
  {
    icon: UsersRound,
    title: "Collaboration",
    description:
      "We believe deeper impact happens when communities, institutions, and partners move forward together.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We keep learning, adapting, and designing practical solutions for complex local challenges.",
  },
  {
    icon: Handshake,
    title: "Inclusivity",
    description:
      "We respect diversity and work to ensure every voice is heard, valued, and reflected in the path ahead.",
  },
];

const commitments = [
  "Community-first decisions",
  "Transparent field practice",
  "Respect for every household",
  "Partnerships that last",
];

const Values = () => {
  return (
    <main className="overflow-hidden bg-[#f7f8f4] text-[#18322e]">
      <section
        className="relative min-h-[660px] bg-cover bg-center px-5 pb-20 pt-36 text-white sm:px-8 lg:min-h-[760px] lg:px-12 xl:px-20 2xl:px-24"
        style={{ backgroundImage: `url(${valueBackground})` }}
        aria-labelledby="values-page-title"
      >
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(5,31,27,0.95)_0%,rgba(5,31,27,0.78)_48%,rgba(5,31,27,0.32)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#051f1b]/70 via-transparent to-transparent" />

        <div className="relative z-10 flex min-h-[500px] max-w-[1240px] flex-col justify-center">
          <nav
            className="mb-12 flex items-center gap-2.5 text-xs font-semibold text-white/55"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="text-white/85 transition hover:text-[#f4b860]">
              Home
            </Link>
            <span>/</span>
            <span>Our values</span>
          </nav>

          <p className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#f4c77f]">
            <Sparkles size={15} /> The principles behind our work
          </p>
          <h1
            id="values-page-title"
            className="max-w-[880px] font-['Manrope'] text-[clamp(3.2rem,7vw,6.6rem)] font-bold leading-[0.96] tracking-[-0.065em]"
          >
            Values that guide every
            <span className="block text-[#f4b860]">community step.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            Our values are more than statements on a page. They shape how we listen,
            design programs, build partnerships, and stay accountable to the people
            we serve.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#core-values"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-[#173b35] transition hover:-translate-y-0.5 hover:bg-[#f4b860]"
            >
              Explore values <ArrowRight size={18} />
            </a>
            <Link
              to="/who-we-are"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-extrabold text-white transition hover:border-white hover:bg-white hover:text-[#173b35]"
            >
              Who we are
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 hidden max-w-[620px] grid-cols-2 overflow-hidden rounded-tl-[2rem] border-l border-t border-white/15 bg-[#0b342d]/85 backdrop-blur-xl lg:grid">
          {commitments.map((item) => (
            <div key={item} className="border-b border-r border-white/10 px-7 py-6 last:border-r-0">
              <CheckMarkLabel label={item} />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1240px] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20 lg:py-32">
        <div className="relative">
          <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full bg-[#f4b860]/30 blur-2xl" />
          <div className="relative grid gap-4 sm:grid-cols-[0.84fr_1fr] sm:items-end">
            <img
              src={communityImage}
              alt="Community members participating in Kosi Seva Sadan work"
              className="h-[360px] w-full rounded-[1.8rem] object-cover shadow-[0_24px_70px_rgba(23,59,53,0.13)] sm:h-[440px]"
            />
            <div className="rounded-[1.8rem] bg-[#173b35] p-6 text-white shadow-[0_24px_70px_rgba(23,59,53,0.16)] sm:-ml-14 sm:mb-8 sm:p-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#f4b860]">
                Our promise
              </p>
              <p className="mt-4 font-['Manrope'] text-2xl font-bold leading-tight tracking-[-0.035em]">
                We choose patient, respectful, locally rooted change over quick fixes.
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.15em] text-[#d85a3b]">
            Why values matter
          </p>
          <h2 className="font-['Manrope'] text-[clamp(2.35rem,4.7vw,4.15rem)] font-bold leading-[1.07] tracking-[-0.055em] text-[#173b35]">
            Good work needs a clear inner compass.
          </h2>
          <p className="mt-6 text-base leading-8 text-[#63756f]">
            Development work is built through trust. These principles help us make
            decisions that are fair, practical, and deeply connected to the lived
            realities of rural communities.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {commitments.map((item) => (
              <CheckMarkLabel key={item} label={item} tone="light" />
            ))}
          </div>
        </div>
      </section>

      <section id="core-values" className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.15em] text-[#d85a3b]">
                Core values
              </p>
              <h2 className="font-['Manrope'] text-[clamp(2.4rem,4.8vw,4.25rem)] font-bold leading-[1.06] tracking-[-0.055em] text-[#173b35]">
                Five principles, one way of working.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-[#687a74] lg:justify-self-end">
              Each value connects the organization’s governance, program design, and
              field relationships into one consistent culture of service.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {values.map(({ icon: Icon, title, description }, index) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-[1.35rem] border border-[#dfe8e4] bg-[#f9fbf8] p-6 transition duration-300 hover:-translate-y-2 hover:border-[#f4b860]/70 hover:bg-white hover:shadow-[0_24px_60px_rgba(23,59,53,0.12)]"
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

      <section className="relative overflow-hidden bg-[#153e37] px-5 py-20 text-white sm:px-8 sm:py-24">
        <div className="absolute inset-0 opacity-15">
          <img src={fieldImage} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[#153e37]/90" />

        <div className="relative mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.15em] text-[#f4b860]">
              Work with shared purpose
            </p>
            <h2 className="font-['Manrope'] text-[clamp(2.2rem,4.2vw,3.7rem)] font-bold leading-[1.08] tracking-[-0.05em]">
              Values become real when people practice them together.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/team"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f4b860] px-6 text-sm font-extrabold text-[#173b35] transition hover:-translate-y-0.5 hover:bg-white"
            >
              Meet the team <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-extrabold text-white transition hover:border-white hover:bg-white hover:text-[#173b35]"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

const CheckMarkLabel = ({
  label,
  tone = "dark",
}: {
  label: string;
  tone?: "dark" | "light";
}) => (
  <div
    className={`flex items-center gap-3 rounded-2xl ${
      tone === "light"
        ? "border border-[#dce6e1] bg-white px-4 py-3 text-[#31564e]"
        : "text-white"
    }`}
  >
    <span
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
        tone === "light" ? "bg-[#f4b860]/25 text-[#d85a3b]" : "bg-white/10 text-[#f4b860]"
      }`}
    >
      <ShieldCheck size={16} />
    </span>
    <span className="text-sm font-bold">{label}</span>
  </div>
);

export default Values;
