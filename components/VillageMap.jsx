
"use client";

import dynamic from "next/dynamic";

const VillageMapContent = dynamic(
  () => import("./VillageMapContent"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[500px] flex items-center justify-center">
        Loading Village Map...
      </div>
    ),
  }
);

export default function VillageMap() {
  return <VillageMapContent />;
}
