import { ArrowUpRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useLatestUpdates } from "./useLatestUpdates";
import type { SocialPlatform, SocialUpdate } from "./types";

const platformStyles: Record<SocialPlatform, { label: string; icon: JSX.Element; className: string }> = {
  facebook: {
    label: "Facebook",
    icon: <FaFacebookF />,
    className: "bg-[#1877f2] text-white",
  },
  instagram: {
    label: "Instagram",
    icon: <FaInstagram />,
    className: "bg-[#d85a3b] text-white",
  },
  linkedin: {
    label: "LinkedIn",
    icon: <FaLinkedinIn />,
    className: "bg-[#0a66c2] text-white",
  },
  x: {
    label: "X",
    icon: <FaXTwitter />,
    className: "bg-[#111111] text-white",
  },
  youtube: {
    label: "YouTube",
    icon: <FaYoutube />,
    className: "bg-[#ff0033] text-white",
  },
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));

const UpdateCard = ({ update }: { update: SocialUpdate }) => {
  const platform = platformStyles[update.platform];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#dfe8e3] bg-white shadow-[0_18px_55px_rgba(23,59,53,.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(23,59,53,.14)]">
      <div className="relative h-56 overflow-hidden bg-[#edf3f0]">
        <img
          src={update.imageUrl}
          alt={update.imageAlt || update.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-base shadow-lg ${platform.className}`}
          aria-label={platform.label}
          title={platform.label}
        >
          {platform.icon}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#78908a]">
          <CalendarDays size={14} />
          <time dateTime={update.publishedAt}>{formatDate(update.publishedAt)}</time>
        </div>

        <h3 className="mt-4 line-clamp-2 text-xl font-black leading-tight tracking-[-0.03em] text-[#173b35]">
          {update.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#5c736d]">{update.excerpt}</p>

        <a
          href={update.postUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-black text-[#c64e32] transition hover:text-[#173b35]"
        >
          View post <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
};

type LatestUpdatesSectionProps = {
  limit?: number;
  showViewAll?: boolean;
  pageMode?: boolean;
};

const LatestUpdatesSection = ({ limit = 6, showViewAll = true, pageMode = false }: LatestUpdatesSectionProps) => {
  const { updates, loading } = useLatestUpdates(limit);
  const hasUpdates = updates.length > 0;

  return (
    <section className={`bg-[#f7f8f4] px-4 py-16 sm:px-6 lg:px-8 ${pageMode ? "pt-32 lg:pt-40" : ""}`}>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.22em] text-[#d85a3b]">
              Latest Updates
            </span>
            <h2 className="mt-3 max-w-2xl font-['Manrope'] text-4xl font-black leading-[1.05] tracking-[-0.05em] text-[#173b35] sm:text-5xl">
              News from our official social channels.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#657a74]">
              Recent posts from KSS programmes, field updates, campaigns, and community stories.
            </p>
          </div>

          {showViewAll && (
            <Link
              to="/updates"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#173b35] px-5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#0f2d28]"
            >
              View all updates <ArrowUpRight size={17} />
            </Link>
          )}
        </div>

        {hasUpdates ? (
          <div className="mt-10 grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
            {updates.map((update) => (
              <UpdateCard key={`${update.platform}-${update.id}`} update={update} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-[1.75rem] border border-dashed border-[#cad8d2] bg-white p-10 text-center">
            <h3 className="font-['Manrope'] text-2xl font-black tracking-[-0.03em] text-[#173b35]">
              Updates will appear here soon.
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#657a74]">
              Follow Kosi Seva Sadan on our official social channels for the latest programme news and field stories.
            </p>
          </div>
        )}

        {loading && (
          <p className="mt-6 text-center text-sm font-bold text-[#78908a]" role="status">
            Checking for the newest updates…
          </p>
        )}
      </div>
    </section>
  );
};

export default LatestUpdatesSection;
