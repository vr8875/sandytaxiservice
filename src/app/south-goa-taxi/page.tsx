import type { Metadata } from "next";
import { MapPin, Car, Plane, Compass, Route, Star } from "lucide-react";
import LocationPageLayout from "@/components/ui/LocationPageLayout";
import { WHATSAPP_URL, REVIEWS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "South Goa Taxi Service — Cab Hire in South Goa | Sandy Taxi",
  description:
    "Reliable taxi service in South Goa. Covering Palolem, Colva, Benaulim, Margao, Vasco, Agonda and all South Goa beaches. 24x7, fixed fares. Sandy Taxi +91 91486 80513.",
  alternates: {
    canonical: "https://www.sandytaxiservice.com/south-goa-taxi",
  },
  openGraph: {
    title: "South Goa Taxi Service — Cab Hire in South Goa",
    description:
      "24x7 taxi in South Goa. Palolem, Colva, Benaulim, Margao, Vasco & more. Fixed fares.",
    url: "https://www.sandytaxiservice.com/south-goa-taxi",
  },
};

const SOUTH_GOA_AREAS = [
  { name: "Palolem Beach",    desc: "Most popular South Goa beach — crescent shaped"   },
  { name: "Colva Beach",      desc: "Longest beach in South Goa — wide and serene"     },
  { name: "Benaulim",         desc: "Quiet beach village, ideal for relaxed stays"     },
  { name: "Agonda Beach",     desc: "Pristine, peaceful — turtle nesting beach"        },
  { name: "Margao",           desc: "South Goa's commercial and transport hub"         },
  { name: "Vasco da Gama",    desc: "Port city — close to Dabolim Airport"            },
  { name: "Cavelossim",       desc: "Luxury resort belt on the Sal river mouth"        },
  { name: "Canacona",         desc: "Southernmost Goa — Palolem & Cotigao wildlife"   },
  { name: "Bogmalo Beach",    desc: "Small cove beach near Dabolim airport"            },
  { name: "Cabo de Rama",     desc: "Historic fort with stunning coastal views"        },
  { name: "Old Goa",          desc: "UNESCO heritage churches — Basilica of Bom Jesus"},
  { name: "Ponda",            desc: "Spice plantations and Hindu temples"              },
];

const POPULAR_ROUTES = [
  { from: "Candolim",  to: "Palolem Beach",      price: "₹2,000–2,500" },
  { from: "Candolim",  to: "Colva Beach",         price: "₹1,500–1,800" },
  { from: "Candolim",  to: "Margao",              price: "₹1,200–1,500" },
  { from: "Candolim",  to: "Old Goa Churches",    price: "₹500–700"     },
  { from: "Candolim",  to: "Vasco da Gama",       price: "₹800–1,000"   },
  { from: "Candolim",  to: "Agonda Beach",        price: "₹2,200–2,700" },
  { from: "Margao",    to: "Palolem Beach",        price: "₹600–800"     },
  { from: "Dabolim",   to: "Palolem Beach",        price: "₹1,200–1,500" },
];

const SERVICES = [
  { icon: Plane,   label: "Airport Transfers",      desc: "Dabolim airport — closest to South Goa"         },
  { icon: Compass, label: "South Goa Sightseeing",  desc: "Beaches, forts, churches, spice farms"          },
  { icon: Route,   label: "Outstation from Goa",    desc: "Pune, Mumbai, Bangalore and beyond"             },
  { icon: Car,     label: "24x7 Local Rides",       desc: "Beach to beach, hotel to market — anytime"      },
];

const HIGHLIGHTS = [
  {
    name: "Dudhsagar Falls",
    desc: "India's tallest waterfall — a must-visit day trip from South Goa. We offer full day round trips.",
    accent: "gold",
  },
  {
    name: "Basilica of Bom Jesus",
    desc: "UNESCO World Heritage site in Old Goa. Home to the relics of St. Francis Xavier.",
    accent: "cyan",
  },
  {
    name: "Palolem Beach",
    desc: "Goa's most photographed crescent beach — calm waters, perfect for families and couples.",
    accent: "pink",
  },
  {
    name: "Spice Plantations, Ponda",
    desc: "Immersive spice farm tours with lunch — a unique inner Goa experience.",
    accent: "gold",
  },
];

const HIGHLIGHT_ACCENT = {
  gold: { border: "hover:border-sandy-gold/35", text: "text-sandy-gold", bg: "bg-sandy-gold/10" },
  cyan: { border: "hover:border-goa-cyan/35",   text: "text-goa-cyan",   bg: "bg-goa-cyan/10"  },
  pink: { border: "hover:border-beach-pink/35", text: "text-beach-pink", bg: "bg-beach-pink/10"},
};

