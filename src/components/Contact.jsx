// src/components/Contact.jsx
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl font-extrabold mb-10 text-teal-500 tracking-wide"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
        className="text-lg text-gray-300 mb-8 text-center max-w-xl"
      >
        I’m always open to collaborations, new opportunities, or just a friendly
        chat. Let’s connect!
      </motion.p>

      <div className="flex flex-wrap gap-6 justify-center">
        <a
          href="mailto:jjjbantayan@gmail.com"
          className="px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-full font-medium shadow-lg transition"
        >
          Email Me
        </a>
        <a
          href="https://github.com/bansoyborgs"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-medium shadow-lg transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jessie-jules-bantayan-682750387"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-medium shadow-lg transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
