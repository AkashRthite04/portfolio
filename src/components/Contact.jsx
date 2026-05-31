import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ky96sh3",
        "template_mxmgmvq",
        form.current,
        "ih5dsNrR_0W9LP7y4"
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message.");
          console.log(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-br from-purple-50 via-white to-purple-100"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          Contact <span className="text-purple-600">Me</span>
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Let's connect and discuss projects, opportunities and collaborations.
        </p>

        <div className="flex justify-center gap-8 text-3xl mb-12">
          <a
            href="https://www.linkedin.com/in/akash-thite-3303612a9"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-600 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/AkashRthite04"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-600 transition"
          >
            <FaGithub />
          </a>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">

          <h3 className="text-4xl font-bold text-center mb-10">
            Send a Message
          </h3>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
          >
            <div>
              <label className="block font-semibold mb-2">
                Your Name
              </label>

              <input
                type="text"
                name="user_name"
                placeholder="Enter Your Name"
                required
                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Your Email
              </label>

              <input
                type="email"
                name="user_email"
                placeholder="Enter Email"
                required
                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Your Message
              </label>

              <textarea
                name="message"
                rows="6"
                placeholder="Hello, I'd like to talk about..."
                required
                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white py-4 rounded-full text-xl font-semibold hover:scale-105 transition flex justify-center items-center gap-3"
            >
              Send Message
              <FaPaperPlane />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}