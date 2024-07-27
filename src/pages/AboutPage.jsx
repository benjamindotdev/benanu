import ProgressiveCarousel from "../components/ProgressiveCarousel";
import WhyChooseUs from "../components/WhyChooseUs";
import PageContainer from "../components/PageContainer";
import PageHeader from "../components/PageHeader";
import PageSubHeader from "../components/PageSubHeader";

const About = () => {
  return (
    <PageContainer>
      <PageHeader>About</PageHeader>
      <PageSubHeader>The time to act is now</PageSubHeader>
      <ProgressiveCarousel />
      {/* <LandingPageCarousel /> */}
      <PageSubHeader>Why Choose seeO2?</PageSubHeader>
      <WhyChooseUs />
      {/* Section 1: Introduction */}
      <div className="flex flex-col justify-start gap-6 w-3/4">
        <section className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://img.freepik.com/free-photo/sustainable-development-goals-still-life_23-2150196693.jpg?t=st=1721833597~exp=1721837197~hmac=f26547a544e5eafb4c5633f42d0825119efe07b83c228bb112a645d3f6be6375&w=996"
              alt="Intro Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">Welcome to Our Journey</h2>
            <p className=" text-lg">
              We are dedicated to making the world a better place through
              innovative solutions and sustainable practices. Join us on our
              mission to create a positive impact and make a difference.
            </p>
          </div>
        </section>

        {/* Section 2: Something Nice */}
        <section className="p-8 rounded-lg ">
          <h2 className="text-3xl font-bold text-center mb-4">
            Why Choose seeO2?
          </h2>
          <p className=" text-center">
            Our commitment to excellence and sustainability sets us apart. We
            believe every effort counts in saving our environment.
          </p>
        </section>

        {/* Section 3: Our Story */}
        <section className="">
          <h2 className="text-3xl font-bold text-center mb-4">Our Story</h2>
          <p className="">
            Our journey began with a simple idea: to make a difference. From
            humble beginnings, we have grown into a company that values
            innovation, integrity, and sustainability. Our team is passionate
            about what we do, and we are constantly striving to improve and
            innovate. Our story is one of perseverance, dedication, and a
            relentless pursuit of excellence.
          </p>
        </section>

        {/* Section 4: Join Us */}
        <section className=" p-8 rounded-lg  text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us & Save the Planet</h2>
          <p className=" mb-4">
            Together, we can make a difference. Join us in our mission to create
            a sustainable future. Your support and involvement are crucial to
            our success.
          </p>
        </section>

        {/* Section 5: More About Us */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-4">More About Us</h2>
          <p className="text-center">
            Our company is built on a foundation of trust, innovation, and a
            commitment to excellence. We are proud of the work we do and the
            impact we have on the world. Learn more about our team, our values,
            and our vision for the future.
          </p>
        </section>
      </div>
    </PageContainer>
  );
};

export default About;
