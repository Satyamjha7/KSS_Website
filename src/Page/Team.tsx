import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Handshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import teamBackground from "../assets/114.jpeg";

type TeamKey = "governingBoard" | "managementTeam";

type Member = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

const teamData: Record<TeamKey, Member[]> = {
  governingBoard: [
    {
      name: "Rajendra Jha",
      role: "Secretary",
      bio: "Rajendra Jha brings a decade of leadership and development experience, working with civil-society organizations and public institutions to create sustainable impact in rural communities.",
      image:
        "https://marketplace.canva.com/EAGUuoKjlYk/1/0/1600w/canva-dark-blue-modern-professional-recruitment-linkedin-profile-picture-Rvj3l5SuQoU.jpg",
    },
    {
      name: "Vidyapati Chaudhary",
      role: "Vice Chairperson",
      bio: "An experienced public-administration and social-services professional, Vidyapati Chaudhary has guided community-based programs across North Bihar.",
      image:
        "https://marketplace.canva.com/EAGUuoKjlYk/1/0/1600w/canva-dark-blue-modern-professional-recruitment-linkedin-profile-picture-Rvj3l5SuQoU.jpg",
    },
    {
      name: "Laturan Das",
      role: "Vice Chairperson",
      bio: "Laturan Das contributes more than fifteen years of social-sector experience, with a particular focus on improving access to healthcare in rural areas.",
      image:
        "https://marketplace.canva.com/EAGUuoKjlYk/1/0/1600w/canva-dark-blue-modern-professional-recruitment-linkedin-profile-picture-Rvj3l5SuQoU.jpg",
    },
  ],
  managementTeam: [
    {
      name: "Samol Kumar Pathak",
      role: "Executive Director",
      bio: "Samol Kumar Pathak leads organizational strategy and policy implementation, translating KSS's mission into accountable programs with measurable community impact.",
      image:
        "https://marketplace.canva.com/EAGUuoKjlYk/1/0/1600w/canva-dark-blue-modern-professional-recruitment-linkedin-profile-picture-Rvj3l5SuQoU.jpg",
    },
    {
      name: "Arvind Mukhiya",
      role: "Program Manager",
      bio: "Arvind Mukhiya manages development programs through strong community participation, thoughtful field coordination, and a commitment to locally led solutions.",
      image:
        "https://marketplace.canva.com/EAGUuoKjlYk/1/0/1600w/canva-dark-blue-modern-professional-recruitment-linkedin-profile-picture-Rvj3l5SuQoU.jpg",
    },
  ],
};

const teamTabs: { key: TeamKey; label: string; shortLabel: string }[] = [
  { key: "governingBoard", label: "Governing Board", shortLabel: "Governance" },
  { key: "managementTeam", label: "Management Team", shortLabel: "Management" },
];

const TeamCard = ({ image, name, role, bio }: Member) => (
  <article className="group overflow-hidden rounded-[1.4rem] border border-[#dfe8e4] bg-white transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(23,59,53,0.13)]">
    <div className="relative aspect-[4/4.25] overflow-hidden bg-[#dfe9e4]">
      <img
        src={image}
        alt={`${name}, ${role}`}
        className="h-full w-full object-cover object-top grayscale-[15%] transition duration-500 group-hover:scale-[1.035] group-hover:grayscale-0"
      />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0d302a]/80 to-transparent" />
      <span className="absolute bottom-5 left-5 rounded-full bg-[#f4b860] px-3 py-1.5 text-[0.67rem] font-extrabold uppercase tracking-[0.12em] text-[#173b35]">
        {role}
      </span>
    </div>

    <div className="p-6 sm:p-7">
      <h3 className="font-['Manrope'] text-xl font-bold tracking-[-0.025em] text-[#173b35]">
        {name}
      </h3>
      <div className="my-4 h-px bg-[#e4ebe8]" />
      <p className="text-sm leading-7 text-[#667873]">{bio}</p>
    </div>
  </article>
);

