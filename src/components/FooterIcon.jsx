/* eslint-disable react/prop-types */
const FooterIcon = ({ link, children }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex flex-row gap-1 text-4xl text-light hover:text-primary"
    >
      {children}
    </a>
  );
};

export default FooterIcon;
