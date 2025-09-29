import { motion } from "framer-motion";
import { sectionVariant, itemVariant } from "../motionConfig";

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-gray-900 to-black text-white"
      initial="hidden"
      animate="show"
      variants={sectionVariant}
    >
      <motion.h1
        variants={itemVariant}
        className="text-6xl md:text-7xl font-extrabold text-center"
      >
        Hi, I’m <span className="text-teal-500">Jessie Jules Bantayan</span>
      </motion.h1>

      <motion.p
        variants={itemVariant}
        className="mt-6 text-lg md:text-2xl text-gray-300"
      >
        A BS Information Technology Student & Aspiring IT Professional 🚀
      </motion.p>

      <motion.a
        variants={itemVariant}
        href="#projects"
        whileHover={{ scale: 1.08, y: -3 }}
        className="mt-10 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full shadow-lg transition"
      >
        View My Work
      </motion.a>
    </motion.section>
  );
}
