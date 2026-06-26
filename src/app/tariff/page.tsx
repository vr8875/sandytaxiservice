import type { Metadata } from "next";
import {
  Car, Clock, MapPin, ArrowRight,
  Phone, MessageCircle, Info,
  Plane, Navigation,
} from "lucide-react";
import {
  BUSINESS, WHATSAPP_URL, CALL_URL,
  RENTAL_PACKAGES, OUTSTATION_ROUTES, DUDHSAGAR_PRICES,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Taxi Fare & Tariff in Goa — Sandy Taxi Service",
  description:
    "Check Sandy Taxi Service fare chart for Goa. Transparent pricing for airport transfers, local rentals, sightseeing packages and outstation trips. No hidden charges. Call +91 91486 80513.",
  alternates: {
    canonical: "https://www.sandytaxiservice.com/tariff",
  },
  openGraph: {
    title: "Taxi Fare & Tariff in Goa — Sandy Taxi Service",
    description:
      "Fixed, transparent cab fares in Goa. Local rentals, airport transfers, outstation routes. No hidden charges.",
    url: "https://www.sandytaxiservice.com/tariff",
  },
};

// ── FAQ data (also powers FAQPage schema) ──────────────────
const FAQS = [
  {
    q: "Are your taxi fares fixed or metered?",
    a: "All our fares are fixed and agreed upfront before the ride. There are no hidden charges or surge pricing.",
  },
  {
    q: "Are night charges applicable?",
    a: "Yes, a small night charge applies for rides between 9 PM and 6 AM. This is shown clearly in the tariff table above.",
  },
  {
    q: "What is included in the 8 hrs / 80 km package?",
    a: "The package covers 8 hours of usage and up to 80 km of travel. Extra kilometres and hours are charged at the rates shown in the tariff.",
  },
  {
    q: "Do you charge for waiting time?",
    a: "Reasonable waiting time during a tour is included. Extended waiting beyond the package hours is charged at the extra hour rate.",
  },
  {
    q: "Is the Dudhsagar trip price for pickup and drop both?",
    a: "Yes, the Dudhsagar fare is for a full round trip — pickup from your location and drop back. No additional charges.",
  },
  {
    q: "Can I book an outstation trip one-way?",
    a: "Yes, we offer one-way outstation trips. Prices shown are for one-way. Contact us for round-trip outstation pricing.",
  },
  {
    q: "How do I confirm a booking?",
    a: "Simply WhatsApp or call us with your pickup location, destination and date. We confirm your cab within minutes.",
  },
  {
    q: "Do you accept UPI or card payments?",
    a: "Yes, we accept cash, UPI (PhonePe, GPay, Paytm) and card payments for your convenience.",
  },
];

