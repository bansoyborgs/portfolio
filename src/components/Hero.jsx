// src/components/Hero.jsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold text-center leading-tight"
      >
        Hi, I’m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">
          Jessie Jules Bantayan
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6 text-lg md:text-2xl text-gray-300 text-center max-w-2xl"
      >
        A BS Information Technology Student & Aspiring IT Professional 🚀
      </motion.p>

      <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
        className="mt-10 px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-full shadow-lg transition"
      >
        View My Work
      </motion.a>
    </section>
  );
}
