import { useState } from "react";

const ProgressiveCarousel = () => {
  const slides = [
    {
      image:
        "https://img.freepik.com/premium-photo/global-problem-car-exhaust-pollution-fuel-recycling-waste-air-smog-dirty-cars_1112342-2370.jpg?w=996",
      text: "Emmissions form cars reached an all time high of ....",
    },
    {
      image:
        "https://assets.lummi.ai/assets/QmXuPJQbmXLjHw6Jgd6FxdSP8QnVWF6p3YGHdurMw1RAzD?auto=format&w=1500",
      text: "Technological advancement in the railway sector has greatly reduced carbon emmissions.......",
    },
    {
      image:
        "https://assets.lummi.ai/assets/QmTcKszHJwWuWHSYkDbu1eRMbRQueUes5WTLZ9G2vieERx?auto=format&w=1500",
      text: "Emmissions from planes on the rise after the covid despite deliberate efforts to reduce this.....",
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

  return (
    <div className="relative w-3/4 mx-auto">
      <div className="overflow-hidden relative h-[300px]">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex items-center justify-center space-x-4 p-4"
            >
              <img
                src={slide.image}
                alt={slide.text}
                className="w-1/3 h-auto object-cover"
              />
              <div className="w-1/3">
                <h3 className="text-lg font-bold">{slide.text}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
      >
        &lt;
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
      >
        &gt;
      </button>
    </div>
  );
};

export default ProgressiveCarousel;
