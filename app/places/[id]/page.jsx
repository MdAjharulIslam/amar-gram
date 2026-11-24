
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ImportantPlacesData } from "@/data/info";

export const instant = false;

export function generateStaticParams() {
  return ImportantPlacesData.map((place) => ({
    id: String(place.id),
  }));
}

export default async function PlaceDetailsPage({ params }) {
  const { id } = await params;

  const place = ImportantPlacesData.find(
    (item) => String(item.id) === id
  );

  if (!place) notFound();

  const gallery = place.details?.gallery?.filter(Boolean) || [];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8faf5]">

      {/* Hero Section */}
      <section className="relative flex min-h-[440px] h-[65vh] max-h-[720px] items-end overflow-hidden bg-[#172D1D] sm:min-h-[500px] sm:h-[65vh]">

        {place.image ? (
          <Image
            src={place.image}
            alt={place.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#36583A] via-[#294A32] to-[#172D1D]">
            <div className="text-center">
              <span className="text-5xl text-white/20">✦</span>
              <p className="mt-3 text-sm text-white/50">
                ছবি শীঘ্রই যুক্ত করা হবে
              </p>
            </div>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#102016] via-[#172D1D]/35 to-black/10" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-9 sm:px-8 sm:pb-12 md:px-12 md:pb-16">

          <Link
            href="/#important-places"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-lg transition hover:bg-white hover:text-[#172D1D] sm:mb-12 sm:text-sm"
          >
            <span>←</span>
            ফিরে যাও
          </Link>

          {place.subtitle && (
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[3px] text-[#E6D3A1] sm:text-sm">
              {place.subtitle}
            </p>
          )}

          <h1 className="max-w-4xl text-3xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {place.name}
          </h1>

          {place.details?.location && (
            <div className="mt-4 flex items-center gap-2 text-xs text-white/75 sm:text-sm">
              <span>⌖</span>
              <span>{place.details.location}</span>
            </div>
          )}
        </div>

        {/* Bottom Decoration */}
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#E6D3A1]/70 to-transparent" />
      </section>

      {/* Details Section */}
      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16 md:px-10 md:py-24">

        {/* Introduction */}
        {place.details?.introduction && (
          <div className="mb-12 sm:mb-16">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-8 w-1 rounded-full bg-[#B79B5B]" />
              <h2 className="text-xl font-bold text-[#172D1D] sm:text-2xl md:text-3xl">
                পরিচিতি
              </h2>
            </div>

            <p className="text-sm leading-8 text-gray-600 sm:text-base sm:leading-9">
              {place.details.introduction}
            </p>
          </div>
        )}

        {/* History */}
        {place.details?.history && (
          <div className="mb-12 sm:mb-16">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-8 w-1 rounded-full bg-[#B79B5B]" />
              <h2 className="text-xl font-bold text-[#172D1D] sm:text-2xl md:text-3xl">
                ইতিহাস ও ঐতিহ্য
              </h2>
            </div>

            <p className="text-sm leading-8 text-gray-600 sm:text-base sm:leading-9">
              {place.details.history}
            </p>
          </div>
        )}

        {/* Importance */}
        {place.details?.importance && (
          <div className="relative overflow-hidden rounded-2xl bg-[#172D1D] p-6 shadow-lg shadow-[#172D1D]/10 sm:rounded-3xl sm:p-9 md:p-11">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10" />
            <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full border border-white/10" />

            <div className="relative">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[3px] text-[#BFA875] sm:text-xs">
                Our Heritage
              </p>

              <h2 className="mb-5 text-xl font-bold text-[#E6D3A1] sm:text-2xl md:text-3xl">
                গুরুত্ব ও তাৎপর্য
              </h2>

              <p className="text-sm leading-8 text-white/75 sm:text-base sm:leading-9">
                {place.details.importance}
              </p>
            </div>
          </div>
        )}

        {/* Gallery */}
        {gallery.length > 0 && (
          <div className="mt-14 sm:mt-20">
            <div className="mb-7">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[3px] text-[#B79B5B] sm:text-xs">
                Memories of Khalapara
              </p>

              <h2 className="text-xl font-bold text-[#172D1D] sm:text-2xl md:text-3xl">
                ছবির গ্যালারি
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {gallery.map((photo, index) => (
                <div
                  key={index}
                  className="group relative h-60 overflow-hidden rounded-2xl bg-[#e5eadf] sm:h-72"
                >
                  <Image
                    src={photo}
                    alt={`${place.name} ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="mt-14 border-t border-[#172D1D]/10 pt-9 text-center sm:mt-20 sm:pt-12">
          <Link
            href="/#important-places"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#172D1D] px-7 py-3.5 text-sm font-semibold text-[#E6D3A1] shadow-lg shadow-[#172D1D]/10 transition hover:bg-[#294A32] sm:w-auto sm:px-9"
          >
            <span>←</span>
            সকল দর্শনীয় স্থান
          </Link>
        </div>

      </section>
    </main>
  );
}
