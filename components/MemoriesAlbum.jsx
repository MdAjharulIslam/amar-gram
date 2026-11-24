
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { MemoriesData } from "@/data/info";

const categories = ["সব", "প্রকৃতি", "উৎসব", "অনুষ্ঠান", "স্মৃতি"];

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

export default function MemoriesAlbum() {
  const [activeCategory, setActiveCategory] = useState("সব");
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const filteredMemories =
    activeCategory === "সব"
      ? MemoriesData || []
      : (MemoriesData || []).filter(
          (album) => album.category === activeCategory
        );

  // Close Viewer
  const closeViewer = useCallback(() => {
    setSelectedAlbum(null);
    setActiveImage(0);
  }, []);

  // Next Image
  const nextImage = useCallback(() => {
    if (!selectedAlbum) return;

    setActiveImage(
      (prev) => (prev + 1) % selectedAlbum.memoryPhoto.length
    );
  }, [selectedAlbum]);

  // Previous Image
  const prevImage = useCallback(() => {
    if (!selectedAlbum) return;

    setActiveImage(
      (prev) =>
        (prev - 1 + selectedAlbum.memoryPhoto.length) %
        selectedAlbum.memoryPhoto.length
    );
  }, [selectedAlbum]);

  // Keyboard Navigation + Body Scroll Lock
  useEffect(() => {
    if (!selectedAlbum) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeViewer();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedAlbum, closeViewer, nextImage, prevImage]);

  if (!MemoriesData?.length) return null;

  return (
    <section
      id="memories"
      className="relative overflow-hidden bg-[#172D1D] px-4 py-16 text-white/95 sm:px-6 sm:py-20 md:px-8 md:py-28"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-[#E6D3A1]/10 blur-[100px] sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-[#52764e]/20 blur-[100px] sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:45px_45px] sm:[background-size:55px_55px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E6D3A1]/25 bg-white/[0.07] px-4 py-2 text-[11px] font-semibold tracking-wide text-white/95 shadow-lg backdrop-blur-xl sm:px-5 sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-[#E6D3A1] opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-[#E6D3A1]" />
            </span>
            আমাদের স্মৃতি, আমাদের গল্প
          </span>

          <h2 className="mt-5 text-[30px] font-extrabold leading-tight tracking-tight text-white/95 sm:mt-6 sm:text-4xl md:text-5xl">
            স্মৃতির{" "}
            <span className="bg-gradient-to-r from-[#E6D3A1] via-[#F5E8C6] to-[#C9A85D] bg-clip-text text-transparent">
              অ্যালবাম
            </span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#C9A85D] to-[#F5E8C6] sm:mt-5 sm:w-16" />

          <p className="mx-auto mt-4 max-w-2xl px-1 text-[13px] leading-7 text-white/75 sm:mt-5 sm:text-base sm:leading-8">
            গ্রামের হাসি, আনন্দ, উৎসব, ঐতিহ্য আর ভালোবাসার
            মুহূর্তগুলো ধরে রাখুক আমাদের স্মৃতির পাতায়।
            প্রতিটি ছবিতে লুকিয়ে আছে আমাদের গ্রামের একেকটি গল্প।
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`min-h-10 rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 active:scale-95 sm:min-h-11 sm:px-5 sm:text-sm ${
                  activeCategory === category
                    ? "border-[#E6D3A1] bg-[#E6D3A1] text-[#172D1D] shadow-[0_0_20px_rgba(230,211,161,0.15)]"
                    : "border-white/15 bg-white/[0.05] text-white/90 hover:border-[#E6D3A1]/60 hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Album Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {filteredMemories.map((album) => (
            <button
              key={album.id}
              type="button"
              onClick={() => {
                setSelectedAlbum(album);
                setActiveImage(0);
              }}
              aria-label={`${album.title} অ্যালবাম দেখুন`}
              className="group relative min-w-0 overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.055] p-[1px] text-left shadow-lg shadow-black/10 transition-all duration-500 active:scale-[0.99] hover:-translate-y-1 hover:border-[#E6D3A1]/50 hover:shadow-2xl hover:shadow-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6D3A1] sm:rounded-[26px] sm:hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-[21px] bg-[#1C3524] sm:rounded-[25px]">

                {/* Cover Image */}
                <div className="relative aspect-[1.35/1] w-full overflow-hidden sm:aspect-[1.2/1] lg:aspect-[1.22/1]">
                  <Image
                    src={album.coverPhoto}
                    alt={album.title}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out sm:group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#101E14] via-[#101E14]/10 to-black/20" />

                  {/* Category Badge */}
                  <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-[#172D1D]/75 px-3 py-1.5 text-[10px] font-semibold text-white/95 shadow-lg backdrop-blur-xl sm:gap-2 sm:px-3.5 sm:py-2 sm:text-xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E6D3A1]" />
                      {album.category}
                    </span>
                  </div>

                  {/* Photo Count */}
                  <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/45 px-3 py-1.5 text-[10px] font-semibold text-white/95 backdrop-blur-xl sm:right-4 sm:top-4 sm:gap-2 sm:py-2 sm:text-xs">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-3.5 w-3.5 text-[#E6D3A1] sm:h-4 sm:w-4"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="3" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="m21 15-5-5L5 21" />
                    </svg>
                    {album.memoryPhoto.length} টি
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <span className="text-[10px] font-medium tracking-[0.15em] text-[#E6D3A1] sm:text-xs">
                      MEMORY COLLECTION
                    </span>

                    <h3 className="mt-1.5 line-clamp-2 text-lg font-bold leading-snug text-white/95 sm:text-xl">
                      {album.title}
                    </h3>
                  </div>

                  {/* View Icon */}
                  <div className="absolute inset-0 hidden items-center justify-center opacity-0 transition-all duration-500 sm:flex sm:group-hover:opacity-100">
                    <div className="flex h-14 w-14 translate-y-3 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur-xl transition-transform duration-500 group-hover:translate-y-0">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-6 w-6"
                      >
                        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex min-w-0 items-center gap-2 text-xs font-medium text-[#E6D3A1] sm:text-sm">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        className="h-4 w-4 shrink-0"
                      >
                        <rect x="3" y="5" width="18" height="16" rx="2" />
                        <path d="M16 3v4M8 3v4M3 11h18" />
                      </svg>
                      <span className="truncate">{album.date}</span>
                    </span>

                    <span className="shrink-0 text-[9px] font-semibold tracking-wider text-white/40 sm:text-[10px]">
                      PHOTO ALBUM
                    </span>
                  </div>

                  <div className="my-4 h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent sm:my-5" />

                  <div className="flex items-center justify-between gap-2">
                    <span className="flex min-w-0 items-center gap-2 text-xs text-white/75 sm:text-sm">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          className="h-4 w-4 text-[#E6D3A1]"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="3" />
                          <path d="M7 14l3-3 3 3 2-2 3 3" />
                        </svg>
                      </span>
                      <span className="truncate">
                        {album.memoryPhoto.length} টি স্মৃতিময় ছবি
                      </span>
                    </span>

                    <span className="flex shrink-0 items-center gap-2 text-xs font-bold text-[#E6D3A1] sm:text-sm">
                      দেখুন
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E6D3A1]/30 bg-[#E6D3A1]/10 transition-all duration-300 sm:group-hover:border-[#E6D3A1] sm:group-hover:bg-[#E6D3A1] sm:group-hover:text-[#172D1D]">
                        <ArrowIcon />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Empty State */}
        {filteredMemories.length === 0 && (
          <div className="rounded-3xl border border-dashed border-white/20 bg-white/[0.04] px-4 py-14 text-center backdrop-blur-xl sm:py-16">
            <p className="text-base font-semibold text-white/95 sm:text-lg">
              এই ক্যাটাগরিতে এখনো কোনো স্মৃতি যোগ করা হয়নি।
            </p>
            <p className="mt-2 text-sm leading-7 text-white/65">
              নতুন ছবি খুব শিগগিরই যুক্ত করা হবে।
            </p>
          </div>
        )}

        {/* Bottom Message */}
        <div className="mt-12 text-center sm:mt-14">
          <div className="mx-auto mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#E6D3A1]/40 sm:w-10" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#E6D3A1]" />
            <span className="h-px w-8 bg-[#E6D3A1]/40 sm:w-10" />
          </div>

          <p className="text-xs italic tracking-wide text-white/65 sm:text-sm">
            "ছবির পাতায় বেঁচে থাকুক আমাদের গ্রামের গল্প"
          </p>
        </div>
      </div>

      {/* Full Screen Photo Viewer */}
      {selectedAlbum && (
        <div
          className="fixed inset-0 z-[99990] flex items-center justify-center overflow-y-auto bg-[#07110a]/[0.97] p-3 backdrop-blur-xl sm:p-5"
          onClick={closeViewer}
        >
          {/* Close Cross Button - Top Left */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              closeViewer();
            }}
            aria-label="Close photo viewer"
            className="fixed left-4 top-4 z-[99999] flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-300/60 bg-gray-300 text-white shadow-[0_4px_25px_rgba(220,38,38,0.65)] transition-all duration-300 hover:scale-110 hover:bg-gray-700 active:scale-95 sm:left-6 sm:top-6 sm:h-14 sm:w-14"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 sm:h-7 sm:w-7"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Viewer Content */}
          <div
            className="my-auto w-full max-w-5xl pt-14 sm:pt-16"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Album Heading */}
            <div className="mb-4 text-center sm:mb-5">
              <span className="text-[11px] font-semibold tracking-widest text-[#E6D3A1] sm:text-xs">
                {selectedAlbum.category}
              </span>

              <h3 className="mt-2 px-10 text-lg font-bold leading-snug text-white/95 sm:text-2xl">
                {selectedAlbum.title}
              </h3>

              <p className="mt-2 text-xs text-white/65 sm:text-sm">
                {selectedAlbum.date}
              </p>
            </div>

            {/* Main Image */}
            <div className="relative flex h-[52svh] min-h-[230px] max-h-[650px] w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/40 sm:h-[65vh] sm:rounded-2xl">
              <Image
                key={selectedAlbum.memoryPhoto[activeImage]}
                src={selectedAlbum.memoryPhoto[activeImage]}
                alt={`${selectedAlbum.title} - ছবি ${activeImage + 1}`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 90vw"
                className="object-contain"
              />

              {/* Previous and Next Buttons */}
              {selectedAlbum.memoryPhoto.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevImage}
                    aria-label="আগের ছবি"
                    className="absolute left-2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white/95 backdrop-blur-xl transition hover:border-[#E6D3A1] hover:bg-[#E6D3A1] hover:text-[#172D1D] sm:left-4 sm:h-12 sm:w-12"
                  >
                    <ArrowIcon direction="left" />
                  </button>

                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="পরের ছবি"
                    className="absolute right-2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white/95 backdrop-blur-xl transition hover:border-[#E6D3A1] hover:bg-[#E6D3A1] hover:text-[#172D1D] sm:right-4 sm:h-12 sm:w-12"
                  >
                    <ArrowIcon />
                  </button>
                </>
              )}
            </div>

            {/* Image Counter */}
            <div className="mt-4 text-center text-xs text-white/70 sm:text-sm">
              <span className="font-bold text-[#E6D3A1]">
                {String(activeImage + 1).padStart(2, "0")}
              </span>
              {" / "}
              {String(selectedAlbum.memoryPhoto.length).padStart(2, "0")}
            </div>

            {/* Thumbnail Gallery */}
            <div className="mx-auto mt-4 flex max-w-full justify-start gap-2 overflow-x-auto px-1 pb-3 sm:mt-5 sm:justify-center">
              {selectedAlbum.memoryPhoto.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`${index + 1} নম্বর ছবি দেখুন`}
                  aria-pressed={activeImage === index}
                  className={`relative h-14 w-[68px] shrink-0 overflow-hidden rounded-lg border-2 transition-all sm:h-16 sm:w-20 ${
                    activeImage === index
                      ? "border-[#E6D3A1] opacity-100 shadow-[0_0_15px_rgba(230,211,161,0.25)]"
                      : "border-white/20 opacity-50 hover:border-white/60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