// ── FAQPage JSON-LD schema ─────────────────────────────────
function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function TariffPage() {
  return (
    <main className="bg-night-navy min-h-screen pt-24">
      <FAQSchema />

      {/* ── Page header ── */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(245,197,24,0.1) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(0,212,232,0.08) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-gold mb-6 mx-auto">
            <Car size={12} />
            Transparent Pricing
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-5">
            Taxi Fare &amp;{" "}
            <span className="text-sandy-gold">Tariff</span>
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-xl mx-auto">
            Fixed fares, zero hidden charges. All prices are quoted upfront
            and confirmed before your ride begins.
          </p>
          {/* Trust pill */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="badge-cyan">
              <Info size={11} />
              Night charges apply after 9 PM
            </span>
          </div>
        </div>
      </section>

      {/* ── Local rental packages ── */}
      <section className="section-pad bg-[#080810]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-sandy-gold/10 flex items-center justify-center">
              <Clock size={20} className="text-sandy-gold" />
            </div>
            <div>
              <h2 className="font-display font-bold text-white text-2xl">
                Local Rental Packages
              </h2>
              <p className="text-white/40 text-sm">
                Hourly packages for sightseeing, local travel &amp; city rides
              </p>
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block card-dark overflow-hidden mb-4">
            <div className="h-[3px] brand-gradient" />
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-left px-6 py-4 text-white/40 font-medium uppercase tracking-wider text-xs">
                      Vehicle
                    </th>
                    <th className="text-center px-4 py-4 text-white/40 font-medium uppercase tracking-wider text-xs">
                      Capacity
                    </th>
                    <th className="text-center px-4 py-4 text-sandy-gold/80 font-medium uppercase tracking-wider text-xs">
                      4 hrs / 40 km
                    </th>
                    <th className="text-center px-4 py-4 text-sandy-gold/80 font-medium uppercase tracking-wider text-xs">
                      8 hrs / 80 km
                    </th>
                    <th className="text-center px-4 py-4 text-sandy-gold/80 font-medium uppercase tracking-wider text-xs">
                      12 hrs / 120 km
                    </th>
                    <th className="text-center px-4 py-4 text-white/40 font-medium uppercase tracking-wider text-xs">
                      Extra km
                    </th>
                    <th className="text-center px-4 py-4 text-white/40 font-medium uppercase tracking-wider text-xs">
                      Extra hr
                    </th>
                    <th className="text-center px-4 py-4 text-goa-cyan/70 font-medium uppercase tracking-wider text-xs">
                      Night (after 9 PM)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {RENTAL_PACKAGES.map((pkg, i) => (
                    <tr
                      key={pkg.vehicle}
                      className={`
                        border-b border-white/5 last:border-0
                        transition-colors duration-150
                        hover:bg-white/[0.02]
                        ${i === 1 ? "bg-sandy-gold/[0.02]" : ""}
                      `}
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-sandy-gold/10 flex items-center justify-center shrink-0">
                            <Car size={15} className="text-sandy-gold" />
                          </div>
                          <span className="font-display font-bold text-white">
                            {pkg.vehicle}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-5 text-center text-white/50">
                        {pkg.capacity} pax
                      </td>
                      <td className="px-4 py-5 text-center font-bold text-sandy-gold">
                        {pkg.pkg4hr}
                      </td>
                      <td className="px-4 py-5 text-center font-bold text-sandy-gold">
                        {pkg.pkg8hr}
                      </td>
                      <td className="px-4 py-5 text-center font-bold text-sandy-gold">
                        {pkg.pkg12hr}
                      </td>
                      <td className="px-4 py-5 text-center text-white/50">
                        {pkg.extraKm}
                      </td>
                      <td className="px-4 py-5 text-center text-white/50">
                        {pkg.extraHr}
                      </td>
                      <td className="px-4 py-5 text-center text-goa-cyan font-medium">
                        +{pkg.nightCharge}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4 mb-4">
            {RENTAL_PACKAGES.map((pkg) => (
              <div key={pkg.vehicle} className="card-dark overflow-hidden">
                <div className="h-[2px] brand-gradient" />
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-sandy-gold/10 flex items-center justify-center">
                      <Car size={17} className="text-sandy-gold" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-white">{pkg.vehicle}</p>
                      <p className="text-white/40 text-xs">{pkg.capacity} passengers</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: "4 hrs / 40 km", value: pkg.pkg4hr },
                      { label: "8 hrs / 80 km", value: pkg.pkg8hr },
                      { label: "12 hrs / 120 km", value: pkg.pkg12hr },
                    ].map(({ label, value }) => (
                      <div key={label} className="bg-night-navy/60 rounded-xl p-3 text-center">
                        <p className="font-bold text-sandy-gold text-base">{value}</p>
                        <p className="text-white/35 text-[10px] mt-1">{label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4 text-xs text-white/40 pt-3 border-t border-white/5">
                    <span>Extra km: <span className="text-white/60">{pkg.extraKm}</span></span>
                    <span>Extra hr: <span className="text-white/60">{pkg.extraHr}</span></span>
                    <span>Night: <span className="text-goa-cyan">+{pkg.nightCharge}</span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-white/30 text-xs flex items-start gap-2">
            <Info size={12} className="mt-0.5 shrink-0" />
            All prices are indicative and may vary slightly based on route and season.
            Final fare is confirmed before the ride.
          </p>
        </div>
      </section>

      {/* ── Dudhsagar trip ── */}
      <section className="section-pad bg-night-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-goa-cyan/10 flex items-center justify-center">
              <Navigation size={20} className="text-goa-cyan" />
            </div>
            <div>
              <h2 className="font-display font-bold text-white text-2xl">
                Dudhsagar Falls Trip
              </h2>
              <p className="text-white/40 text-sm">
                Full day — pickup &amp; drop included
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-4">
            {DUDHSAGAR_PRICES.map(({ vehicle, price }) => (
              <div key={vehicle} className="card-dark p-7 text-center hover:border-goa-cyan/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-goa-cyan/10 flex items-center justify-center mx-auto mb-4">
                  <Car size={22} className="text-goa-cyan" />
                </div>
                <p className="font-display font-bold text-white text-lg mb-1">{vehicle}</p>
                <p className="font-display font-extrabold text-goa-cyan text-3xl mb-2">{price}</p>
                <p className="text-white/35 text-xs">Pickup &amp; Drop · Full Day</p>
              </div>
            ))}
          </div>

          <p className="text-white/30 text-xs flex items-start gap-2">
            <Info size={12} className="mt-0.5 shrink-0" />
            Dudhsagar trip includes pickup from your hotel/location and drop back.
            Entry fees to the falls are not included.
          </p>
        </div>
      </section>

      {/* ── Outstation routes ── */}
      <section className="section-pad bg-[#080810]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-beach-pink/10 flex items-center justify-center">
              <Plane size={20} className="text-beach-pink" />
            </div>
            <div>
              <h2 className="font-display font-bold text-white text-2xl">
                Outstation Routes from Goa
              </h2>
              <p className="text-white/40 text-sm">
                One-way fares · Sedan / SUV · Contact for round-trip pricing
              </p>
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block card-dark overflow-hidden mb-4">
            <div className="h-[3px] brand-gradient" />
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left px-6 py-4 text-white/40 font-medium uppercase tracking-wider text-xs">
                    Route
                  </th>
                  <th className="text-center px-6 py-4 text-white/40 font-medium uppercase tracking-wider text-xs">
                    Distance
                  </th>
                  <th className="text-center px-6 py-4 text-sandy-gold/80 font-medium uppercase tracking-wider text-xs">
                    One-way Fare
                  </th>
                  <th className="text-right px-6 py-4 text-white/40 font-medium uppercase tracking-wider text-xs">
                    Book
                  </th>
                </tr>
              </thead>
              <tbody>
                {OUTSTATION_ROUTES.map((route, i) => (
                  <tr
                    key={route.to}
                    className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-beach-pink shrink-0" />
                        <span className="text-white font-medium">
                          {route.from}
                        </span>
                        <ArrowRight size={13} className="text-white/20" />
                        <span className="font-display font-bold text-white">
                          {route.to}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center text-white/50">
                      {route.km} km
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span className="font-display font-extrabold text-sandy-gold text-lg">
                        {route.price}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <a 
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-goa-cyan hover:text-white transition-colors"
                      >
                        <MessageCircle size={13} />
                        WhatsApp
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3 mb-4">
            {OUTSTATION_ROUTES.map((route) => (
              <div
                key={route.to}
                className="card-dark p-5 flex items-center justify-between hover:border-beach-pink/30 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-beach-pink shrink-0" />
                  <div>
                    <p className="text-white font-display font-bold text-sm">
                      {route.from} → {route.to}
                    </p>
                    <p className="text-white/35 text-xs mt-0.5">{route.km} km</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-display font-extrabold text-sandy-gold text-lg">
                    {route.price}
                  </p>
                  <a 
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-goa-cyan text-xs hover:text-white transition-colors"
                  >
                    Book →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-white/30 text-xs flex items-start gap-2">
            <Info size={12} className="mt-0.5 shrink-0" />
            Outstation fares are for one-way Sedan. SUV rates differ slightly.
            Contact us for exact quote on your specific route.
          </p>
        </div>
      </section>

      {/* ── FAQ section ── */}
      <section className="section-pad bg-night-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-gold mb-4 mx-auto">
              Common Questions
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Fare <span className="text-sandy-gold">FAQs</span>
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="card-dark p-6 hover:border-sandy-gold/25 transition-colors">
                <p className="font-display font-bold text-white text-sm mb-2 flex items-start gap-2">
                  <span className="text-sandy-gold mt-0.5 shrink-0">Q.</span>
                  {q}
                </p>
                <p className="text-white/50 text-sm leading-relaxed pl-5">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-16 bg-[#080810]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-3">
            Ready to book your ride?
          </h2>
          <p className="text-white/40 text-base mb-8">
            WhatsApp us with your pickup location and date — we'll confirm your cab in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4 justify-center"
            >
              <MessageCircle size={18} />
              Book on WhatsApp
            </a>
            <a href={CALL_URL} className="btn-outline text-base px-8 py-4 justify-center">
              <Phone size={18} />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}