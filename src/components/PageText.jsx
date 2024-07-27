/* eslint-disable react/prop-types */
import { useThemeContext } from "../context/ThemeContext";
const PageText = ({ children }) => {
  const { theme } = useThemeContext();
  return (
    <p
      className={`text-lg text-light font-serif tracking-wide text-${
        theme === "light" ? "dark" : "light"
      }`}
    >
      {children}
    </p>
  );
};

export default PageText;
