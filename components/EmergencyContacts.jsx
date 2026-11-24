
"use client";

import { EmergencyContactsData } from "@/data/info";

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7a2 2 0 0 1 1.73 2.03z" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

export default function EmergencyContacts() {
  return (
    <section
      id="emergency-contacts"
      className="relative overflow-hidden bg-[#172D1D] px-4 py-16 text-white sm:px-6 sm:py-20 md:px-8 md:py-24"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#D6B76A]/10 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#D6B76A]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-300/20 bg-red-500/10 px-4 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-400" />
            </span>

            <span className="text-xs font-semibold tracking-wide text-[#F5D9D9] sm:text-sm">
              গুরুত্বপূর্ণ যোগাযোগ
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            জরুরি প্রয়োজনে
            <span className="mt-1 block text-[#E6D3A1]">
              পাশে আছি আমরা
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/65 sm:mt-5 sm:text-base sm:leading-8">
            খলাপাড়া ও আশপাশের এলাকার জরুরি প্রয়োজনে
            প্রয়োজনীয় যোগাযোগ নম্বরগুলো এখানে সংরক্ষিত রয়েছে।
            প্রয়োজনে সরাসরি কল করুন।
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">

          {EmergencyContactsData.map((contact, index) => (
            <div
              key={contact.id}
              className="
                group flex min-w-0 flex-col justify-between
                rounded-2xl border border-white/10
                bg-white/[0.06] p-5
                shadow-lg shadow-black/5
                backdrop-blur-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#E6D3A1]/40
                hover:bg-white/[0.10]
                sm:p-6
              "
            >
              <div>
                {/* Top Row */}
                <div className="mb-5 flex items-center justify-between gap-3">

                  <span className="rounded-lg border border-[#E6D3A1]/20 bg-[#E6D3A1]/10 px-3 py-1.5 text-[11px] font-semibold text-[#E6D3A1] sm:text-xs">
                    {contact.category}
                  </span>

                  <span className="text-xs font-bold tracking-widest text-white/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Contact Information */}
                <h3 className="break-words text-lg font-bold leading-snug text-white sm:text-xl">
                  {contact.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/55">
                  {contact.designation}
                </p>
              </div>

              {/* Divider */}
              <div className="my-5 border-t border-dashed border-white/15" />

              {/* Phone & Call Button */}
              <div className="flex flex-wrap items-center justify-between gap-3">

                <div className="flex min-w-0 items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E6D3A1]/10 text-[#E6D3A1]">
                    <PhoneIcon />
                  </div>

                  <span className="break-all text-sm font-semibold tracking-wide text-white/90 sm:text-base">
                    {contact.phone}
                  </span>
                </div>

                <a
                  href={`tel:${contact.phone}`}
                  aria-label={`${contact.name} কে কল করুন`}
                  className="
                    inline-flex min-h-11 shrink-0
                    items-center justify-center gap-2
                    rounded-xl bg-[#E6D3A1]
                    px-4 py-2.5
                    text-sm font-bold text-[#24432C]
                    shadow-lg shadow-black/10
                    transition-all duration-300
                    hover:bg-white hover:shadow-xl
                    active:scale-95
                  "
                >
                  <PhoneIcon />
                  কল করুন
                </a>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Notice */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-2xl border border-red-300/15 bg-red-500/[0.07] px-5 py-5 text-center sm:mt-10 sm:flex-row sm:text-left">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-400/10 text-red-300">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white">
              একটি সচেতনতামূলক অনুরোধ
            </h4>

            <p className="mt-1 text-xs leading-6 text-white/55 sm:text-sm">
              শুধুমাত্র প্রয়োজনের সময় যোগাযোগ করুন।
              জরুরি সেবার নম্বরগুলো অপ্রয়োজনে ব্যবহার করবেন না।
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 flex items-center justify-center gap-3 text-xs text-white/40 sm:mt-12 sm:text-sm">
          <span className="h-px w-8 bg-[#D6B76A]/50" />
          আমাদের গ্রাম, আমাদের দায়িত্ব
          <span className="h-px w-8 bg-[#D6B76A]/50" />
        </div>

      </div>
    </section>
  );
}
