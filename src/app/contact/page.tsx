import type { Metadata } from "next";
import {
  Phone, MessageCircle, MapPin,
  Clock
} from "lucide-react";
import {
  SiInstagram,
  SiFacebook,
} from "@icons-pack/react-simple-icons";
import { BUSINESS, WHATSAPP_URL, CALL_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Sandy Taxi Service — Book a Cab in Goa",
  description:
    "Contact Sandy Taxi Service to book a cab in Goa. Call or WhatsApp +918793680513. Based in Candolim, North Goa. Available 24x7 for airport transfers, sightseeing and outstation trips.",
  alternates: {
    canonical: "https://www.sandytaxiservice.com/contact",
  },
  openGraph: {
    title: "Contact Sandy Taxi Service — Book a Cab in Goa",
    description:
      "Call or WhatsApp +918793680513 to book a cab in Goa. 24x7 available from Candolim.",
    url: "https://www.sandytaxiservice.com/contact",
  },
};

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: "Call Us",
    value: BUSINESS.phoneDisplay,
    sub: "Tap to call directly",
    href: CALL_URL,
    accent: "gold",
    external: false,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat & Book Instantly",
    sub: "Fastest way to confirm a ride",
    href: WHATSAPP_URL,
    accent: "cyan",
    external: true,
  },
  {
    icon: MapPin,
    label: "Our Location",
    value: `${BUSINESS.address.street}, ${BUSINESS.address.city}`,
    sub: `${BUSINESS.address.state} — ${BUSINESS.address.pin}`,
    href: `https://maps.google.com/?q=Sandy+Taxi+Service+Candolim+Goa`,
    accent: "pink",
    external: true,
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "24x7 — Every Day",
    sub: "Monday to Sunday, no holidays",
    href: null,
    accent: "gold",
    external: false,
  },
];

const ACCENT_STYLES = {
  gold: { bg: "bg-sandy-gold/10", text: "text-sandy-gold", border: "hover:border-sandy-gold/40" },
  cyan: { bg: "bg-goa-cyan/10",   text: "text-goa-cyan",   border: "hover:border-goa-cyan/40"   },
  pink: { bg: "bg-beach-pink/10", text: "text-beach-pink", border: "hover:border-beach-pink/40" },
};

interface ContactCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  sub: string;
  href: string | null;
  accent: string;
  external: boolean;
}

function ContactCard({ icon: Icon, label, value, sub, href, accent, external }: ContactCardProps) {
  const styles = ACCENT_STYLES[accent as keyof typeof ACCENT_STYLES];

  const inner = (
    <>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${styles.bg}`}>
        <Icon size={22} className={styles.text} />
      </div>
      <div>
        <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{label}</p>
        <p className="text-white font-display font-bold text-lg leading-snug mb-1">{value}</p>
        <p className="text-white/40 text-sm">{sub}</p>
      </div>
    </>
  );

  const baseClass = `card-dark p-8 flex items-start gap-5 transition-all duration-200 ${styles.border}`;

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={`${baseClass} cursor-pointer`}
      >
        {inner}
      </a>
    );
  }

  return (
    <div className={baseClass}>
      {inner}
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="bg-night-navy min-h-screen pt-24">

      {/* ── Page header ── */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(245,197,24,0.1) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(0,212,232,0.08) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-cyan mb-6 mx-auto">
            <Phone size={12} />
            Get in Touch
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-5">
            Contact{" "}
            <span className="text-sandy-gold">Sandy Taxi</span>
          </h1>
          <p className="text-white/55 text-lg leading-relaxed">
            Ready to book? Have a question about a route or fare?
            Reach out directly — we respond fast on WhatsApp.
          </p>
        </div>
      </section>

      {/* ── Contact cards ── */}
      <section className="section-pad bg-[#080810]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
            {CONTACT_ITEMS.map((item) => (
              <ContactCard key={item.label} {...item} />
            ))}
          </div>

          {/* ── Primary CTAs ── */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-10 py-4 justify-center"
            >
              <MessageCircle size={18} />
              Book on WhatsApp
            </a>
            <a href={CALL_URL} className="btn-outline text-base px-10 py-4 justify-center">
              <Phone size={18} />
              {BUSINESS.phoneDisplay}
            </a>
          </div>

          {/* ── Google Maps embed ── */}
          <div className="card-dark overflow-hidden">
            <div className="h-[3px] brand-gradient" />
            <div className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={16} className="text-beach-pink" />
                <span className="text-white/60 text-sm">
                  {BUSINESS.address.street}, {BUSINESS.address.city}, {BUSINESS.address.state}
                </span>
              </div>
              <div className="rounded-xl overflow-hidden">
                <iframe
                  title="Sandy Taxi Service Location — Candolim, Goa"
                  src="https://maps.google.com/maps?q=Candolim+Goa+India&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="380"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* ── Social ── */}
          <div className="text-center mt-12">
            <p className="text-white/30 text-sm mb-4">Follow us on social media</p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.instagram.com/sandyyy_chvn?utm_source=qr&igsh=MWducTdjbXV1dzIyMg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-beach-pink/10 border border-white/10 hover:border-beach-pink/30 text-white/50 hover:text-beach-pink transition-all text-sm"
              >
                <SiInstagram size={16} />
                Instagram
              </a>
              <a
                href="https://www.facebook.com/share/1LZNmg2toN/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-goa-cyan/10 border border-white/10 hover:border-goa-cyan/30 text-white/50 hover:text-goa-cyan transition-all text-sm"
              >
                <SiFacebook size={16} />
                Facebook
              </a>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}