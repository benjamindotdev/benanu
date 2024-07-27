import { useInfoContext } from "../context/InfoContext";
import { useThemeContext } from "../context/ThemeContext";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import PageHeader from "./PageHeader";

const TeamMembers = () => {
  const { founders } = useInfoContext();
  const { theme } = useThemeContext();
  return (
    <div className="flex flex-col w-full justify-center mx-auto py-2">
      <PageHeader>Meet the Team</PageHeader>
      <div className="grid grid-cols-2 gap-8 w-full">
        {founders.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-4 w-full ${
              theme === "light" ? "bg-light2 text-dark" : "bg-dark2 text-light"
            } p-6 rounded-3xl shadow-lg`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-secondary hover:shadow-2xl"
            />
            <h3 className={`text-xl font-semibold text-accent`}>
              {member.name}
            </h3>
            <p className={``}>{member.role}</p>
            <div className="flex flex-row gap-6 justify-center">
              <a
                className="text-accent hover:text-primary"
                href={member.github}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={32} />
              </a>

              <a
                className="text-accent hover:text-primary"
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={32} />
              </a>
            </div>

            {member.portfolio && (
              <a
                className={`text-${
                  theme === "light" ? "dark" : "light"
                } hover:text-primary`}
                href={"http://" + member.portfolio}
              >
                {member.portfolio}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
