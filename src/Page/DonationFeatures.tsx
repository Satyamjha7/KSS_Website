import { FormEvent, useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Copy,
  HeartHandshake,
  IndianRupee,
  Landmark,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

type Campaign = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  goal: number;
  raised: number;
  unitAmount: number;
  unitImpact: string;
  gradient: string;
};

const campaigns: Campaign[] = [
  {
    id: "education",
    title: "Learning support for children",
    eyebrow: "Education",
    description:
      "Support learning circles, study material, mentoring, and child-friendly spaces for children in underserved communities.",
    goal: 350000,
    raised: 218500,
    unitAmount: 750,
    unitImpact: "one child receives learning material and guided support",
    gradient: "from-[#173b35] to-[#376f62]",
  },
  {
    id: "women",
    title: "Women-led livelihood groups",
    eyebrow: "Women empowerment",
    description:
      "Help women access skill training, savings practices, enterprise planning, and community leadership support.",
    goal: 500000,
    raised: 304000,
    unitAmount: 1500,
    unitImpact: "one woman attends a livelihood and financial literacy session",
    gradient: "from-[#d85a3b] to-[#f4b860]",
  },
  {
    id: "health",
    title: "Community health and nutrition camps",
    eyebrow: "Health",
    description:
      "Enable preventive health camps, nutrition counselling, basic screening, and referral support for vulnerable families.",
    goal: 425000,
    raised: 276750,
    unitAmount: 1000,
    unitImpact: "one family receives screening and health counselling",
    gradient: "from-[#0f5148] to-[#d85a3b]",
  },
  {
    id: "resilience",
    title: "Flood resilience and emergency readiness",
    eyebrow: "Climate resilience",
    description:
      "Strengthen preparedness work, community risk mapping, WASH awareness, and rapid support for flood-prone households.",
    goal: 650000,
    raised: 411200,
    unitAmount: 2000,
    unitImpact: "one household receives preparedness and hygiene support",
    gradient: "from-[#051f1b] to-[#2f6e63]",
  },
];

const presetAmounts = [500, 1000, 2500, 5000];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