const Team = () => {
  const [selectedTeam, setSelectedTeam] = useState<TeamKey>("governingBoard");
  const activeTeam = teamData[selectedTeam];

  return (
    <main className="overflow-hidden bg-[#f7f8f4] text-[#18322e]">
      <section
        className="relative flex min-h-[700px] items-center bg-cover bg-center px-5 pb-20 pt-36 text-white sm:px-8 lg:min-h-[780px] lg:px-12 xl:px-20 2xl:px-24"
        style={{ backgroundImage: `url(${teamBackground})` }}
        aria-labelledby="team-page-title"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,31,27,0.94)_0%,rgba(5,31,27,0.72)_50%,rgba(5,31,27,0.22)_85%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#051f1b]/60 via-transparent to-transparent" />

        <div className="relative z-10 w-full max-w-[840px]">
          <nav className="mb-12 flex items-center gap-2.5 text-xs font-semibold text-white/55" aria-label="Breadcrumb">
            <Link to="/" className="text-white/85 transition hover:text-[#f4b860]">Home</Link>
            <span>/</span>
            <span>Our team</span>
          </nav>

          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.16em] text-[#f4c77f]">
            Leadership grounded in service
          </p>
          <h1
            id="team-page-title"
            className="max-w-[820px] font-['Manrope'] text-[clamp(3.2rem,7vw,6.5rem)] font-bold leading-[0.97] tracking-[-0.065em]"
          >
            People with purpose.
            <span className="block text-[#f4b860]">Leadership with heart.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            Our leaders bring field experience, thoughtful governance, and a shared
            belief that lasting progress is built with—not for—communities.
          </p>
          <a
            href="#meet-the-team"
            className="mt-8 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-white px-5 text-sm font-extrabold text-[#173b35] transition hover:-translate-y-0.5 hover:bg-[#f4b860]"
          >
            Meet our leaders <ArrowRight size={18} />
          </a>
        </div>

        <div className="absolute bottom-0 right-0 hidden w-[46%] max-w-[590px] grid-cols-3 border-l border-t border-white/15 bg-[#0b342d]/80 backdrop-blur-xl lg:grid">
          {[
            ["40+", "Years of service"],
            ["100+", "Villages reached"],
            ["1", "Shared mission"],
          ].map(([value, label]) => (
            <div key={label} className="border-r border-white/15 px-7 py-7 last:border-r-0">
              <strong className="block font-['Manrope'] text-2xl text-[#f4b860]">{value}</strong>
              <span className="mt-1 block text-[0.7rem] text-white/60">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1240px] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-24 lg:py-32">
        <div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.15em] text-[#d85a3b]">
            How we lead
          </p>
          <h2 className="font-['Manrope'] text-[clamp(2.35rem,4.8vw,4.25rem)] font-bold leading-[1.07] tracking-[-0.055em] text-[#173b35]">
            Accountability at every level.
          </h2>
        </div>

        <div>
          <p className="text-base leading-8 text-[#63756f]">
            KSS combines responsible governance with experienced program leadership.
            Together, our board and management team protect the organization’s values,
            guide its direction, and keep every initiative accountable to the people it serves.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {[
              [ShieldCheck, "Transparent"],
              [Handshake, "Collaborative"],
              [CheckCircle2, "Accountable"],
            ].map(([Icon, label]) => {
              const ItemIcon = Icon as typeof ShieldCheck;
              return (
                <div key={label as string} className="flex items-center gap-2.5 rounded-xl border border-[#dce6e1] bg-white px-4 py-3 text-sm font-bold text-[#31564e]">
                  <ItemIcon size={18} className="text-[#d85a3b]" />
                  {label as string}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="meet-the-team" className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.15em] text-[#d85a3b]">
                Meet the people
              </p>
              <h2 className="font-['Manrope'] text-[clamp(2.4rem,4.8vw,4.3rem)] font-bold leading-[1.06] tracking-[-0.055em] text-[#173b35]">
                Experience that moves our mission forward.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-[#687a74] lg:justify-self-end">
              Select a leadership group to learn more about the people providing
              governance, direction, and day-to-day stewardship.
            </p>
          </div>

          <div
            className="mt-12 inline-flex w-full rounded-2xl border border-[#dce6e1] bg-[#f4f7f4] p-1.5 sm:w-auto"
            role="tablist"
            aria-label="Team groups"
          >
            {teamTabs.map((tab) => {
              const isActive = selectedTeam === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="team-members"
                  onClick={() => setSelectedTeam(tab.key)}
                  className={`min-h-11 flex-1 rounded-xl px-4 text-sm font-bold transition sm:min-w-[180px] sm:px-6 ${
                    isActive
                      ? "bg-[#173b35] text-white shadow-[0_8px_20px_rgba(23,59,53,0.18)]"
                      : "text-[#567069] hover:bg-white hover:text-[#173b35]"
                  }`}
                >
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.shortLabel}</span>
                </button>
              );
            })}
          </div>

          <div
            id="team-members"
            role="tabpanel"
            className={`mt-10 grid gap-6 md:grid-cols-2 ${
              activeTeam.length === 3 ? "xl:grid-cols-3" : "xl:max-w-[800px] xl:grid-cols-2"
            }`}
          >
            {activeTeam.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#153e37] px-5 py-20 text-white sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.15em] text-[#f4b860]">
              <Sparkles size={15} /> Build meaningful change
            </p>
            <h2 className="font-['Manrope'] text-[clamp(2.2rem,4.2vw,3.7rem)] font-bold leading-[1.08] tracking-[-0.05em]">
              Bring your experience to a mission that matters.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/careers"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f4b860] px-6 text-sm font-extrabold text-[#173b35] transition hover:-translate-y-0.5 hover:bg-white"
            >
              View opportunities <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 text-sm font-extrabold text-white transition hover:border-white hover:bg-white hover:text-[#173b35]"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Team;
