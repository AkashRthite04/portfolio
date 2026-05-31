import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-6xl md:text-7xl font-extrabold text-center mb-4">
          My{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <p className="text-center text-gray-600 text-lg mb-16">
          A collection of projects showcasing my Full Stack Development skills.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Project 1 */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden border border-purple-100">

            <div className="h-3 bg-gradient-to-r from-purple-600 to-pink-500"></div>

            <div className="p-8">

              <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl font-bold text-purple-600">
                  WearSync
                </h3>

                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                  Completed
                </span>
              </div>

              <p className="text-gray-500 mb-4">
                Full Stack Fashion E-Commerce Platform
              </p>

              <p className="text-gray-600 mb-6">
                Developed a complete MERN Stack e-commerce platform
                featuring authentication, shopping cart, product
                management and responsive UI design.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                  React
                </span>

                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                  Node.js
                </span>

                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                  Express.js
                </span>

                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                  MongoDB
                </span>
              </div>

              <ul className="list-disc ml-5 text-gray-600 space-y-2 mb-6">
                <li>User Authentication</li>
                <li>Shopping Cart System</li>
                <li>Product Management</li>
                <li>Responsive Design</li>
                <li>Secure Backend APIs</li>
              </ul>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="flex items-center gap-2 bg-purple-600 text-white px-5 py-3 rounded-xl hover:bg-purple-700 transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

                <a
                  href="https://github.com/AkashRthite04"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-purple-600 text-purple-600 px-5 py-3 rounded-xl hover:bg-purple-600 hover:text-white transition"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 overflow-hidden border border-purple-100">

            <div className="h-3 bg-gradient-to-r from-blue-500 to-purple-500"></div>

            <div className="p-8">

              <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl font-bold text-purple-600">
                  Portfolio Website
                </h3>

                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                  Live
                </span>
              </div>

              <p className="text-gray-500 mb-4">
                Personal Developer Portfolio
              </p>

              <p className="text-gray-600 mb-6">
                Designed and developed a modern portfolio website
                using React, Tailwind CSS and Vite to showcase
                projects, skills, education and contact information.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                  React
                </span>

                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                  Tailwind CSS
                </span>

                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                  Vite
                </span>
              </div>

              <ul className="list-disc ml-5 text-gray-600 space-y-2 mb-6">
                <li>Responsive Design</li>
                <li>Modern UI/UX</li>
                <li>Project Showcase</li>
                <li>Resume Download</li>
                <li>Contact Form</li>
              </ul>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="flex items-center gap-2 bg-purple-600 text-white px-5 py-3 rounded-xl hover:bg-purple-700 transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

                <a
                  href="https://github.com/AkashRthite04"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-purple-600 text-purple-600 px-5 py-3 rounded-xl hover:bg-purple-600 hover:text-white transition"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}