import LandingPageCarousel from "../components/LandingPageCarousel";
import ProgressiveCarousel from "../components/ProgressiveCarousel";
import WhyChooseUs from "../components/WhyChooseUs";

// Ensure the correct path for Swiper CSS

export default function LandingPage() {
  return (
    <div className="">
      <section
        className="px-6 py-6 flex flex-col justify-between items-baseline"
        style={{
          backgroundImage: `url(https://one-more-tree.org/wp-content/uploads/2024/02/view-green-forest-trees-with-co2-870x563.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh", // Adjust the height to your liking
        }}
      >
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
