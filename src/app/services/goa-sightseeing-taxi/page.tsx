import type { Metadata } from "next";
import { Compass, Sun, Clock, MapPin, CheckCircle, Camera } from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Goa Sightseeing Taxi — Full Day & Half Day Tours",
  description:
    "Explore Goa by cab with Sandy Taxi. Full day and half day sightseeing tours covering North Goa beaches, forts, churches, waterfalls and South Goa attractions. Fixed fares.",
  alternates: {
    canonical: "https://www.sandytaxiservice.com/services/goa-sightseeing-taxi",
  },
  openGraph: {
    title: "Goa Sightseeing Taxi — Full Day & Half Day Tours",
    description:
      "Explore Goa beaches, forts and waterfalls by cab. Full day and half day tour packages. Fixed fares.",
    url: "https://www.sandytaxiservice.com/services/goa-sightseeing-taxi",
  },
};

const NORTH_GOA = [
  "Baga Beach", "Calangute Beach", "Anjuna Beach & Flea Market",
  "Vagator & Chapora Fort", "Fort Aguada", "Candolim Beach",
  "Mapusa Market", "Arpora Night Market",
];

const SOUTH_GOA = [
  "Palolem Beach", "Colva Beach", "Benaulim Beach",
  "Basilica of Bom Jesus", "Se Cathedral, Old Goa",
  "Dudhsagar Falls", "Spice Plantations, Ponda", "Miramar Beach, Panaji",
];

const PACKAGES = [
  {
    title: "Half Day Tour",
    duration: "4 hrs / 40 km",
    from: "₹2,500",
    desc: "Perfect for a quick beach run or a focused north or south Goa highlights trip.",
    accent: "cyan",
  },
  {
    title: "Full Day Tour",
    duration: "8 hrs / 80 km",
    from: "₹3,500",
    desc: "Cover both north and south Goa comfortably — beaches, forts, churches and markets.",
    accent: "gold",
    popular: true,
  },
  {
    title: "Extended Tour",
    duration: "12 hrs / 120 km",
    from: "₹5,500",
    desc: "All-day deep dive into Goa. Ideal for families or groups wanting to see everything.",
    accent: "pink",
  },
];

const ACCENT_STYLES = {
  gold: { border: "hover:border-sandy-gold/40", text: "text-sandy-gold", bg: "bg-sandy-gold/10" },
  cyan: { border: "hover:border-goa-cyan/40",   text: "text-goa-cyan",   bg: "bg-goa-cyan/10"  },
  pink: { border: "hover:border-beach-pink/40", text: "text-beach-pink", bg: "bg-beach-pink/10"},
};

export default function GoaSightseeingPage() {
  return (
    <ServicePageLayout
      badge="Goa Sightseeing Tours"
      title="Goa Sightseeing"
      titleHighlight="by Taxi"
      description="Explore Goa beaches, historic forts, ancient churches and hidden waterfalls at your own pace — with a local driver who knows every spot worth visiting."
      icon={<Compass size={28} />}
    >

      {/* ── Tour packages ── */}
      <section className="section-pad bg-[#080810]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
              Sightseeing <span className="text-sandy-gold">Packages</span>
            </h2>
            <p className="text-white/45 text-base max-w-lg mx-auto">
              Choose a package based on how much of Goa you want to explore.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {PACKAGES.map(({ title, duration, from, desc, accent, popular }) => {
              const styles = ACCENT_STYLES[accent as keyof typeof ACCENT_STYLES];
              return (
                <div
                  key={title}
                  className={`card-dark p-7 flex flex-col gap-4 relative ${styles.border} transition-colors`}
                >
                  {popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 badge-gold text-[10px] py-0.5">
                      Most Popular
                    </span>
                  )}
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${styles.bg}`}>
                    <Sun size={20} className={styles.text} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg mb-1">{title}</h3>
                    <span className="badge-cyan text-[10px] py-0.5">
                      <Clock size={10} />
                      {duration}
                    </span>
                  </div>
                  <p className="text-white/45 text-sm leading-relaxed flex-1">{desc}</p>
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <p className="text-white/35 text-xs">Starting from</p>
                      <p className={`font-display font-extrabold text-2xl ${styles.text}`}>{from}</p>
                    </div>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs py-2 px-4"
                    >
                      Book
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Destinations ── */}
      <section className="section-pad bg-night-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
              Popular <span className="text-sandy-gold">Destinations</span>
            </h2>
            <p className="text-white/45 text-base max-w-lg mx-auto">
              Tell us your must-see spots — we&apos;ll plan the most efficient route.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card-dark p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-sandy-gold/10 flex items-center justify-center">
                  <MapPin size={18} className="text-sandy-gold" />
                </div>
                <h3 className="font-display font-bold text-white text-xl">North Goa</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {NORTH_GOA.map((place) => (
                  <div key={place} className="flex items-center gap-2 text-sm text-white/55">
                    <Camera size={12} className="text-sandy-gold shrink-0" />
                    {place}
                  </div>
                ))}
              </div>
            </div>
            <div className="card-dark p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-goa-cyan/10 flex items-center justify-center">
                  <MapPin size={18} className="text-goa-cyan" />
                </div>
                <h3 className="font-display font-bold text-white text-xl">South Goa</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {SOUTH_GOA.map((place) => (
                  <div key={place} className="flex items-center gap-2 text-sm text-white/55">
                    <Camera size={12} className="text-goa-cyan shrink-0" />
                    {place}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Inclusions ── */}
      <section className="section-pad bg-[#080810]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-dark p-8">
            <h2 className="font-display font-bold text-white text-2xl mb-6 text-center">
              What&apos;s <span className="text-sandy-gold">Included</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Pickup from your hotel or resort",
                "AC vehicle throughout the day",
                "Local driver with expert Goa knowledge",
                "Flexible itinerary — your choice of spots",
                "Wait time included at each location",
                "Drop back to your hotel at end of tour",
                "Fixed fare — no meter surprises",
                "WhatsApp support throughout the day",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-goa-cyan mt-0.5 shrink-0" />
                  <span className="text-white/60 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </ServicePageLayout>
  );
}