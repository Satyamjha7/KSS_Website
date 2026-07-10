import { ArrowRight, Home, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const UnderMaintenance = () => {
    return (
        <main className="grid min-h-screen place-items-center bg-[#f7f8f4] px-4 pb-12 pt-28 text-[#173b35]">
            <section
                className="flex w-full max-w-xl flex-col items-center rounded-[2rem] border border-[#e1e9e4] bg-white/90 px-6 py-10 text-center shadow-[0_24px_70px_rgba(23,59,53,.10)] sm:px-10 sm:py-12"
                aria-labelledby="maintenance-title"
            >
                <div className="grid h-[5.5rem] w-[5.5rem] place-items-center rounded-3xl bg-white shadow-[0_14px_34px_rgba(23,59,53,.10)]">
                    <img src="/images/logo-png.png" alt="Kosi Seva Sadan" className="h-[4.25rem] w-[4.25rem] object-contain" />
                </div>

                <span className="mt-7 rounded-full bg-[#fff0e8] px-4 py-2 text-[0.72rem] font-black uppercase tracking-[0.15em] text-[#c64e32]">
                    Page update in progress
                </span>

                <h1
                    id="maintenance-title"
                    className="mt-5 max-w-md font-['Manrope'] text-4xl font-black leading-[1.02] tracking-[-0.06em] sm:text-5xl"
                >
                    We’re polishing this section.
                </h1>

                <p className="mt-5 max-w-md text-base leading-8 text-[#61746f]">
                    This page is being refreshed with updated content and a better experience.
                    Please check back soon.
                </p>

                <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:flex-row">
                    <Link
                        to="/"
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#173b35] px-5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#0f2d28]"
                    >
                        <Home size={17} />
                        Back to home
                    </Link>

                    <Link
                        to="/contact"
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#dce6e1] bg-white px-5 text-sm font-extrabold text-[#173b35] transition hover:-translate-y-0.5 hover:border-[#f4d2c6] hover:bg-[#fff7f3] hover:text-[#c64e32]"
                    >
                        Contact us
                        <ArrowRight size={17} />
                    </Link>
                </div>

                <a
                    href="mailto:contact@kosisevasadan.org"
                    className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-extrabold text-[#7a8c87] transition hover:text-[#d85a3b]"
                >
                    <Mail size={15} />
                    contact@kosisevasadan.org
                </a>
            </section>
        </main>
    );
};

export default UnderMaintenance;
