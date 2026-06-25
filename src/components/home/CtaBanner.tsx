import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_URL, CALL_URL, BUSINESS } from "@/lib/constants";

export default function CtaBanner() {
  return (
    <section className="relative py-20 overflow-hidden">

      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #1a0a00 0%, #0D0D1A 40%, #001a1f 100%)",
        }}
        aria-hidden="true"
      />

      {/* Gold glow top-left */}
      <div
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-20 blur-3xl"
        style={{ background: "#F5C518" }}
        aria-hidden="true"
      />

      {/* Cyan glow bottom-right */}
      <div
        className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full opacity-15 blur-3xl"
        style={{ background: "#00D4E8" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <span className="badge-gold mb-6 mx-auto">
          Ready to ride?
        </span>

        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
          Book Your Taxi in{" "}
          <span className="text-sandy-gold">Goa</span>{" "}
          Right Now
        </h2>

        <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
          No app needed. Just WhatsApp or call us — your cab will be confirmed in minutes.
        </p>

        {/* Buttons */}
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

        {/* Trust line */}
        <p className="mt-8 text-white/25 text-sm flex items-center justify-center gap-2">
          <ArrowRight size={12} />
          24x7 · Fixed Fares · No Hidden Charges · All of Goa Covered
        </p>

      </div>
    </section>
  );
}