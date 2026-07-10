import { useEffect } from "react";
import LatestUpdatesSection from "../features/latestUpdates/LatestUpdatesSection";

const upsertMeta = (property: string, content: string) => {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
};

const Updates = () => {
  useEffect(() => {
    document.title = "Latest Updates | Kosi Seva Sadan";
    upsertMeta("og:title", "Latest Updates | Kosi Seva Sadan");
    upsertMeta("og:description", "Recent social media posts and programme updates from Kosi Seva Sadan.");
  }, []);

  return <LatestUpdatesSection limit={12} showViewAll={false} pageMode />;
};

export default Updates;
