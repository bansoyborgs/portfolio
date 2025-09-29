import { motion } from "framer-motion";
import { sectionVariant, itemVariant } from "../motionConfig";

export default function Skills() {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "Python", level: 80 },
    { name: "MySQL", level: 70 },
    { name: "Git/GitHub", level: 90 },
    { name: "Networking Basics", level: 65 },
  ];

  return (
    <motion.section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-b from-gray-900 to-black"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={sectionVariant}
    >
      <motion.h2 variants={itemVariant} className="text-4xl font-bold mb-12 text-teal-500">
        Skills
      </motion.h2>

      <div className="w-full max-w-3xl space-y-6">
        {skills.map((skill, index) => (
          <motion.div key={index} variants={itemVariant}>
            <div className="flex justify-between mb-2">
              <span className="text-white font-medium">{skill.name}</span>
              <span className="text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-4 bg-teal-500 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
