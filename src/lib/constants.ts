export const BUSINESS = {
  name:         "Sandy Taxi Service",
  tagline:      "Beach Sides Transportation 24x7",
  phone:        "8793680513",
  phoneDisplay: "+918793680513",
  whatsapp:     "918793680513",
  whatsappMsg:  "Hi Sandy, I'd like to book a taxi in Goa.",
  address: {
    street:   "Ordra, Candolim",
    city:     "Goa",
    state:    "Goa",
    pin:      "403515",
    country:  "India",
  },
  geo: {
    lat: 15.5189,
    lng: 73.7629,
  },
  hours:   "24x7 — Monday to Sunday",
  rating:  "5.0",
  reviews: 4,
} as const;

export const WHATSAPP_URL =
  `https://api.whatsapp.com/send?phone=${BUSINESS.whatsapp}&text=${encodeURIComponent(BUSINESS.whatsappMsg)}`;

export const CALL_URL = `tel:+${BUSINESS.whatsapp}`;

// ── Pricing ────────────────────────────────────────────────
export const RENTAL_PACKAGES = [
  {
    vehicle:    "Hatchback / Swift",
    capacity:   4,
    pkg4hr:     "₹2,000",
    pkg8hr:     "₹3,000",
    pkg12hr:    "₹4,000",
    extraKm:    "₹30",
    extraHr:    "₹300",
    nightCharge:"₹1000",
  },
  {
    vehicle:    "Ertiga / MUV",
    capacity:   7,
    pkg4hr:     "₹2,500",
    pkg8hr:     "₹3,500",
    pkg12hr:    "₹4,300",
    extraKm:    "₹32",
    extraHr:    "₹300",
    nightCharge:"₹1000",
  },
  {
    vehicle:    "Innova / Crysta",
    capacity:   8,
    pkg4hr:     "₹2,800",
    pkg8hr:     "₹4,200",
    pkg12hr:    "₹6,500",
    extraKm:    "₹35",
    extraHr:    "₹350",
    nightCharge:"₹1200",
  },
] as const;

export const OUTSTATION_ROUTES = [
  { from: "Goa", to: "Gokarna",     km: 151, price: "₹12,000 - 15,000"  },
  { from: "Goa", to: "Kolhapur",    km: 192, price: "₹12,000 - 15,000"  },
  { from: "Goa", to: "Miraj",       km: 208, price: "₹12,000 - 15,000"  },
  { from: "Goa", to: "Pune",        km: 454, price: "₹18,000 - 20,000" },
  { from: "Goa", to: "Mumbai",      km: 539, price: "₹25,000 - 30,000" },
  { from: "Goa", to: "Hyderabad",   km: 692, price: "₹30,000 - 35,000" },
  { from: "Goa", to: "Bangalore",   km: 560, price: "₹25,000 - 30,000" },
  { from: "Goa", to: "Mangalore",   km: 350, price: "₹15,000 - 18,000" },
  { from: "Goa", to: "Hampi",   km: 350, price: "₹18,000 - 20,000" }
] as const;

export const DUDHSAGAR_PRICES = [
  { vehicle: "Hatchback", price: "₹3,500" },
  { vehicle: "Sedan",     price: "₹3,800" },
  { vehicle: "SUV",       price: "₹4,000" },
] as const;

// ── Services list ───────────────────────────────────────────
export const SERVICES = [
  { slug: "airport-transfer",      label: "Airport Transfer"    },
  { slug: "goa-sightseeing-taxi",  label: "Goa Sightseeing"    },
  { slug: "outstation-taxi",       label: "Outstation Taxi"     },
  { slug: "corporate-taxi",        label: "Corporate Taxi"      },
  { slug: "luxury-cab-goa",        label: "Luxury Cab"          },
  { slug: "long-distance-taxi",    label: "Long Distance"       },
  { slug: "city-taxi-goa",         label: "City Taxi"           },
  { slug: "round-trip-taxi",       label: "Round Trip"          },
] as const;

// ── Reviews ─────────────────────────────────────────────────
export const REVIEWS = [
  {
    name:   "Amit Rathod",
    rating: 5,
    text:   "Very helpful guy and great service. Hired Sandy to help us go around for the day and it was nice!",
    date:   "2024-04-15",
  },
  {
    name:   "Kiran Rathod",
    rating: 5,
    text:   "Reliable taxi services. Well mannered driver, would definitely recommend.",
    date:   "2024-02-10",
  },
  {
    name:   "Avinash Chavan",
    rating: 5,
    text:   "Best service taxi in Goa. Highly recommended for anyone visiting.",
    date:   "2024-05-01",
  },
  {
    name:   "Kumar Yt",
    rating: 5,
    text:   "Easy booking process and professional friendly drivers. Truly excellent service!",
    date:   "2024-05-05",
  },
] as const;