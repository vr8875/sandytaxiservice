import type { ReactNode } from "react";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { WHATSAPP_URL, CALL_URL, BUSINESS } from "@/lib/constants";

interface ServicePageLayoutProps {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  icon: ReactNode;
  children: ReactNode;
}

export default function ServicePageLayout({
  badge,
  title,
  titleHighlight,
  description,
  icon,
  children,
}: ServicePageLayoutProps) {
  return (
    <main className="bg-night-navy min-h-screen pt-24">

      {/* ── Hero banner ── */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(245,197,24,0.1) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(0,212,232,0.07) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-sandy-gold/10 border border-sandy-gold/20 flex items-center justify-center mx-auto mb-6 text-sandy-gold">
            {icon}
          </div>

          {/* Badge */}
          <span className="badge-gold mb-5 mx-auto">
            {badge}
          </span>

          {/* Title */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-5">
            {title}{" "}
            <span className="text-sandy-gold">{titleHighlight}</span>
          </h1>

          {/* Description */}
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
            <a
              href={CALL_URL}
              className="btn-outline text-base px-8 py-4 justify-center"
            >
              <Phone size={18} />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* ── Page-specific content ── */}
      {children}

      {/* ── Bottom CTA banner ── */}
      <section className="relative py-16 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #1a0a00 0%, #0D0D1A 50%, #001a1f 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -top-16 -left-16 w-56 h-56 rounded-full opacity-20 blur-3xl"
          style={{ background: "#F5C518" }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full opacity-15 blur-3xl"
          style={{ background: "#00D4E8" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-3">
            Ready to Book?
          </h2>
          <p className="text-white/40 text-base mb-8">
            WhatsApp us your pickup location and date — confirmed in minutes.
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
            <a
              href={CALL_URL}
              className="btn-outline text-base px-8 py-4 justify-center"
            >
              <Phone size={18} />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}