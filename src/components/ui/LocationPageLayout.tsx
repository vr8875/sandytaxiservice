import type { ReactNode } from "react";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { WHATSAPP_URL, CALL_URL, BUSINESS } from "@/lib/constants";

interface LocationPageLayoutProps {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  icon: ReactNode;
  areaName: string;
  children: ReactNode;
}

export default function LocationPageLayout({
  badge,
  title,
  titleHighlight,
  description,
  icon,
  areaName,
  children,
}: LocationPageLayoutProps) {
  return (
    <main className="bg-night-navy min-h-screen pt-24">

      {/* ── Hero banner ── */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 15% 50%, rgba(245,197,24,0.1) 0%, transparent 55%), radial-gradient(ellipse at 85% 50%, rgba(0,212,232,0.08) 0%, transparent 55%)",
          }}
          aria-hidden="true"
        />

        {/* Subtle horizontal line */}
        <div
          className="absolute top-1/2 left-0 right-0 h-px opacity-10"
          style={{ background: "linear-gradient(90deg, transparent, #F5C518, transparent)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-goa-cyan/10 border border-goa-cyan/20 flex items-center justify-center mx-auto mb-6 text-goa-cyan">
            {icon}
          </div>

          {/* Badge */}
          <span className="badge-cyan mb-5 mx-auto">
            <MapPin size={12} />
            {badge}
          </span>

          {/* H1 */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-5">
            {title}{" "}
            <span className="text-sandy-gold">{titleHighlight}</span>
          </h1>

          <p className="text-white/55 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            {description}
          </p>

          {/* CTAs */}
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

      {/* ── Page-specific content ── */}
      {children}

      {/* ── Google Maps embed ── */}
      <section className="section-pad bg-[#080810]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-2">
              We Operate Across{" "}
              <span className="text-sandy-gold">{areaName}</span>
            </h2>
            <p className="text-white/40 text-sm">
              Based in Candolim — reaching every corner of {areaName}
            </p>
          </div>
          <div className="card-dark overflow-hidden">
            <div className="h-[3px] brand-gradient" />
            <div className="p-5">
              <div className="rounded-xl overflow-hidden">
                <iframe
                  title={`Sandy Taxi Service — ${areaName}`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(areaName + " Goa India")}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="360"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="relative py-16 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #001a1f 0%, #0D0D1A 50%, #1a0a00 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-15 blur-3xl"
          style={{ background: "#00D4E8" }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full opacity-20 blur-3xl"
          style={{ background: "#F5C518" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-3">
            Need a Taxi in{" "}
            <span className="text-sandy-gold">{areaName}</span>?
          </h2>
          <p className="text-white/40 text-base mb-8">
            WhatsApp or call us — your cab is confirmed in minutes.
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