export default function LandingPageCarousel() {
  return (
    <section className="flex justify-center items-center h-[60vh] bg-primary">
      <div className="carousel carousel-center rounded-box">
        <div className="carousel-item mr-4 rounded-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            alt="Car emmissions"
            className="rounded-full"
          />
        </div>
        <div className="carousel-item mr-4 rounded-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            alt="Train"
            className="rounded-full"
          />
        </div>
        <div className="carousel-item mr-4 rounded-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            alt="Plane"
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
