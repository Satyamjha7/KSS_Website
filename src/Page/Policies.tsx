import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Download,
  Eye,
  FileCheck2,
  HeartHandshake,
  LockKeyhole,
  Scale,
  ShieldCheck,
} from "lucide-react";
import policyBackground from "../assets/133.jpeg";
import communityImage from "../assets/114.jpeg";
import fieldImage from "../assets/178.jpg";

type PolicyItem = {
  title: string;
  description: string;
  icon: typeof ShieldCheck;
  link: string;
  tag: string;
};

const policies: PolicyItem[] = [
  {
    icon: ShieldCheck,
    title: "Safeguarding Policy",
    description:
      "Protecting children, women, vulnerable groups, community members, volunteers, and staff from harm, abuse, and exploitation.",
    link: "/organization-docs",
    tag: "Protection",
  },
  {
    icon: LockKeyhole,
    title: "Privacy Policy",
    description:
      "How personal information is collected, handled, stored, and used responsibly across our communication and program touchpoints.",
    link: "/contact",
    tag: "Data care",
  },
  {
    icon: Scale,
    title: "Ethics & Conduct",
    description:
      "The standards of honesty, fairness, respect, and professional behaviour expected across KSS operations and partnerships.",
    link: "/values",
    tag: "Integrity",
  },
  {
    icon: ClipboardCheck,
    title: "Financial Accountability",
    description:
      "Systems that support transparent accounting, responsible fund use, statutory compliance, and donor confidence.",
    link: "/financials",
    tag: "Compliance",
  },
  {
    icon: HeartHandshake,
    title: "Community Participation",
    description:
      "Our commitment to informed consent, inclusion, listening, and locally led decision-making in development programs.",
    link: "/who-we-are",
    tag: "Community",
  },
  {
    icon: FileCheck2,
    title: "Documentation & Reporting",
    description:
      "Clear documentation practices that help communities, partners, and public institutions understand our work and impact.",
    link: "/annual-report",
    tag: "Reporting",
  },
];

const accountabilitySteps = [
  "Clear standards for staff and partners",
  "Responsible handling of information",
  "Documented review and reporting",
  "Open communication with stakeholders",
];

