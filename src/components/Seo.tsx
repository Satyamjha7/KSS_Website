import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { getSiteUrl, site } from "../lib/site";

type SeoEntry = {
  title: string;
  description: string;
  label: string;
  noIndex?: boolean;
};

const seoEntries: Record<string, SeoEntry> = {
  "/": {
    title: "Kosi Seva Sadan | Community Development NGO in Bihar",
    description: "Kosi Seva Sadan is a grassroots NGO in Bihar advancing education, health, women’s empowerment, livelihoods and climate resilience.",
    label: "Home",
  },
  "/who-we-are": { title: "About Kosi Seva Sadan | Community Development in Bihar", description: "Learn about Kosi Seva Sadan’s community-led work, values and journey supporting resilient rural communities in Bihar since 1981.", label: "Who We Are" },
  "/team": { title: "Our Team | Kosi Seva Sadan", description: "Meet the people guiding Kosi Seva Sadan’s community development work across rural Bihar.", label: "Our Team" },
  "/values": { title: "Our Values | Kosi Seva Sadan", description: "Discover the values of integrity, empowerment, collaboration, innovation and inclusion that guide Kosi Seva Sadan.", label: "Our Values" },
  "/policies": { title: "Policies and Safeguards | Kosi Seva Sadan", description: "Explore Kosi Seva Sadan’s organisational policies, safeguarding commitments and accountability practices.", label: "Policies" },
  "/financials": { title: "Financial Transparency | Kosi Seva Sadan", description: "Browse Kosi Seva Sadan annual reports and learn about its approach to accountable, transparent NGO financial practices.", label: "Financials" },
  "/annual-report": { title: "Annual Reports | Kosi Seva Sadan", description: "Access Kosi Seva Sadan annual reports documenting programmes, community work and organisational progress in Bihar.", label: "Annual Reports" },
  "/fcra": { title: "FCRA Documents | Kosi Seva Sadan", description: "Review available FCRA and compliance documents from Kosi Seva Sadan.", label: "FCRA" },
  "/organization-docs": { title: "Organisation Documents | Kosi Seva Sadan", description: "Browse Kosi Seva Sadan registrations, compliance records and organisational documents, or request a specific document.", label: "Organisation Documents" },
  "/contact": { title: "Contact Kosi Seva Sadan | Saharsa, Bihar", description: "Contact Kosi Seva Sadan for partnerships, volunteering, documents, donations, media enquiries and field collaboration in Bihar.", label: "Contact" },
  "/careers": { title: "Careers and Volunteering | Kosi Seva Sadan", description: "Explore opportunities to contribute to community development work with Kosi Seva Sadan in Bihar.", label: "Careers" },
  "/women-empowerment": { title: "Women Empowerment Programmes in Bihar | Kosi Seva Sadan", description: "Kosi Seva Sadan supports women’s leadership, livelihoods, health awareness and collective action across rural Bihar.", label: "Women Empowerment" },
  "/health-nutrition": { title: "Rural Health and Nutrition Programmes | Kosi Seva Sadan", description: "Learn how Kosi Seva Sadan supports preventive healthcare, nutrition awareness and referral linkages for rural families in Bihar.", label: "Health and Nutrition" },
  "/watsan": { title: "Water, Sanitation and Hygiene in Bihar | Kosi Seva Sadan", description: "Kosi Seva Sadan promotes safe water, sanitation and hygiene practices with rural communities in Bihar.", label: "Water and Sanitation" },
  "/education-awareness": { title: "Education and Awareness Programmes | Kosi Seva Sadan", description: "Explore Kosi Seva Sadan’s learning support, education awareness and life-skills work for children and communities in Bihar.", label: "Education and Awareness" },
  "/child-rights": { title: "Child Rights and Protection | Kosi Seva Sadan", description: "Kosi Seva Sadan works with children, families and communities to strengthen child rights, safety, participation and education.", label: "Child Rights" },
  "/drr-climate": { title: "Climate Resilience and Disaster Risk Reduction | Kosi Seva Sadan", description: "Learn about community-led flood preparedness, climate awareness and disaster risk reduction in Bihar’s Kosi region.", label: "Climate Change and DRR" },
  "/skills-development": { title: "Skills Development for Rural Communities | Kosi Seva Sadan", description: "Kosi Seva Sadan supports practical skills, financial literacy and livelihood pathways for women and youth in rural Bihar.", label: "Skills Development" },
  "/environment": { title: "Environment and Clean Energy Awareness | Kosi Seva Sadan", description: "Explore Kosi Seva Sadan’s community action for environmental awareness, conservation and cleaner rural surroundings.", label: "Environment and Clean Energy" },
  "/sustainable-agriculture": { title: "Sustainable Agriculture in Bihar | Kosi Seva Sadan", description: "Kosi Seva Sadan supports climate-sensitive, sustainable farming practices for small and marginal farming families.", label: "Sustainable Agriculture" },
  "/livelihood-promotion": { title: "Livelihood Promotion in Rural Bihar | Kosi Seva Sadan", description: "Discover Kosi Seva Sadan’s work on skills, savings, enterprise and livelihood resilience for rural households.", label: "Livelihood Promotion" },
  "/gallery": { title: "Gallery | Kosi Seva Sadan", description: "See Kosi Seva Sadan’s community programmes, field activities and stories from rural Bihar.", label: "Gallery" },
  "/stories": { title: "Community Stories | Kosi Seva Sadan", description: "Read stories of resilience, dignity and community-led change from Kosi Seva Sadan’s work in Bihar.", label: "Stories" },
  "/paper-clips": { title: "Press and Media References | Kosi Seva Sadan", description: "Explore press references and media material related to Kosi Seva Sadan’s community development work.", label: "Press and Media" },
  "/updates": { title: "Latest Updates | Kosi Seva Sadan", description: "Read recent programme updates, field stories and official social posts from Kosi Seva Sadan.", label: "Latest Updates" },
  "/donation-features": { title: "Support Community Development in Bihar | Donate to KSS", description: "Support Kosi Seva Sadan’s community development programmes across education, health, women’s empowerment and climate resilience.", label: "Donate" },
  "/privacy-policy": { title: "Privacy and Cookie Notice | Kosi Seva Sadan", description: "Read the privacy and cookie notice for the Kosi Seva Sadan website.", label: "Privacy and Cookie Notice" },
  "/terms-conditions": { title: "Terms of Use | Kosi Seva Sadan", description: "Read the terms of use for the Kosi Seva Sadan website and public resources.", label: "Terms of Use" },
  "/copyright": { title: "Copyright Notice | Kosi Seva Sadan", description: "Read Kosi Seva Sadan’s copyright notice for website content, reports and photographs.", label: "Copyright Notice" },
  "/support": { title: "Support Kosi Seva Sadan", description: "Support Kosi Seva Sadan’s work with rural communities in Bihar.", label: "Support", noIndex: true },
  "/latest-news": { title: "Latest News | Kosi Seva Sadan", description: "Latest news from Kosi Seva Sadan.", label: "Latest News", noIndex: true },
  "/all-news": { title: "News Archive | Kosi Seva Sadan", description: "Kosi Seva Sadan news archive.", label: "News Archive", noIndex: true },
  "/impactsection": { title: "Kosi Seva Sadan Impact", description: "Kosi Seva Sadan community impact.", label: "Impact", noIndex: true },
  "/mission": { title: "Kosi Seva Sadan Mission", description: "Kosi Seva Sadan mission.", label: "Mission", noIndex: true },
  "/testimonial-carousel": { title: "Kosi Seva Sadan Testimonials", description: "Kosi Seva Sadan testimonials.", label: "Testimonials", noIndex: true },
  "/partners": { title: "Kosi Seva Sadan Partners", description: "Kosi Seva Sadan partners.", label: "Partners", noIndex: true },
  "/rights": { title: "Kosi Seva Sadan Rights", description: "Kosi Seva Sadan rights information.", label: "Rights", noIndex: true },
  "/donate-button": { title: "Donate | Kosi Seva Sadan", description: "Support Kosi Seva Sadan.", label: "Donate", noIndex: true },
  "/live-projects": { title: "Live Projects | Kosi Seva Sadan", description: "Kosi Seva Sadan live projects.", label: "Live Projects", noIndex: true },
};

