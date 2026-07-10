import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, Images, X } from "lucide-react";
import galleryBackground from "../assets/gallery.jpg";

const galleryImages = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpeg",
  "/images/8.JPG",
  "/images/9.jpeg",
  "/images/10.JPG",
  "/images/11.jpeg",
  "/images/12.JPG",
  "/images/13.JPG",
  "/images/14.JPG",
  "/images/15.jpg",
  "/images/16.jpg",
  "/images/17.jpg",
  "/images/18.jpg",
  "/images/19.jpg",
  "/images/20.jpg",
  "/images/21.jpg",
  "/images/22.jpg",
  "/images/23.jpeg",
  "/images/24.jpeg",
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visibleImages, setVisibleImages] = useState(12);

  return (
    <main className="overflow-hidden bg-[#f7f8f4] text-[#18322e]">
      <section className="relative isolate px-5 pb-20 pt-36 text-white sm:px-8 lg:px-12 xl:px-20">
        <img src={galleryBackground} alt="" className="absolute inset-0 -z-30 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-20 bg-[#051f1b]/75" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#051f1b] via-[#153e37]/75 to-[#f4b860]/25" />
        <div className="mx-auto min-h-[520px] max-w-[1240px]">
          <nav className="mb-10 flex items-center gap-2 text-xs font-bold text-white/55">
            <Link to="/" className="text-white/85 hover:text-[#f4b860]">Home</Link><span>/</span><span>Gallery</span>
          </nav>
          <div className="max-w-4xl">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#f4c77f]"><Camera size={15} /> Field moments</p>
            <h1 className="font-['Manrope'] text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">Stories of change, captured in community.</h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75">A visual archive of programs, field action, community participation, and the people behind KSS’s work.</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.15em] text-[#d85a3b]">Photo archive</p>
              <h2 className="font-['Manrope'] text-4xl font-bold leading-tight tracking-[-0.045em] text-[#173b35] sm:text-5xl">A mosaic of field life.</h2>
            </div>
            <p className="text-base leading-8 text-[#687a74]">Click any image to view it larger. The staggered grid keeps the gallery editorial, warm, and less template-like.</p>
          </div>

          <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {galleryImages.slice(0, visibleImages).map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group mb-5 block w-full overflow-hidden rounded-[1.35rem] bg-white shadow-[0_16px_45px_rgba(23,59,53,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(23,59,53,0.14)]"
              >
                <img src={image} alt={`KSS field gallery ${index + 1}`} className="w-full object-cover transition duration-700 group-hover:scale-105" />
              </button>
            ))}
          </div>

          {visibleImages < galleryImages.length && (
            <div className="mt-8 text-center">
              <button onClick={() => setVisibleImages((prev) => prev + 12)} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#173b35] px-6 text-sm font-extrabold text-white hover:bg-[#d85a3b]">
                View more photos <Images size={17} />
              </button>
            </div>
          )}
        </div>
      </section>

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#051f1b]/95 p-5">
          <button className="absolute right-5 top-5 rounded-full bg-white p-3 text-[#173b35]" onClick={() => setSelectedIndex(null)} aria-label="Close gallery image"><X /></button>
          <button className="absolute left-5 rounded-full bg-white/10 px-4 py-3 text-3xl text-white" onClick={() => setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length)}>‹</button>
          <img src={galleryImages[selectedIndex]} alt="Selected KSS gallery item" className="max-h-[86vh] max-w-[88vw] rounded-[1.25rem] object-contain shadow-2xl" />
          <button className="absolute right-5 rounded-full bg-white/10 px-4 py-3 text-3xl text-white" onClick={() => setSelectedIndex((selectedIndex + 1) % galleryImages.length)}>›</button>
        </div>
      )}

      <section className="bg-[#153e37] px-5 py-20 text-white sm:px-8">
        <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <h2 className="font-['Manrope'] text-4xl font-bold tracking-[-0.045em] sm:text-5xl">Want to see stories behind the images?</h2>
          <Link to="/stories" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f4b860] px-6 text-sm font-extrabold text-[#173b35] hover:bg-white">Read stories <ArrowRight size={18} /></Link>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
