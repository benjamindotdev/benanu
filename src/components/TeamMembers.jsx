const teamMembers = [
  {
    image: "https://ca.slack-edge.com/T075V6BQBRD-U0777UD9FKK-e19ba49cc10d-512",
    name: "Benjamin Elliott",
    role: "Senior Backend Developer",
  },
  {
    image:
      "https://media.licdn.com/dms/image/C4E03AQG-6fwOkKofTg/profile-displayphoto-shrink_800_800/0/1651685289139?e=1727308800&v=beta&t=yonrzcZQEokCKELpO71cneL2_C8SsI0d1OrxeiW5u-M",
    name: "Senanu Adjabeng",
    role: "Senior FrontEnd  Developer",
  },
];

const TeamMembers = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
