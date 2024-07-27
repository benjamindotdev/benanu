import { useState } from "react";
import { useThemeContext } from "../context/ThemeContext";

const ProgressiveCarousel = () => {
  const slides = [
    {
      image:
        "https://img.freepik.com/premium-photo/global-problem-car-exhaust-pollution-fuel-recycling-waste-air-smog-dirty-cars_1112342-2370.jpg?w=996",
      text: "Emissions from cars has reached an all time high",
    },
    {
      image:
        "https://assets.lummi.ai/assets/QmXuPJQbmXLjHw6Jgd6FxdSP8QnVWF6p3YGHdurMw1RAzD?auto=format&w=1500",
      text: "Technological advancement in the railway sector has greatly reduced carbon emissions",
    },
    {
      image:
        "https://assets.lummi.ai/assets/QmTcKszHJwWuWHSYkDbu1eRMbRQueUes5WTLZ9G2vieERx?auto=format&w=1500",
      text: "Emissions from planes on the rise after the covid despite deliberate efforts to reduce this",
    },
    // {
    //   image: "https://via.placeholder.com/150",
    //   text: "Fourth Slide",
    // },
    // {
    //   image: "https://via.placeholder.com/150",
    //   text: "Fifth Slide",
    // },
    // {
    //   image: "https://via.placeholder.com/150",
    //   text: "Sixth Slide",
    // },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const { theme } = useThemeContext();

  return (
    <div className="relative w-3/4 mx-auto ">
      <div className="overflow-hidden relative  w-full">
        <div
          className="flex transition-transform duration-500 w-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex flex-col gap-6 items-center justify-center p-4"
            >
              <img
                src={slide.image}
                alt={slide.text}
                className=" h-[300px] object-cover rounded-3xl"
              />
              <div className="">
                <h3 className="text-lg font-bold">{slide.text}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={goToPrevious}
        className={`absolute top-1/2 left-[-20px] text-3xl transform -translate-y-1/2 p-2   rounded-full hover:bg-accent text-${
          theme === "light" ? "dark" : "light"
        }`}
      >
        &lt;
      </button>
      <button
        onClick={goToNext}
        className={`absolute top-1/2 right-[-20px] text-3xl transform -translate-y-1/2 p-2    rounded-full hover:bg-accent text-${
          theme === "light" ? "dark" : "light"
        }`}
      >
        &gt;
      </button>
    </div>
  );
};

export default ProgressiveCarousel;
