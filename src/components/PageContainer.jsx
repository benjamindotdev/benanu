/* eslint-disable react/prop-types */
import { useThemeContext } from "../context/ThemeContext";

const PageContainer = ({ children }) => {
  const { theme } = useThemeContext();
  return (
    <section
      className={`px-6 pt-[10vh] py-[15vh] flex flex-col gap-6 justify-start items-center text-left  w-[600px] md:w-[800px] lg:e-[1000px] xl:w-[1200px]  h-[85vh] text-${
        theme === "light" ? "dark" : "light"
      }`}
    >
      {children}
    </section>
  );
};

export default PageContainer;
