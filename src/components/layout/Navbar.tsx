"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { CALL_URL, WHATSAPP_URL, BUSINESS } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Home",     href: "/"        },
  { label: "About",    href: "/about"   },
  { label: "Tariff",   href: "/tariff"  },
  { label: "Contact",  href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Airport Transfer",   href: "/services/airport-transfer"     },
  { label: "Goa Sightseeing",    href: "/services/goa-sightseeing-taxi" },
  { label: "Outstation Taxi",    href: "/services/outstation-taxi"      },
  { label: "Corporate Taxi",     href: "/services/corporate-taxi"       },
  { label: "Luxury Cab",         href: "/services/luxury-cab-goa"       },
  { label: "Long Distance",      href: "/services/long-distance-taxi"   },
  { label: "City Taxi",          href: "/services/city-taxi-goa"        },
  { label: "Round Trip",         href: "/services/round-trip-taxi"      },
];

export default function Navbar() {
  const [isOpen,      setIsOpen]      = useState(false);
  const [scrolled,    setScrolled]    = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-40
        transition-all duration-300
        ${scrolled
          ? "bg-night-navy/95 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-transparent"
        }
      `}
    >
      {/* Brand gradient top bar */}
      <div className="h-[3px] brand-gradient" />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" onClick={closeMenu} className="flex items-center gap-3">
            <Image
              src="/sandytaxiservice.png"
              alt="Sandy Taxi Service Goa"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <div className="leading-tight">
              <span className="block font-display font-extrabold text-sandy-gold text-base leading-none">
                Sandy Taxi
              </span>
              <span className="block text-white/50 text-[10px] tracking-widest uppercase">
                Goa
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  px-4 py-2 rounded-lg
                  text-white/70 hover:text-white
                  text-sm font-medium
                  transition-colors duration-150
                  hover:bg-white/5
                "
              >
                {link.label}
              </Link>
            ))}

            {/* Services dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className="
                  flex items-center gap-1
                  px-4 py-2 rounded-lg
                  text-white/70 hover:text-white
                  text-sm font-medium
                  transition-colors duration-150
                  hover:bg-white/5
                "
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesOpen && (
                <div
                  className="
                    absolute top-full left-0 mt-2
                    bg-card-dark border border-sandy-gold/10
                    rounded-xl shadow-xl shadow-black/40
                    py-2 w-52
                    z-50
                  "
                >
                  {SERVICE_LINKS.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setServicesOpen(false)}
                      className="
                        block px-4 py-2
                        text-sm text-white/70
                        hover:text-sandy-gold hover:bg-white/5
                        transition-colors duration-150
                      "
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href={CALL_URL}
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <Phone size={14} />
              {BUSINESS.phoneDisplay}
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2 px-5">
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden p-2 text-white/70 hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-night-navy/98 backdrop-blur-md border-t border-white/5 px-4 pb-6 pt-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block py-3 text-white/70 hover:text-white border-b border-white/5 text-sm"
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile services accordion */}
          <button
            onClick={() => setServicesOpen((v) => !v)}
            className="flex items-center justify-between w-full py-3 text-white/70 hover:text-white border-b border-white/5 text-sm"
          >
            Services
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
            />
          </button>

          {servicesOpen && (
            <div className="pl-4 pb-2">
              {SERVICE_LINKS.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={closeMenu}
                  className="block py-2 text-sm text-white/60 hover:text-sandy-gold"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          )}

          {/* Mobile CTAs */}
          <div className="flex flex-col gap-3 mt-4">
            <a href={CALL_URL} className="btn-outline justify-center">
              <Phone size={16} />
              {BUSINESS.phoneDisplay}
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center">
              Book on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}