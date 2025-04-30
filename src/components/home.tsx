import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "./HeroSection";
import SectionContainer from "./SectionContainer";
import ProjectsGrid from "./ProjectsGrid";
import NavigationControls from "./NavigationControls";
import {
  ChevronDown,
  ChevronUp,
  Code,
  Briefcase,
  GraduationCap,
  Mail,
  Github,
  Phone,
  Map,
  Linkedin,
} from "lucide-react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const skillsData = {
  coding: ["C++", "Java", "Python", "JavaScript", "R", "C"],
  frameworks: [
    "MySQL",
    "React.js",
    "Express.js",
    "MongoDB",
    "Hadoop",
    "Git",
    "Docker",
    "Figma",
    "Node.js",
    "Tableau",
    "PowerBI",
    "MS Excel",
    "Canva",
  ],
  soft: [
    "Teamwork",
    "Leadership",
    "Critical Thinking",
    "Problem Solving",
    "Communication",
  ],
};

const educationData = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology",
    duration: "2022 - present",
    description: "Specialized in Data Science and Machine Learning",
    grade: "CGPA: 8.34/10",
  },
  {
    institution: "Kendriya Vidyalaya",
    degree: "Intermediate",
    duration: "2020 - 2022",
    description: "Mathematics, Physics, Chemistry, Computer Science",
    grade: "Percentage: 84.6%",
  },
];

const patentsData = [
  {
    title: "Biometric Trigger Authorization System for Firearm Security",
    id: "IN12345678",
    abstract:
      "A compact, multi-modal biometric system integrated into a firearm grip that enables trigger activation only upon real-time authentication of authorized law enforcement personnel.",
  },
];

const achievementsData = [
  {
    title: "Top 300 Global Rank – CodeChef Starters 131",
    year: "2024",
    description:
      "Achieved a global rank under 300 out of 28,000+ participants in CodeChef’s Division 3 contest, showcasing strong programming skills and competitive coding proficiency.",
  },
  {
    title: "Hackathon Participation – Infineon",
    year: "2025",
    description:
      "Collaborated in a team to solve real-world challenges during the Infineon Hackathon, gaining hands-on experience in rapid prototyping, teamwork, and innovative problem-solving.",
  },
  {
    title: "Solved 500+ Competitive Programming Problems",
    year: "Current",
    description:
      "Demonstrated strong problem-solving and algorithmic thinking by solving over 500 problems across platforms like CodeChef, LeetCode, and GeeksforGeeks.",
  },
];

