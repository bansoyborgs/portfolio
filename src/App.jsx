import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [locationKey, setLocationKey] = useState(0);

  // listen to hash changes (like #about, #skills)
  useEffect(() => {
    const handleHashChange = () => setLocationKey((prev) => prev + 1);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="bg-black text-white">
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={locationKey}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
