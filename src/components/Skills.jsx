import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";

import { SiMongodb } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
      percentage: "95%",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      percentage: "90%",
    },
    {
      name: "React.js",
      icon: <FaReact />,
      percentage: "88%",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      percentage: "85%",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      percentage: "82%",
    },
    {
      name: "DevOps",
      icon: <FaDocker />,
      percentage: "75%",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-16">
          My{" "}
          <span className="text-purple-600">
            Skills
          </span>
        </h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-purple-600 text-3xl">
                    {skill.icon}
                  </span>

                  <h3 className="text-xl font-semibold">
                    {skill.name}
                  </h3>
                </div>

                <span className="font-bold text-purple-600">
                  {skill.percentage}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-purple-600 h-4 rounded-full transition-all duration-1000"
                  style={{
                    width: skill.percentage,
                  }}
                ></div>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600">
            Continuously learning new technologies and improving
            my Full Stack Development & DevOps skills.
          </p>
        </div>

      </div>
    </section>
  );
}