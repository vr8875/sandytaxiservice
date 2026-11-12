import type { Metadata } from "next";
import { MapPin, Car, Plane, Compass, Route } from "lucide-react";
import LocationPageLayout from "@/components/ui/LocationPageLayout";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Taxi in Calangute Goa — Cab Service Calangute Beach | Sandy Taxi",
  description:
    "Book a taxi in Calangute, Goa. Reliable cab service from Calangute Beach for airport transfers, sightseeing, outstation and local rides. 24x7, fixed fares. Sandy Taxi +91 8793680513.",
  alternates: {
    canonical: "https://www.sandytaxiservice.com/calangute-taxi",
  },
  openGraph: {
    title: "Taxi in Calangute Goa — Cab Service Calangute Beach",
    description:
      "24x7 taxi in Calangute, Goa. Airport transfers, sightseeing & outstation. Fixed fares.",
    url: "https://www.sandytaxiservice.com/calangute-taxi",
  },
};

const NEARBY_AREAS = [
  { name: "Baga Beach",      km: "2 km"  },
  { name: "Candolim",        km: "4 km"  },
  { name: "Anjuna Beach",    km: "7 km"  },
  { name: "Sinquerim",       km: "5 km"  },
  { name: "Mapusa",          km: "9 km"  },
  { name: "Panaji",          km: "15 km" },
  { name: "Vagator",         km: "10 km" },
  { name: "Arpora",          km: "4 km"  },
  { name: "Dabolim Airport", km: "35 km" },
  { name: "Mopa Airport",    km: "40 km" },
  { name: "Old Goa",         km: "18 km" },
  { name: "Margao",          km: "42 km" },
];

const POPULAR_ROUTES = [
  { from: "Calangute", to: "Dabolim Airport",  price: "₹1800–2000"  },
  { from: "Calangute", to: "Mopa Airport",      price: "₹1800–2000"},
  { from: "Calangute", to: "Baga Beach",        price: "₹600–800"   },
  { from: "Calangute", to: "Anjuna Beach",      price: "₹1000–1200"   },
  { from: "Calangute", to: "Panaji",            price: "₹1200–1500"   },
  { from: "Calangute", to: "Vagator",           price: "₹1200–1500"   },
  { from: "Calangute", to: "Old Goa",           price: "₹1200–1500"   },
  { from: "Calangute", to: "Palolem Beach",     price: "₹5500–6000"},
];

const SERVICES = [
  { icon: Plane,   label: "Airport Transfers",       desc: "Dabolim & Mopa — fixed fares, flight tracking"  },
  { icon: Compass, label: "Calangute Sightseeing",   desc: "North & South Goa tours — full & half day"      },
  { icon: Route,   label: "Outstation from Goa",     desc: "Pune, Mumbai, Bangalore and beyond"             },
  { icon: Car,     label: "24x7 Local Rides",        desc: "Beach to beach, hotel to market — anytime"      },
];

export default function CalanguteTaxiPage() {
  return (
    <LocationPageLayout
      badge="Calangute, North Goa"
      title="Taxi in"
      titleHighlight="Calangute, Goa"
      description="Sandy Taxi Service covers all of Calangute and nearby beaches. Airport transfers, sightseeing tours, outstation trips and local rides — 24x7, fixed fares, local driver."
      icon={<MapPin size={28} />}
      areaName="Calangute"
    >

      {/* ── Nearby areas ── */}
      <section className="section-pad bg-[#080810]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
              Areas We Cover from{" "}
              <span className="text-sandy-gold">Calangute</span>
            </h2>
            <p className="text-white/45 text-base max-w-lg mx-auto">
              We serve all nearby beaches, resorts and destinations from Calangute.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {NEARBY_AREAS.map(({ name, km }) => (
              <div
                key={name}
                className="card-dark p-4 flex items-center justify-between hover:border-goa-cyan/30 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-goa-cyan shrink-0" />
                  <span className="text-white/70 text-sm font-medium">{name}</span>
                </div>
                <span className="text-white/30 text-xs">{km}</span>
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
              Popular Routes from{" "}
              <span className="text-sandy-gold">Calangute</span>
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
                  <th className="text-left px-6 py-4 text-white/40 font-medium uppercase tracking-wider text-xs">From</th>
                  <th className="text-left px-6 py-4 text-white/40 font-medium uppercase tracking-wider text-xs">To</th>
                  <th className="text-center px-6 py-4 text-sandy-gold/80 font-medium uppercase tracking-wider text-xs">Approx Fare</th>
                  <th className="text-right px-6 py-4 text-white/40 font-medium uppercase tracking-wider text-xs">Book</th>
                </tr>
              </thead>
              <tbody>
                {POPULAR_ROUTES.map((route) => (
                  <tr
                    key={`${route.from}-${route.to}`}
                    className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-6 py-4 text-white/60">{route.from}</td>
                    <td className="px-6 py-4 font-display font-bold text-white">{route.to}</td>
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

      {/* ── Services ── */}
      <section className="section-pad bg-[#080810]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
              What We Offer in{" "}
              <span className="text-sandy-gold">Calangute</span>
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

    </LocationPageLayout>
  );
}