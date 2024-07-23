/* eslint-disable react/prop-types */
const Hero = ({ socials }) => {
  return (
    <div className="hero bg-transparent min-h-screen">
      <div className="hero-content text-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-bold text-left whitespace-nowrap">
            Track your carbon footprint <br />
            before you've taken a step
          </h1>
          <p className="py-6">
            <a
              href={socials.benjamin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent hover:underline text-2xl"
            >
              @benjamin
            </a>{" "}
            and{" "}
            <a
              href={socials.senanu}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent hover:underline text-2xl"
            >
              @senanu
            </a>{" "}
            are here to help you travel with a clear conscience. <br />
          </p>
          <button className="btn bg-accent text-primary hover:text-light">
            Plan your next trip with <strong>seeO2</strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
