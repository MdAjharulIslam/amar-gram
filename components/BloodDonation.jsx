
"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { BloodDonors } from "@/data/info";

const shuffleArray = (array) => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    className="h-4 w-4">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.05 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    className="h-5 w-5">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    className="h-3.5 w-3.5">
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const ArrowIcon = ({ direction = "right" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    {direction === "left" ? (
      <path d="m15 18-6-6 6-6" />
    ) : (
      <path d="m9 18 6-6-6-6" />
    )}
  </svg>
);

export default function BloodDonation() {
  const sliderRef = useRef(null);
  const hasDragged = useRef(false);
  const dragStartX = useRef(0);
  const scrollStart = useRef(0);

  const [randomDonors, setRandomDonors] = useState([]);
  const [showAllDonors, setShowAllDonors] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setRandomDonors(shuffleArray(BloodDonors));
  }, []);

  const updateScrollButtons = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    setCanScrollLeft(slider.scrollLeft > 5);
    setCanScrollRight(
      slider.scrollLeft + slider.clientWidth < slider.scrollWidth - 5
    );
  }, []);

  useEffect(() => {
    updateScrollButtons();

    const slider = sliderRef.current;
    if (!slider) return;

    const observer = new ResizeObserver(updateScrollButtons);
    observer.observe(slider);

    slider.addEventListener("scroll", updateScrollButtons);

    return () => {
      observer.disconnect();
      slider.removeEventListener("scroll", updateScrollButtons);
    };
  }, [updateScrollButtons, randomDonors, showAllDonors]);

  const scrollSlider = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollBy({
      left: direction === "left" ? -slider.clientWidth * 0.8 : slider.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  const handleMouseDown = (e) => {
    if (showAllDonors) return;

    const slider = sliderRef.current;
    if (!slider) return;

    setIsDragging(true);
    hasDragged.current = false;
    dragStartX.current = e.pageX;
    scrollStart.current = slider.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging || showAllDonors) return;

    const slider = sliderRef.current;
    if (!slider) return;

    e.preventDefault();

    const distance = e.pageX - dragStartX.current;

    if (Math.abs(distance) > 5) {
      hasDragged.current = true;
    }

    slider.scrollLeft = scrollStart.current - distance;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const donors = randomDonors.length ? randomDonors : BloodDonors;

  return (
    <section
      id="blood-donation"
      className="relative overflow-hidden bg-[#102719] px-3 py-14 sm:px-5 sm:py-20 md:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-28 top-20 h-72 w-72 rounded-full bg-[#315B3C]/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-28 bottom-10 h-72 w-72 rounded-full bg-[#D6B76A]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-14">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#D6B76A]/30 bg-[#D6B76A]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[2px] text-[#E6D3A1] sm:text-xs">
            <HeartIcon />
            Humanity & Care
          </div>

          <h2 className="text-2xl font-bold leading-tight text-[#F5F1E5] sm:text-4xl md:text-5xl">
            রক্তদানে বাঁচুক প্রাণ,
            <span className="block text-[#D6B76A]">
              গড়ে উঠুক মানবতার বন্ধন
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-[#D5DDCE]/75 sm:mt-5 sm:text-base sm:leading-7">
            আপনার এক ব্যাগ রক্ত বাঁচাতে পারে একটি মূল্যবান জীবন।
            আসুন, রক্তদানে এগিয়ে আসি।
          </p>
        </div>

        {/* Banner */}
        <div className="group relative mb-10 overflow-hidden rounded-2xl border border-[#D6B76A]/20 shadow-xl sm:mb-16 sm:rounded-3xl">
          <div className="relative h-40 sm:h-64 md:h-80">
            <Image
              src="/images/blood-donation.jpg"
              alt="Blood Donation"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#102719]/95 via-[#102719]/70 to-transparent" />

            <div className="absolute inset-0 flex items-center px-4 sm:px-10 md:px-16">
              <div className="max-w-lg">
                <p className="mb-2 text-[9px] font-bold uppercase tracking-[2px] text-[#D6B76A] sm:text-xs sm:tracking-[3px]">
                  Donate Blood, Save Life
                </p>

                <h3 className="text-xl font-bold text-white sm:text-3xl md:text-4xl">
                  আপনার রক্তই হতে পারে
                  <span className="block text-[#E6D3A1]">
                    কারো নতুন জীবন
                  </span>
                </h3>

                <p className="mt-2 max-w-sm text-[10px] leading-5 text-white/75 sm:mt-4 sm:text-sm sm:leading-6">
                  জরুরি প্রয়োজনে রক্তদাতাদের সঙ্গে যোগাযোগ করুন।
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Donor heading */}
        <div className="mb-5 flex items-center justify-between gap-3 sm:mb-8">
          <div>
            <p className="mb-1 text-[9px] font-semibold uppercase tracking-[2px] text-[#D6B76A] sm:text-xs">
              Our Blood Donors
            </p>

            <h3 className="text-lg font-bold text-[#F5F1E5] sm:text-2xl md:text-3xl">
              আমাদের রক্তদাতাগণ
            </h3>
          </div>

          {!showAllDonors && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollSlider("left")}
                disabled={!canScrollLeft}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D6B76A]/30 text-[#E6D3A1] transition hover:bg-[#D6B76A] hover:text-[#102719] disabled:cursor-not-allowed disabled:opacity-30 sm:h-10 sm:w-10"
                aria-label="Previous donors"
              >
                <ArrowIcon direction="left" />
              </button>

              <button
                onClick={() => scrollSlider("right")}
                disabled={!canScrollRight}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D6B76A]/30 text-[#E6D3A1] transition hover:bg-[#D6B76A] hover:text-[#102719] disabled:cursor-not-allowed disabled:opacity-30 sm:h-10 sm:w-10"
                aria-label="Next donors"
              >
                <ArrowIcon />
              </button>
            </div>
          )}
        </div>

        {/* Donor slider */}
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className={
            showAllDonors
              ? "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
              : `flex gap-3 overflow-x-auto pb-4 scrollbar-hide sm:gap-5 ${
                  isDragging ? "cursor-grabbing select-none" : "cursor-grab"
                }`
          }
          style={
            showAllDonors
              ? {}
              : { scrollbarWidth: "none", msOverflowStyle: "none" }
          }
        >
          {donors.map((donor) => (
            <article
              key={donor.id}
              className={`group relative flex-shrink-0 overflow-hidden rounded-[18px] border border-[#D6B76A]/15 bg-gradient-to-br from-[#294A32] to-[#172D1D] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B76A]/60 hover:shadow-[0_12px_35px_rgba(0,0,0,0.3)] sm:rounded-[22px] ${
                showAllDonors
                  ? "w-full"
                  : "w-[76%] xs:w-[65%] sm:w-[46%] lg:w-[31.5%]"
              }`}
            >
              {/* Image */}
              <div className="relative h-[135px] overflow-hidden sm:h-[230px]">
                <Image
                  src={donor.image || "/images/default-user.png"}
                  alt={donor.name}
                  fill
                  draggable={false}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 76vw, (max-width: 1024px) 46vw, 31vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102719] via-transparent to-black/10" />

                {/* Blood group */}
                <div className="absolute right-2.5 top-2.5 flex h-11 w-11 flex-col items-center justify-center rounded-xl border border-[#E6D3A1]/60 bg-[#102719]/90 shadow-lg backdrop-blur-sm sm:right-4 sm:top-4 sm:h-[62px] sm:w-[62px] sm:rounded-2xl">
                  <span className="text-sm font-extrabold text-[#E6D3A1] sm:text-xl">
                    {donor.bloodGroup}
                  </span>
                  <span className="text-[7px] font-semibold uppercase tracking-wider text-white/60 sm:text-[9px]">
                    Blood
                  </span>
                </div>

                {/* Availability */}
                <div className="absolute bottom-2.5 left-2.5 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#102719]/85 px-2 py-1 backdrop-blur-sm sm:bottom-4 sm:left-4 sm:gap-2 sm:px-3 sm:py-1.5">
                  <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-full w-full rounded-full bg-green-400" />
                  </span>

                  <span className="text-[8px] font-semibold text-white sm:text-[10px]">
                    {donor.availability || "Available"}
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-3 sm:p-5">
                <h4 className="truncate text-sm font-bold text-[#F5F1E5] sm:text-lg">
                  {donor.name}
                </h4>

                <div className="mt-2 flex items-center gap-1.5 text-[10px] text-[#D5DDCE]/75 sm:text-xs">
                  <LocationIcon />
                  <span className="truncate">
                    {donor.location || "খলাপাড়া, নান্দাইল"}
                  </span>
                </div>

                {/* Phone */}
                <div className="mt-3 flex items-center gap-2 rounded-lg border border-white/10 bg-black/10 px-2.5 py-2 sm:mt-4 sm:rounded-xl sm:px-3 sm:py-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#D6B76A]/15 text-[#E6D3A1] sm:h-9 sm:w-9 sm:rounded-xl">
                    <PhoneIcon />
                  </span>

                  <div className="min-w-0">
                    <p className="text-[8px] text-[#D5DDCE]/50 sm:text-[10px]">
                      Contact Number
                    </p>
                    <p className="truncate text-[10px] font-semibold text-[#F5F1E5] sm:text-sm">
                      {donor.phone}
                    </p>
                  </div>
                </div>

                <div className="my-3 h-px bg-gradient-to-r from-transparent via-[#D6B76A]/30 to-transparent sm:my-4" />

                {/* Call button */}
                <a
                  href={`tel:${donor.phone}`}
                  onClick={(e) => {
                    if (hasDragged.current) e.preventDefault();
                  }}
                  className="flex min-h-9 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#D6B76A] to-[#E6D3A1] px-3 py-2 text-[10px] font-bold text-[#172D1D] shadow-md transition-all hover:brightness-110 active:scale-[0.98] sm:min-h-10 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-xs"
                >
                  <PhoneIcon />
                  যোগাযোগ করুন
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Show all / collapse */}
        {donors.length > 3 && (
          <div className="mt-5 text-center sm:mt-8">
            <button
              onClick={() => setShowAllDonors((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-[#D6B76A]/40 px-5 py-2 text-[11px] font-semibold text-[#E6D3A1] transition hover:bg-[#D6B76A] hover:text-[#102719] sm:px-7 sm:py-3 sm:text-sm"
            >
              {showAllDonors ? "কম দেখুন" : "সব রক্তদাতা দেখুন"}

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`h-4 w-4 transition-transform ${
                  showAllDonors ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 rounded-2xl border border-[#D6B76A]/20 bg-gradient-to-r from-[#294A32] to-[#172D1D] px-4 py-6 text-center sm:mt-16 sm:rounded-3xl sm:px-8 sm:py-10">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#D6B76A]/15 text-[#E6D3A1] sm:mb-4 sm:h-14 sm:w-14">
            <HeartIcon />
          </div>

          <h3 className="text-lg font-bold text-[#F5F1E5] sm:text-2xl">
            আপনিও কি রক্তদাতা হতে চান?
          </h3>

          <p className="mx-auto mt-2 max-w-lg text-[10px] leading-5 text-[#D5DDCE]/70 sm:text-sm sm:leading-6">
            মানবতার সেবায় এগিয়ে আসুন। আপনার তথ্য দিয়ে আমাদের রক্তদাতা তালিকায়
            যুক্ত হোন।
          </p>

          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#D6B76A] px-5 py-2.5 text-[11px] font-bold text-[#172D1D] transition hover:bg-[#E6D3A1] sm:mt-6 sm:px-7 sm:py-3 sm:text-sm"
          >
            রক্তদাতা হিসেবে যুক্ত হোন
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
