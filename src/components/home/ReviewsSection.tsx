import { Star, Quote } from "lucide-react";
import { REVIEWS, BUSINESS } from "@/lib/constants";

export default function ReviewsSection() {
  return (
    <section className="section-pad bg-night-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="badge-pink mb-4 mx-auto inline-flex items-center gap-2 bg-beach-pink/10 border border-beach-pink/30 text-beach-pink text-xs font-medium px-3 py-1 rounded-full">
            <Star size={12} className="fill-beach-pink" />
            Real Reviews
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            What Our{" "}
            <span className="text-sandy-gold">Passengers Say</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-sandy-gold fill-sandy-gold" />
              ))}
            </div>
            {/* <span className="text-white/50 text-sm">
              <span className="text-white font-semibold">{BUSINESS.rating}</span> average ·{" "}
              <span className="text-white font-semibold">{BUSINESS.reviews}</span> Google reviews
            </span> */}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="card-dark p-6 flex flex-col gap-4 hover:border-beach-pink/30 transition-colors duration-200"
            >
              {/* Quote icon */}
              <Quote size={20} className="text-beach-pink/40" />

              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={13} className="text-sandy-gold fill-sandy-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/60 text-sm leading-relaxed flex-1">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                <div className="w-8 h-8 rounded-full bg-sandy-gold/10 border border-sandy-gold/20 flex items-center justify-center">
                  <span className="text-sandy-gold font-bold text-xs">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{review.name}</p>
                  <p className="text-white/30 text-xs">Google Review</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}