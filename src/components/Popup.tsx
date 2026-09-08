import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { CheckCircle2, Mail, Send, X } from "lucide-react";

type NewsletterPopupProps = {
  onClose: () => void;
};

const NewsletterPopup = ({ onClose }: NewsletterPopupProps) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    emailInputRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedEmail = email.trim();

    if (!/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Keeps the interaction useful until a newsletter provider is connected.
    localStorage.setItem("kss-newsletter-email", trimmedEmail);
    setError("");
    setIsSubscribed(true);
  };

  return (
    <div
      className="fixed inset-0 z-[1100] grid place-items-center bg-[#051f1b]/75 p-4 backdrop-blur-sm motion-safe:animate-in motion-safe:fade-in"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        aria-describedby={descriptionId}
        aria-labelledby={titleId}
        aria-modal="true"
        className="relative w-full max-w-md overflow-hidden rounded-[1.75rem] border border-white/70 bg-[#f7f8f4] shadow-[0_28px_80px_rgba(5,31,27,0.38)] motion-safe:animate-in motion-safe:zoom-in-95"
        role="dialog"
      >
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d85a3b]" />
        <button
          aria-label="Close newsletter signup"
          className="absolute right-4 top-5 grid h-9 w-9 place-items-center rounded-full text-[#47635d] transition hover:bg-[#e6ece8] hover:text-[#173b35] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d85a3b] focus-visible:ring-offset-2"
          onClick={onClose}
          type="button"
        >
          <X aria-hidden="true" size={19} strokeWidth={2.3} />
        </button>

        <div className="px-6 pb-7 pt-10 sm:px-9 sm:pb-9">
          <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#173b35] text-[#f4b860] shadow-lg shadow-[#173b35]/20">
            <Mail aria-hidden="true" size={27} strokeWidth={1.8} />
          </div>

          {isSubscribed ? (
            <div className="py-2 text-center">
              <CheckCircle2 className="mx-auto mb-4 text-[#d85a3b]" size={46} strokeWidth={1.7} />
              <h2 className="font-manrope text-2xl font-extrabold tracking-tight text-[#173b35]" id={titleId}>
                You&apos;re on the list
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#60736e]" id={descriptionId}>
                Thank you for staying connected with Kosi Seva Sadan. We&apos;ll share meaningful updates with you soon.
              </p>
              <button
                className="mt-6 rounded-full bg-[#173b35] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0d2d28] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d85a3b] focus-visible:ring-offset-2"
                onClick={onClose}
                type="button"
              >
                Continue exploring
              </button>
            </div>
          ) : (
            <>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d85a3b]">Stay connected</p>
              <h2 className="mt-3 font-manrope text-3xl font-extrabold leading-tight tracking-tight text-[#173b35]" id={titleId}>
                Stories of change, delivered thoughtfully.
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#60736e]" id={descriptionId}>
                Receive occasional news from Kosi Seva Sadan, including community stories, programmes and ways to make a difference.
              </p>

              <form className="mt-6" noValidate onSubmit={handleSubmit}>
                <label className="sr-only" htmlFor="newsletter-email">
                  Email address
                </label>
                <input
                  aria-describedby={error ? "newsletter-email-error" : undefined}
                  aria-invalid={Boolean(error)}
                  className="h-12 w-full rounded-xl border border-[#ccd9d4] bg-white px-4 text-sm text-[#173b35] outline-none transition placeholder:text-[#84958f] focus:border-[#d85a3b] focus:ring-4 focus:ring-[#d85a3b]/10"
                  id="newsletter-email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (error) setError("");
                  }}
                  placeholder="Your email address"
                  ref={emailInputRef}
                  type="email"
                  value={email}
                />
                {error && (
                  <p className="mt-2 text-xs font-medium text-[#b9412a]" id="newsletter-email-error" role="alert">
                    {error}
                  </p>
                )}
                <button
                  className="mt-3 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#d85a3b] px-5 text-sm font-extrabold text-white shadow-lg shadow-[#d85a3b]/20 transition hover:-translate-y-0.5 hover:bg-[#bf452c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173b35] focus-visible:ring-offset-2 active:translate-y-0"
                  type="submit"
                >
                  Subscribe to updates
                  <Send aria-hidden="true" size={16} />
                </button>
              </form>
              <p className="mt-4 text-center text-xs leading-5 text-[#7a8c86]">We respect your inbox. Unsubscribe at any time.</p>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewsletterPopup;
