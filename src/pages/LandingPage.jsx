import LandingPageCarousel from "../components/LandingPageCarousel";
import ProgressiveCarousel from "../components/ProgressiveCarousel";
import WhyChooseUs from "../components/WhyChooseUs";
import TeamMembers from "../components/TeamMembers";
import HeroSection from "../components/HeroSection";

// Ensure the correct path for Swiper CSS

export default function LandingPage() {
  return (
    <div className="">
      <HeroSection />
      <section className="px-[10vw] py-[15vh] flex flex-col justify-between items-baseline h-full w-full z-10 top-0 absolute">
        <p className="text-6xl text-left text-white">
          Emissions visibility <br />
          for immediate <br />
          <span className="text-6xl font-bold text-orange-500"> impact</span>
        </p>
        <p className="text-2xl text-white mt-10 self-end">
          This platform provides real-time <br />
          emissions data to make reliable <br />
          decisions.
        </p>
      </section>

      <ProgressiveCarousel />
      {/* <LandingPageCarousel /> */}
      <WhyChooseUs />
      <TeamMembers />
    </div>
  );
}
