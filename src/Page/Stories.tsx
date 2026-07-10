import { Link } from "react-router-dom";
import { ArrowRight, BookOpenCheck, HeartHandshake, Quote, Sparkles } from "lucide-react";
import heroImage from "../assets/114.jpeg";
import imageOne from "../assets/women.jpg";
import imageTwo from "../assets/178.jpg";
import imageThree from "../assets/img1.jpg";

const stories = [
  {
    title: "Women finding confidence through collective learning",
    tag: "Women empowerment",
    image: imageOne,
    text: "Self-help groups and awareness sessions create spaces where women can speak, learn, save, and lead with growing confidence.",
  },
  {
    title: "Prepared communities respond better during floods",
    tag: "Climate resilience",
    image: imageTwo,
    text: "Community preparedness conversations help households think ahead, protect documents, and support vulnerable families during risk periods.",
  },
  {
    title: "Learning becomes stronger when families participate",
    tag: "Education",
    image: imageThree,
    text: "When parents, volunteers, and local institutions support children together, education becomes a shared community responsibility.",
  },
];

const Stories = () => (
  <main className="overflow-hidden bg-[#f7f8f4] text-[#18322e]">
    <section className="relative isolate px-5 pb-20 pt-36 text-white sm:px-8 lg:px-12 xl:px-20">
      <img src={heroImage} alt="" className="absolute inset-0 -z-30 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-20 bg-[#051f1b]/80" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#051f1b] via-[#153e37]/80 to-[#d85a3b]/25" />
      <div className="mx-auto min-h-[540px] max-w-[1240px]">
        <nav className="mb-10 flex items-center gap-2 text-xs font-bold text-white/55">
          <Link to="/" className="text-white/85 hover:text-[#f4b860]">Home</Link><span>/</span><span>Stories</span>
        </nav>
        <p className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#f4c77f]"><Sparkles size={15} /> Human stories</p>
        <h1 className="max-w-4xl font-['Manrope'] text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">Field stories that reveal change beyond numbers.</h1>
      </div>
    </section>

    <section className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-6">
          {stories.map((story, index) => (
            <article key={story.title} className={`grid overflow-hidden rounded-[1.75rem] border border-[#dfe8e4] bg-white shadow-[0_20px_60px_rgba(23,59,53,0.08)] lg:grid-cols-2 ${index % 2 ? "lg:[&>img]:order-2" : ""}`}>
              <img src={story.image} alt="" className="h-full min-h-[340px] w-full object-cover" />
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <p className="mb-4 w-fit rounded-full bg-[#f4b860]/25 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-[#b94f36]">{story.tag}</p>
                <h2 className="font-['Manrope'] text-3xl font-bold leading-tight tracking-[-0.04em] text-[#173b35] sm:text-4xl">{story.title}</h2>
                <p className="mt-5 text-base leading-8 text-[#667873]">{story.text}</p>
                <Quote className="mt-8 text-[#d85a3b]" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-[#153e37] px-5 py-20 text-white sm:px-8">
      <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.15em] text-[#f4b860]"><BookOpenCheck size={15} /> Share or document a story</p>
          <h2 className="font-['Manrope'] text-4xl font-bold tracking-[-0.045em] sm:text-5xl">Good documentation protects memory and learning.</h2>
        </div>
        <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f4b860] px-6 text-sm font-extrabold text-[#173b35] hover:bg-white">Contact communications <HeartHandshake size={17} /></Link>
      </div>
    </section>
  </main>
);

export default Stories;
