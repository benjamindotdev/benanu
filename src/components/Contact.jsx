const Contact = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="hero bg-base-200 min-h-80  "
        style={{
          backgroundImage: `url(https://img.freepik.com/free-photo/portrait-woman-work-having-video-call_23-2148902276.jpg?t=st=1721831456~exp=1721835056~hmac=689de25554295ad71d570391f856e521ca64ad2ed5ed517589231aff96f6a641&w=1060)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          // Adjust the height to your liking
        }}
      >
        <div className="hero-content text-center ">
          <div className="max-w-md  ">
            <h1 className="text-5xl font-bold">
              Contact <span className="text-orange-600">Us</span>
            </h1>
            <p className="py-6 text-3xl">
              We provide 24 hour customer service support
            </p>
            <button className="btn bg-orange-400">Click here</button>
          </div>
        </div>
      </div>

      {/* Section 1: Contact Form */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <form className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Section 2: Contact Details */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Details</h2>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="text-center mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Our Office</h3>
            <p className="text-gray-700">
              Storkower Str. 132
              <br />
              Berlin, 10407
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-700">senanuadjabeng1@gmail.com</p>
            <p className="text-gray-700">hello@benjamin.dev</p>
          </div>
        </div>
      </section>

      {/* Section 3: Map Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>
        <div className="w-full h-64 bg-gray-200 rounded-lg shadow-lg">
          {/* Embed Google Maps iframe or any map service here */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0864056306453!2d-122.40136958468187!3d37.78735937975768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808e6f72f393%3A0x5e46e70b6880f5c8!2sOpenAI!5e0!3m2!1sen!2sus!4v1648315992356!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
