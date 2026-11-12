import type { Metadata } from "next";
import { Briefcase, Clock, ShieldCheck, UserCheck, CheckCircle, Building2 } from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Corporate Taxi Goa — Business Cab Service | Sandy Taxi",
  description:
    "Professional corporate taxi service in Goa. Business travel, hotel transfers, airport pickups and monthly packages. Reliable, punctual and discreet. Sandy Taxi +918793680513.",
  alternates: {
    canonical: "https://www.sandytaxiservice.com/services/corporate-taxi",
  },
  openGraph: {
    title: "Corporate Taxi Goa — Business Cab Service | Sandy Taxi",
    description:
      "Professional corporate cab in Goa. Business travel, hotel transfers, airport runs. Fixed fares, punctual service.",
    url: "https://www.sandytaxiservice.com/services/corporate-taxi",
  },
};

const FEATURES = [
  {
    icon: Clock,
    title: "Punctual Every Time",
    desc: "Business schedules have zero room for delay. We track time precisely and arrive early — always.",
    accent: "gold",
  },
  {
    icon: ShieldCheck,
    title: "Professional Driver",
    desc: "Well-dressed, well-mannered and discreet. Your clients and colleagues travel in confidence.",
    accent: "cyan",
  },
  {
    icon: Building2,
    title: "Hotel & Venue Transfers",
    desc: "Seamless transfers between hotels, conference venues, offices and restaurants across Goa.",
    accent: "pink",
  },
  {
    icon: UserCheck,
    title: "Fixed Monthly Packages",
    desc: "Travelling for an extended stay? Ask about our corporate monthly cab packages for better rates.",
    accent: "gold",
  },
];

const ACCENT_STYLES = {
  gold: { bg: "bg-sandy-gold/10", text: "text-sandy-gold" },
  cyan: { bg: "bg-goa-cyan/10",   text: "text-goa-cyan"   },
  pink: { bg: "bg-beach-pink/10", text: "text-beach-pink" },
};

const USE_CASES = [
  "Airport pickup for visiting executives",
  "Hotel to conference venue transfers",
  "Client entertainment travel in Goa",
  "Multi-day corporate retreat transport",
  "Team outings and group travel",
  "Daily office commute packages",
  "Event day logistics and shuttles",
  "Late night business travel — 24x7",
];

export default function CorporateTaxiPage() {
  return (
    <ServicePageLayout
      badge="Corporate Taxi Goa"
      title="Corporate Cab Service in"
      titleHighlight="Goa"
      description="Professional, punctual and discreet taxi service for business travel in Goa. Airport transfers, hotel pickups, venue transfers and monthly corporate packages — all at fixed fares."
      icon={<Briefcase size={28} />}
    >

      {/* ── Features ── */}
      <section className="section-pad bg-[#080810]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
              Built for{" "}
              <span className="text-sandy-gold">Business Travel</span>
            </h2>
            <p className="text-white/45 text-base max-w-lg mx-auto">
              We understand corporate travel has different standards. Here is how we meet them.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map(({ icon: Icon, title, desc, accent }) => {
              const styles = ACCENT_STYLES[accent as keyof typeof ACCENT_STYLES];
              return (
                <div key={title} className="card-dark p-7 flex flex-col gap-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${styles.bg}`}>
                    <Icon size={20} className={styles.text} />
                  </div>
                  <h3 className="font-display font-bold text-white text-base">{title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Use cases ── */}
      <section className="section-pad bg-night-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
              What We Handle for{" "}
              <span className="text-sandy-gold">Corporates</span>
            </h2>
          </div>
          <div className="card-dark p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {USE_CASES.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-goa-cyan mt-0.5 shrink-0" />
                  <span className="text-white/60 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 text-center">
              <p className="text-white/40 text-sm mb-4">
                Need a corporate package or recurring bookings? Let us discuss.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex justify-center"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

    </ServicePageLayout>
  );
}