import { useThemeContext } from "../context/ThemeContext";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const { theme, setTheme } = useThemeContext();
  return (
    <div
      className="relative group"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <input
        type="checkbox"
        className={`toggle toggle-lg border-6 group-hover:border-primary group-hover:bg-primary ${
          theme === "light"
            ? "bg-dark [--tglbg:white]"
            : "bg-light [--tglbg:#1F2A13]"
        }`}
        checked={theme === "dark"}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
      <span className="flex flex-row justify-between px-1 absolute top-1 w-full">
        <MdOutlineLightMode className="text-light text-2xl" />
        <MdOutlineDarkMode className="text-dark text-2xl" />
      </span>
    </div>
  );
};

export default ThemeToggle;
