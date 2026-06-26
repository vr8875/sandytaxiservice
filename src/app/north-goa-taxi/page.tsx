import type { Metadata } from "next";
import { MapPin, Car, Plane, Compass, Route } from "lucide-react";
import LocationPageLayout from "@/components/ui/LocationPageLayout";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "North Goa Taxi Service — Cab Hire in North Goa | Sandy Taxi",
  description:
    "Reliable taxi service in North Goa. Covering Candolim, Calangute, Baga, Anjuna, Vagator, Mapusa, Panaji and all North Goa beaches. 24x7, fixed fares. Sandy Taxi +91 91486 80513.",
  alternates: {
    canonical: "https://www.sandytaxiservice.com/north-goa-taxi",
  },
  openGraph: {
    title: "North Goa Taxi Service — Cab Hire in North Goa",
    description:
      "24x7 taxi in North Goa. Candolim, Calangute, Baga, Anjuna, Vagator & more. Fixed fares.",
    url: "https://www.sandytaxiservice.com/north-goa-taxi",
  },
};

const NORTH_GOA_AREAS = [
  { name: "Candolim",  desc: "Our home base — fastest pickup"        },
  { name: "Calangute", desc: "Queen of beaches — most visited"       },
  { name: "Baga",      desc: "Nightlife hub — late night pickups ok" },
  { name: "Anjuna",    desc: "Flea market, cliffs & beach shacks"    },
  { name: "Vagator",   desc: "Chapora Fort & Ozran beach access"     },
  { name: "Morjim",    desc: "Turtle beach — serene North Goa"       },
  { name: "Arambol",   desc: "Northernmost beach — hippie paradise"  },
  { name: "Mapusa",    desc: "Friday market & transport hub"         },
  { name: "Panaji",    desc: "Capital city, ferry ghat & Old Goa"   },
  { name: "Sinquerim", desc: "Fort Aguada & luxury resort belt"      },
  { name: "Arpora",    desc: "Saturday Night Bazaar area"            },
  { name: "Porvorim",  desc: "North Goa commercial belt"             },
];

const POPULAR_ROUTES = [
  { from: "Candolim",  to: "Calangute Beach", price: "₹700–800"  },
  { from: "Candolim",  to: "Anjuna Beach",    price: "₹1200–1500"  },
  { from: "Candolim",  to: "Vagator",         price: "₹800–1000"  },
  { from: "Candolim",  to: "Panaji",          price: "₹1000–1200"  },
  { from: "Candolim",  to: "Mapusa",          price: "₹300–400"  },
  { from: "Calangute", to: "Dabolim Airport", price: "₹900–1100" },
  { from: "Baga",      to: "Mopa Airport",    price: "₹1200–1500"},
  { from: "Anjuna",    to: "Old Goa",         price: "₹1000–1200"  },
];

const SERVICES = [
  { icon: Plane,   label: "Airport Pickups",        desc: "Dabolim & Mopa — from any North Goa location" },
  { icon: Compass, label: "North Goa Sightseeing",  desc: "Beaches, forts, markets — full & half day"    },
  { icon: Route,   label: "Outstation from Goa",    desc: "Pune, Mumbai, Bangalore and beyond"           },
  { icon: Car,     label: "24x7 Local Rides",       desc: "Hotel, beach, restaurant — any time"          },
];

export default function NorthGoaTaxiPage() {
  return (
    <LocationPageLayout
      badge="North Goa Taxi Service"
      title="Taxi in"
      titleHighlight="North Goa"
      description="Covering every beach, resort and attraction in North Goa — Candolim, Calangute, Baga, Anjuna, Vagator and beyond. Fixed fares, 24x7 availability, local driver."
      icon={<MapPin size={28} />}
      areaName="North Goa"
    >

      {/* ── Coverage grid ── */}
      <section className="section-pad bg-[#080810]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
              Areas We Cover in{" "}
              <span className="text-sandy-gold">North Goa</span>
            </h2>
            <p className="text-white/45 text-base max-w-lg mx-auto">
              From Candolim in the south to Arambol in the north — we cover all of it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {NORTH_GOA_AREAS.map(({ name, desc }) => (
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
              Popular Routes in{" "}
              <span className="text-sandy-gold">North Goa</span>
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
                  <p className="font-display font-extrabold text-sandy-gold">{route.price}</p>
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
              <span className="text-sandy-gold">North Goa</span>
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