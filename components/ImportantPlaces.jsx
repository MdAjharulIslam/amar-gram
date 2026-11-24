
"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ImportantPlacesData } from "@/data/info";

export default function ImportantPlaces() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const places = ImportantPlacesData;

  // Detect active card
  const handleScroll = useCallback(() => {
    const container = sliderRef.current;

    if (!container) return;

    const cards = container.querySelectorAll("[data-place-card]");

    if (!cards.length) return;

    const containerLeft =
      container.getBoundingClientRect().left +
      container.clientLeft;

    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(
        card.getBoundingClientRect().left - containerLeft
      );

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  // Scroll only card slider
  const scrollToCard = (index) => {
    const container = sliderRef.current;

    if (!container) return;

    const cards = container.querySelectorAll("[data-place-card]");
    const targetCard = cards[index];

    if (!targetCard) return;

    const containerRect = container.getBoundingClientRect();
    const cardRect = targetCard.getBoundingClientRect();

    const scrollPosition =
      container.scrollLeft +
      cardRect.left -
      containerRect.left -
      container.clientLeft;

    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  // Scroll listener
  useEffect(() => {
    const container = sliderRef.current;

    if (!container) return;

    container.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <section
      id="important-places"
      className="relative overflow-hidden bg-[#172D1D] px-5 py-16 sm:py-20 md:py-28"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#D6C28D]/[0.06] blur-[100px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#D6C28D]/[0.05] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 text-center sm:mb-14 md:mb-20">

          <span className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#E6D3A1]/20 bg-white/[0.05] px-4 py-2 text-[9px] font-semibold uppercase tracking-[3px] text-[#E6D3A1] backdrop-blur-md sm:px-5 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E6D3A1]" />
            Discover Khalapara
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            গ্রামের{" "}
            <span className="text-[#E6D3A1]">
              দর্শনীয় স্থান
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-xs leading-7 text-white/60 sm:mt-5 sm:text-sm sm:leading-8 md:text-base">
            খলাপাড়ার প্রতিটি পরিচিত স্থান বহন করে আমাদের
            শৈশবের স্মৃতি, ঐতিহ্য, সংস্কৃতি ও ভালোবাসার গল্প।
          </p>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3 sm:mt-7">
            <span className="h-px w-10 bg-[#E6D3A1]/40" />
            <span className="h-2 w-2 rotate-45 border border-[#E6D3A1]" />
            <span className="h-px w-10 bg-[#E6D3A1]/40" />
          </div>
        </div>

        {/* Mobile / Tablet Slider */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-1 pb-5 scrollbar-hide sm:gap-5 lg:hidden"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            touchAction: "pan-x",
          }}
        >
          {places.map((place, index) => (
            <Link
              key={place.id}
              data-place-card
              href={`/places/${place.id}`}
              className="group w-[85%] min-w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl shadow-black/10 transition sm:w-[65%] sm:min-w-[65%] md:w-[48%] md:min-w-[48%]"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden sm:h-72">

                {place.image ? (
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    sizes="85vw"
                    draggable={false}
                    className="pointer-events-none object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#36583A] to-[#172D1D]">
                    <span className="text-sm text-white/50">
                      ছবি শীঘ্রই যুক্ত করা হবে
                    </span>
                  </div>
                )}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101D13] via-black/10 to-transparent" />

                <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 text-xs font-semibold text-white backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="pointer-events-none absolute bottom-5 left-5 right-5">

                  {place.subtitle && (
                    <span className="mb-2 inline-block rounded-full border border-[#E6D3A1]/30 bg-black/20 px-3 py-1 text-[9px] font-medium tracking-wider text-[#E6D3A1] backdrop-blur-md">
                      {place.subtitle}
                    </span>
                  )}

                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    {place.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">

                <p className="min-h-[70px] text-xs leading-7 text-white/60 sm:text-sm">
                  {place.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">

                  <span className="text-[10px] font-medium text-white/40 sm:text-xs">
                    খলাপাড়া, নান্দাইল
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full bg-[#E6D3A1] px-4 py-2 text-xs font-semibold text-[#172D1D] transition-all duration-300 group-hover:bg-white group-hover:gap-3">
                    বিস্তারিত
                    <span>→</span>
                  </span>

                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Slider Controls */}
        {places.length > 1 && (
          <div className="mt-5 flex items-center justify-between lg:hidden">

            {/* Dots */}
            <div className="flex items-center gap-2">
              {places.map((place, index) => (
                <button
                  key={place.id}
                  onClick={() => scrollToCard(index)}
                  aria-label={`স্থান ${index + 1}`}
                  aria-current={
                    activeIndex === index ? "true" : undefined
                  }
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-7 bg-[#E6D3A1]"
                      : "w-2 bg-white/25"
                  }`}
                />
              ))}
            </div>

            {/* Previous / Next */}
            <div className="flex gap-2">

              <button
                onClick={() =>
                  scrollToCard(Math.max(0, activeIndex - 1))
                }
                disabled={activeIndex === 0}
                aria-label="Previous place"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-[#E6D3A1] hover:text-[#172D1D] disabled:opacity-30"
              >
                ←
              </button>

              <button
                onClick={() =>
                  scrollToCard(
                    Math.min(places.length - 1, activeIndex + 1)
                  )
                }
                disabled={activeIndex === places.length - 1}
                aria-label="Next place"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-[#E6D3A1] hover:text-[#172D1D] disabled:opacity-30"
              >
                →
              </button>

            </div>
          </div>
        )}

        {/* Desktop Grid */}
        <div className="hidden gap-6 lg:grid lg:grid-cols-4">

          {places.map((place, index) => (
            <Link
              key={place.id}
              href={`/places/${place.id}`}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl shadow-black/10 transition-all duration-500 hover:-translate-y-2 hover:border-[#E6D3A1]/40 hover:bg-white/[0.07]"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">

                {place.image ? (
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    sizes="25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#36583A] to-[#172D1D]">
                    <span className="text-sm text-white/50">
                      ছবি শীঘ্রই যুক্ত করা হবে
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#101D13] via-black/10 to-transparent opacity-90" />

                <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 text-xs font-semibold tracking-wider text-white backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="absolute bottom-5 left-5 right-5">

                  {place.subtitle && (
                    <span className="mb-2 inline-block rounded-full border border-[#E6D3A1]/30 bg-black/20 px-3 py-1 text-[10px] font-medium tracking-wider text-[#E6D3A1] backdrop-blur-md">
                      {place.subtitle}
                    </span>
                  )}

                  <h3 className="text-2xl font-bold text-white">
                    {place.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">

                <p className="min-h-[84px] text-sm leading-7 text-white/60">
                  {place.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">

                  <span className="text-xs font-medium tracking-wide text-white/40">
                    খলাপাড়া, নান্দাইল
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full bg-[#E6D3A1] px-4 py-2 text-xs font-semibold text-[#172D1D] transition-all duration-300 group-hover:bg-white group-hover:gap-3">
                    বিস্তারিত
                    <span>→</span>
                  </span>

                </div>
              </div>
            </Link>
          ))}

        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center sm:mt-16 sm:pt-9">

          <p className="text-xs italic leading-7 text-[#E6D3A1]/80 sm:text-sm md:text-base">
            &quot;শুধু কিছু স্থান নয়, এগুলো আমাদের শেকড়,
            স্মৃতি আর ভালোবাসার এক একটি গল্প।&quot;
          </p>

          <p className="mt-3 text-[9px] font-medium uppercase tracking-[3px] text-white/30 sm:text-[10px] sm:tracking-[4px]">
            Our Home · Our Khalapara
          </p>

        </div>

      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
