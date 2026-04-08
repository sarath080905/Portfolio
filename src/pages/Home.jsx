import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import skills from "../data/skills";
import ProjectCard from "../components/ProjectCard";
import ProfileAvatar from "../components/ProfileAvatar";
import SkillsBars from "../components/SkillsBars";
import TypingText from "../components/TypingText";
import Reveal from "../components/Reveal";

const Home = () => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const stats = [
    { value: "10+", label: "Projects Built" },
    { value: "100%", label: "Responsive Layouts" },
    { value: "Fast", label: "UX-first Delivery" },
    { value: "24h", label: "Quick Collaboration" },
  ];

  const testimonials = [
    { name: "Recruiter (Sample)", role: "Hiring Manager", quote: "Strong visual hierarchy and premium polish. Projects are easy to scan in seconds." },
    { name: "Client (Sample)", role: "Founder", quote: "Clean implementation, great communication, and impressive mobile responsiveness." },
    { name: "Mentor (Sample)", role: "Frontend Lead", quote: "Consistent spacing, typography, and interaction design across sections." },
  ];

  const achievements = [
    { title: "M.C.A (Ongoing)", issuer: "Bharathidasan University", date: "2024 - Present" },
    { title: "B.C.A Completed", issuer: "Adhiparasakthi College", date: "2021 - 2024" },
    { title: "Frontend + UI/UX Projects", issuer: "Personal Portfolio", date: "Ongoing" },
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/50 bg-white/50 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/40">
      <motion.div
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-60 dark:opacity-35 bg-[linear-gradient(120deg,rgba(99,102,241,0.2),rgba(168,85,247,0.2),rgba(236,72,153,0.2))]"
        style={{ backgroundSize: "180% 180%" }}
      />

      <div className="relative z-10 px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
        <section className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/80 px-3 py-1 text-xs font-semibold text-indigo-700 dark:border-indigo-400/30 dark:bg-indigo-500/10 dark:text-indigo-200">
                Premium Frontend Developer
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
                I craft <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">high-converting digital experiences</span> that recruiters remember instantly.
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                <TypingText words={["Modern UI. Smooth UX. Fast performance.", "Card-based design with strong visual hierarchy.", "Built with React, Tailwind, and product thinking."]} />
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/projects" className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 transition">
                  View Projects
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold border border-gray-200 bg-white/80 text-gray-900 hover:bg-white transition dark:border-slate-700 dark:bg-slate-900/80 dark:text-gray-100">
                  Hire Me
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>{featuredProjects[0] ? <ProjectCard project={featuredProjects[0]} featured /> : null}</Reveal>
        </section>

        <Reveal className="mt-12">
          <section className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
              <Link to="/projects" className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">See all</Link>
            </div>
            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((p) => <ProjectCard key={p.title} project={p} featured />)}
            </div>
          </section>
        </Reveal>

        <Reveal className="mt-10">
          <section className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/50 bg-white/65 p-5 dark:border-slate-700 dark:bg-slate-900/60">
                <p className="text-2xl font-extrabold text-gray-900 dark:text-white">{s.value}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{s.label}</p>
              </div>
            ))}
          </section>
        </Reveal>

        <Reveal className="mt-12">
          <section className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-white/50 bg-white/65 p-6 dark:border-slate-700 dark:bg-slate-900/60">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">About Me</h2>
              <p className="mt-3 text-gray-600 dark:text-gray-300">Frontend-focused developer with strong UI/UX instincts and clean execution.</p>
              <div className="mt-5 flex items-center gap-4">
                <ProfileAvatar name="Sarathkumar" />
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Sarathkumar</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Frontend Developer</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-gray-700 dark:text-gray-200">
                <li>- Premium, card-based interfaces</li>
                <li>- Accessibility and responsive-first layout</li>
                <li>- Smooth animation and interaction quality</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/50 bg-white/65 p-6 dark:border-slate-700 dark:bg-slate-900/60">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Why Hire Me</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-200">
                <li>- I design and implement with production quality.</li>
                <li>- I focus on readability, contrast, and visual hierarchy.</li>
                <li>- I collaborate quickly and iterate based on feedback.</li>
              </ul>
              <Link to="/contact" className="mt-6 inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">Hire Me</Link>
            </div>
          </section>
        </Reveal>

        <Reveal className="mt-12">
          <section className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Skills</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Skill levels shown visually with progress bars.</p>
            <div className="mt-6"><SkillsBars skills={skills.slice(0, 6)} /></div>
          </section>
        </Reveal>

        <Reveal className="mt-12">
          <section className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Testimonials</h2>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {testimonials.map((item) => (
                <div key={item.name} className="rounded-2xl border border-white/50 bg-white/65 p-6 dark:border-slate-700 dark:bg-slate-900/60">
                  <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">{item.role}</p>
                  <p className="mt-1 font-semibold text-gray-900 dark:text-white">{item.name}</p>
                  <p className="mt-3 text-sm text-gray-700 dark:text-gray-200">"{item.quote}"</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal className="mt-12">
          <section className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Achievements & Certifications</h2>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {achievements.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/50 bg-white/65 p-6 dark:border-slate-700 dark:bg-slate-900/60">
                  <p className="font-semibold text-gray-900 dark:text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{item.issuer}</p>
                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{item.date}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
};

export default Home;
