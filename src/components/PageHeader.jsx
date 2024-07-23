/* eslint-disable react/prop-types */

const PageHeader = ({ children }) => {
  return (
    <h1 className="p-6 text-5xl font-bold text-light self-start">{children}</h1>
  );
};

export default PageHeader;
