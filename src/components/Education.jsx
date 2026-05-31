import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 px-6 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-4">
          My <span className="text-purple-600">Education</span>
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Academic journey and learning path.
        </p>

        {/* Education Card */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">

          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-100 p-4 rounded-full">
              <FaGraduationCap className="text-purple-600 text-3xl" />
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Bachelor of Engineering
              </h3>

              <p className="text-purple-600 font-medium">
                Computer Engineering
              </p>
            </div>
          </div>

          <div className="space-y-3 text-gray-600 text-lg">
            <p>
              <strong>University:</strong> Savitribai Phule Pune University
            </p>

            <p className="flex items-center gap-2">
              <FaCalendarAlt />
              <span>
                Expected Graduation: 2027
              </span>
            </p>

            <p>
              <strong>Focus Areas:</strong> Full Stack Development,
              MERN Stack, DevOps, Cloud Computing
            </p>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full">
              React
            </span>

            <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full">
              Node.js
            </span>

            <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full">
              MongoDB
            </span>

            <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full">
              DevOps
            </span>

            <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full">
              Cloud Computing
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}