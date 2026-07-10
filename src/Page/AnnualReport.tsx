import { Link } from "react-router-dom";
import { ArrowRight, BookOpenCheck, CalendarDays, Download, Eye, FileText, Sparkles } from "lucide-react";

import heroImage from "../assets/182.jpg";
import report2017Thumb from "../assets/ANNUAL REPORT 2017-2018-thumbnail.jpg";
import report2018Thumb from "../assets/ANNUAL REPORT 2018-2019-thumbnail.jpg";
import report2019Thumb from "../assets/ANNUAL REPORT 2019-2020-thumbnail.jpg";
import report2020Thumb from "../assets/ANNUAL REPORT 2020-2021-thumbnail.jpg";
import report2021Thumb from "../assets/ANNUAL REPORT 2021-2022-thumbnail.jpg";
import report2022Thumb from "../assets/ANNUAL REPORT 2022-2023-thumbnail.jpg";

import report2017Pdf from "../assets/ANNUAL REPORT 2017-2018.pdf";
import report2018Pdf from "../assets/ANNUAL REPORT 2018-2019.pdf";
import report2019Pdf from "../assets/ANNUAL REPORT 2019-2020.pdf";
import report2020Pdf from "../assets/ANNUAL REPORT 2020-2021.pdf";
import report2021Pdf from "../assets/ANNUAL REPORT 2021-2022.pdf";
import report2022Pdf from "../assets/Annual Report 2022-2023.pdf";

const reports = [
  { year: "2022–2023", image: report2022Thumb, pdf: report2022Pdf, note: "Latest published annual report" },
  { year: "2021–2022", image: report2021Thumb, pdf: report2021Pdf, note: "Programs, partnerships, and community outcomes" },
  { year: "2020–2021", image: report2020Thumb, pdf: report2020Pdf, note: "Resilience, field response, and continuity" },
  { year: "2019–2020", image: report2019Thumb, pdf: report2019Pdf, note: "Annual institutional and program review" },
  { year: "2018–2019", image: report2018Thumb, pdf: report2018Pdf, note: "Archived annual documentation" },
  { year: "2017–2018", image: report2017Thumb, pdf: report2017Pdf, note: "Historical report archive" },
];

const AnnualReport = () => (
  <main className="overflow-hidden bg-[#f7f8f4] text-[#18322e]">
    <section className="relative isolate overflow-hidden px-5 pb-20 pt-36 text-white sm:px-8 lg:px-12 xl:px-20">
      <img src={heroImage} alt="" className="absolute inset-0 -z-30 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-20 bg-[#051f1b]/80" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#051f1b] via-[#153e37]/80 to-[#d85a3b]/30" />

      <div className="mx-auto grid min-h-[560px] max-w-[1240px] gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
        <div>
          <nav className="mb-10 flex items-center gap-2 text-xs font-bold text-white/55">
            <Link to="/" className="text-white/85 hover:text-[#f4b860]">Home</Link>
            <span>/</span>
            <span>Annual reports</span>
          </nav>
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#f4c77f]">
            <Sparkles size={15} /> Public reporting archive
          </p>
          <h1 className="max-w-4xl font-['Manrope'] text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Our journey, impact, and learning
            <span className="block text-[#f4b860]">documented year by year.</span>
          </h1>
        </div>

        <div className="rounded-[1.75rem] border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
          <BookOpenCheck className="mb-5 text-[#f4b860]" size={34} />
          <p className="font-['Manrope'] text-2xl font-bold leading-tight">Annual reports help partners, donors, and communities see how resources become action.</p>
          <p className="mt-4 text-sm leading-7 text-white/70">Browse, view, or download KSS annual reports from the archive below.</p>
        </div>
      </div>
    </section>

    <section className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.15em] text-[#d85a3b]">Report library</p>
            <h2 className="font-['Manrope'] text-4xl font-bold leading-tight tracking-[-0.045em] text-[#173b35] sm:text-5xl">A transparent archive of progress.</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#687a74]">Each report captures programs, field learnings, collaborations, community priorities, and institutional accountability across the year.</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {reports.map((report, index) => (
            <article key={report.year} className="group overflow-hidden rounded-[1.5rem] border border-[#dfe8e4] bg-white shadow-[0_18px_55px_rgba(23,59,53,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(23,59,53,0.14)]">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#173b35]">
                <img src={report.image} alt={`Annual Report ${report.year}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute left-4 top-4 rounded-full bg-[#f4b860] px-3 py-1 text-xs font-extrabold text-[#173b35]">{index === 0 ? "Latest" : "Archive"}</div>
              </div>
              <div className="p-6">
                <p className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#d85a3b]"><CalendarDays size={14} /> {report.year}</p>
                <h3 className="font-['Manrope'] text-2xl font-bold text-[#173b35]">Annual Report {report.year}</h3>
                <p className="mt-3 text-sm leading-7 text-[#667873]">{report.note}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a href={report.pdf} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#dce6e1] text-sm font-extrabold text-[#173b35] hover:border-[#173b35] hover:bg-[#173b35] hover:text-white"><Eye size={16} /> View</a>
                  <a href={report.pdf} download className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#f4b860] text-sm font-extrabold text-[#173b35] hover:bg-[#d85a3b] hover:text-white"><Download size={16} /> Download</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-[#153e37] px-5 py-20 text-white sm:px-8">
      <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.15em] text-[#f4b860]">Need a specific report?</p>
          <h2 className="font-['Manrope'] text-4xl font-bold tracking-[-0.045em] sm:text-5xl">We can help you find the right document.</h2>
        </div>
        <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f4b860] px-6 text-sm font-extrabold text-[#173b35] hover:bg-white">Contact us <ArrowRight size={18} /></Link>
      </div>
    </section>
  </main>
);

export default AnnualReport;
