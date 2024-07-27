import { useThemeContext } from "../context/ThemeContext";

const reasons = [
  {
    icon: "🌍",
    title: "Eco-Friendly",
    description:
      "Our app helps you track and reduce your carbon footprint, contributing to a healthier planet.",
  },
  {
    icon: "🔒",
    title: "Secure Data",
    description:
      "We prioritize your privacy and security with advanced encryption and data protection measures.",
  },
  {
    icon: "📊",
    title: "Insightful Analytics",
    description:
      "Gain valuable insights into your carbon emissions with our detailed analytics and reports.",
  },
  {
    icon: "🤝",
    title: "Community Support",
    description:
      "Join a community of like-minded individuals committed to reducing their carbon footprint.",
  },
  {
    icon: "⚙️",
    title: "Customizable Features",
    description:
      "Tailor the app to your lifestyle with customizable options for tracking and reducing emissions.",
  },
  {
    icon: "🌱",
    title: "Sustainable Choices",
    description:
      "Discover sustainable alternatives and make eco-friendly decisions to further lower your impact.",
  },
];

const WhyChooseUs = () => {
  const { theme } = useThemeContext();
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-2 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-6 rounded-3xl shadow-lg text-center bg-${
              theme === "light" ? "light2" : "dark2"
            }`}
          >
            <div className="text-4xl mb-4">{reason.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-accent">
              {reason.title}
            </h3>
            <p className="">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
