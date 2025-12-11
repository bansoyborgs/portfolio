import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.6 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-md z-50 shadow-md">
      <ul className="flex justify-center space-x-8 py-4 text-white font-medium">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={`relative transition-colors ${
                activeSection === link.id
                  ? "text-teal-500 font-semibold"
                  : "hover:text-teal-400"
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-teal-500 rounded-full"></span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
