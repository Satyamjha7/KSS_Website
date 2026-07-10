import { useEffect, useState } from "react";
import { fallbackUpdates } from "./fallbackUpdates";
import type { SocialUpdate, SocialUpdatesFeed } from "./types";

type LatestUpdatesState = {
  updates: SocialUpdate[];
  loading: boolean;
  fromCache: boolean;
};

const CACHE_KEY = "kss-latest-updates-cache";
const CACHE_MAX_AGE = 60 * 60 * 1000;

const isValidFeed = (feed: unknown): feed is SocialUpdatesFeed =>
  Boolean(feed && typeof feed === "object" && Array.isArray((feed as SocialUpdatesFeed).items));

const readBrowserCache = (): SocialUpdate[] | null => {
  try {
    const raw = window.localStorage.getItem(CACHE_KEY);
    if (!raw) return null;

    const cached = JSON.parse(raw) as SocialUpdatesFeed;
    const generatedAt = new Date(cached.generatedAt).getTime();
    const isFresh = Number.isFinite(generatedAt) && Date.now() - generatedAt < CACHE_MAX_AGE;

    return isFresh && cached.items?.length ? cached.items : null;
  } catch {
    return null;
  }
};

const writeBrowserCache = (feed: SocialUpdatesFeed) => {
  try {
    window.localStorage.setItem(CACHE_KEY, JSON.stringify(feed));
  } catch {
    // localStorage can be unavailable in privacy modes; the UI still works with runtime data.
  }
};

export const useLatestUpdates = (limit = 6): LatestUpdatesState => {
  const [state, setState] = useState<LatestUpdatesState>({
    updates: fallbackUpdates.slice(0, limit),
    loading: true,
    fromCache: false,
  });

  useEffect(() => {
    let isMounted = true;

    const loadUpdates = async () => {
      const cached = readBrowserCache();
      if (cached && isMounted) {
        setState({ updates: cached.slice(0, limit), loading: false, fromCache: true });
      }

      try {
        const response = await fetch(`/data/latest-updates.json?ts=${Date.now()}`, {
          headers: { Accept: "application/json" },
        });

        if (!response.ok) throw new Error("Updates feed unavailable");

        const feed = (await response.json()) as unknown;
        if (!isValidFeed(feed) || feed.items.length === 0) throw new Error("Updates feed is empty");

        writeBrowserCache(feed);

        if (isMounted) {
          setState({ updates: feed.items.slice(0, limit), loading: false, fromCache: true });
        }
      } catch {
        if (isMounted && !cached) {
          setState({ updates: fallbackUpdates.slice(0, limit), loading: false, fromCache: false });
        }
      }
    };

    loadUpdates();

    return () => {
      isMounted = false;
    };
  }, [limit]);

  return state;
};
