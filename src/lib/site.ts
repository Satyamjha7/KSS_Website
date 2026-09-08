export const site = {
  name: "Kosi Seva Sadan",
  shortName: "KSS",
  email: "kosisevasadan@gmail.com",
  phone: "+91 9113124943",
  phoneHref: "+919113124943",
  address: "Acharyavan, Mahishi, Saharsa, Bihar, India",
  city: "Saharsa",
  region: "Bihar",
  countryCode: "IN",
  defaultUrl: "https://kosisevasadan.org",
} as const;

export const getSiteUrl = () => {
  const configuredUrl = import.meta.env.VITE_SITE_URL?.trim();

  if (configuredUrl) return configuredUrl.replace(/\/$/, "");
  if (typeof window !== "undefined") return window.location.origin;

  return site.defaultUrl;
};
