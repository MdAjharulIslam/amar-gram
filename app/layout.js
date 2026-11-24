import "leaflet/dist/leaflet.css";
import "./globals.css";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-bangla",
});

export const metadata = {
  title: "খলাপাড়া",
  description: "খলাপাড়া গ্রামের তথ্য, রক্তদাতা ও সম্মানিত ব্যক্তিবর্গ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className={hindSiliguri.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}