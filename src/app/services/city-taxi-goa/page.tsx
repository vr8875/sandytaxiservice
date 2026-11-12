import type { Metadata } from "next";
import { Car, Clock, MapPin, Zap, Phone, Train } from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";
import { WHATSAPP_URL, CALL_URL, BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "City Taxi in Goa — 24x7 Local Cab & Railway Station Transfer | Sandy Taxi",
  description:
    "Book a city taxi in Goa anytime. 24x7 local cab covering all beaches, hotels, markets and railway stations — Madgaon, Karmali, Thivim and Vasco. Quick pickup, fixed fares. Sandy Taxi +918793680513.",
  alternates: {
    canonical: "https://www.sandytaxiservice.com/services/city-taxi-goa",
  },
  openGraph: {
    title: "City Taxi in Goa — 24x7 Local Cab & Railway Station Transfer",
    description:
      "24x7 city taxi in Goa. Beach to beach, hotel to railway station — Madgaon, Karmali, Thivim, Vasco. Fixed fares.",
    url: "https://www.sandytaxiservice.com/services/city-taxi-goa",
  },
};

const FEATURES = [
  {
    icon: Zap,
    title: "Quick Pickup",
    desc: "Based in Candolim — fast response time for bookings across North Goa tourist belt.",
    accent: "gold",
  },
  {
    icon: Clock,
    title: "Available 24x7",
    desc: "Late night beach party, early morning market run — we are available round the clock.",
    accent: "cyan",
  },
  {
    icon: MapPin,
    title: "All of Goa Covered",
    desc: "North to South — beaches, hotels, restaurants, markets, clinics, any destination.",
    accent: "pink",
  },
  {
    icon: Car,
    title: "Fixed Local Fares",
    desc: "No meter, no surge. Fixed fares quoted upfront so you know exactly what you pay.",
    accent: "gold",
  },
];

const ACCENT_STYLES = {
  gold: { bg: "bg-sandy-gold/10", text: "text-sandy-gold" },
  cyan: { bg: "bg-goa-cyan/10",   text: "text-goa-cyan"   },
  pink: { bg: "bg-beach-pink/10", text: "text-beach-pink" },
};

const COMMON_RIDES = [
  { from: "Candolim",  to: "Calangute Beach", price: "₹700–800" },
  { from: "Candolim",  to: "Baga Beach",       price: "₹800–1000" },
  { from: "Candolim",  to: "Anjuna Beach",     price: "₹1200–1400" },
  { from: "Candolim",  to: "Panaji City",      price: "₹1200–1500" },
  { from: "Calangute", to: "Mapusa Market",    price: "₹1000–1200" },
  { from: "Candolim",  to: "Old Goa Churches", price: "₹1200–1400" },
  { from: "Baga",      to: "Vagator",          price: "₹800–1000" },
  { from: "Panaji",    to: "Miramar Beach",    price: "₹700–800" },
];

const RAILWAY_STATIONS = [
  {
    name: "Madgaon Railway Station",
    code: "MAO",
    area: "South Goa",
    distance: "~42 km from Candolim",
    desc: "Goa's busiest railway station — main hub for trains to Mumbai, Bangalore, Delhi and all major cities.",
    accent: "gold",
  },
  {
    name: "Karmali Railway Station",
    code: "KRMI",
    area: "North Goa",
    distance: "~16 km from Candolim",
    desc: "Closest railway station to Panaji and North Goa. Ideal for passengers staying in Candolim, Calangute or Baga.",
    accent: "cyan",
  },
  {
    name: "Thivim Railway Station",
    code: "THVM",
    area: "North Goa",
    distance: "~22 km from Candolim",
    desc: "Serves Mapusa and North Goa. Popular for trains from Mumbai and Konkan Railway route.",
    accent: "pink",
  },
  {
    name: "Vasco da Gama Station",
    code: "VSG",
    area: "South Goa",
    distance: "~35 km from Candolim",
    desc: "Terminal station near Dabolim Airport. Convenient for passengers combining rail and air travel.",
    accent: "gold",
  },
];

const STATION_ACCENT = {
  gold: { bg: "bg-sandy-gold/10", text: "text-sandy-gold", border: "hover:border-sandy-gold/35" },
  cyan: { bg: "bg-goa-cyan/10",   text: "text-goa-cyan",   border: "hover:border-goa-cyan/35"   },
  pink: { bg: "bg-beach-pink/10", text: "text-beach-pink", border: "hover:border-beach-pink/35" },
};

const STATION_FARES = [
  { from: "Candolim / Calangute", to: "Karmali Station",  price: "₹1200–1500"   },
  { from: "Candolim / Calangute", to: "Thivim Station",   price: "₹1200–1500"   },
  { from: "Candolim / Calangute", to: "Madgaon Station",  price: "₹2300–2500"},
  { from: "Candolim / Calangute", to: "Vasco Station",    price: "₹2300–2500" },
  { from: "Baga / Anjuna",        to: "Karmali Station",  price: "₹1200–1500"   },
  { from: "Baga / Anjuna",        to: "Thivim Station",   price: "₹1200–1500"   },
  { from: "Panaji",               to: "Karmali Station",  price: "₹800–1000"   },
  { from: "Panaji",               to: "Madgaon Station",  price: "₹1500–1700" },
];

