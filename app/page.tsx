import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import AboutTeaser from "@/components/home/AboutTeaser";
import ReservationTeaser from "@/components/home/ReservationTeaser";

// Page d'accueil — composition des 4 sections
export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <AboutTeaser />
      <ReservationTeaser />
    </>
  );
}
