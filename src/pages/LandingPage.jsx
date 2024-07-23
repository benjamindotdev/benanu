import React from "react";
import Hero from "../components/Hero";
import LandingPageCarousel from "../components/LandingPageCarousel";

export default function LandingPage({ socials }) {
  return (
    <div className="">
      <section
        className="px-6 py-6"
        style={{
          backgroundImage: `url(https://one-more-tree.org/wp-content/uploads/2024/02/view-green-forest-trees-with-co2-870x563.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh", // adjust the height to your liking
        }}
      >
        <p className="text-8xl text-left px-7 text-white">
          Emissions visibility <br />
          for immediate
        </p>
        <p className="text-9xl px-7 text-white">
          <span className="text-9xl font-bold text-orange-500  "> impact</span>
        </p>
        <p className="absolute bottom-0 right-0 p-40 text-5xl 5text-right  px-12 text-white">
          This platform provides realtime <br />
          emissions data to make reliable <br />
          decisions.
        </p>
      </section>
      <LandingPageCarousel />
      <section>
        <h1 className="px-7">Global statistics</h1>
      </section>
      <div className="flex flex-col justify-center items-center gap-6">
        <Hero socials={socials} />
      </div>
    </div>
  );
}
