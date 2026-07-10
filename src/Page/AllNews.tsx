import { useMemo, useState } from "react";
import { ArrowRight, CalendarDays, MapPin, Newspaper, Search } from "lucide-react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.JPG";
import img3 from "../assets/img3.JPG";
import gallery from "../assets/gallery.jpg";

type NewsCategory = "All" | "Health" | "Women" | "Education" | "Climate" | "Livelihood";

type NewsItem = {
  title: string;
  category: Exclude<NewsCategory, "All">;
  date: string;
  location: string;
  image: string;
  excerpt: string;
  detail: string;
  highlight?: boolean;
};

const newsItems: NewsItem[] = [
  {
    title: "Women collectives strengthen income and decision-making in flood-prone villages",
    category: "Women",
    date: "Community update",
    location: "Kosi region",
    image: img1,
    excerpt:
      "Self-help groups are being supported with leadership sessions, savings practices, and market-linked livelihood planning.",
    detail:
      "The programme focuses on confidence-building, safe mobility, household financial planning, and local enterprise pathways so women can participate more actively in family and community decisions.",
    highlight: true,
  },
  {
    title: "Health camps bring screening, nutrition counselling, and referrals closer to families",
    category: "Health",
    date: "Field note",
    location: "Village clusters",
    image: img3,
    excerpt:
      "Frontline teams are connecting families with preventive care, maternal health awareness, and basic health check-ups.",
    detail:
      "The camps combine doctor consultations, awareness on anaemia and nutrition, referral support, and follow-up with vulnerable households through community volunteers.",
  },
  {
    title: "Children’s learning circles help bridge gaps beyond the classroom",
    category: "Education",
    date: "Programme story",
    location: "Rural Bihar",
    image: img2,
    excerpt:
      "Learning support spaces are helping children continue reading, numeracy, and life-skills practice in a friendly setting.",
    detail:
      "The approach encourages peer learning, parent engagement, and child-friendly activities so children who need extra support can keep pace with school learning.",
  },
  {
    title: "Climate resilience conversations turn local risk into household preparedness",
    category: "Climate",
    date: "Preparedness update",
    location: "Flood-affected hamlets",
    image: gallery,
    excerpt:
      "Community meetings are helping families identify risks, plan safer routes, and prepare essential supplies before emergencies.",
    detail:
      "KSS teams work with local groups to map vulnerable households, identify early-warning channels, and connect preparedness with WASH, health, and livelihood recovery.",
  },
  {
    title: "Skill development sessions connect young people with dignified livelihood pathways",
    category: "Livelihood",
    date: "Youth update",
    location: "Training centres",
    image: img1,
    excerpt:
      "Youth and women are receiving practical exposure to employability, digital confidence, and locally relevant enterprise skills.",
    detail:
      "Sessions include communication, basic financial literacy, enterprise planning, market orientation, and mentoring so participants can move from training to income action.",
  },
  {
    title: "Water, sanitation, and hygiene awareness reaches families through local volunteers",
    category: "Health",
    date: "Awareness drive",
    location: "Community settlements",
    image: img3,
    excerpt:
      "Door-to-door awareness and group sessions are encouraging safe water handling, handwashing, and clean surroundings.",
    detail:
      "The campaign links behaviour change with practical household action, including safe storage, menstrual hygiene conversations, and support for community-led cleanliness.",
  },
];

const categories: NewsCategory[] = ["All", "Health", "Women", "Education", "Climate", "Livelihood"];

const AllNews = () => {
  const [activeCategory, setActiveCategory] = useState<NewsCategory>("All");
  const [query, setQuery] = useState("");
  const [expandedTitle, setExpandedTitle] = useState<string | null>(null);

  const filteredNews = useMemo(() => {
    const normalisedQuery = query.trim().toLowerCase();

    return newsItems.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesQuery =
        !normalisedQuery ||
        `${item.title} ${item.category} ${item.location} ${item.excerpt}`
          .toLowerCase()
          .includes(normalisedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const featured = newsItems.find((item) => item.highlight) ?? newsItems[0];

  return (
    <main className="min-h-screen bg-[#f7f8f4] text-[#173b35]">
      <section className="relative isolate overflow-hidden bg-[#08231f] px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8 lg:pt-40">
        <div className="absolute inset-0 -z-10">
          <img src={featured.image} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#051f1b] via-[#173b35]/90 to-[#d85a3b]/60" />
        </div>

        <div className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#f4b860] backdrop-blur">
              <Newspaper size={16} /> News & field updates
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              Stories of resilience, dignity, and grassroots change.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              Follow programme updates from KSS teams working across health, education, livelihoods,
              women’s empowerment, WASH, and climate resilience.
            </p>
          </div>

          <article className="rounded-[2rem] border border-white/15 bg-white/12 p-5 shadow-2xl backdrop-blur-xl">
            <img src={featured.image} alt={featured.title} className="h-56 w-full rounded-[1.5rem] object-cover" />
            <div className="pt-5">
              <span className="rounded-full bg-[#f4b860] px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#173b35]">
                Featured
              </span>
              <h2 className="mt-4 text-2xl font-black tracking-[-0.03em]">{featured.title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/76">{featured.excerpt}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="-mt-24 rounded-[2rem] border border-[#dfe8e3] bg-white p-4 shadow-[0_24px_80px_rgba(23,59,53,.12)] sm:p-6">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <label className="relative block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7b918b]" size={18} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search updates by topic, place, or programme..."
                className="min-h-[3.25rem] w-full rounded-full border border-[#dfe8e3] bg-[#f7f8f4] py-4 pl-12 pr-5 text-sm font-semibold text-[#173b35] outline-none transition focus:border-[#d85a3b] focus:bg-white"
              />
            </label>

            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-full px-4 py-3 text-xs font-black uppercase tracking-[0.16em] transition ${
                    activeCategory === category
                      ? "bg-[#173b35] text-white shadow-lg shadow-[#173b35]/20"
                      : "bg-[#eef4f0] text-[#567069] hover:bg-[#fbe4da] hover:text-[#b9472c]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredNews.map((item) => {
            const isExpanded = expandedTitle === item.title;

            return (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[1.75rem] border border-[#dfe8e3] bg-white shadow-[0_18px_55px_rgba(23,59,53,.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(23,59,53,.14)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#d85a3b]">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-3 text-xs font-bold text-[#78908a]">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays size={14} /> {item.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} /> {item.location}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-black leading-tight tracking-[-0.03em] text-[#173b35]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5c736d]">{item.excerpt}</p>
                  {isExpanded && <p className="mt-3 text-sm leading-7 text-[#36524b]">{item.detail}</p>}
                  <button
                    type="button"
                    onClick={() => setExpandedTitle(isExpanded ? null : item.title)}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#fff0e8] px-4 py-2 text-sm font-black text-[#c64e32] transition hover:bg-[#d85a3b] hover:text-white"
                  >
                    {isExpanded ? "Show less" : "Read more"} <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {filteredNews.length === 0 && (
          <div className="mt-10 rounded-[1.75rem] border border-dashed border-[#cad8d2] bg-white p-10 text-center">
            <h2 className="text-2xl font-black tracking-[-0.03em]">No updates found</h2>
            <p className="mt-2 text-[#647a74]">Try another search term or choose a different category.</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default AllNews;
