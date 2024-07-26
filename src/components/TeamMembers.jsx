import { useInfoContext } from "../context/InfoContext";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const TeamMembers = () => {
  const { founders } = useInfoContext();
  return (
    <div className="flex flex-col w-full justify-center mx-auto py-2">
      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {founders.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 w-full bg-white p-6 rounded-lg shadow-lg"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <div className="flex flex-row gap-6 justify-center">
              <a
                className="text-gray-600"
                href={member.github}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                className="text-gray-600"
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>

            {member.portfolio && (
              <a className="text-gray-600" href={"http://" + member.portfolio}>
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
