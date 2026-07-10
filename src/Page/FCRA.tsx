import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Download, Eye, FileCheck2, Globe2, Landmark, ShieldCheck } from "lucide-react";

import heroImage from "../assets/182.jpg";
import fcraCertificate from "../assets/FCRA.pdf";
import fcraRenewal from "../assets/FCRA Renewal-Certificate.pdf";

const docs = [
  { title: "FCRA Certificate", desc: "Foreign contribution compliance certificate for institutional reference.", pdf: fcraCertificate },
  { title: "FCRA Renewal Certificate", desc: "Renewal record supporting continued regulatory compliance.", pdf: fcraRenewal },
];

const points = [
  "Foreign contribution compliance records maintained",
  "Documents available for partner review",
  "Responsible reporting and fund-use discipline",
  "Transparent communication with stakeholders",
];

const FCRA = () => (
  <main className="overflow-hidden bg-[#f7f8f4] text-[#18322e]">
    <section className="relative isolate px-5 pb-20 pt-36 text-white sm:px-8 lg:px-12 xl:px-20">
      <img src={heroImage} alt="" className="absolute inset-0 -z-30 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-20 bg-[#051f1b]/85" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#051f1b] via-[#153e37]/85 to-[#f4b860]/20" />

      <div className="mx-auto grid min-h-[560px] max-w-[1240px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <nav className="mb-10 flex items-center gap-2 text-xs font-bold text-white/55">
            <Link to="/" className="text-white/85 hover:text-[#f4b860]">Home</Link><span>/</span><span>FCRA</span>
          </nav>
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#f4c77f]"><Globe2 size={15} /> Foreign contribution compliance</p>
          <h1 className="font-['Manrope'] text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            FCRA compliance with
            <span className="block text-[#f4b860]">clarity and responsibility.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75">KSS maintains FCRA-related documentation and transparent practices for partners, donors, and institutions reviewing international contribution compliance.</p>
        </div>

        <div className="grid gap-4">
          {points.map((point) => (
            <div key={point} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f4b860]/20 text-[#f4b860]"><CheckCircle2 size={17} /></span>
              <span className="text-sm font-bold text-white/85">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.15em] text-[#d85a3b]">Compliance documents</p>
            <h2 className="font-['Manrope'] text-4xl font-bold leading-tight tracking-[-0.045em] text-[#173b35] sm:text-5xl">Review available FCRA records.</h2>
          </div>
          <p className="text-base leading-8 text-[#687a74]">These documents are provided for transparency and institutional due diligence. Additional details can be requested through the contact page.</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {docs.map((doc) => (
            <article key={doc.title} className="rounded-[1.5rem] border border-[#dfe8e4] bg-white p-7 shadow-[0_18px_55px_rgba(23,59,53,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(23,59,53,0.13)]">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#173b35] text-[#f4b860]"><FileCheck2 size={26} /></div>
              <h3 className="font-['Manrope'] text-2xl font-bold text-[#173b35]">{doc.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#667873]">{doc.desc}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={doc.pdf} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#dce6e1] px-5 text-sm font-extrabold text-[#173b35] hover:border-[#173b35] hover:bg-[#173b35] hover:text-white"><Eye size={16} /> View</a>
                <a href={doc.pdf} download className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#f4b860] px-5 text-sm font-extrabold text-[#173b35] hover:bg-[#d85a3b] hover:text-white"><Download size={16} /> Download</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-[1240px] gap-5 md:grid-cols-3">
        {[
          ["Registration", "Formal regulatory documentation for eligible foreign contributions.", Landmark],
          ["Accountability", "Records and reporting practices that support responsible fund use.", ShieldCheck],
          ["Partner review", "Clear access to documents for due diligence and collaboration.", FileCheck2],
        ].map(([title, desc, Icon]) => {
          const ItemIcon = Icon as typeof FileCheck2;
          return (
            <div key={title as string} className="rounded-[1.35rem] bg-[#f7f8f4] p-6">
              <ItemIcon className="mb-5 text-[#d85a3b]" size={28} />
              <h3 className="font-['Manrope'] text-xl font-bold text-[#173b35]">{title as string}</h3>
              <p className="mt-3 text-sm leading-7 text-[#667873]">{desc as string}</p>
            </div>
          );
        })}
      </div>
    </section>

    <section className="bg-[#153e37] px-5 py-20 text-white sm:px-8">
      <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <h2 className="font-['Manrope'] text-4xl font-bold tracking-[-0.045em] sm:text-5xl">Need more compliance details?</h2>
        <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f4b860] px-6 text-sm font-extrabold text-[#173b35] hover:bg-white">Request information <ArrowRight size={18} /></Link>
      </div>
    </section>
  </main>
);

export default FCRA;
