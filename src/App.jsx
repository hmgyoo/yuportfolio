import "./App.css";

import React, { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";
import {
  Github,
  Mail,
  Send,
  Linkedin,
  Award,
  ExternalLink,
} from "lucide-react";

const CursorFollower = () => {
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-violet-500/50 pointer-events-none z-50 mix-blend-screen"
      style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
    />
  );
};

const ExperienceItem = ({
  role,
  company,
  period,
  description,
  current = false,
}) => (
  <div className="group relative transition-all mb-12">
    <div className="flex flex-col sm:flex-row justify-between mb-2">
      <h4
        className={`font-semibold text-lg ${
          current ? "text-violet-400" : "text-slate-100"
        }`}
      >
        {role}
      </h4>
      <span className="text-slate-500 text-sm whitespace-nowrap">{period}</span>
    </div>
    <p className="text-slate-300 text-sm font-medium mb-2">{company}</p>
    <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
  </div>
);

const ProjectCard = ({ title, description, tags }) => (
  <motion.div
    whileHover={{ x: 10 }}
    className="group block p-5 rounded-xl transition-all hover:bg-white/5 border border-transparent hover:border-violet-500/20 mb-6 bg-white/[0.02]"
  >
    <div className="flex justify-between items-start">
      <h4 className="text-slate-100 font-semibold group-hover:text-violet-400 transition-colors">
        {title}
      </h4>
      <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-100" />
    </div>
    <p className="text-slate-400 text-sm mt-2">{description}</p>
    <div className="flex gap-2 mt-4 flex-wrap">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-2 py-1 text-[10px] uppercase font-bold rounded bg-violet-500/10 text-violet-300 border border-violet-500/20 tracking-widest"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);
// --- Main App ---
export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const navItems = ["about", "experience", "skills", "projects", "contact"];

  return (
    <div className="relative min-h-screen bg-black text-slate-100 selection:bg-violet-500/30 font-sans">
      <CursorFollower />

      {/* Creative Background */}
      <div className="fixed inset-0 z-0">
        <div
          className={`absolute inset-0 transition-colors duration-1000 
          ${activeSection === "projects" ? "bg-violet-950/20" : "bg-slate-950"} 
          bg-gradient-to-br from-black via-black to-violet-900/30`}
        />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:px-12 lg:py-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* --- LEFT SIDEBAR --- */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-full lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-5xl font-extrabold tracking-tight text-slate-100 sm:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-violet-400">
                  Gary Daniel Erno
                </span>
              </h1>
              <h2 className="mt-3 text-xl font-medium tracking-tight text-slate-200">
                Software Developer | Code, Trails, and Travels
              </h2>
              <p className="mt-4 max-w-xs leading-relaxed text-slate-400">
                Computer Engineering student focused on building
                high-performance mobile and web solutions with a touch of
                creative logic.
              </p>

              <nav className="hidden lg:block mt-16">
                <ul className="w-max">
                  {navItems.map((item) => (
                    <li key={item} className="mb-4">
                      <a
                        href={`#${item}`}
                        onClick={() => setActiveSection(item)}
                        className={`group flex items-center py-3 transition-all ${
                          activeSection === item
                            ? "text-violet-400 pl-4"
                            : "text-slate-500 hover:text-slate-200"
                        }`}
                      >
                        <span
                          className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 ${
                            activeSection === item
                              ? "w-16 bg-violet-400"
                              : "w-8 bg-slate-600"
                          }`}
                        />
                        <span className="text-xs font-bold uppercase tracking-widest">
                          {item}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="mt-8 flex items-center gap-6 text-slate-400">
              <a
                href="https://linkedin.com/in/gary-daniel-erno"
                target="_blank"
                className="hover:text-violet-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ernogarydaniel@gmail.com"
                className="hover:text-violet-400 transition-colors"
              >
                <Mail size={20} />
              </a>
              <a href="#" className="hover:text-violet-400 transition-colors">
                <Github size={20} />
              </a>
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-slate-500">
                <Award size={14} className="text-violet-500" /> Honors Graduate
              </div>
            </div>
          </header>

          {/* --- RIGHT CONTENT --- */}
          <main className="pt-24 lg:w-full lg:py-24">
            <section
              id="about"
              onMouseEnter={() => setActiveSection("about")}
              className="mb-32 scroll-mt-24"
            >
              <h3 className="lg:hidden text-sm font-bold uppercase tracking-widest text-slate-200 mb-8">
                About
              </h3>
              <div className="text-slate-400 leading-relaxed text-lg space-y-4">
                <p>
                  I am a{" "}
                  <span className="text-slate-100">Computer Engineering</span>{" "}
                  student aspiring to lead frontend and mobile development
                  through technical innovation and meaningful solutions[cite:
                  18, 19].
                </p>
                <p>
                  With a proven ability to collaborate effectively with senior
                  developers, I spend my time mastering new technologies and
                  mentoring others to strengthen team performance[cite: 18, 27].
                </p>
              </div>
            </section>

            <section
              id="experience"
              onMouseEnter={() => setActiveSection("experience")}
              className="mb-32"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-violet-400 mb-8 border-b border-violet-500/10 pb-4">
                Professional Experience
              </h3>
              <ExperienceItem
                role="Software Developer 2"
                company="Xure"
                period="Apr 2025 — Present"
                current={true}
                description="Leading optimization of core mobile features, expanding into AWS services and web development to support feature scalability[cite: 25]. Participating in product planning and mentoring interns[cite: 26, 27]."
              />
              <ExperienceItem
                role="Mobile Developer"
                company="Datadynamix Inc"
                period="Apr 2024 — Sept 2024"
                description="Developed high-quality solutions using React Native and Redux. Integrated AWS CloudFront for expedited content delivery and implemented OTP logic for user security[cite: 45, 47, 51]."
              />
              <ExperienceItem
                role="Chief Operations Officer"
                company="GDSC PLM"
                period="July 2023 — July 2024"
                description="Managed technical event programming for 100+ active members. Coordinated cross-functionally across technology, creatives, and community development teams[cite: 58, 62]."
              />
            </section>

            <section
              id="skills"
              onMouseEnter={() => setActiveSection("skills")}
              className="mb-32"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-violet-400 mb-8 border-b border-violet-500/10 pb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "React Native",
                  "iOS/Android Dev",
                  "AWS CloudFront",
                  "Redux",
                  "TypeScript",
                  "Next.js",
                  "Axios",
                  "REST APIs",
                  "CodePush",
                  "State Management",
                ].map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="cursor-default px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-violet-400 hover:border-violet-500/50 transition-colors text-sm font-medium"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </section>

            <section
              id="projects"
              onMouseEnter={() => setActiveSection("projects")}
              className="mb-32"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-violet-400 mb-8 border-b border-violet-500/10 pb-4">
                Key Contributions
              </h3>
              <ProjectCard
                title="AWS CloudFront Content Integration"
                description="Researched and implemented AWS CloudFront to optimize delivery of high-demand images and videos within a mobile architecture[cite: 46, 47]."
                tags={["AWS", "React Native", "Research"]}
              />
              <ProjectCard
                title="OTA Update Pipeline"
                description="Investigated and implemented Over-The-Air updates using Microsoft App Center and CodePush to streamline frontend deployments[cite: 48, 49]."
                tags={["CodePush", "DevOps", "App Center"]}
              />
              <ProjectCard
                title="Authentication & Security Logic"
                description="Engineered the 'Forgot Password' flow featuring robust OTP delivery logic and error handling API interactions[cite: 51]."
                tags={["Logic", "API", "Security"]}
              />
            </section>

            <section
              id="contact"
              onMouseEnter={() => setActiveSection("contact")}
              className="mb-32 pb-24"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-violet-400 mb-8 border-b border-violet-500/10 pb-4">
                Get In Touch
              </h3>
              <p className="text-slate-500 text-sm mb-8">
                Currently looking for new opportunities in frontend and mobile
                development.
              </p>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-violet-500/50 transition-colors text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-violet-500/50 transition-colors text-sm"
                  />
                </div>
                <textarea
                  rows="4"
                  placeholder="Message"
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-violet-500/50 transition-colors text-sm"
                />
                <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-8 py-3 rounded-lg font-bold transition-all text-sm uppercase tracking-widest">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
