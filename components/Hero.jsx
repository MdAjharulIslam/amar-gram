
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { HeroPhoto } from "@/data/info";

const AUTOPLAY_MS = 3000;

const ArrowIcon = ({ direction = "right" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
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

const Hero = () => {
  const slides = HeroPhoto || [];
  const total = slides.length;

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);

  const goTo = useCallback(
    (i) => {
      if (!total) return;
      setIndex((i + total) % total);
    },
    [total]
  );

  const next = useCallback(() => {
    if (!total) return;
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    if (!total) return;
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  // Automatic Slider
  useEffect(() => {
    if (paused || total <= 1) return;

    const timer = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [index, paused, next, total]);

  // Mobile Swipe
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    const diff = e.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(diff) > 50) {
      diff < 0 ? next() : prev();
    }

    touchStartX.current = null;
    setPaused(false);
  };

  // Keyboard Navigation
  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  if (!total) return null;

  return (
    <section
      className="
        relative isolate w-full overflow-hidden
        bg-[#172D1D] text-white
        h-[65svh] min-h-[480px] max-h-[620px]
        sm:h-[75svh] sm:min-h-[550px]
        md:h-[92svh] md:min-h-[760px] md:max-h-[950px]
        touch-pan-y
      "
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onKeyDown={onKeyDown}
      aria-roledescription="carousel"
      aria-label="খলাপাড়া গ্রামের ছবি"
      tabIndex={0}
    >
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, i) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out motion-reduce:transition-none ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.image}
              alt={slide.name}
              fill
              priority={i === 0}
              sizes="100vw"
              quality={85}
              draggable={false}
              style={{
                objectPosition: slide.position || "center",
              }}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Mobile Gradient */}
      <div className="
        absolute inset-0 z-[1] md:hidden
        bg-gradient-to-t
        from-[#102719] via-[#102719]/65 to-[#102719]/10
      " />

      {/* Desktop Gradient */}
      <div className="
        absolute inset-0 z-[1] hidden md:block
        bg-gradient-to-r
        from-[#102719]/95 via-[#102719]/65 to-[#102719]/10
      " />

      <div className="
        absolute inset-0 z-[1] hidden md:block
        bg-gradient-to-t from-[#102719]/70
        via-transparent to-black/20
      " />

      {/* Decorative Glow */}
      <div className="
        pointer-events-none absolute right-[-100px] top-1/4
        z-[2] hidden h-80 w-80 rounded-full
        bg-[#D6B76A]/10 blur-[100px] md:block
      " />

      {/* Main Content */}
      <div className="
        relative z-10 mx-auto flex h-full w-full max-w-7xl
        items-end px-5 pb-24 pt-20
        sm:px-8 sm:pb-28
        md:items-center md:px-10 md:py-24
        lg:px-16
      ">
        <div className="w-full max-w-3xl">

          {/* Badge */}
          <div className="
            mb-3 inline-flex items-center gap-2
            rounded-full border border-white/25
            bg-white/10 px-3.5 py-1.5
            shadow-lg backdrop-blur-xl
            sm:mb-6 sm:px-4 sm:py-2
          ">
            <span className="h-2 w-2 rounded-full bg-[#E6D3A1]" />

            <span className="text-[11px] font-semibold tracking-wide text-white/95 sm:text-sm">
              আমাদের গ্রাম, আমাদের গর্ব
            </span>
          </div>

          {/* Heading */}
          <h1 className="
            text-[2rem] font-extrabold
            leading-[1.3] tracking-tight
            sm:text-5xl sm:leading-[1.25]
            md:text-6xl lg:text-7xl
          ">
            শেকড়ের টানে,
            <br />
            <span className="text-[#E6D3A1]">
              প্রিয় খলাপাড়া
            </span>
          </h1>

          {/* Description */}
          <p className="
            mt-3 max-w-[450px]
            text-xs leading-6 text-white/85
            sm:mt-5 sm:text-base sm:leading-8
            md:mt-6 md:max-w-xl md:text-lg md:leading-9
          ">
            সবুজ প্রকৃতি, মাটির মায়া আর মানুষের ভালোবাসায়
            গড়ে ওঠা আমাদের প্রিয় গ্রাম। জানুন খলাপাড়ার
            ইতিহাস, ঐতিহ্য ও মানুষের নানা তথ্য।
          </p>

          {/* Buttons */}
          <div className="
            mt-5 flex flex-col gap-2.5
            min-[380px]:flex-row
            sm:mt-8 sm:gap-4
          ">
            <a
              href="#about"
              className="
                group inline-flex min-h-11 items-center
                justify-center gap-2 rounded-xl
                bg-[#E6D3A1] px-5 py-3
                text-xs font-bold text-[#24432C]
                shadow-xl shadow-black/20
                transition duration-300
                hover:-translate-y-1 hover:bg-white
                sm:min-h-12 sm:px-7 sm:text-base
              "
            >
              গ্রাম সম্পর্কে জানুন
              <ArrowIcon />
            </a>

            <a
              href="#blood"
              className="
                inline-flex min-h-11 items-center
                justify-center gap-2.5 rounded-xl
                border border-white/40 bg-white/10
                px-5 py-3 text-xs font-semibold text-white
                backdrop-blur-lg transition duration-300
                hover:-translate-y-1 hover:bg-white/20
                sm:min-h-12 sm:px-7 sm:text-base
              "
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5 text-[#E6D3A1]"
              >
                <path d="M12 21s-8-4.5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.5-8 11-8 11Z" />
              </svg>

              জরুরি রক্তদাতা
            </a>
          </div>

          {/* Bottom Message */}
          <div className="
            mt-6 hidden items-center gap-3
            text-sm text-white/65 md:flex
          ">
            <span className="h-px w-10 bg-[#D6B76A]" />
            আমাদের পরিচয়, আমাদের ঐতিহ্য
          </div>
        </div>
      </div>

      {/* Desktop Arrows */}
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="আগের ছবি"
            className="
              absolute left-5 top-1/2 z-20 hidden
              h-12 w-12 -translate-y-1/2
              items-center justify-center rounded-full
              border border-white/30 bg-black/20
              text-white backdrop-blur-xl transition
              hover:scale-110 hover:bg-white hover:text-[#24432C]
              md:flex
            "
          >
            <ArrowIcon direction="left" />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="পরের ছবি"
            className="
              absolute right-5 top-1/2 z-20 hidden
              h-12 w-12 -translate-y-1/2
              items-center justify-center rounded-full
              border border-white/30 bg-black/20
              text-white backdrop-blur-xl transition
              hover:scale-110 hover:bg-white hover:text-[#24432C]
              md:flex
            "
          >
            <ArrowIcon />
          </button>
        </>
      )}

      {/* Bottom Slider Controls */}
      {total > 1 && (
        <div className="
          absolute bottom-6 left-0 right-0 z-20
          mx-auto flex max-w-7xl items-center
          justify-between px-5
          sm:bottom-7 sm:px-10 lg:px-16
        ">
          {/* Counter */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-[#E6D3A1] sm:text-2xl">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="h-px w-5 bg-white/40 sm:w-6" />

            <span className="text-xs text-white/65 sm:text-sm">
              {String(total).padStart(2, "0")}
            </span>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`${i + 1} নম্বর ছবি দেখুন`}
                aria-current={i === index ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === index
                    ? "w-7 bg-[#E6D3A1] sm:w-8"
                    : "w-2 bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Progress Indicator */}
      {total > 1 && (
        <div className="
          absolute bottom-0 left-0 z-20
          h-1 w-full bg-white/15
        ">
          <div
            className="h-full bg-[#E6D3A1] transition-all duration-700"
            style={{
              width: `${((index + 1) / total) * 100}%`,
            }}
          />
        </div>
      )}
    </section>
  );
};

export default Hero;
