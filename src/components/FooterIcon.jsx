/* eslint-disable react/prop-types */
const FooterIcon = ({ link, icon, id }) => {
  return (
    <a
      id={id}
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`flex flex-row gap-1 text-4xl hover:text-primary`}
    >
      {icon}
    </a>
  );
};

export default FooterIcon;
