import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  HandHeart,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Stat = {
  value: string;
  label: string;
};

type FocusArea = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Story = {
  quote: string;
  name: string;
  location: string;
};

type WorkPageLayoutProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  heroImage: string;
  featureImage: string;
  closingImage: string;
  themeLabel: string;
  whyTitle: string;
  whyText: string;
  impactTitle: string;
  impactText: string;
  focusTitle: string;
  focusIntro: string;
  pathwayTitle: string;
  pathwayText: string;
  ctaTitle: string;
  ctaText: string;
  stats: Stat[];
  focusAreas: FocusArea[];
  pathway: string[];
  stories: Story[];
};

const WorkPageLayout = ({
  eyebrow,
  title,
  highlight,
  intro,
  heroImage,
  featureImage,
  closingImage,
  themeLabel,
  whyTitle,
  whyText,
  impactTitle,
  impactText,
  focusTitle,
  focusIntro,
  pathwayTitle,
  pathwayText,
  ctaTitle,
  ctaText,
  stats,
  focusAreas,
  pathway,
  stories,
}: WorkPageLayoutProps) => {
  return (
    <main className="overflow-hidden bg-[#f7f8f4] text-[#18322e]">
      <section
        className="relative isolate flex min-h-[720px] items-center overflow-hidden px-5 py-32 text-white sm:px-8 lg:min-h-[780px] lg:px-12 xl:px-20 2xl:px-24"
        aria-labelledby={`${themeLabel.toLowerCase().replaceAll(" ", "-")}-title`}
      >
        <img src={heroImage} alt="" className="absolute inset-0 -z-30 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-20 bg-[#051f1b]/80" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#051f1b] via-[#051f1b]/75 to-[#051f1b]/30" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#051f1b] to-transparent" />
        <div className="absolute right-10 top-28 hidden h-32 w-32 rounded-full bg-[#f4b860]/20 blur-3xl motion-safe:animate-pulse lg:block" />

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
              <span>{themeLabel}</span>
            </nav>

            <p className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#f4c77f]">
              <Sparkles size={15} /> {eyebrow}
            </p>
            <h1
              id={`${themeLabel.toLowerCase().replaceAll(" ", "-")}-title`}
              className="max-w-[900px] font-['Manrope'] text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              {title}
              <span className="block text-[#f4b860]">{highlight}</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              {intro}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#focus-areas"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-[#173b35] transition hover:-translate-y-0.5 hover:bg-[#f4b860]"
              >
                Explore this work <ArrowRight size={18} />
              </a>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 text-sm font-extrabold text-white transition hover:border-white hover:bg-white hover:text-[#173b35]"
              >
                Partner with us <HandHeart size={17} />
              </Link>
            </div>
          </div>

          <aside className="rounded-[1.75rem] border border-white/15 bg-[#0b342d]/80 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-6 lg:justify-self-end">
            <div className="rounded-[1.35rem] border border-white/10 bg-white/10 p-5">
              <p className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#f4b860]">
                <BadgeCheck size={15} /> Impact snapshot
              </p>
              <p className="font-['Manrope'] text-2xl font-bold leading-tight tracking-[-0.035em] text-white sm:text-3xl">
                {impactTitle}
              </p>
              <p className="mt-4 text-sm leading-7 text-white/70">{impactText}</p>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <strong className="block font-['Manrope'] text-2xl text-[#f4b860]">{stat.value}</strong>
                  <span className="mt-2 block text-xs leading-5 text-white/70">{stat.label}</span>
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
            {whyTitle}
          </h2>
          <p className="mt-6 text-base leading-8 text-[#63756f]">{whyText}</p>

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
              src={featureImage}
              alt=""
              className="h-[420px] w-full object-cover opacity-85 transition duration-700 hover:scale-105 sm:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b302a] via-[#0b302a]/35 to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-xl p-6 text-white sm:p-9">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#f4b860]">
                Community-led change
              </p>
              <p className="mt-4 font-['Manrope'] text-2xl font-bold leading-tight tracking-[-0.035em] sm:text-3xl">
                {impactText}
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
                {focusTitle}
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-[#687a74] lg:justify-self-end">
              {focusIntro}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {focusAreas.map(({ icon: Icon, title: areaTitle, description }, index) => (
              <article
                key={areaTitle}
                className="group relative min-h-[300px] overflow-hidden rounded-[1.35rem] border border-[#dfe8e4] bg-[#f9fbf8] p-6 transition duration-300 hover:-translate-y-2 hover:border-[#f4b860]/70 hover:bg-white hover:shadow-[0_24px_60px_rgba(23,59,53,0.12)]"
              >
                <span className="absolute right-5 top-5 font-['Manrope'] text-5xl font-bold tracking-[-0.08em] text-[#173b35]/5">
                  0{index + 1}
                </span>
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#173b35] text-[#f4b860] transition group-hover:bg-[#d85a3b] group-hover:text-white">
                  <Icon size={25} strokeWidth={2.2} />
                </div>
                <h3 className="font-['Manrope'] text-xl font-bold tracking-[-0.025em] text-[#173b35]">
                  {areaTitle}
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
              {pathwayTitle}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#63756f]">{pathwayText}</p>
          </div>

          <div className="grid gap-4">
            {pathway.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-[1.25rem] border border-[#dce6e1] bg-white p-5 shadow-[0_16px_40px_rgba(23,59,53,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(23,59,53,0.1)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#173b35] font-['Manrope'] text-sm font-bold text-[#f4b860]">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-['Manrope'] text-lg font-bold text-[#173b35]">{step}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#667873]">
                    Field teams work with communities through practical meetings,
                    follow-up, service linkages, and locally owned action plans.
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
                Voices from the field
              </p>
              <h2 className="font-['Manrope'] text-4xl font-bold leading-tight tracking-[-0.045em] text-[#173b35] sm:text-5xl lg:text-6xl">
                Change is strongest when communities can carry it forward.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-[#687a74] lg:justify-self-end">
              These stories reflect the kind of confidence, access, and local ownership
              every work area aims to build.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {stories.map((story) => (
              <blockquote
                key={story.name}
                className="rounded-[1.35rem] border border-[#dfe8e4] bg-[#f9fbf8] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(23,59,53,0.09)] sm:p-8"
              >
                <Sparkles className="mb-5 text-[#d85a3b]" size={28} />
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
          <img src={closingImage} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[#153e37]/90" />

        <div className="relative mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.15em] text-[#f4b860]">
              <HandHeart size={15} /> Work with KSS
            </p>
            <h2 className="font-['Manrope'] text-4xl font-bold leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              {ctaTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">{ctaText}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f4b860] px-6 text-sm font-extrabold text-[#173b35] transition hover:-translate-y-0.5 hover:bg-white"
            >
              Start a conversation <ArrowRight size={18} />
            </Link>
            <Link
              to="/support"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 text-sm font-extrabold text-white transition hover:border-white hover:bg-white hover:text-[#173b35]"
            >
              Support this work <HandHeart size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WorkPageLayout;
