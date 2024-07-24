/* eslint-disable react/prop-types */

const PageContainer = ({ children }) => {
  return (
    <section className="px-6 flex flex-col gap-12 justify-start items-center w-full h-full">
      {children}
    </section>
  );
};

export default PageContainer;
