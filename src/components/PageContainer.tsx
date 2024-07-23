import React from "react";

const PageContainer = ({ children }) => {
  return (
    <section className="flex flex-col gap-6 justify-start items-center">
      {children}
    </section>
  );
};

export default PageContainer;
