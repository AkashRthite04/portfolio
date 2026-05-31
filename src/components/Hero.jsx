import profile from "../assets/gitimg.png";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

        <div className="absolute top-40 right-10 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center">
        {/* Profile Image */}
        <img
          src={profile}
          alt="Akash Thite"
          className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full object-cover border-4 border-purple-600 shadow-2xl mb-8 hover:scale-105 transition duration-300"
        />

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Akash Thite
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
          Full Stack Developer • MERN Stack Developer • DevOps Enthusiast
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 text-3xl mb-10">
          <a
            href="https://github.com/AkashRthite04"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-600 hover:scale-110 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/akash-thite-3303612a9"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-600 hover:scale-110 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:thiteakash19@gmail.com"
            className="hover:text-purple-600 hover:scale-110 transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-5 mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow-lg hover:scale-105 transition duration-300"
          >
            View My Work
          </a>

          <a
            href="/resume.pdf"
            download
            className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition duration-300"
          >
            Download Resume
          </a>
        </div>

        {/* Scroll Down */}
        <a
          href="#about"
          className="inline-flex flex-col items-center text-purple-600 animate-bounce"
        >
          <span className="font-medium text-lg">
            Scroll Down
          </span>

          <FaArrowDown className="text-3xl mt-2" />
        </a>
      </div>
    </section>
  );
}