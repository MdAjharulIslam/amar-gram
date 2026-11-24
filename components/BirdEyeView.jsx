
"use client";

import { useRef, useState } from "react";

export default function BirdEyeView() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleAudio = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section
      className="
        relative isolate overflow-hidden
        bg-[#172D1D] px-5 py-16 text-white
        sm:py-20 md:py-24
      "
    >
      {/* Background Decoration */}
      <div className="
        pointer-events-none absolute -right-20 top-10
        h-80 w-80 rounded-full
        bg-[#D6B76A]/10 blur-[100px]
      " />

      <div className="
        pointer-events-none absolute -bottom-20 -left-20
        h-80 w-80 rounded-full
        bg-green-500/10 blur-[100px]
      " />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 text-center md:mb-16">

          

          {/* Heading */}
          <h2 className="
            text-3xl font-extrabold tracking-tight
            sm:text-4xl md:text-5xl lg:text-6xl
          ">
            পাখির চোখে{" "}
            <span className="text-[#E6D3A1]">
              খলাপাড়া
            </span>
          </h2>

          {/* Description */}
          <p className="
            mx-auto mt-5 max-w-2xl
            text-sm leading-7 text-white/70
            sm:text-base sm:leading-8
          ">
            সবুজ প্রকৃতি, বিস্তীর্ণ ধানক্ষেত, মেঠোপথ আর
            চিরচেনা ঘরবাড়ি। আকাশ থেকে দেখা আমাদের
            প্রিয় খলাপাড়ার অপরূপ সৌন্দর্য।
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#D6B76A]" />
            <span className="text-xs font-medium tracking-wider text-[#E6D3A1]">
              A VIEW FROM ABOVE
            </span>
            <span className="h-px w-10 bg-[#D6B76A]" />
          </div>
        </div>

        {/* Video Layout */}
        <div className="
          mx-auto grid max-w-5xl
          items-center gap-10
          md:grid-cols-2 md:gap-16
        ">

          {/* Video */}
          <div className="mx-auto w-full max-w-[340px]">

            <div className="
              group relative overflow-hidden rounded-[28px]
              border border-white/20 bg-black
              shadow-2xl shadow-black/40
              ring-1 ring-[#D6B76A]/20
            ">

              <video
                ref={videoRef}
                className="
                  aspect-[9/16] w-full
                  object-cover
                "
                controls
                autoPlay
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
                poster="/images/khalapara-cover.jpg"
              >
                <source
                  src="/videos/khalapara.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              {/* Audio Button */}
              <button
                type="button"
                onClick={toggleAudio}
                aria-label={isMuted ? "Enable sound" : "Mute sound"}
                className="
                  absolute right-4 top-4 z-10
                  flex h-12 w-12 items-center
                  justify-center rounded-full
                  border border-white/30
                  bg-black/60 text-white
                  shadow-xl backdrop-blur-xl
                  transition duration-300
                  hover:scale-110 hover:bg-[#D6B76A]
                  hover:text-[#172D1D]
                "
              >
                {isMuted ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-6 w-6"
                  >
                    <path d="M11 5 6 9H2v6h4l5 4V5Z" />
                    <path d="m17 9 5 6m0-6-5 6" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-6 w-6"
                  >
                    <path d="M11 5 6 9H2v6h4l5 4V5Z" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                )}
              </button>

            </div>

            {/* Location */}
            <div className="
              mt-5 flex items-center justify-center
              gap-2 text-sm text-white/60
            ">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E6D3A1"
                strokeWidth="1.8"
                className="h-4 w-4"
              >
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>

              খলাপাড়া, নান্দাইল, ময়মনসিংহ
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left">

            <span className="
              inline-block rounded-lg
              border border-[#D6B76A]/30
              bg-[#D6B76A]/10 px-3 py-1.5
              text-xs font-semibold text-[#E6D3A1]
            ">
              OUR BEAUTIFUL VILLAGE
            </span>

            <h3 className="
              mt-5 text-2xl font-bold
              leading-relaxed sm:text-3xl md:text-4xl
            ">
              প্রকৃতির মাঝে
              <br />
              <span className="text-[#E6D3A1]">
                এক টুকরো ভালোবাসা
              </span>
            </h3>

            <p className="
              mt-5 text-sm leading-8
              text-white/65 sm:text-base
            ">
              খলাপাড়া শুধু একটি গ্রামের নাম নয়,
              এটি আমাদের শৈশব, স্মৃতি এবং ভালোবাসার
              ঠিকানা। এই গ্রামের প্রতিটি পথ, প্রতিটি
              সবুজ মাঠ আর প্রতিটি দৃশ্য আমাদের
              শেকড়ের কথা মনে করিয়ে দেয়।
            </p>

            {/* Highlights */}
            <div className="
              mt-8 grid grid-cols-2 gap-3
              text-left
            ">
              <div className="
                rounded-2xl border border-white/10
                bg-white/5 p-4 backdrop-blur-md
              ">
                <span className="text-2xl">🌾</span>
                <h4 className="mt-2 text-sm font-bold text-[#E6D3A1]">
                  সবুজ প্রকৃতি
                </h4>
                <p className="mt-1 text-xs leading-5 text-white/50">
                  মাঠ ও ফসলের সৌন্দর্য
                </p>
              </div>

              <div className="
                rounded-2xl border border-white/10
                bg-white/5 p-4 backdrop-blur-md
              ">
                <span className="text-2xl">🏡</span>
                <h4 className="mt-2 text-sm font-bold text-[#E6D3A1]">
                  গ্রামের জীবন
                </h4>
                <p className="mt-1 text-xs leading-5 text-white/50">
                  মানুষের ভালোবাসা ও ঐতিহ্য
                </p>
              </div>
            </div>

            {/* Bottom Message */}
            <div className="
              mt-8 flex items-center
              justify-center gap-3
              md:justify-start
            ">
              <span className="h-px w-10 bg-[#D6B76A]" />
              <span className="text-xs tracking-wide text-white/60">
                আমাদের পরিচয়, আমাদের ঐতিহ্য
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
