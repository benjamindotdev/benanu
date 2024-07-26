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
          <span className="text-9xl font-bold text-secondary"> impact</span>
        </p>
        <p className="text-5xl text-white mt-10 self-end">
          This platform provides real-time <br />
          emissions data to make reliable <br />
          decisions.
        </p>
      </section>
    </div>
  );
}
