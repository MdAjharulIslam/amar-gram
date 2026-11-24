import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#101F16] px-3 pb-9 pt-20 sm:px-5 sm:pb-12 sm:pt-28">
      {/* White / cream wave on top */}
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute left-0 top-0 h-10 w-full sm:h-16"
      >
        <path
          d="M0,0 H1440 V30 C1220,90 960,10 720,42 C480,74 240,78 0,28 Z"
          fill="#F5F1E5"
        />
        <path
          d="M0,28 C240,78 480,74 720,42 C960,10 1220,90 1440,30"
          fill="none"
          stroke="#E6D3A1"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />
      </svg>

      {/* Soft dotted texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(#E6D3A1 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Background glows */}
      <div className="pointer-events-none absolute left-1/2 top-12 h-64 w-80 -translate-x-1/2 rounded-full bg-[#E6D3A1]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-52 w-52 rounded-full bg-[#294A32]/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-4 h-48 w-48 rounded-full bg-[#B76E45]/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-8">
          {/* Facebook */}
          <div className="flex justify-center sm:justify-end">
            <Link
              href="https://www.facebook.com/sheikh.muhammad.ajharul.islam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook profile"
              className="group flex flex-col items-center gap-2"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#1877F2]/50 group-hover:bg-[#1877F2]/20 group-hover:shadow-lg group-hover:shadow-[#1877F2]/20 sm:h-12 sm:w-12">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 text-[#60A5FA] sm:h-7 sm:w-7"
                >
                  <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2v2.2H7.7V13h2.7v8h3.1Z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-white/75 transition-colors group-hover:text-[#E6D3A1] sm:text-sm">
                Facebook
              </span>
            </Link>
          </div>

          {/* Author */}
          <div className="flex min-w-0 flex-col items-center text-center">
            <div className="mb-3 rounded-full bg-gradient-to-br from-[#E6D3A1] via-[#F5F1E5] to-[#B76E45] p-[3px] shadow-xl shadow-black/40">
              <div className="relative h-[82px] w-[82px] overflow-hidden rounded-full bg-[#26392B] sm:h-[122px] sm:w-[122px]">
                <Image
                  src="/images/ajharul.png"
                  alt="Md Ajharul Islam"
                  fill
                  sizes="(max-width: 640px) 82px, 122px"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            <h3 className="whitespace-nowrap text-sm font-bold tracking-tight text-white sm:text-lg">
              Md Ajharul Islam
            </h3>

            <p className="mt-1 text-[8px] font-semibold tracking-[0.16em] text-[#E6D3A1] sm:text-[10px] sm:tracking-[0.22em]">
              CREATOR &amp; DEVELOPER
            </p>
          </div>

          {/* Instagram */}
          <div className="flex justify-center sm:justify-start">
            <Link
              href="https://www.instagram.com/Sheikh_Muhammad_Ajharul_Islam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="group flex flex-col items-center gap-2"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-pink-400/50 group-hover:bg-pink-500/20 group-hover:shadow-lg group-hover:shadow-pink-500/20 sm:h-12 sm:w-12">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-6 w-6 text-pink-300 sm:h-7 sm:w-7"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <span className="text-xs font-medium text-white/75 transition-colors group-hover:text-[#E6D3A1] sm:text-sm">
                Instagram
              </span>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-9 sm:mt-11">
          <div className="h-px bg-gradient-to-r from-transparent via-[#E6D3A1]/30 to-transparent" />
          <div className="pt-5 text-center">
            <p className="text-[10px] font-medium text-white/50 sm:text-xs">
              © {new Date().getFullYear()} Amar Gram. All rights reserved.
            </p>
            <p className="mt-2 text-[10px] text-white/40 sm:text-xs">
              Made with <span className="text-red-400">♥</span> for our village
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}