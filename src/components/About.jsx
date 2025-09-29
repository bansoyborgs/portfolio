import { motion } from "framer-motion";
import { sectionVariant, itemVariant } from "../motionConfig";

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-b from-gray-900 to-black"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={sectionVariant}
    >
      <motion.h2 variants={itemVariant} className="text-4xl font-bold mb-8 text-teal-500">
        About Me
      </motion.h2>

      <motion.p
        variants={itemVariant}
        className="text-lg md:text-xl text-gray-300 max-w-2xl text-center leading-relaxed"
      >
        I am Jessie Jules Bantayan, a passionate{" "}
        <span className="text-teal-400">BS Information Technology</span> student
        who loves solving problems and building creative solutions with
        technology.
        <br />
        <br />
        My educational background:
        <ul className="text-gray-400 mt-4 list-disc list-inside text-left">
          <li>Upper Tambler Elementary School 2 (2010–2016)</li>
          <li>Fatima National High School (2016–2020)</li>
          <li>Fatima National High School - Senior High (2020–2022)</li>
          <li>Mindanao State University (2022–present)</li>
        </ul>
      </motion.p>
    </motion.section>
  );
}