export default function SouthGoaTaxiPage() {
  return (
    <LocationPageLayout
      badge="South Goa Taxi Service"
      title="Taxi in"
      titleHighlight="South Goa"
      description="Covering every beach, heritage site and attraction in South Goa — Palolem, Colva, Benaulim, Margao, Agonda, Old Goa and beyond. Fixed fares, 24x7 availability, local driver."
      icon={<MapPin size={28} />}
      areaName="South Goa"
    >

      {/* ── Coverage grid ── */}
      <section className="section-pad bg-[#080810]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
              Areas We Cover in{" "}
              <span className="text-sandy-gold">South Goa</span>
            </h2>
            <p className="text-white/45 text-base max-w-lg mx-auto">
              From Old Goa in the north to Canacona in the south — every corner covered.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SOUTH_GOA_AREAS.map(({ name, desc }) => (
              <div
                key={name}
                className="card-dark p-5 flex items-start gap-4 hover:border-sandy-gold/30 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-sandy-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={16} className="text-sandy-gold" />
                </div>
                <div>
                  <p className="font-display font-bold text-white text-sm mb-0.5">{name}</p>
                  <p className="text-white/40 text-xs">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Popular routes ── */}
      <section className="section-pad bg-night-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
              Popular Routes to{" "}
              <span className="text-sandy-gold">South Goa</span>
            </h2>
            <p className="text-white/45 text-base">
              Approximate fares — confirmed at booking. No hidden charges.
            </p>
          </div>

          {/* Desktop */}
          <div className="hidden md:block card-dark overflow-hidden mb-3">
            <div className="h-[3px] brand-gradient" />
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left px-6 py-4 text-white/40 font-medium uppercase tracking-wider text-xs">
                    From
                  </th>
                  <th className="text-left px-6 py-4 text-white/40 font-medium uppercase tracking-wider text-xs">
                    To
                  </th>
                  <th className="text-center px-6 py-4 text-sandy-gold/80 font-medium uppercase tracking-wider text-xs">
                    Approx Fare
                  </th>
                  <th className="text-right px-6 py-4 text-white/40 font-medium uppercase tracking-wider text-xs">
                    Book
                  </th>
                </tr>
              </thead>
              <tbody>
                {POPULAR_ROUTES.map((route) => (
                  <tr
                    key={`${route.from}-${route.to}`}
                    className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-6 py-4 text-white/60">{route.from}</td>
                    <td className="px-6 py-4 font-display font-bold text-white">
                      {route.to}
                    </td>
                    <td className="px-6 py-4 text-center font-display font-extrabold text-sandy-gold">
                      {route.price}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-goa-cyan hover:text-white transition-colors"
                      >
                        Book →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="md:hidden space-y-3 mb-3">
            {POPULAR_ROUTES.map((route) => (
              <div
                key={`${route.from}-${route.to}`}
                className="card-dark p-4 flex items-center justify-between"
              >
                <div>
                  <p className="text-white font-display font-bold text-sm">
                    {route.from} → {route.to}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display font-extrabold text-sandy-gold">
                    {route.price}
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-goa-cyan text-xs"
                  >
                    Book →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-white/25 text-xs text-center">
            Fares are approximate and may vary by vehicle type and season.
          </p>
        </div>
      </section>

      {/* ── South Goa highlights ── */}
      <section className="section-pad bg-[#080810]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
              Top <span className="text-sandy-gold">South Goa</span> Attractions
            </h2>
            <p className="text-white/45 text-base max-w-lg mx-auto">
              Places our passengers love visiting — we'll get you there and back.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HIGHLIGHTS.map(({ name, desc, accent }) => {
              const styles = HIGHLIGHT_ACCENT[accent as keyof typeof HIGHLIGHT_ACCENT];
              return (
                <div
                  key={name}
                  className={`card-dark p-6 flex flex-col gap-3 ${styles.border} transition-colors`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${styles.bg}`}>
                    <MapPin size={18} className={styles.text} />
                  </div>
                  <h3 className="font-display font-bold text-white text-base">{name}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section-pad bg-night-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
              What We Offer in{" "}
              <span className="text-sandy-gold">South Goa</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="card-dark p-7 flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl bg-sandy-gold/10 flex items-center justify-center">
                  <Icon size={20} className="text-sandy-gold" />
                </div>
                <h3 className="font-display font-bold text-white text-base">{label}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="section-pad bg-[#080810]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
              What Our Passengers{" "}
              <span className="text-sandy-gold">Say</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {REVIEWS.map((review) => (
              <div
                key={review.name}
                className="card-dark p-6 flex flex-col gap-4 hover:border-sandy-gold/25 transition-colors"
              >
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={13} className="text-sandy-gold fill-sandy-gold" />
                  ))}
                </div>
                <p className="text-white/60 text-sm leading-relaxed flex-1">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                  <div className="w-8 h-8 rounded-full bg-sandy-gold/10 border border-sandy-gold/20 flex items-center justify-center">
                    <span className="text-sandy-gold font-bold text-xs">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{review.name}</p>
                    <p className="text-white/30 text-xs">Google Review</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </LocationPageLayout>
  );
}