const DonationFeature = () => {
  const [selectedCampaignId, setSelectedCampaignId] = useState(campaigns[0].id);
  const [amount, setAmount] = useState(1000);
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [copied, setCopied] = useState(false);

  const selectedCampaign = useMemo(
    () => campaigns.find((campaign) => campaign.id === selectedCampaignId) ?? campaigns[0],
    [selectedCampaignId],
  );

  const projectedRaised = selectedCampaign.raised + amount;
  const progress = Math.min((projectedRaised / selectedCampaign.goal) * 100, 100);
  const impactUnits = Math.max(1, Math.floor(amount / selectedCampaign.unitAmount));

  const pledgeSummary = `Donation pledge for Kosi Seva Sadan
Name: ${donorName || "Not provided"}
Email: ${donorEmail || "Not provided"}
Campaign: ${selectedCampaign.title}
Amount: ${formatCurrency(amount)}
Frequency: ${frequency === "monthly" ? "Monthly" : "One-time"}
Estimated impact: ${impactUnits} x ${selectedCampaign.unitImpact}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pledgeSummary);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Donation pledge - ${selectedCampaign.title}`);
    const body = encodeURIComponent(`${pledgeSummary}\n\nPlease share the next steps/payment details and receipt process.`);
    window.location.href = `mailto:kosisevasadan@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-[#f7f8f4] text-[#173b35]">
      <section className="relative isolate overflow-hidden bg-[#051f1b] px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8 lg:pt-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(244,184,96,.26),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(216,90,59,.3),transparent_24%),linear-gradient(135deg,#051f1b,#173b35)]" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#f4b860] backdrop-blur">
              <HeartHandshake size={16} /> Give with confidence
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              Turn generosity into measurable community action.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
              Choose a campaign, see the estimated impact of your contribution, and send a donation
              pledge directly to the KSS team for follow-up and receipt support.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/12 p-6 shadow-2xl backdrop-blur-xl">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["₹12L+", "community programmes supported"],
                ["4", "active donation focus areas"],
                ["80G", "receipt support available"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-white/12 p-4">
                  <strong className="block text-3xl font-black">{value}</strong>
                  <span className="mt-1 block text-xs font-bold uppercase tracking-[0.14em] text-white/62">
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-start gap-3 rounded-2xl bg-[#f4b860] p-4 text-[#173b35]">
              <ShieldCheck className="mt-0.5 shrink-0" size={20} />
              <p className="text-sm font-bold leading-6">
                This page creates a pledge/request flow. Connect a payment gateway later if you want
                instant online payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:px-8">
        <div className="space-y-4">
          {campaigns.map((campaign) => {
            const isSelected = campaign.id === selectedCampaignId;
            const campaignProgress = Math.min((campaign.raised / campaign.goal) * 100, 100);

            return (
              <button
                key={campaign.id}
                type="button"
                onClick={() => setSelectedCampaignId(campaign.id)}
                className={`w-full rounded-[1.75rem] border p-5 text-left transition duration-300 ${
                  isSelected
                    ? "border-[#d85a3b] bg-white shadow-[0_24px_70px_rgba(23,59,53,.14)]"
                    : "border-[#dfe8e3] bg-white/72 hover:-translate-y-1 hover:bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.18em] text-[#d85a3b]">
                      {campaign.eyebrow}
                    </span>
                    <h2 className="mt-2 text-2xl font-black tracking-[-0.04em]">{campaign.title}</h2>
                  </div>
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br ${campaign.gradient} text-white`}
                  >
                    <UsersRound size={19} />
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-[#60766f]">{campaign.description}</p>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#e7eee9]">
                  <div className="h-full rounded-full bg-[#d85a3b]" style={{ width: `${campaignProgress}%` }} />
                </div>
                <div className="mt-3 flex justify-between text-xs font-black uppercase tracking-[0.12em] text-[#738982]">
                  <span>{formatCurrency(campaign.raised)} raised</span>
                  <span>{Math.round(campaignProgress)}%</span>
                </div>
              </button>
            );
          })}
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2.25rem] border border-[#dfe8e3] bg-white p-5 shadow-[0_24px_80px_rgba(23,59,53,.12)] sm:p-7"
        >
          <div className={`rounded-[1.75rem] bg-gradient-to-br ${selectedCampaign.gradient} p-6 text-white`}>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white/16">
                <IndianRupee size={22} />
              </span>
              <div>
                <span className="text-xs font-black uppercase tracking-[0.18em] text-white/68">Selected campaign</span>
                <h2 className="text-2xl font-black tracking-[-0.04em]">{selectedCampaign.title}</h2>
              </div>
            </div>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/22">
              <div className="h-full rounded-full bg-[#f4b860]" style={{ width: `${progress}%` }} />
            </div>
            <div className="mt-3 flex flex-wrap justify-between gap-2 text-sm font-bold text-white/78">
              <span>{formatCurrency(projectedRaised)} after your pledge</span>
              <span>Goal: {formatCurrency(selectedCampaign.goal)}</span>
            </div>
          </div>

          <div className="mt-7">
            <label className="text-sm font-black uppercase tracking-[0.16em] text-[#6b827b]">Donation amount</label>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {presetAmounts.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setAmount(preset)}
                  className={`rounded-2xl px-4 py-3 text-sm font-black transition ${
                    amount === preset
                      ? "bg-[#173b35] text-white"
                      : "bg-[#eef4f0] text-[#36524b] hover:bg-[#fbe4da] hover:text-[#c64e32]"
                  }`}
                >
                  {formatCurrency(preset)}
                </button>
              ))}
            </div>
            <input
              type="number"
              min={100}
              step={100}
              value={amount}
              onChange={(event) => setAmount(Math.max(0, Number(event.target.value)))}
              className="mt-3 w-full rounded-2xl border border-[#dfe8e3] bg-[#f7f8f4] px-4 py-4 text-lg font-black text-[#173b35] outline-none transition focus:border-[#d85a3b] focus:bg-white"
              aria-label="Custom donation amount"
            />
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {(["once", "monthly"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setFrequency(option)}
                className={`rounded-2xl border px-4 py-3 text-sm font-black uppercase tracking-[0.14em] transition ${
                  frequency === option
                    ? "border-[#d85a3b] bg-[#fff0e8] text-[#c64e32]"
                    : "border-[#dfe8e3] bg-white text-[#60766f]"
                }`}
              >
                {option === "once" ? "One-time" : "Monthly"}
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-[1.5rem] bg-[#f7f8f4] p-5">
            <p className="text-sm font-bold leading-7 text-[#526b64]">
              Your {formatCurrency(amount)} {frequency === "monthly" ? "monthly pledge" : "pledge"} can help{" "}
              <strong className="text-[#173b35]">
                {impactUnits} {impactUnits === 1 ? "unit" : "units"}
              </strong>{" "}
              of impact: {selectedCampaign.unitImpact}.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <input
              value={donorName}
              onChange={(event) => setDonorName(event.target.value)}
              placeholder="Your name"
              className="rounded-2xl border border-[#dfe8e3] px-4 py-4 text-sm font-semibold outline-none transition focus:border-[#d85a3b]"
            />
            <input
              value={donorEmail}
              onChange={(event) => setDonorEmail(event.target.value)}
              type="email"
              placeholder="Email for receipt"
              className="rounded-2xl border border-[#dfe8e3] px-4 py-4 text-sm font-semibold outline-none transition focus:border-[#d85a3b]"
            />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
            <button
              type="submit"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#d85a3b] px-6 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-[#b9472c]"
            >
              Send pledge request <ArrowRight size={18} />
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-[#dfe8e3] px-6 text-sm font-black uppercase tracking-[0.16em] text-[#173b35] transition hover:bg-[#eef4f0]"
            >
              {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-[1.25rem] border border-[#dfe8e3] bg-white p-4 text-sm leading-6 text-[#5c736d]">
            <Landmark className="mt-1 shrink-0 text-[#d85a3b]" size={19} />
            <p>
              For compliance and receipts, the KSS team should confirm payment method, donor category,
              and required documentation before processing the contribution.
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};

export default DonationFeature;
