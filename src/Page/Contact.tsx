import { FormEvent, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Mail, MapPin, MessageCircle, Phone, Send, Sparkles } from "lucide-react";
import bannerImage from "../assets/178.jpg";

const contactEmail = "info@kosisevasadan.org";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Partnership enquiry");
  const [message, setMessage] = useState("");

  const mailHref = useMemo(() => {
    const subject = encodeURIComponent(`KSS website enquiry: ${topic}`);
    const body = encodeURIComponent(
      ["Hello Kosi Seva Sadan team,", "", `Topic: ${topic}`, name ? `Name: ${name}` : "", email ? `Email: ${email}` : "", message ? `Message: ${message}` : "", "", "Thank you."]
        .filter(Boolean)
        .join("\n")
    );
    return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }, [email, message, name, topic]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = mailHref;
  };

  return (
    <main className="overflow-hidden bg-[#f7f8f4] text-[#18322e]">
      <section className="relative isolate px-5 pb-20 pt-36 text-white sm:px-8 lg:px-12 xl:px-20">
        <img src={bannerImage} alt="" className="absolute inset-0 -z-30 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-20 bg-[#051f1b]/80" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#051f1b] via-[#153e37]/80 to-[#f4b860]/20" />

        <div className="mx-auto grid min-h-[560px] max-w-[1240px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <nav className="mb-10 flex items-center gap-2 text-xs font-bold text-white/55">
              <Link to="/" className="text-white/85 hover:text-[#f4b860]">Home</Link><span>/</span><span>Contact</span>
            </nav>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#f4c77f]"><Sparkles size={15} /> Let’s build something meaningful</p>
            <h1 className="font-['Manrope'] text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">Reach the KSS team.</h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75">For partnerships, documents, volunteering, donations, media, or field collaboration — we’d be glad to hear from you.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [Mail, "Email", "kosisevasadan@gmail.com", "info@kosisevasadan.org"],
              [Phone, "Phone", "+91 9113124943", "+91 9934797023"],
              [MapPin, "Location", "Acharyavan Mahishi, Saharsa", "Bihar, India"],
              [Clock, "Response", "Usually within 2–3 working days", "For urgent field matters, call directly"],
            ].map(([Icon, title, line1, line2]) => {
              const CardIcon = Icon as typeof Mail;
              return (
                <div key={title as string} className="rounded-[1.35rem] border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                  <CardIcon className="mb-4 text-[#f4b860]" size={24} />
                  <h3 className="font-['Manrope'] text-lg font-bold">{title as string}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{line1 as string}</p>
                  <p className="text-sm leading-6 text-white/70">{line2 as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.15em] text-[#d85a3b]">Send a message</p>
            <h2 className="font-['Manrope'] text-4xl font-bold leading-tight tracking-[-0.045em] text-[#173b35] sm:text-5xl">Tell us how you’d like to connect.</h2>
            <p className="mt-5 text-base leading-8 text-[#667873]">This form opens a pre-filled email so your message reaches the team without needing a backend service.</p>
            <div className="mt-8 rounded-[1.35rem] bg-[#173b35] p-6 text-white">
              <MessageCircle className="mb-4 text-[#f4b860]" />
              <p className="font-['Manrope'] text-xl font-bold">Common enquiries</p>
              <p className="mt-3 text-sm leading-7 text-white/70">Documents, volunteering, donations, partnerships, media requests, program information, or field visits.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[1.75rem] border border-[#dfe8e4] bg-white p-6 shadow-[0_24px_70px_rgba(23,59,53,0.1)] sm:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="min-h-12 rounded-2xl border border-[#dce6e1] bg-[#f7f8f4] px-4 text-sm font-semibold outline-none focus:border-[#173b35]" />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="min-h-12 rounded-2xl border border-[#dce6e1] bg-[#f7f8f4] px-4 text-sm font-semibold outline-none focus:border-[#173b35]" />
              <select value={topic} onChange={(e) => setTopic(e.target.value)} className="min-h-12 rounded-2xl border border-[#dce6e1] bg-[#f7f8f4] px-4 text-sm font-semibold outline-none focus:border-[#173b35] md:col-span-2">
                <option>Partnership enquiry</option>
                <option>Document request</option>
                <option>Volunteer / career interest</option>
                <option>Donation support</option>
                <option>Media request</option>
              </select>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={7} placeholder="Write your message" className="resize-none rounded-2xl border border-[#dce6e1] bg-[#f7f8f4] px-4 py-3 text-sm font-semibold leading-7 outline-none focus:border-[#173b35] md:col-span-2" />
            </div>
            <button type="submit" className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#173b35] px-6 text-sm font-extrabold text-white hover:bg-[#d85a3b]">Open email <Send size={17} /></button>
          </form>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto overflow-hidden rounded-[1.75rem] border border-[#dfe8e4] shadow-[0_24px_70px_rgba(23,59,53,0.1)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.1569103491424!2d86.46869819999999!3d25.864312599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ee1104c881b3cb%3A0x99415d3b042353ae!2sKosi%20Seva%20Sadan!5e0!3m2!1sen!2sin!4v1702834583992!5m2!1sen!2sin"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Kosi Seva Sadan location map"
          />
        </div>
      </section>
    </main>
  );
};

export default Contact;
