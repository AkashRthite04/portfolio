import {
  FaReact,
  FaNodeJs,
  FaLaptopCode,
  FaCode,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-6xl md:text-7xl font-extrabold text-center mb-20">
          About{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>
            <h3 className="text-4xl font-bold mb-6">
              Full Stack Developer
            </h3>

            <p className="text-gray-600 text-lg leading-8">
              I am a passionate Full Stack Developer specializing in
              React.js, Node.js, Express.js and MongoDB. I enjoy
              building scalable web applications, solving real-world
              problems and continuously learning modern technologies.
            </p>

            <p className="text-gray-600 text-lg leading-8 mt-6">
              My focus is on developing responsive user interfaces,
              robust backend systems and exploring DevOps practices
              for efficient deployment and automation.
            </p>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Tailwind CSS",
                "DevOps",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full font-medium hover:bg-purple-600 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="text-center">
                <h4 className="text-3xl font-bold text-purple-600">
                  5+
                </h4>
                <p className="text-gray-500">
                  Projects
                </p>
              </div>

              <div className="text-center">
                <h4 className="text-3xl font-bold text-purple-600">
                  10+
                </h4>
                <p className="text-gray-500">
                  Technologies
                </p>
              </div>

              <div className="text-center">
                <h4 className="text-3xl font-bold text-purple-600">
                  1+
                </h4>
                <p className="text-gray-500">
                  Years Learning
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
              >
                Get In Touch
              </a>

              <a
                href="/resume.pdf"
                download
                className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-600 hover:text-white transition"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="grid gap-6">

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-purple-100">
              <FaReact className="text-purple-600 text-5xl mb-4" />

              <h3 className="text-2xl font-bold mb-3">
                Frontend Development
              </h3>

              <p className="text-gray-600">
                Building responsive and modern user interfaces using
                React.js, Tailwind CSS and JavaScript.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-purple-100">
              <FaNodeJs className="text-purple-600 text-5xl mb-4" />

              <h3 className="text-2xl font-bold mb-3">
                Backend Development
              </h3>

              <p className="text-gray-600">
                Developing secure REST APIs and scalable backend
                systems using Node.js, Express.js and MongoDB.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-purple-100">
              <FaLaptopCode className="text-purple-600 text-5xl mb-4" />

              <h3 className="text-2xl font-bold mb-3">
                Full Stack Projects
              </h3>

              <p className="text-gray-600">
                Creating complete web applications like WearSync and
                modern portfolio websites using MERN stack.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}