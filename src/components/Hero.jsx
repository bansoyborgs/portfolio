import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold text-center"
      >
        Hi, I’m <span className="text-teal-500">Jessie Jules Bantayan</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-lg md:text-2xl text-gray-300"
      >
        A BS Information Technology Student & Aspiring IT Professional 🚀
      </motion.p>

      <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
        className="mt-8 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full shadow-lg"
      >
        View My Work
      </motion.a>
    </section>
  );
}
