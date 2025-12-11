import { motion } from "framer-motion";
import { sectionVariant, itemVariant } from "../motionConfig";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-black"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={sectionVariant}
    >
      <motion.h2 variants={itemVariant} className="text-4xl font-bold mb-8 text-teal-500">
        Contact Me
      </motion.h2>

      <motion.p
        variants={itemVariant}
        className="text-lg text-gray-300 mb-8 text-center max-w-lg"
      >
        I’m always open to collaborations, new opportunities, or just a friendly
        chat. Let’s connect!
      </motion.p>

      <motion.div
        variants={itemVariant}
        className="flex gap-6 flex-wrap justify-center"
      >
        <a
          href="mailto:jjjbantayan@gmail.com"
          className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-medium shadow-lg transition transform hover:scale-105"
        >
          Email Me
        </a>
        <a
          href="https://github.com/bansoyborgs"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-medium shadow-lg transition transform hover:scale-105"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jessie-jules-bantayan-682750387"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-full font-medium shadow-lg transition transform hover:scale-105"
        >
          LinkedIn
        </a>
      </motion.div>
    </motion.section>
  );
}