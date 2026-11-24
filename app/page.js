import AboutVillage from "@/components/About";
import BirdEyeView from "@/components/BirdEyeView";
import BloodDonation from "@/components/BloodDonation";
import EmergencyContacts from "@/components/EmergencyContacts";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ImportantPlaces from "@/components/ImportantPlaces";
import MemoriesAlbum from "@/components/MemoriesAlbum";
import Navbar from "@/components/Navbar";
import SommanitoBektiborgoSection from "@/components/SommanitoBektiborgo";
import VillageMap from "@/components/VillageMap";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <BirdEyeView />
      <AboutVillage />
      <ImportantPlaces />
      <SommanitoBektiborgoSection />
      <BloodDonation />
      <EmergencyContacts />
      <MemoriesAlbum />
      <VillageMap />
      <Footer />
    </div>
  );
}