const Home = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isLoading, setIsLoading] = useState(true);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setContactForm({ name: "", email: "", message: "" });
      // Show success message or toast here
    }, 2000);
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{
              rotate: 360,
              transition: { duration: 2, repeat: Infinity, ease: "linear" },
            }}
            className="w-16 h-16 border-t-2 border-blue-500 rounded-full mx-auto mb-4"
          />
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold text-white"
          >
            Loading Experience
          </motion.h1>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen">
        <HeroSection
          onExploreClick={() => handleSectionChange("projects")}
          onScrollDown={() => handleSectionChange("about")}
        />
      </section>
      {/* About Section */}
      <SectionContainer id="about" className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12"
        >
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg mb-8 text-gray-300 leading-relaxed">
              I'm a motivated and detail-oriented Computer Science undergraduate
              with a strong foundation in full-stack development and data
              analysis. I enjoy building efficient, user-centric web
              applications using technologies like React.js, Node.js, Express,
              and MongoDB. I'm equally passionate about data visualization and
              have hands-on experience with tools like Tableau, Excel, and
              Python for crafting impactful dashboards and insights. I
              consistently work on enhancing my problem-solving and coding
              abilities through projects and competitive programming. I believe
              in combining clean code, strong logic, and intuitive design to
              create solutions that make a real difference. Currently, I'm
              exploring cloud technologies, machine learning, and scalable
              architectures to further expand my technical toolkit.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://drive.google.com/file/d/1bsgTlcvnpWslvP_XZ1AX98YURW-OKSOL/view?usp=sharing"
                download
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
              Resume
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1mz8BZfJKj80xdodCEw0VK4Jc8EUIFIy0/view?usp=sharing"
                download
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
              Video CV
              </motion.a>

              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/YashAgnihotri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
                  whileHover={{ y: -5 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/-yashagnihotri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
                  whileHover={{ y: -5 }}
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="agnihotriyash208@gmail.com"
                  className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
                  whileHover={{ y: -5 }}
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </div>
          </div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            animate={{
              y: [0, -10, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-20 blur-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="others/ghibli.jpg"
                  alt="Animated illustration"
                  className="rounded-2xl w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </SectionContainer>
      {/* Skills Section */}
      <SectionContainer id="skills" className="py-20 bg-gray-900">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-2 inline-block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Skills & Expertise
              </h2>
            </motion.div>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Coding Languages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-8 border border-gray-700"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-500 bg-opacity-20 rounded-lg mr-4">
                  <Code size={24} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Coding Languages</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillsData.coding.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="px-4 py-2 bg-blue-900/30 rounded-xl text-gray-200 border-2 border-blue-500 shadow-lg shadow-blue-500/20 transition-all duration-300"
                    whileHover={{ y: -8, scale: 1.08, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="font-bold">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Frameworks & Tools */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-8 border border-gray-700"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-500 bg-opacity-20 rounded-lg mr-4">
                  <Briefcase size={24} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">Frameworks & Tools</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillsData.frameworks.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="px-4 py-2 bg-purple-900/30 rounded-xl text-gray-200 border-2 border-purple-500 shadow-lg shadow-purple-500/20 transition-all duration-300"
                    whileHover={{ y: -8, scale: 1.08, rotate: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="font-bold">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-8 border border-gray-700"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-500 bg-opacity-20 rounded-lg mr-4">
                  <GraduationCap size={24} className="text-green-400" />
                </div>
                <h3 className="text-xl font-semibold">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillsData.soft.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="px-4 py-2 bg-green-900/30 rounded-xl text-gray-200 border-2 border-green-500 shadow-lg shadow-green-500/20 transition-all duration-300"
                    whileHover={{ y: -8, scale: 1.08, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="font-bold">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </SectionContainer>
      <SectionContainer id="projects" className="py-20">
        <div className="container mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-2 inline-block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <ProjectsGrid />
        </div>
      </SectionContainer>
      {/* Education Section */}
      <SectionContainer id="education" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-2 inline-block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-0 bottom-0 w-1 bg-blue-500 bg-opacity-30"></div>

            {/* Timeline items */}
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } mb-12`}
              >
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <div
                    className={`bg-gray-800 bg-opacity-50 p-6 rounded-xl border border-gray-700 shadow-lg relative ${
                      index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                    }`}
                  >
                    <h3 className="text-xl font-bold text-blue-400 mb-2">
                      {item.institution}
                    </h3>
                    <h4 className="text-lg font-medium mb-2">{item.degree}</h4>
                    <p className="text-gray-400 mb-3">{item.duration}</p>
                    <p className="text-gray-300 mb-3">{item.description}</p>
                    <div className="inline-block bg-gray-800 px-4 py-2 rounded-lg border-2 border-blue-500">
                      <p className="text-blue-300 font-medium">{item.grade}</p>
                    </div>

                    {/* Arrow pointing to timeline */}
                    <div
                      className={`absolute top-6 w-4 h-4 bg-gray-800 transform rotate-45 ${
                        index % 2 === 0
                          ? "left-[-8px]"
                          : "right-[-8px] md:left-[-8px]"
                      }`}
                    ></div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-[-8px] md:left-1/2 md:transform md:translate-x-[-50%] top-6 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-900 z-10"></div>

                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionContainer>
      {/* Contact Section */}
      <SectionContainer id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-2 inline-block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-t-2 border-white rounded-full animate-spin"></span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Feel free to reach out for collaborations, opportunities, or
                just to say hello! I'm always open to discussing new projects
                and ideas.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:yash@example.com"
                  className="flex items-center gap-4 p-4 bg-gray-800 bg-opacity-50 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className="p-3 bg-blue-500 bg-opacity-20 rounded-full">
                    <Mail size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium">agnihotriyash208@gmail.com</p>
                  </div>
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-800 bg-opacity-50 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className="p-3 bg-purple-500 bg-opacity-20 rounded-full">
                    <Phone size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="font-medium">6395XXXXXX</p>
                  </div>
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-800 bg-opacity-50 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className="p-3 bg-green-500 bg-opacity-20 rounded-full">
                    <Map size={20} className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="font-medium">Bareilly, Uttar Pradesh</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionContainer>
      {/* Footer removed as requested */}
      {/* Navigation Controls */}
      <NavigationControls
        sections={sections.map((section) => section.id)}
        activeSection={activeSection}
        onNavigate={handleSectionChange}
      />
    </div>
  );
};

export default Home;
