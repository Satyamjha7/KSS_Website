import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const DISMISSAL_KEY = "kss-development-announcement-dismissed";

const SiteAnnouncement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const announcementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      setIsVisible(sessionStorage.getItem(DISMISSAL_KEY) !== "true");
    } catch {
      // If browser storage is unavailable, keep the notice visible for this visit.
      setIsVisible(true);
    }
  }, []);

  useLayoutEffect(() => {
    const root = document.documentElement;

    if (!isVisible || !announcementRef.current) {
      root.style.setProperty("--site-announcement-height", "0px");
      return;
    }

    const updateHeight = () => {
      root.style.setProperty("--site-announcement-height", `${announcementRef.current?.offsetHeight ?? 0}px`);
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(announcementRef.current);
    window.addEventListener("resize", updateHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeight);
      root.style.setProperty("--site-announcement-height", "0px");
    };
  }, [isVisible]);

  const dismissAnnouncement = () => {
    try {
      sessionStorage.setItem(DISMISSAL_KEY, "true");
    } catch {
      // Dismissing still works even if the browser blocks storage.
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-x-0 top-0 z-[1050] border-b border-[#f4b860]/30 bg-[#173b35] text-white shadow-[0_2px_14px_rgba(5,31,27,0.16)]"
      ref={announcementRef}
      role="status"
    >
      <div className="mx-auto flex min-h-10 max-w-[1440px] items-center gap-2 px-4 py-2 sm:px-6 lg:px-10">
        <span aria-hidden="true" className="shrink-0 text-sm">🚧</span>
        <p className="min-w-0 flex-1 text-center text-[11px] font-medium leading-4 text-[#f7f8f4] sm:text-xs sm:leading-5">
          We&apos;re continuously developing and improving this website. Visit us again for new updates and share your feedback at{" "}
          <a
            className="font-bold text-[#f4b860] underline decoration-[#f4b860]/50 underline-offset-2 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4b860] focus-visible:ring-offset-2 focus-visible:ring-offset-[#173b35]"
            href="mailto:kosisevasadan@gmail.com"
          >
            kosisevasadan@gmail.com
          </a>
          .
        </p>
        <button
          aria-label="Dismiss website development notice"
          className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-[#d9e6e1] transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4b860] focus-visible:ring-offset-2 focus-visible:ring-offset-[#173b35]"
          onClick={dismissAnnouncement}
          type="button"
        >
          <X aria-hidden="true" size={15} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

export default SiteAnnouncement;
