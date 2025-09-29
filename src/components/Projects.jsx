// src/components/Projects.jsx
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Intelligent Vehicle Collision Detection System",
      description:
        "AI-powered surveillance system for real-time vehicle accident detection and automated alerts.",
      link: "#",
    },
    {
      title: "Pizza Ordering System",
      description:
        "A Python-based system with customizable pizza types and unique topping options.",
      link: "#",
    },
    {
      title: "IoT-based Smart Farming",
      description:
        "Capstone concept focused on agriculture automation using IoT sensors and data analytics.",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-extrabold text-center text-teal-500 mb-12 tracking-wider"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-teal-400 transition-all"
          >
            <h3 className="text-2xl font-semibold mb-4 text-teal-300">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-6">{project.description}</p>
            <a
              href={project.link}
              className="text-teal-400 hover:text-teal-500 font-medium transition"
              target="_blank"
              rel="noreferrer"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