export default function CityTaxiGoaPage() {
  return (
    <ServicePageLayout
      badge="City Taxi Goa"
      title="City Taxi in"
      titleHighlight="Goa — 24x7"
      description="Need a quick local cab in Goa? Sandy Taxi operates 24x7 across all of Goa — beaches, hotels, restaurants, markets and railway stations. Fast pickup, fixed fares, no hassle."
      icon={<Car size={28} />}
    >

      {/* ── Common rides ── */}
      <section className="section-pad bg-[#080810]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
              Common Local{" "}
              <span className="text-sandy-gold">Rides &amp; Fares</span>
            </h2>
            <p className="text-white/45 text-base">
              Approximate fares for popular city routes. Confirmed at booking.
            </p>
          </div>

          {/* Desktop */}
          <div className="hidden md:block card-dark overflow-hidden mb-4">
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
                {COMMON_RIDES.map((ride) => (
                  <tr
                    key={`${ride.from}-${ride.to}`}
                    className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-6 py-4 text-white/60">{ride.from}</td>
                    <td className="px-6 py-4 font-display font-bold text-white">{ride.to}</td>
                    <td className="px-6 py-4 text-center font-display font-extrabold text-sandy-gold">
                      {ride.price}
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
          <div className="md:hidden space-y-3 mb-4">
            {COMMON_RIDES.map((ride) => (
              <div
                key={`${ride.from}-${ride.to}`}
                className="card-dark p-4 flex items-center justify-between"
              >
                <div>
                  <p className="text-white font-display font-bold text-sm">
                    {ride.from} → {ride.to}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display font-extrabold text-sandy-gold">{ride.price}</p>
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
            Don&apos;t see your route? Call or WhatsApp us for an instant quote.
          </p>
        </div>
      </section>

      {/* ── Railway stations ── */}
      <section className="section-pad bg-night-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-cyan mb-4 mx-auto">
              <Train size={12} />
              Railway Station Transfers
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
              Taxi to &amp; from{" "}
              <span className="text-sandy-gold">Goa Railway Stations</span>
            </h2>
            <p className="text-white/45 text-base max-w-xl mx-auto">
              Arriving or departing by train? We cover all four railway stations in Goa
              — pickup and drop at fixed fares, 24x7.
            </p>
          </div>

          {/* Station cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {RAILWAY_STATIONS.map((station) => {
              const styles = STATION_ACCENT[station.accent as keyof typeof STATION_ACCENT];
              return (
                <div
                  key={station.code}
                  className={`card-dark p-6 flex flex-col gap-3 ${styles.border} transition-colors`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${styles.bg}`}>
                    <Train size={20} className={styles.text} />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-base leading-snug mb-1">
                      {station.name}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${styles.bg} ${styles.text}`}>
                        {station.code}
                      </span>
                      <span className="text-white/30 text-[10px]">{station.area}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={11} className="text-white/30 shrink-0" />
                    <span className="text-white/30 text-xs">{station.distance}</span>
                  </div>
                  <p className="text-white/45 text-sm leading-relaxed flex-1">
                    {station.desc}
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-goa-cyan hover:text-white transition-colors flex items-center gap-1 mt-1"
                  >
                    Book pickup →
                  </a>
                </div>
              );
            })}
          </div>

          {/* Station fare table */}
          <div className="text-center mb-10">
            <h3 className="font-display font-bold text-white text-2xl mb-2">
              Railway Station <span className="text-sandy-gold">Fares</span>
            </h3>
            <p className="text-white/40 text-sm">
              Approximate fares — confirmed at booking. No hidden charges.
            </p>
          </div>

          {/* Desktop */}
          <div className="hidden md:block card-dark overflow-hidden mb-4">
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
                {STATION_FARES.map((fare) => (
                  <tr
                    key={`${fare.from}-${fare.to}`}
                    className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-6 py-4 text-white/60">{fare.from}</td>
                    <td className="px-6 py-4 font-display font-bold text-white">{fare.to}</td>
                    <td className="px-6 py-4 text-center font-display font-extrabold text-sandy-gold">
                      {fare.price}
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
          <div className="md:hidden space-y-3 mb-4">
            {STATION_FARES.map((fare) => (
              <div
                key={`${fare.from}-${fare.to}`}
                className="card-dark p-4 flex items-center justify-between"
              >
                <div>
                  <p className="text-white font-display font-bold text-sm">
                    {fare.from} → {fare.to}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display font-extrabold text-sandy-gold">{fare.price}</p>
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
            Fares vary by pickup location and vehicle type. WhatsApp for exact quote.
          </p>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section-pad bg-[#080810]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
              Why Book Sandy for{" "}
              <span className="text-sandy-gold">Local Rides</span>
            </h2>
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

      {/* ── Instant booking strip ── */}
      <section className="py-12 bg-night-navy">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-white/40 text-base mb-6">
            Need a cab right now? Call or WhatsApp directly — fastest way to book.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center"
            >
              <Phone size={16} />
              Book on WhatsApp
            </a>
            <a href={CALL_URL} className="btn-outline justify-center">
              <Phone size={16} />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

    </ServicePageLayout>
  );
}