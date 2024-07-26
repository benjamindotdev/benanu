/* eslint-disable react/prop-types */

const PageContainer = ({ children }) => {
  return (
    <section className="px-6 pt-[10vh] py-[15vh] flex flex-col gap-10 justify-start items-center w-full h-[85vh] overflow-x-scroll">
      {children}
    </section>
  );
};

export default PageContainer;
