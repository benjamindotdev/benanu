import React from "react";
import ReactPlayer from "react-player";

import Video from "../assets/SeeO2.mp4";

export default function HeroSection() {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <div>
        <video
          src={Video}
          autoPlay
          playsInline
          loop
          muted
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
