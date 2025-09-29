import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-8 text-teal-500"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl text-gray-300 max-w-2xl text-center leading-relaxed"
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
    </section>
  );
}
