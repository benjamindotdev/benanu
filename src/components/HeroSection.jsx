import Video from "../assets/SeeO2.mp4";
import { useThemeContext } from "../context/ThemeContext";

export default function HeroSection() {
  const { theme } = useThemeContext();
  return (
    <section className="relative w-full flex h-screen items-center justify-center">
      <video
        src={Video}
        autoPlay
        playsInline
        loop
        muted
        preload="none"
        className={`h-full w-full object-cover ${
          theme === "dark" ? "brightness-50" : "opacity-50"
        }`}
      />
    </section>
  );
}
