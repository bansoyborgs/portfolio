import { motion } from "framer-motion";
import { sectionVariant, itemVariant } from "../motionConfig";
// IMPORT THE IMAGE
import avatar from "../assets/avatar.jpg"; 

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center px-6 py-20 bg-gradient-to-b from-gray-900 to-black"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={sectionVariant}
    >
      {/* LEFT SIDE: IMAGE */}
      <motion.div 
        variants={itemVariant} 
        className="md:w-1/3 flex justify-center mb-8 md:mb-0"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-500 shadow-2xl">
          <img 
            src={avatar} 
            alt="Jessie Jules Bantayan" 
            className="w-full h-full object-cover" 
          />
        </div>
      </motion.div>

      {/* RIGHT SIDE: IMPROVED CONTENT */}
      <motion.div 
        variants={itemVariant} 
        className="md:w-1/2 md:pl-12 text-center md:text-left"
      >
        <h2 className="text-4xl font-bold mb-6 text-teal-500">
          About Me
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          I am <span className="text-teal-400 font-semibold">Jessie Jules Bantayan</span>, 
          a dedicated BS Information Technology student with a strong passion for software development.
          I specialize in building clean, user-friendly applications and am constantly learning new 
          technologies to solve real-world problems.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-4">Education</h3>
        <ul className="text-gray-400 space-y-2 list-disc list-inside">
          <li><span className="text-gray-200 font-medium">Mindanao State University</span> (2022–Present)</li>
          <li><span className="text-gray-200 font-medium">Fatima National High School - SHS</span> (2020–2022)</li>
          <li><span className="text-gray-200 font-medium">Fatima National High School</span> (2016–2020)</li>
        </ul>
      </motion.div>
    </motion.section>
  );
}