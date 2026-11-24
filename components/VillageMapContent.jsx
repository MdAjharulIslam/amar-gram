
"use client";

export default function VillageMap() {
  const latitude = 24.5737824;
  const longitude = 90.803504;

  return (
    <section
      id="village-map"
      className="bg-[#102719] py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-[#D6B76A] text-xs sm:text-sm tracking-[0.25em] uppercase font-medium">
            Our Location
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mt-3 leading-snug">
            আমাদের গ্রামের ভৌগোলিক পরিচয়
          </h2>

          <p className="text-white/60 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            নান্দাইল, ময়মনসিংহের প্রিয় খলাপাড়া
          </p>
        </div>

        {/* Google Satellite Map */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D6B76A]/30 shadow-[0_15px_50px_rgba(0,0,0,0.3)]">

          <iframe
            title="খলাপাড়া গ্রামের Satellite Map"
            src={`https://maps.google.com/maps?q=${latitude},${longitude}&t=k&z=17&output=embed`}
            width="100%"
            height="100%"
            className="block w-full h-[350px] sm:h-[430px] md:h-[500px] lg:h-[550px]"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>

        {/* Location Information */}
        <div className="mt-5 sm:mt-7 bg-[#183523] border border-white/10 rounded-2xl p-5 sm:p-6">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">

            {/* Location Details */}
            <div className="flex items-start gap-3">

              <div className="w-11 h-11 shrink-0 rounded-full bg-[#D6B76A]/10 flex items-center justify-center text-[#D6B76A]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>

              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl text-[#E6D3A1] font-semibold">
                  খলাপাড়া
                </h3>

                <p className="text-white/60 text-sm mt-1 leading-relaxed">
                  নান্দাইল, ময়মনসিংহ, বাংলাদেশ
                </p>

                <p className="text-white/40 text-xs sm:text-sm mt-2 font-mono break-all">
                  {latitude}° N, {longitude}° E
                </p>
              </div>

            </div>

            {/* Google Maps Button */}
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#D6B76A] text-[#102719] text-sm font-bold hover:bg-[#E6D3A1] active:scale-[0.98] transition-all duration-300"
            >
              Google Maps-এ দেখুন

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