const setMeta = (name: string, content: string, property = false) => {
  const attribute = property ? "property" : "name";
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const setCanonical = (url: string) => {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", url);
};

const setJsonLd = (id: string, value: object) => {
  let element = document.head.querySelector<HTMLScriptElement>(`script#${id}`);
  if (!element) {
    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }
  element.text = JSON.stringify(value);
};

const Seo = () => {
  const { pathname } = useLocation();
  const entry = useMemo(() => seoEntries[pathname] ?? {
    title: "Page Not Found | Kosi Seva Sadan",
    description: "The requested Kosi Seva Sadan page could not be found.",
    label: "Page Not Found",
    noIndex: true,
  }, [pathname]);

  useEffect(() => {
    const siteUrl = getSiteUrl();
    const canonicalUrl = `${siteUrl}${pathname === "/" ? "/" : pathname}`;
    const imageUrl = `${siteUrl}/images/logo-png.png`;

    document.title = entry.title;
    setMeta("description", entry.description);
    setMeta("robots", entry.noIndex ? "noindex, nofollow" : "index, follow");
    setMeta("og:title", entry.title, true);
    setMeta("og:description", entry.description, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", canonicalUrl, true);
    setMeta("og:image", imageUrl, true);
    setMeta("og:site_name", site.name, true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", entry.title);
    setMeta("twitter:description", entry.description);
    setMeta("twitter:image", imageUrl);
    setCanonical(canonicalUrl);

    setJsonLd("kss-organization-schema", {
      "@context": "https://schema.org",
      "@type": "NGO",
      name: site.name,
      alternateName: site.shortName,
      url: siteUrl,
      logo: imageUrl,
      email: site.email,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Acharyavan, Mahishi",
        addressLocality: site.city,
        addressRegion: site.region,
        addressCountry: site.countryCode,
      },
    });

    setJsonLd("kss-webpage-schema", {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: entry.title,
      description: entry.description,
      url: canonicalUrl,
      isPartOf: { "@type": "WebSite", name: site.name, url: siteUrl },
      breadcrumb: pathname === "/" ? undefined : {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: entry.label, item: canonicalUrl },
        ],
      },
    });
  }, [entry, pathname]);

  return null;
};

export default Seo;
