
"use client";

import { useState } from "react";
import Image from "next/image";

const details = [
  {
    title: "শিক্ষা ও জ্ঞানচর্চা",
    text: "গ্রামের শিক্ষাপ্রতিষ্ঠান ও মাদ্রাসাগুলো নতুন প্রজন্মের জ্ঞান, নৈতিকতা ও মানবিক মূল্যবোধ গঠনে ভূমিকা রাখছে। আছিয়া আক্তার কওমী মহিলা মাদ্রাসাসহ স্থানীয় শিক্ষা প্রতিষ্ঠানগুলো গ্রামের শিক্ষা ও ধর্মীয় পরিবেশের অংশ।",
  },
  {
    title: "ধর্মীয় ও সামাজিক ঐতিহ্য",
    text: "বাইতুস সালাম জামে মসজিদ, ঈদগাহ মাঠ এবং ধর্মীয় শিক্ষাপ্রতিষ্ঠান গ্রামের সামাজিক ও ধর্মীয় জীবনের পরিচিত অংশ। বিভিন্ন ধর্মীয় ও সামাজিক অনুষ্ঠানে মানুষের সম্মিলন পারস্পরিক বন্ধনকে আরও দৃঢ় করে।",
  },
  {
    title: "স্বাস্থ্যসেবা ও জনকল্যাণ",
    text: "খলাপাড়া কমিউনিটি ক্লিনিক স্থানীয় মানুষের প্রাথমিক স্বাস্থ্যসেবা পাওয়ার একটি গুরুত্বপূর্ণ প্রতিষ্ঠান। জনসচেতনতা ও সামাজিক সহযোগিতার মাধ্যমে একটি সুস্থ সমাজ গড়ে তোলার প্রত্যাশা রয়েছে।",
  },
  {
    title: "আমাদের ভবিষ্যৎ",
    text: "উন্নত শিক্ষা, স্বাস্থ্যসেবা, যোগাযোগ, পরিচ্ছন্ন পরিবেশ এবং তরুণ প্রজন্মের অংশগ্রহণের মাধ্যমে খলাপাড়াকে একটি আদর্শ ও সমৃদ্ধ গ্রাম হিসেবে গড়ে তোলাই আমাদের প্রত্যাশা।",
  },
];

export default function AboutVillage() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      className="relative isolate scroll-mt-16 overflow-hidden bg-[#172D1D] px-4 py-16 sm:px-6 md:scroll-mt-[68px] md:py-24 lg:px-8"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E6D3A1]/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#294A32]/40 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E6D3A1]/[0.03] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">

          {/* Image Section */}
          <div className="relative mb-6 lg:mb-0">

            {/* Gold Offset Frame */}
            <div className="absolute -left-3 -top-3 hidden h-full w-full rounded-3xl border-2 border-[#D6B76A]/50 sm:block" />

            {/* Main Image */}
            <div className="relative h-[300px] overflow-hidden rounded-3xl border border-[#E6D3A1]/40 shadow-2xl shadow-black/30 sm:h-[400px] md:h-[480px]">
              <Image
                src="/images/path.jpeg"
                alt="খলাপাড়া গ্রামের দৃশ্য"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-110"
              />

              {/* Dark Image Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102719]/70 via-[#102719]/10 to-transparent" />

              {/* Image Bottom Label */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/20 bg-[#102719]/50 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#E6D3A1]" />
                Our Beloved Village
              </div>
            </div>

            {/* Floating Identity Card */}
            <div className="absolute -bottom-6 right-4 rounded-2xl border border-[#E6D3A1]/30 bg-[#102719] px-5 py-4 text-white shadow-xl shadow-black/30 sm:px-6 sm:py-5 lg:-right-4">
              <p className="flex items-center gap-2 text-xs text-[#F5F1E5]/70 sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-[#E6D3A1]" />
                আমাদের পরিচয়
              </p>

              <h3 className="mt-1 text-xl font-bold text-[#E6D3A1] sm:text-2xl">
                প্রিয় খলাপাড়া
              </h3>
            </div>
          </div>

          {/* Content Section */}
          <div>

            {/* Badge */}
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E6D3A1]/30 bg-[#294A32] px-4 py-2 text-sm font-semibold text-[#E6D3A1]">
              <span className="h-2 w-2 rounded-full bg-[#E6D3A1]" />
              আমাদের সম্পর্কে
            </span>

            {/* Heading */}
            <h2 className="mb-3 text-3xl font-extrabold leading-snug text-[#F5F1E5] md:text-4xl">
              আমাদের গ্রাম,
              <span className="text-[#E6D3A1]">
                {" "}আমাদের অহংকার
              </span>
            </h2>

            {/* Gold Underline */}
            <div className="mb-6 flex items-center gap-2">
              <span className="h-1 w-14 rounded-full bg-[#E6D3A1]" />
              <span className="h-1 w-3 rounded-full bg-[#D6B76A]/50" />
            </div>

            {/* Main Description */}
            <div className="space-y-4 text-[15px] leading-8 text-[#E8E5D9]/85 sm:text-base">
              <p>
                ময়মনসিংহ জেলার নান্দাইল উপজেলার রাজগাতী
                এলাকার একটি পরিচিত জনপদ খলাপাড়া।
                প্রাকৃতিক পরিবেশ, গ্রামীণ জীবনযাত্রা,
                মানুষের আন্তরিকতা এবং পারস্পরিক সহযোগিতায়
                গড়ে উঠেছে আমাদের প্রিয় এই গ্রাম।
              </p>

              <p>
                খলাপাড়া শুধু একটি গ্রামের নাম নয়; এটি
                আমাদের শৈশব, স্মৃতি, আবেগ, ভালোবাসা এবং
                শেকড়ের পরিচয়। গ্রামের প্রতিটি পথ,
                পরিচিত মুখ এবং সামাজিক বন্ধনের সঙ্গে
                জড়িয়ে রয়েছে অসংখ্য মানুষের জীবনের গল্প।
              </p>
            </div>

            {/* Expandable Content */}
            <div
              id="about-more"
              aria-hidden={!expanded}
              className={`grid transition-all duration-500 ease-in-out ${
                expanded
                  ? "mt-6 grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="space-y-4">

                  {details.map((item, index) => (
                    <div
                      key={item.title}
                      className="group rounded-r-xl border-l-4 border-[#D6B76A] bg-[#294A32]/70 py-3 pl-4 pr-3 shadow-sm transition-all duration-300 hover:bg-[#294A32]"
                    >
                      <h3 className="font-bold text-[#E6D3A1] transition-colors group-hover:text-[#F5F1E5]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[15px] leading-8 text-[#F5F1E5]/80">
                        {item.text}
                      </p>
                    </div>
                  ))}

                  {/* Closing Message */}
                  <p className="pt-2 font-bold text-[#E6D3A1]">
                    খলাপাড়া আমাদের পরিচয়, আমাদের গর্ব,
                    আমাদের শেকড়।
                  </p>
                </div>
              </div>
            </div>

            {/* See More / See Less Button */}
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded}
              aria-controls="about-more"
              className="mt-7 inline-flex items-center gap-3 rounded-xl border border-[#E6D3A1]/30 bg-[#E6D3A1] px-7 py-3.5 text-sm font-bold text-[#172D1D] shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#F5F1E5] hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6D3A1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#172D1D]"
            >
              {expanded ? "কম দেখুন" : "আরও পড়ুন"}

              <svg
                className={`h-4 w-4 transition-transform duration-300 ${
                  expanded ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  d="m6 9 6 6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
