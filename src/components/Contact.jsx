import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-black"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-8 text-pink-500"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
        className="text-lg text-gray-300 mb-6 text-center max-w-lg"
      >
        I’m always open to collaborations, new opportunities, or just a friendly
        chat. Let’s connect!
      </motion.p>

      <div className="flex space-x-6">
        <a
          href="mailto:jjjbantayan@gmail.com"
          className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-medium shadow-lg"
        >
          Email Me
        </a>
        <a
          href="https://github.com/bansoyborgs"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-medium shadow-lg"
        >
          GitHub
        </a>
        <a
          href="linkedin.com/in/jessie-jules-bantayan-682750387"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-medium shadow-lg"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
