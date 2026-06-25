import Link from "next/link";
import { MapPin, Home, Phone } from "lucide-react";
import { CALL_URL, WHATSAPP_URL } from "@/lib/constants";

export default function NotFound() {
  return (
    <main className="bg-night-navy min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg">

        {/* Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "#F5C518" }}
          aria-hidden="true"
        />

        <div className="relative z-10">
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-sandy-gold/10 border border-sandy-gold/20 flex items-center justify-center mx-auto mb-6">
            <MapPin size={36} className="text-sandy-gold" />
          </div>

          {/* 404 */}
          <p className="font-display font-extrabold text-8xl text-sandy-gold/20 leading-none mb-2">
            404
          </p>

          <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4">
            Page Not Found
          </h1>

          <p className="text-white/45 text-base leading-relaxed mb-8">
            Looks like this road doesn&apos;t exist. Let&apos;s get you back on track.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/" className="btn-primary justify-center">
              <Home size={16} />
              Back to Home
            </Link>
            <a href={CALL_URL} className="btn-outline justify-center">
              <Phone size={16} />
              Call Us
            </a>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: "Tariff",         href: "/tariff"                        },
              { label: "Airport Taxi",   href: "/services/airport-transfer"     },
              { label: "Sightseeing",    href: "/services/goa-sightseeing-taxi" },
              { label: "Candolim Taxi",  href: "/candolim-taxi"                 },
              { label: "Contact",        href: "/contact"                       },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="badge-cyan text-xs hover:bg-goa-cyan/20 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}