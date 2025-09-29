import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Intelligent Vehicle Collision Detection System",
      description:
        "AI-powered surveillance system for real-time vehicle accident detection and automated alerts.",
    },
    {
      title: "Pizza Ordering System",
      description:
        "A Python-based system with customizable pizza types and unique topping options.",
    },
    {
      title: "IoT-based Smart Farming",
      description:
        "Capstone concept focused on agriculture automation using IoT sensors and data analytics.",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-teal-500"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-teal-500/50 transition"
          >
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
