import { Link } from "react-router-dom";
import { FileText, Mail, ShieldCheck, Copyright } from "lucide-react";
import { site } from "../lib/site";

type LegalPageType = "privacy" | "terms" | "copyright";

const legalContent: Record<LegalPageType, { title: string; intro: string; icon: typeof ShieldCheck; sections: Array<{ heading: string; text: string }> }> = {
  privacy: {
    title: "Privacy and cookie notice",
    intro: "We respect the privacy of everyone who visits Kosi Seva Sadan’s website or contacts our team.",
    icon: ShieldCheck,
    sections: [
      { heading: "Information you choose to share", text: "When you use a contact, document-request, career, donation, or newsletter form, the information you enter is used to prepare an email to our team or is stored in your browser for that interaction. Please avoid sending sensitive information unless it is necessary for your enquiry." },
      { heading: "Website analytics", text: "This website uses Umami analytics to understand general website use. The organisation can use these insights to improve content, accessibility, and performance." },
      { heading: "External services", text: "This website may link to social media platforms, maps, or other third-party services. Their privacy practices are governed by their own policies." },
      { heading: "Questions about privacy", text: `For questions or requests relating to information you have shared with us, contact ${site.email}.` },
    ],
  },
  terms: {
    title: "Terms of use",
    intro: "These terms explain the general use of the Kosi Seva Sadan website and its public resources.",
    icon: FileText,
    sections: [
      { heading: "Information on this website", text: "We aim to keep programme, document, and organisational information accurate and current. Content is provided for general information and should not be treated as legal, financial, or professional advice." },
      { heading: "Documents and downloads", text: "Public documents are provided for reference, due diligence, and learning. Please retain their context and do not alter or misrepresent them when sharing." },
      { heading: "External links", text: "Links to third-party websites are included for convenience. Kosi Seva Sadan is not responsible for their content, availability, or privacy practices." },
      { heading: "Contact", text: `For questions about these terms, contact ${site.email}.` },
    ],
  },
  copyright: {
    title: "Copyright notice",
    intro: "The Kosi Seva Sadan name, website content, photographs, reports, and visual identity are protected by applicable law.",
    icon: Copyright,
    sections: [
      { heading: "Permitted use", text: "You may view, download, and share public resources for personal, educational, or due-diligence purposes when the source is clearly acknowledged." },
      { heading: "Permission for reuse", text: "Do not reproduce, modify, distribute, or use Kosi Seva Sadan materials for commercial purposes without written permission. This includes photographs of community members and programme documentation." },
      { heading: "Third-party material", text: "Some material may belong to partners, contributors, or external platforms. Their use may be subject to additional permissions." },
      { heading: "Requests", text: `For media, reproduction, or copyright questions, contact ${site.email}.` },
    ],
  },
};

const Legal = ({ type }: { type: LegalPageType }) => {
  const content = legalContent[type];
  const Icon = content.icon;

  return (
    <main className="min-h-screen bg-[#f7f8f4] px-5 pb-20 pt-36 text-[#18322e] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <nav className="flex items-center gap-2 text-xs font-bold text-[#678078]" aria-label="Breadcrumb">
          <Link to="/" className="transition hover:text-[#d85a3b]">Home</Link><span>/</span><span>{content.title}</span>
        </nav>
        <section className="mt-10 rounded-[2rem] bg-[#173b35] p-7 text-white shadow-[0_24px_70px_rgba(23,59,53,.16)] sm:p-12">
          <Icon className="text-[#f4b860]" size={34} />
          <h1 className="mt-6 font-['Manrope'] text-4xl font-bold tracking-[-0.05em] sm:text-6xl">{content.title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">{content.intro}</p>
        </section>
        <section className="mt-8 rounded-[2rem] border border-[#dfe8e4] bg-white p-7 shadow-[0_18px_55px_rgba(23,59,53,.07)] sm:p-12">
          <div className="space-y-9">
            {content.sections.map((section) => (
              <article key={section.heading}>
                <h2 className="font-['Manrope'] text-2xl font-bold tracking-[-0.03em] text-[#173b35]">{section.heading}</h2>
                <p className="mt-3 text-base leading-8 text-[#5d746d]">{section.text}</p>
              </article>
            ))}
          </div>
          <a href={`mailto:${site.email}`} className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#f4b860] px-5 py-3 text-sm font-extrabold text-[#173b35] transition hover:bg-[#d85a3b] hover:text-white"><Mail size={16} /> Contact KSS</a>
        </section>
      </div>
    </main>
  );
};

export default Legal;
