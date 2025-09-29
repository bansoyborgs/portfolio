// src/components/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl font-extrabold mb-12 text-teal-500 tracking-wide"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl text-gray-300 max-w-3xl text-center leading-relaxed"
      >
        I am Jessie Jules Bantayan, a passionate{" "}
        <span className="text-teal-400">BS Information Technology</span> student
        who loves solving problems and building creative solutions with
        technology. My interests span across{" "}
        <span className="text-teal-400">web development, AI, and IoT</span>.
        <br />
        <br />
        I aim to become an innovative IT professional who can contribute to
        impactful projects and help create smarter, safer, and more efficient
        communities.
      </motion.p>

      <div className="mt-12 text-gray-300 space-y-4">
        <h3 className="text-2xl font-semibold text-teal-400 text-center">
          Education
        </h3>
        <ul className="text-center space-y-2">
          <li>📘 Upper Tambler Elementary School 2 (2010–2016)</li>
          <li>📘 Fatima National High School (2016–2020)</li>
          <li>📘 Fatima National High School – Senior High (2020–2022)</li>
          <li>📘 Mindanao State University (2022–Present)</li>
        </ul>
      </div>
    </section>
  );
}