const Policies = () => {
  return (
    <main className="overflow-hidden bg-[#f7f8f4] text-[#18322e]">
      <section
        className="relative min-h-[660px] bg-cover bg-center px-5 pb-20 pt-36 text-white sm:px-8 lg:min-h-[760px] lg:px-12 xl:px-20 2xl:px-24"
        style={{ backgroundImage: `url(${policyBackground})` }}
        aria-labelledby="policies-page-title"
      >
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(5,31,27,0.96)_0%,rgba(5,31,27,0.78)_50%,rgba(5,31,27,0.28)_100%)]" />
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
            <span>Policies</span>
          </nav>

          <p className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#f4c77f]">
            <ShieldCheck size={15} /> Governance you can trust
          </p>
          <h1
            id="policies-page-title"
            className="max-w-[900px] font-['Manrope'] text-[clamp(3.2rem,7vw,6.6rem)] font-bold leading-[0.96] tracking-[-0.065em]"
          >
            Policies that protect people
            <span className="block text-[#f4b860]">and strengthen trust.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            Our policies guide how Kosi Seva Sadan works with communities, partners,
            donors, staff, and public institutions—with clarity, dignity, and accountability.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#policy-areas"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-[#173b35] transition hover:-translate-y-0.5 hover:bg-[#f4b860]"
            >
              View policy areas <ArrowRight size={18} />
            </a>
            <Link
              to="/organization-docs"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 text-sm font-extrabold text-white transition hover:border-white hover:bg-white hover:text-[#173b35]"
            >
              Organization docs <Download size={17} />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 hidden max-w-[620px] grid-cols-2 overflow-hidden rounded-tl-[2rem] border-l border-t border-white/15 bg-[#0b342d]/85 backdrop-blur-xl lg:grid">
          {accountabilitySteps.map((step) => (
            <div key={step} className="border-b border-r border-white/10 px-7 py-6 last:border-r-0">
              <div className="flex items-center gap-3 text-white">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#f4b860]">
                  <CheckCircle2 size={16} />
                </span>
                <span className="text-sm font-bold">{step}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1240px] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:py-32">
        <div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.15em] text-[#d85a3b]">
            Our approach
          </p>
          <h2 className="font-['Manrope'] text-[clamp(2.35rem,4.7vw,4.15rem)] font-bold leading-[1.07] tracking-[-0.055em] text-[#173b35]">
            Clear rules make compassionate work stronger.
          </h2>
          <p className="mt-6 text-base leading-8 text-[#63756f]">
            Policies help turn values into everyday practice. They create a shared
            understanding of how we protect people, manage resources, communicate
            responsibly, and remain answerable to the communities we serve.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {accountabilitySteps.map((step) => (
              <div
                key={step}
                className="flex items-center gap-3 rounded-2xl border border-[#dce6e1] bg-white px-4 py-3 text-[#31564e]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f4b860]/25 text-[#d85a3b]">
                  <CheckCircle2 size={16} />
                </span>
                <span className="text-sm font-bold">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-[#f4b860]/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.8rem] bg-[#173b35] shadow-[0_24px_70px_rgba(23,59,53,0.16)]">
            <img
              src={communityImage}
              alt="Kosi Seva Sadan community engagement"
              className="h-[420px] w-full object-cover opacity-75 sm:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b302a] via-[#0b302a]/35 to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-xl p-6 text-white sm:p-9">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#f4b860]">
                Accountability in practice
              </p>
              <p className="mt-4 font-['Manrope'] text-2xl font-bold leading-tight tracking-[-0.035em] sm:text-3xl">
                Every policy exists to protect dignity, strengthen trust, and make
                our decisions easier to understand.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="policy-areas" className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.15em] text-[#d85a3b]">
                Policy areas
              </p>
              <h2 className="font-['Manrope'] text-[clamp(2.4rem,4.8vw,4.25rem)] font-bold leading-[1.06] tracking-[-0.055em] text-[#173b35]">
                A practical framework for responsible service.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-[#687a74] lg:justify-self-end">
              These areas summarize the core safeguards and operating principles
              that shape our work. Formal documents and certificates are available
              through our organization documentation section.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {policies.map(({ icon: Icon, title, description, link, tag }, index) => (
              <article
                key={title}
                className="group relative flex min-h-[310px] flex-col overflow-hidden rounded-[1.35rem] border border-[#dfe8e4] bg-[#f9fbf8] p-6 transition duration-300 hover:-translate-y-2 hover:border-[#f4b860]/70 hover:bg-white hover:shadow-[0_24px_60px_rgba(23,59,53,0.12)]"
              >
                <span className="absolute right-5 top-5 font-['Manrope'] text-5xl font-bold tracking-[-0.08em] text-[#173b35]/5">
                  0{index + 1}
                </span>
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#173b35] text-[#f4b860] transition group-hover:bg-[#d85a3b] group-hover:text-white">
                  <Icon size={25} strokeWidth={2.2} />
                </div>
                <span className="mb-3 w-fit rounded-full bg-[#f4b860]/25 px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-[#b94f36]">
                  {tag}
                </span>
                <h3 className="font-['Manrope'] text-xl font-bold tracking-[-0.025em] text-[#173b35]">
                  {title}
                </h3>
                <p className="mt-4 grow text-sm leading-7 text-[#667873]">{description}</p>
                <Link
                  to={link}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#173b35] transition hover:text-[#d85a3b]"
                >
                  Learn more <ArrowRight size={17} />
                </Link>
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
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.15em] text-[#f4b860]">
              <Eye size={15} /> Need a specific document?
            </p>
            <h2 className="font-['Manrope'] text-[clamp(2.2rem,4.2vw,3.7rem)] font-bold leading-[1.08] tracking-[-0.05em]">
              We keep our compliance records accessible and easy to request.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/organization-docs"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f4b860] px-6 text-sm font-extrabold text-[#173b35] transition hover:-translate-y-0.5 hover:bg-white"
            >
              View documents <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-extrabold text-white transition hover:border-white hover:bg-white hover:text-[#173b35]"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Policies;
