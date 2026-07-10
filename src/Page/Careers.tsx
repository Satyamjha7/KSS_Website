import { FormEvent, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, HeartHandshake, Mail, MapPin, Send, UsersRound } from "lucide-react";

import heroImage from "../assets/133.jpeg";
import teamImage from "../assets/114.jpeg";

const contactEmail = "info@kosisevasadan.org";

const opportunities = [
  {
    title: "Program Coordinator",
    type: "Field-based / Full-time",
    location: "Saharsa, Bihar",
    description: "Coordinate community programs, field planning, reporting, and collaboration with local stakeholders.",
  },
  {
    title: "Community Mobilizer",
    type: "Field-based",
    location: "Kosi region",
    description: "Work directly with community groups, women, youth, and local institutions to support program participation.",
  },
  {
    title: "Documentation & Communications Associate",
    type: "Hybrid / Project-based",
    location: "Bihar",
    description: "Support case stories, reports, photography coordination, social updates, and donor communication materials.",
  },
];

const culture = [
  "Community-first field practice",
  "Respectful and inclusive teamwork",
  "Learning mindset and accountability",
  "Commitment to rural development",
];

const Careers = () => {
  const [selectedRole, setSelectedRole] = useState("Program Coordinator");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailHref = useMemo(() => {
    const subject = encodeURIComponent(`Career application: ${selectedRole}`);
    const body = encodeURIComponent(
      [
        "Hello Kosi Seva Sadan team,",
        "",
        `I would like to apply / express interest for: ${selectedRole}.`,
        name ? `Name: ${name}` : "",
        email ? `Email: ${email}` : "",
        message ? `Message: ${message}` : "",
        "",
        "I will attach my CV/resume in this email.",
        "",
        "Thank you.",
      ].filter(Boolean).join("\n")
    );
    return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }, [email, message, name, selectedRole]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = mailHref;
  };

  return (
    <main className="overflow-hidden bg-[#f7f8f4] text-[#18322e]">
      <section className="relative isolate overflow-hidden px-5 pb-20 pt-36 text-white sm:px-8 lg:px-12 xl:px-20">
        <img src={heroImage} alt="" className="absolute inset-0 -z-30 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-20 bg-[#051f1b]/80" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#051f1b] via-[#153e37]/80 to-[#d85a3b]/30" />

        <div className="mx-auto grid min-h-[620px] max-w-[1240px] gap-12 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <nav className="mb-10 flex items-center gap-2 text-xs font-bold text-white/55">
              <Link to="/" className="text-white/85 hover:text-[#f4b860]">Home</Link><span>/</span><span>Careers</span>
            </nav>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#f4c77f]"><HeartHandshake size={15} /> Work with purpose</p>
            <h1 className="font-['Manrope'] text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Build a career that
              <span className="block text-[#f4b860]">serves communities.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75">Join Kosi Seva Sadan’s mission to strengthen dignity, resilience, and opportunity across rural communities in Bihar.</p>
          </div>

          <div className="rounded-[1.75rem] border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
            <img src={teamImage} alt="" className="h-64 w-full rounded-[1.25rem] object-cover" />
            <div className="mt-5 grid gap-3">
              {culture.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-bold text-white/80">
                  <CheckCircle2 className="text-[#f4b860]" size={17} /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.15em] text-[#d85a3b]">Open opportunities</p>
              <h2 className="font-['Manrope'] text-4xl font-bold leading-tight tracking-[-0.045em] text-[#173b35] sm:text-5xl">Roles for people who believe fieldwork matters.</h2>
            </div>
            <p className="text-base leading-8 text-[#687a74]">If a listed role is not currently open, you can still send an expression of interest. KSS often needs field, program, documentation, and volunteer support.</p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {opportunities.map((job) => (
              <article key={job.title} className="rounded-[1.5rem] border border-[#dfe8e4] bg-white p-6 shadow-[0_18px_55px_rgba(23,59,53,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(23,59,53,0.13)]">
                <BriefcaseBusiness className="mb-6 text-[#d85a3b]" size={30} />
                <h3 className="font-['Manrope'] text-2xl font-bold text-[#173b35]">{job.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#667873]">{job.description}</p>
                <div className="mt-5 space-y-2 text-sm font-bold text-[#31564e]">
                  <p className="flex items-center gap-2"><MapPin size={16} className="text-[#d85a3b]" /> {job.location}</p>
                  <p className="flex items-center gap-2"><UsersRound size={16} className="text-[#d85a3b]" /> {job.type}</p>
                </div>
                <a href="#apply" onClick={() => setSelectedRole(job.title)} className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#173b35] px-5 text-sm font-extrabold text-white hover:bg-[#d85a3b]">Apply / enquire <ArrowRight size={16} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="bg-[#153e37] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.15em] text-[#f4b860]">Apply or express interest</p>
            <h2 className="font-['Manrope'] text-4xl font-bold tracking-[-0.045em] sm:text-5xl">Send us your profile.</h2>
            <p className="mt-5 text-base leading-8 text-white/70">This form opens a pre-filled email. Attach your CV before sending.</p>
            <a href={`mailto:${contactEmail}`} className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#f4b860] hover:text-white"><Mail size={16} /> {contactEmail}</a>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[1.6rem] bg-white p-6 text-[#18322e] shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#d85a3b]">Role</span>
                <input value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)} className="mt-2 min-h-12 w-full rounded-2xl border border-[#dce6e1] bg-[#f7f8f4] px-4 text-sm font-semibold outline-none focus:border-[#173b35]" />
              </label>
              <label className="block">
                <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#d85a3b]">Name</span>
                <input value={name} onChange={(e) => setName(e.target.value)} className="mt-2 min-h-12 w-full rounded-2xl border border-[#dce6e1] bg-[#f7f8f4] px-4 text-sm font-semibold outline-none focus:border-[#173b35]" />
              </label>
              <label className="block md:col-span-2">
                <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#d85a3b]">Email</span>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 min-h-12 w-full rounded-2xl border border-[#dce6e1] bg-[#f7f8f4] px-4 text-sm font-semibold outline-none focus:border-[#173b35]" />
              </label>
              <label className="block md:col-span-2">
                <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#d85a3b]">Message</span>
                <textarea rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className="mt-2 w-full resize-none rounded-2xl border border-[#dce6e1] bg-[#f7f8f4] px-4 py-3 text-sm font-semibold leading-7 outline-none focus:border-[#173b35]" />
              </label>
            </div>
            <button type="submit" className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#173b35] px-6 text-sm font-extrabold text-white hover:bg-[#d85a3b]">Open email application <Send size={17} /></button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Careers;
