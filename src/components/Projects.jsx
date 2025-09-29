import { motion } from "framer-motion";
import { sectionVariant, itemVariant } from "../motionConfig";

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
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={sectionVariant}
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <motion.h2
        variants={itemVariant}
        className="text-4xl font-bold mb-12 text-teal-500"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariant} // 👈 each card animates sequentially
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-teal-500/50 transition"
          >
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
