import LandingPageCarousel from "../components/LandingPageCarousel";

export default function LandingPage() {
  return (
    <div className="">
      <section
        className="px-6 py-6 flex flex-col justify-between items-baseline"
        style={{
          backgroundImage: `url(https://one-more-tree.org/wp-content/uploads/2024/02/view-green-forest-trees-with-co2-870x563.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh", // adjust the height to your liking
        }}
      >
        <p className="text-6xl text-left  text-white">
          Emissions visibility <br />
          for immediate <br />
          <span className="text-6xl font-bold text-orange-500  "> impact</span>
        </p>
        <p className="text-2xl  text-white mt-10 self-end">
          This platform provides realtime <br />
          emissions data to make reliable <br />
          decisions.
        </p>
      </section>
      <LandingPageCarousel />

      <section>
        <h1 className="px-7">Global statistics</h1>
      </section>
    </div>
  );
}
