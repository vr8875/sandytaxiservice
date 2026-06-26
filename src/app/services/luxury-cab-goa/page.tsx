import type { Metadata } from "next";
import { Crown, Star, ShieldCheck, Sparkles, Heart } from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Luxury Cab Goa — Premium Taxi Service | Sandy Taxi",
  description:
    "Premium luxury cab service in Goa. Innova Crysta, SUV and high-end vehicles for weddings, honeymoons, special occasions and VIP airport transfers. Sandy Taxi +91 91486 80513.",
  alternates: {
    canonical: "http://sandytaxiservice.com/services/luxury-cab-goa",
  },
  openGraph: {
    title: "Luxury Cab Goa — Premium Taxi Service | Sandy Taxi",
    description:
      "Premium cab in Goa for weddings, honeymoons and special occasions. Innova Crysta & SUV. Fixed fares.",
    url: "http://sandytaxiservice.com/services/luxury-cab-goa",
  },
};

const FEATURES = [
  {
    icon: Crown,
    title: "Premium Vehicles",
    desc: "Innova Crysta, Ertiga and spacious SUVs — clean, well-maintained and comfortable for special occasions.",
    accent: "gold",
  },
  {
    icon: Star,
    title: "VIP Treatment",
    desc: "Professional driver, punctual arrival, help with luggage — every detail taken care of.",
    accent: "cyan",
  },
  {
    icon: Heart,
    title: "Weddings & Honeymoons",
    desc: "Make your special day or honeymoon travel seamless and memorable with a premium cab experience.",
    accent: "pink",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Discreet",
    desc: "Privacy and safety are paramount. Our driver is professional and fully focused on your comfort.",
    accent: "gold",
  },
];

const ACCENT_STYLES = {
  gold: { bg: "bg-sandy-gold/10", text: "text-sandy-gold" },
  cyan: { bg: "bg-goa-cyan/10",   text: "text-goa-cyan"   },
  pink: { bg: "bg-beach-pink/10", text: "text-beach-pink" },
};

const OCCASIONS = [
  { icon: Heart,    label: "Wedding transfers",        accent: "pink" },
  { icon: Sparkles, label: "Honeymoon travel",         accent: "gold" },
  { icon: Crown,    label: "Anniversary trips",        accent: "cyan" },
  { icon: Star,     label: "VIP airport transfers",    accent: "gold" },
  { icon: Crown,    label: "Birthday celebrations",    accent: "pink" },
  { icon: Sparkles, label: "Pre-wedding shoots",       accent: "cyan" },
  { icon: Heart,    label: "Family special occasions", accent: "gold" },
  { icon: Star,     label: "Corporate VIP guests",     accent: "pink" },
];

const VEHICLES = [
  {
    name: "Innova Crysta",
    capacity: "7 passengers",
    desc: "Toyota flagship MUV — spacious, smooth and ideal for groups or families wanting premium comfort.",
    accent: "gold",
  },
  {
    name: "Ertiga",
    capacity: "7 passengers",
    desc: "Comfortable MUV with generous luggage space. Great for airport runs and multi-stop sightseeing.",
    accent: "cyan",
  },
  {
    name: "SUV / Fortuner",
    capacity: "7 passengers",
    desc: "Commanding road presence for VIP travel. Perfect for wedding parties or high-profile transfers.",
    accent: "pink",
  },
];

const VEHICLE_ACCENT = {
  gold: { border: "hover:border-sandy-gold/40", text: "text-sandy-gold", bg: "bg-sandy-gold/10" },
  cyan: { border: "hover:border-goa-cyan/40",   text: "text-goa-cyan",   bg: "bg-goa-cyan/10"  },
  pink: { border: "hover:border-beach-pink/40", text: "text-beach-pink", bg: "bg-beach-pink/10"},
};

export default function LuxuryCabGoaPage() {
  return (
    <ServicePageLayout
      badge="Luxury Cab Goa"
      title="Premium Cab Service in"
      titleHighlight="Goa"
      description="Travel in style with Sandy Taxi luxury cab service. Premium vehicles, professional driver, and a seamless experience for weddings, honeymoons, special occasions and VIP transfers across Goa."
      icon={<Crown size={28} />}
    >

      {/* ── Vehicles ── */}
      <section className="section-pad bg-[#080810]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
              Our <span className="text-sandy-gold">Premium Fleet</span>
            </h2>
            <p className="text-white/45 text-base max-w-lg mx-auto">
              Well-maintained, clean and comfortable vehicles for every luxury occasion.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {VEHICLES.map(({ name, capacity, desc, accent }) => {
              const styles = VEHICLE_ACCENT[accent as keyof typeof VEHICLE_ACCENT];
              return (
                <div
                  key={name}
                  className={`card-dark p-7 flex flex-col gap-4 ${styles.border} transition-colors`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${styles.bg}`}>
                    <Crown size={22} className={styles.text} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg mb-1">{name}</h3>
                    <span className="badge-cyan text-[10px] py-0.5">{capacity}</span>
                  </div>
                  <p className="text-white/45 text-sm leading-relaxed flex-1">{desc}</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs py-2.5 justify-center"
                  >
                    Book {name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Occasions ── */}
      <section className="section-pad bg-night-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
              Perfect for Every{" "}
              <span className="text-sandy-gold">Special Occasion</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {OCCASIONS.map(({ icon: Icon, label, accent }) => {
              const styles = ACCENT_STYLES[accent as keyof typeof ACCENT_STYLES];
              return (
                <div
                  key={label}
                  className="card-dark p-5 flex flex-col items-center gap-3 text-center hover:border-sandy-gold/25 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${styles.bg}`}>
                    <Icon size={18} className={styles.text} />
                  </div>
                  <p className="text-white/65 text-sm font-medium">{label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section-pad bg-[#080810]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
              The <span className="text-sandy-gold">Sandy Taxi</span> Difference
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

    </ServicePageLayout>
  );
}