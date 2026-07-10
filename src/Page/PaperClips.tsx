import { Link } from "react-router-dom";
import { ArrowRight, FileText, Newspaper, Send } from "lucide-react";
import heroImage from "../assets/gallery.jpg";

const clips = [
  { title: "Community action and resilience", source: "Media archive", status: "Available on request" },
  { title: "Women empowerment field updates", source: "Program notes", status: "Available on request" },
  { title: "Water, sanitation, and flood preparedness", source: "Press references", status: "Available on request" },
];

const PaperClips = () => (
  <main className="overflow-hidden bg-[#f7f8f4] text-[#18322e]">
    <section className="relative isolate px-5 pb-20 pt-36 text-white sm:px-8 lg:px-12 xl:px-20">
      <img src={heroImage} alt="" className="absolute inset-0 -z-30 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-20 bg-[#051f1b]/80" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#051f1b] via-[#153e37]/80 to-[#f4b860]/20" />
      <div className="mx-auto min-h-[520px] max-w-[1240px]">
        <nav className="mb-10 flex items-center gap-2 text-xs font-bold text-white/55">
          <Link to="/" className="text-white/85 hover:text-[#f4b860]">Home</Link><span>/</span><span>Paper clips</span>
        </nav>
        <p className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#f4c77f]"><Newspaper size={15} /> Media references</p>
        <h1 className="max-w-4xl font-['Manrope'] text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">Press mentions, paper clips, and public references.</h1>
        <p className="mt-7 max-w-2xl text-base leading-8 text-white/75">A curated space for media references and public communication around KSS’s work. Specific paper clips can be requested from the team.</p>
      </div>
    </section>

    <section className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-5 md:grid-cols-3">
          {clips.map((clip) => (
            <article key={clip.title} className="rounded-[1.5rem] border border-[#dfe8e4] bg-white p-7 shadow-[0_18px_55px_rgba(23,59,53,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(23,59,53,0.13)]">
              <FileText className="mb-6 text-[#d85a3b]" size={30} />
              <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[#b94f36]">{clip.source}</p>
              <h2 className="font-['Manrope'] text-2xl font-bold text-[#173b35]">{clip.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[#667873]">{clip.status}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-[#153e37] px-5 py-20 text-white sm:px-8">
      <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <h2 className="font-['Manrope'] text-4xl font-bold tracking-[-0.045em] sm:text-5xl">Need media material or press references?</h2>
        <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f4b860] px-6 text-sm font-extrabold text-[#173b35] hover:bg-white">Request clips <Send size={17} /></Link>
      </div>
    </section>
  </main>
);

export default PaperClips;
