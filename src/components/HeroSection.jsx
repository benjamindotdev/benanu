import Video from "../assets/SeeO2.mp4";

export default function HeroSection() {
  return (
    <section className="relative w-full flex h-screen items-center justify-center">
      <video
        src={Video}
        autoPlay
        playsInline
        loop
        muted
        preload="none"
        className="h-full w-full object-cover brightness-50"
      />
    </section>
  );
}
