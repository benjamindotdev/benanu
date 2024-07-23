import React from "react";

const PageHeader = ({ children }) => {
  return (
    <h1 className="text-5xl font-bold text-light self-start">{children}</h1>
  );
};

export default PageHeader;
