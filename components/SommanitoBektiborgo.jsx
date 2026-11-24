
"use client";

import Image from "next/image";
import { SommanitoBektiborgo } from "@/data/info";

export default function SommanitoBektiborgoSection() {
  return (
    <section
      id="sommanito-bektiborgo"
      className="relative isolate w-full overflow-hidden bg-[#172D1D] px-4 py-14 text-white sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-28"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-[#D6B76A]/10 blur-[90px] sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#D6B76A]/10 blur-[100px] sm:h-96 sm:w-96" />

      <div className="relative mx-auto w-full max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">

          {/* Badge */}
          <div className="mb-4 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-2 shadow-lg backdrop-blur-xl sm:mb-5 sm:px-4">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#E6D3A1]" />

            <span className="text-[11px] font-semibold tracking-wide text-white/90 sm:text-sm">
              আমাদের গর্ব ও অনুপ্রেরণা
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-extrabold leading-[1.5] tracking-tight sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl">
            সম্মানিত ব্যক্তিবর্গ

            <span className="mt-1 block text-[#E6D3A1] sm:mt-2">
              খলাপাড়ার গর্ব
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-7 text-white/75 sm:mt-5 sm:text-base sm:leading-8 md:text-lg">
            যাঁদের কর্ম, আদর্শ, নেতৃত্ব ও অবদানে সমৃদ্ধ আমাদের
            প্রিয় খলাপাড়া। গ্রামের গর্বিত এই মানুষগুলোর প্রতি
            রইল আমাদের গভীর শ্রদ্ধা ও কৃতজ্ঞতা।
          </p>

          {/* Divider */}
          <div className="mt-6 flex items-center justify-center gap-3 sm:mt-7">
            <span className="h-px w-9 bg-[#D6B76A] sm:w-12" />
            <span className="h-2 w-2 rotate-45 bg-[#E6D3A1]" />
            <span className="h-px w-9 bg-[#D6B76A] sm:w-12" />
          </div>

          <p className="mt-3 text-[9px] tracking-[0.18em] text-white/45 sm:mt-4 sm:text-xs sm:tracking-[0.2em]">
            OUR RESPECTED PERSONALITIES
          </p>
        </div>

        {/* People Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">

          {SommanitoBektiborgo.map((person, index) => (
            <article
              key={person.id}
              className="group relative min-w-0 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.07] backdrop-blur-md transition-all duration-500 sm:rounded-3xl sm:hover:-translate-y-2 sm:hover:border-[#E6D3A1]/60 sm:hover:bg-white/[0.11] sm:hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
            >
              {/* Top Accent */}
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#D6B76A] to-transparent" />

              {/* Profile */}
              <div className="px-5 pt-7 sm:px-6 sm:pt-8">

                {/* Profile Image */}
                <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border-[3px] border-[#E6D3A1]/60 bg-white/10 shadow-[0_0_30px_rgba(214,183,106,0.12)] sm:h-36 sm:w-36 sm:border-4">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 640px) 112px, 144px"
                    className="object-cover transition-transform duration-700 sm:group-hover:scale-110"
                  />
                </div>

                {/* Person Information */}
                <div className="mt-5 text-center sm:mt-6">

                  <span className="text-[10px] font-semibold tracking-[0.16em] text-[#E6D3A1]/75 sm:text-xs sm:tracking-[0.2em]">
                    KHALAPARA · {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-2 break-words text-lg font-bold leading-relaxed text-white sm:mt-3 sm:text-xl md:text-2xl">
                    {person.name}
                  </h3>

                  <p className="mt-3 inline-block max-w-full break-words rounded-full border border-[#E6D3A1]/30 bg-[#E6D3A1]/10 px-3 py-1.5 text-[11px] font-semibold leading-5 text-[#E6D3A1] sm:px-4 sm:text-xs">
                    {person.designation}
                  </p>

                  <p className="mt-4 break-words text-[13px] leading-7 text-white/65 sm:mt-5 sm:text-sm">
                    {person.description}
                  </p>
                </div>
              </div>

              {/* Contributions */}
              <div className="mx-5 mb-6 mt-6 border-t border-dashed border-white/20 pt-5 sm:mx-6 sm:mb-7 sm:mt-7">

                <h4 className="mb-4 flex items-center gap-2 text-[13px] font-bold text-[#E6D3A1] sm:mb-5 sm:text-sm">
                  <span className="h-5 w-1 shrink-0 rounded-full bg-[#E6D3A1]" />
                  উল্লেখযোগ্য অবদান
                </h4>

                <ul className="space-y-2.5 sm:space-y-3">
                  {person.contributions.map((item, i) => (
                    <li
                      key={i}
                      className="flex min-w-0 items-start gap-2.5 text-[13px] leading-7 text-white/70 sm:gap-3 sm:text-sm"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E6D3A1]" />

                      <span className="min-w-0 break-words">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Accent */}
              <div className="h-1 w-0 bg-[#E6D3A1] transition-all duration-500 sm:group-hover:w-full" />
            </article>
          ))}

        </div>

        {/* Footer Message */}
        <div className="relative mt-10 overflow-hidden rounded-2xl border border-[#E6D3A1]/25 bg-white/[0.06] px-5 py-8 text-center backdrop-blur-md sm:mt-16 sm:rounded-3xl sm:px-10 sm:py-10 md:px-12">

          {/* Background Gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[#E6D3A1]/5 to-transparent" />

          <div className="relative">

            <span className="text-2xl text-[#E6D3A1] sm:text-3xl">
              ❝
            </span>

            <h3 className="mt-2 break-words text-lg font-bold leading-relaxed text-[#E6D3A1] sm:text-xl md:text-2xl">
              মানুষ বেঁচে থাকেন তাঁর কর্ম ও অবদানে
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-[13px] leading-7 text-white/65 sm:mt-4 sm:text-sm sm:leading-8">
              আমাদের গ্রামের গুণীজনদের জীবন, কর্ম ও অবদান
              নতুন প্রজন্মের জন্য অনুপ্রেরণা হয়ে থাকুক।
              তাঁদের প্রতি রইল বিনম্র শ্রদ্ধা।
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}
