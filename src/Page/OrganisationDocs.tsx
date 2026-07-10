import { FormEvent, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Download,
  Eye,
  FileCheck2,
  FileText,
  Landmark,
  Mail,
  ScrollText,
  Send,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import heroImage from "../assets/133.jpeg";
import featureImage from "../assets/114.jpeg";
import fieldImage from "../assets/178.jpg";

import panCard from "../assets/PAN.pdf";
import tanCertificate from "../assets/TAN.pdf";
import registrationCertificate from "../assets/Society Registration Certificate_KSS.pdf";
import certificate12A from "../assets/12A_KSS.pdf";
import certificate80G from "../assets/80G_KSS.pdf";
import fcraCertificate from "../assets/FCRA.pdf";
import fcraRenewal from "../assets/FCRA Renewal-Certificate.pdf";

type DocumentStatus = "Available" | "On request";

type OrganisationDocument = {
  name: string;
  description: string;
  category: string;
  status: DocumentStatus;
  pdf?: string;
  fileName?: string;
  icon: LucideIcon;
};

const contactEmail = "info@kosisevasadan.org";

const documents: OrganisationDocument[] = [
  {
    name: "PAN",
    description: "Permanent Account Number document for organizational identity and statutory reference.",
    category: "Tax identity",
    status: "Available",
    pdf: panCard,
    fileName: "KSS-PAN.pdf",
    icon: Landmark,
  },
  {
    name: "TAN",
    description: "Tax Deduction and Collection Account Number record for statutory compliance.",
    category: "Tax identity",
    status: "Available",
    pdf: tanCertificate,
    fileName: "KSS-TAN.pdf",
    icon: Landmark,
  },
  {
    name: "Registration Certificate",
    description: "Society registration certificate confirming the organization’s formal registration.",
    category: "Registration",
    status: "Available",
    pdf: registrationCertificate,
    fileName: "KSS-Registration-Certificate.pdf",
    icon: FileCheck2,
  },
  {
    name: "12A Certificate",
    description: "Income tax registration certificate supporting charitable organization compliance.",
    category: "Compliance",
    status: "Available",
    pdf: certificate12A,
    fileName: "KSS-12A-Certificate.pdf",
    icon: ScrollText,
  },
  {
    name: "80G Certificate",
    description: "Tax exemption certificate for eligible donations under applicable Indian tax rules.",
    category: "Donor support",
    status: "Available",
    pdf: certificate80G,
    fileName: "KSS-80G-Certificate.pdf",
    icon: ShieldCheck,
  },
  {
    name: "FCRA Certificate",
    description: "Foreign contribution compliance document for approved international support.",
    category: "FCRA",
    status: "Available",
    pdf: fcraCertificate,
    fileName: "KSS-FCRA-Certificate.pdf",
    icon: ClipboardList,
  },
  {
    name: "FCRA Renewal",
    description: "Renewal certificate related to FCRA approval and regulatory continuity.",
    category: "FCRA",
    status: "Available",
    pdf: fcraRenewal,
    fileName: "KSS-FCRA-Renewal-Certificate.pdf",
    icon: ClipboardList,
  },
  {
    name: "CSR-1",
    description: "CSR registration details can be requested directly from the organization team.",
    category: "CSR",
    status: "On request",
    icon: FileText,
  },
];

const trustPoints = [
  "Verified statutory records",
  "Fast access to public documents",
  "Request support for specific files",
  "Transparent compliance communication",
];

const OrganisationDocs = () => {
  const [requestedDocument, setRequestedDocument] = useState("CSR-1");
  const [requesterName, setRequesterName] = useState("");
  const [requesterEmail, setRequesterEmail] = useState("");
  const [requestMessage, setRequestMessage] = useState("");

  const requestHref = useMemo(() => {
    const subject = encodeURIComponent(`Document request: ${requestedDocument || "Specific document"}`);
    const body = encodeURIComponent(
      [
        `Hello Kosi Seva Sadan team,`,
        ``,
        `I would like to request the following document: ${requestedDocument || "Specific document"}.`,
        requesterName ? `Name: ${requesterName}` : "",
        requesterEmail ? `Email: ${requesterEmail}` : "",
        requestMessage ? `Message: ${requestMessage}` : "",
        ``,
        `Thank you.`,
      ]
        .filter(Boolean)
        .join("\n")
    );

    return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }, [requestedDocument, requesterEmail, requesterName, requestMessage]);

  const handleRequestSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = requestHref;
  };

  return (
    <main className="overflow-hidden bg-[#f7f8f4] text-[#18322e]">
      <section
        className="relative isolate flex min-h-[680px] items-center overflow-hidden px-5 py-32 text-white sm:px-8 lg:min-h-[760px] lg:px-12 xl:px-20 2xl:px-24"
        aria-labelledby="organisation-docs-title"
      >
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 -z-30 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-20 bg-[#051f1b]/85" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#051f1b] via-[#051f1b]/80 to-[#051f1b]/35" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#051f1b] to-transparent" />

        <div className="relative z-10 w-full max-w-[1240px]">
          <nav
            className="mb-12 flex items-center gap-2.5 text-xs font-semibold text-white/55"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="text-white/85 transition hover:text-[#f4b860]">
              Home
            </Link>
            <span>/</span>
            <span>Organisation documents</span>
          </nav>

          <p className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#f4c77f]">
            <FileCheck2 size={15} /> Compliance records
          </p>
          <h1
            id="organisation-docs-title"
            className="max-w-[920px] font-['Manrope'] text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Organisation documents,
            <span className="block text-[#f4b860]">ready when you need them.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            View and download key statutory, tax, registration, and compliance
            documents. If you need a specific document that is not listed, send a
            request directly to our team.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#documents"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-[#173b35] transition hover:-translate-y-0.5 hover:bg-[#f4b860]"
            >
              Browse documents <ArrowRight size={18} />
            </a>
            <a
              href="#request-document"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 text-sm font-extrabold text-white transition hover:border-white hover:bg-white hover:text-[#173b35]"
            >
              Request a document <Mail size={17} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 hidden max-w-[620px] grid-cols-2 overflow-hidden rounded-tl-[2rem] border-l border-t border-white/15 bg-[#0b342d]/85 backdrop-blur-xl lg:grid">
          {trustPoints.map((point) => (
            <div key={point} className="border-b border-r border-white/10 px-7 py-6 last:border-r-0">
              <div className="flex items-center gap-3 text-white">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#f4b860]">
                  <CheckCircle2 size={16} />
                </span>
                <span className="text-sm font-bold">{point}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1240px] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:py-32">
        <div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.15em] text-[#d85a3b]">
            Transparency hub
          </p>
          <h2 className="font-['Manrope'] text-[clamp(2.35rem,4.7vw,4.15rem)] font-bold leading-[1.07] tracking-[-0.055em] text-[#173b35]">
            Clean access to the records people ask for most.
          </h2>
          <p className="mt-6 text-base leading-8 text-[#63756f]">
            We’ve organized public-facing documents so partners, donors, institutions,
            and community stakeholders can quickly verify KSS’s registration and
            compliance details.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 rounded-2xl border border-[#dce6e1] bg-white px-4 py-3 text-[#31564e]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f4b860]/25 text-[#d85a3b]">
                  <CheckCircle2 size={16} />
                </span>
                <span className="text-sm font-bold">{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-[#f4b860]/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.8rem] bg-[#173b35] shadow-[0_24px_70px_rgba(23,59,53,0.16)]">
            <img
              src={featureImage}
              alt="Kosi Seva Sadan community documentation"
              className="h-[420px] w-full object-cover opacity-75 sm:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b302a] via-[#0b302a]/35 to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-xl p-6 text-white sm:p-9">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#f4b860]">
                View or download
              </p>
              <p className="mt-4 font-['Manrope'] text-2xl font-bold leading-tight tracking-[-0.035em] sm:text-3xl">
                Documents are available as PDFs for quick review, sharing, and record keeping.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="documents" className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.15em] text-[#d85a3b]">
                Document library
              </p>
              <h2 className="font-['Manrope'] text-[clamp(2.4rem,4.8vw,4.25rem)] font-bold leading-[1.06] tracking-[-0.055em] text-[#173b35]">
                Browse compliance records in one place.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-[#687a74] lg:justify-self-end">
              Open a document in a new tab for viewing, or download a copy for your
              records. Request-only documents can be asked for using the form below.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {documents.map(({ icon: Icon, name, description, category, status, pdf, fileName }, index) => (
              <article
                key={name}
                className="group relative flex min-h-[340px] flex-col overflow-hidden rounded-[1.35rem] border border-[#dfe8e4] bg-[#f9fbf8] p-6 transition duration-300 hover:-translate-y-2 hover:border-[#f4b860]/70 hover:bg-white hover:shadow-[0_24px_60px_rgba(23,59,53,0.12)]"
              >
                <span className="absolute right-5 top-5 font-['Manrope'] text-5xl font-bold tracking-[-0.08em] text-[#173b35]/5">
                  0{index + 1}
                </span>
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#173b35] text-[#f4b860] transition group-hover:bg-[#d85a3b] group-hover:text-white">
                  <Icon size={25} strokeWidth={2.2} />
                </div>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#f4b860]/25 px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-[#b94f36]">
                    {category}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] ${
                      status === "Available"
                        ? "bg-[#173b35]/10 text-[#173b35]"
                        : "bg-[#d85a3b]/10 text-[#d85a3b]"
                    }`}
                  >
                    {status}
                  </span>
                </div>
                <h3 className="font-['Manrope'] text-xl font-bold tracking-[-0.025em] text-[#173b35]">
                  {name}
                </h3>
                <p className="mt-4 grow text-sm leading-7 text-[#667873]">{description}</p>

                {pdf ? (
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    <a
                      href={pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#dce6e1] bg-white px-4 text-sm font-extrabold text-[#173b35] transition hover:border-[#173b35] hover:bg-[#173b35] hover:text-white"
                    >
                      <Eye size={16} /> View
                    </a>
                    <a
                      href={pdf}
                      download={fileName}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#f4b860] px-4 text-sm font-extrabold text-[#173b35] transition hover:bg-[#d85a3b] hover:text-white"
                    >
                      <Download size={16} /> Download
                    </a>
                  </div>
                ) : (
                  <a
                    href="#request-document"
                    onClick={() => setRequestedDocument(name)}
                    className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#173b35] px-4 text-sm font-extrabold text-white transition hover:bg-[#d85a3b]"
                  >
                    Request document <ArrowRight size={16} />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="request-document"
        className="relative overflow-hidden bg-[#153e37] px-5 py-20 text-white sm:px-8 sm:py-24 lg:py-32"
      >
        <div className="absolute inset-0 opacity-15">
          <img src={fieldImage} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[#153e37]/90" />

        <div className="relative mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.15em] text-[#f4b860]">
              <Mail size={15} /> Request support
            </p>
            <h2 className="font-['Manrope'] text-[clamp(2.25rem,4.3vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.05em]">
              Need a specific document?
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
              Tell us which document you need and why. The form opens a pre-filled
              email so your request reaches the organization team with useful context.
            </p>
            <div className="mt-8 rounded-[1.35rem] border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
              <p className="text-sm font-bold text-white">For direct requests:</p>
              <a
                href={`mailto:${contactEmail}`}
                className="mt-2 inline-flex items-center gap-2 text-sm font-extrabold text-[#f4b860] transition hover:text-white"
              >
                <Mail size={16} /> {contactEmail}
              </a>
            </div>
          </div>

          <form
            onSubmit={handleRequestSubmit}
            className="rounded-[1.6rem] border border-white/10 bg-white p-5 text-[#18322e] shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#d85a3b]">
                  Document name
                </span>
                <input
                  value={requestedDocument}
                  onChange={(event) => setRequestedDocument(event.target.value)}
                  placeholder="e.g. CSR-1, audit note, project document"
                  className="mt-2 min-h-12 w-full rounded-2xl border border-[#dce6e1] bg-[#f7f8f4] px-4 text-sm font-semibold outline-none transition focus:border-[#173b35] focus:bg-white"
                  required
                />
              </label>
              <label className="block">
                <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#d85a3b]">
                  Your name
                </span>
                <input
                  value={requesterName}
                  onChange={(event) => setRequesterName(event.target.value)}
                  placeholder="Your full name"
                  className="mt-2 min-h-12 w-full rounded-2xl border border-[#dce6e1] bg-[#f7f8f4] px-4 text-sm font-semibold outline-none transition focus:border-[#173b35] focus:bg-white"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#d85a3b]">
                  Email address
                </span>
                <input
                  type="email"
                  value={requesterEmail}
                  onChange={(event) => setRequesterEmail(event.target.value)}
                  placeholder="name@example.com"
                  className="mt-2 min-h-12 w-full rounded-2xl border border-[#dce6e1] bg-[#f7f8f4] px-4 text-sm font-semibold outline-none transition focus:border-[#173b35] focus:bg-white"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#d85a3b]">
                  Request details
                </span>
                <textarea
                  value={requestMessage}
                  onChange={(event) => setRequestMessage(event.target.value)}
                  placeholder="Share why you need the document or any additional context."
                  rows={5}
                  className="mt-2 w-full resize-none rounded-2xl border border-[#dce6e1] bg-[#f7f8f4] px-4 py-3 text-sm font-semibold leading-7 outline-none transition focus:border-[#173b35] focus:bg-white"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#173b35] px-6 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#d85a3b] sm:w-auto"
            >
              Send request <Send size={17} />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default OrganisationDocs;
