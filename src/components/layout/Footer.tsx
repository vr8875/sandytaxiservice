import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import {
  SiInstagram,
  SiFacebook,
} from "@icons-pack/react-simple-icons";
import { BUSINESS, WHATSAPP_URL, CALL_URL } from "@/lib/constants";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Tariff", href: "/tariff" },
  { label: "Contact", href: "/contact" },
  { label: "Candolim Taxi", href: "/candolim-taxi" },
  { label: "North Goa Taxi", href: "/north-goa-taxi" },
  { label: "South Goa Taxi", href: "/south-goa-taxi" },
];

const SERVICE_LINKS = [
  { label: "Airport Transfer", href: "/services/airport-transfer" },
  { label: "Goa Sightseeing", href: "/services/goa-sightseeing-taxi" },
  { label: "Outstation Taxi", href: "/services/outstation-taxi" },
  { label: "Corporate Taxi", href: "/services/corporate-taxi" },
  { label: "Luxury Cab", href: "/services/luxury-cab-goa" },
  { label: "Dudhsagar Trip", href: "/destinations/dudhsagar-falls-taxi" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080810] border-t border-white/5">
      {/* Top gradient bar */}
      <div className="h-[3px] brand-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/sandytaxifavicon.png"
                alt="Sandy Taxi Service Goa"
                width={52}
                height={52}
                className="rounded-full"
              />
              <div>
                <span className="block font-display font-extrabold text-sandy-gold text-lg leading-none">
                  Sandy Taxi
                </span>
                <span className="block text-white/40 text-xs tracking-widest uppercase mt-1">
                  Goa
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Reliable, affordable cab service in Goa operating 24x7. Based in
              Candolim, serving all of North &amp; South Goa.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/sandyyy_chvn?utm_source=qr&igsh=MWducTdjbXV1dzIyMg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-beach-pink transition-colors"
              >
                <SiInstagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/1LZNmg2toN/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-goa-cyan transition-colors"
              >
                <SiFacebook size={18} />
              </a>
            </div>
          </div>

          {/* Col 2 — Quick links */}
          <div>
            <h3 className="text-white font-display font-bold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-white/50 hover:text-sandy-gold transition-colors group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h3 className="text-white font-display font-bold text-sm uppercase tracking-widest mb-5">
              Our Services
            </h3>
            <ul className="space-y-2">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-white/50 hover:text-sandy-gold transition-colors group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="text-white font-display font-bold text-sm uppercase tracking-widest mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={CALL_URL}
                  className="flex items-start gap-3 text-sm text-white/50 hover:text-sandy-gold transition-colors"
                >
                  <Phone
                    size={16}
                    className="mt-0.5 shrink-0 text-sandy-gold"
                  />
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-white/50 hover:text-goa-cyan transition-colors"
                >
                  <MessageCircle
                    size={16}
                    className="mt-0.5 shrink-0 text-goa-cyan"
                  />
                  WhatsApp us anytime
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/50">
                <MapPin size={16} className="mt-0.5 shrink-0 text-beach-pink" />
                <span>
                  {BUSINESS.address.street},<br />
                  {BUSINESS.address.city}, {BUSINESS.address.state}
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/50">
                <Clock size={16} className="mt-0.5 shrink-0 text-sandy-gold" />
                {BUSINESS.hours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © {year} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Candolim, Goa — 24x7 Taxi Service
          </p>
        </div>
      </div>
    </footer>
  );
}
