import {
  ShieldCheck, Clock, Wallet,
  UserCheck, Star, Headphones,
} from "lucide-react";

const REASONS = [
  {
    icon: Clock,
    title: "24x7 Availability",
    desc: "Early morning flight? Late night arrival? We're always on call — no matter the hour.",
    accent: "gold",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Reliable",
    desc: "Verified driver, well-maintained vehicles, and a track record of on-time pickups across Goa.",
    accent: "cyan",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    desc: "Fixed fares, no hidden charges. What we quote is what you pay — every single time.",
    accent: "pink",
  },
  {
    icon: UserCheck,
    title: "Local Expert Driver",
    desc: "Sandy knows every road, beach, and shortcut in Goa. You get a guide, not just a driver.",
    accent: "gold",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    desc: "Consistently rated 5 stars by tourists and locals on Google for service and comfort.",
    accent: "cyan",
  },
  {
    icon: Headphones,
    title: "WhatsApp Booking",
    desc: "No app, no form. Just WhatsApp us and your cab is confirmed in minutes.",
    accent: "pink",
  },
];

const ICON_STYLES = {
  gold: { bg: "bg-sandy-gold/10", text: "text-sandy-gold" },
  cyan: { bg: "bg-goa-cyan/10",   text: "text-goa-cyan"   },
  pink: { bg: "bg-beach-pink/10", text: "text-beach-pink" },
};

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-[#080810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="badge-gold mb-4 mx-auto">
            Why Sandy Taxi
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Why Choose{" "}
            <span className="text-sandy-gold">Us</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Hundreds of happy tourists and locals trust Sandy Taxi for every ride in Goa.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map(({ icon: Icon, title, desc, accent }) => {
            const styles = ICON_STYLES[accent as keyof typeof ICON_STYLES];
            return (
              <div
                key={title}
                className="card-dark p-7 flex gap-5 group hover:scale-[1.01] transition-transform duration-200"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${styles.bg}`}>
                  <Icon size={22} className={styles.text} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-base mb-2">
                    {title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}