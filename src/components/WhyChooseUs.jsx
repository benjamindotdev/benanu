import React from "react";

const reasons = [
  {
    icon: "🚀",
    title: "Fast Performance",
    description:
      "Our app is optimized for speed and efficiency, ensuring a smooth user experience.",
  },
  {
    icon: "🔒",
    title: "Secure",
    description:
      "We prioritize your security with advanced encryption and data protection measures.",
  },
  {
    icon: "👍",
    title: "User-Friendly",
    description:
      "An intuitive and easy-to-use interface makes our app accessible to everyone.",
  },
  {
    icon: "⚙️",
    title: "Customizable",
    description:
      "Tailor the app to your specific needs with a variety of customizable options.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Why Choose Our App
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <div className="text-4xl mb-4">{reason.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
            <p className="text-gray-600">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
