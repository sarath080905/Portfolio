// Home.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import skills from "../data/skills";
import ProjectCard from "../components/ProjectCard";
import ProfileAvatar from "../components/ProfileAvatar";
import SkillsBars from "../components/SkillsBars";
import TypingText from "../components/TypingText";
import Reveal from "../components/Reveal";
import "../App.css";

const Home = () => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  const stats = [
    { value: "10+ ", label: "Projects Completed" },
    { value: "React + ", label: "Tailwind UI Delivery" },
    { value: "Fast ", label: "Performance Mindset" },
    { value: "Clean ", label: "Code & UX Focus" },
  ];

  const testimonials = [
    {
      name: "Recruiter (Sample)",
      role: "Hiring Manager",
      quote:
        "The UI polish and structure stood out immediately. The projects read like real product work, not just coursework.",
    },
    {
      name: "Client (Sample)",
      role: "Startup Founder",
      quote:
        "Clear communication and thoughtful design. The screens looked premium, and the app felt responsive across devices.",
    },
    {
      name: "Team Lead (Sample)",
      role: "Frontend Mentor",
      quote:
        "Great attention to detail—spacing, typography, and interaction states were handled professionally.",
    },
  ];

  const achievements = [
    {
      title: "M.C.A – Master of Computer Applications",
      issuer: "Bharathidasan University",
      date: "Jun 2024 – Present",
      note: "Building stronger fundamentals and applying them to modern web UI.",
    },
    {
      title: "B.C.A – Bachelor of Computer Applications",
      issuer: "Adhiparasakthi College of Arts and Science",
      date: "Jun 2021 – May 2024",
      note: "Grounded understanding of programming, databases, and real-world problem solving.",
    },
    {
      title: "UI/UX + Frontend Projects",
      issuer: "Personal Portfolio",
      date: "Ongoing",
      note: "Shipped multiple responsive apps with Tailwind, React, and Framer Motion.",
    },
  ];

  const orbs = [
    { size: 340, x: "8%", y: "20%", duration: 18, delay: 0 },
    { size: 260, x: "70%", y: "10%", duration: 22, delay: 2 },
    { size: 300, x: "30%", y: "70%", duration: 20, delay: 1 },
    { size: 220, x: "85%", y: "65%", duration: 24, delay: 3 },
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10">
      {/* Animated gradient */}
      <motion.div
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-indigo-500/25 via-purple-500/20 to-pink-500/20 opacity-70"
        style={{ backgroundSize: "200% 200%" }}
        aria-hidden="true"
      />

      {/* Subtle floating orbs */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {orbs.map((o, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-20"
            style={{
              width: o.size,
              height: o.size,
              left: o.x,
              top: o.y,
              background:
                "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.45), rgba(236,72,153,0.1), transparent 70%)",
            }}
            animate={{ y: [0, -60, 0], x: [0, 18, 0] }}
            transition={{ duration: o.duration, repeat: Infinity, ease: "easeInOut", delay: o.delay }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        {/* Hero */}
        <section aria-labelledby="hero-heading">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
            <Reveal>
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-white/50 text-sm font-semibold text-indigo-800">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600" />
                  Frontend-first • Tailwind + React • Recruiter-ready UI
                </div>

                <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
                  I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">modern web applications</span>
                  that look premium, feel fast, and convert.
                </h1>

                <p className="text-gray-700 text-lg lg:text-xl">
                  <TypingText
                    words={[
                      "I build modern web applications.",
                      "I design clean, card-based UI.",
                      "I ship with performance in mind.",
                    ]}
                    speed={35}
                    pause={800}
                  />
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link
                    to="/projects"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white
                               bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
                               hover:opacity-95 transition shadow-lg shadow-indigo-500/20"
                  >
                    View Projects
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-gray-900
                               bg-white/70 border border-gray-200 hover:bg-white transition"
                  >
                    Hire Me
                  </Link>

                  <a
                    href="https://drive.google.com/file/d/1wRC5t5oipV5Z1Wai7x7qrNNwoiPlbJhs/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-gray-900
                               bg-white/40 border border-gray-200 hover:bg-white transition"
                  >
                    View Resume
                  </a>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["React", "Tailwind", "Framer Motion", "UI/UX", "Performance"].map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-2 rounded-full bg-white/60 border border-white/50 text-gray-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="lg:justify-self-end">
              {featuredProjects[0] ? (
                <div className="w-full max-w-xl">
                  <ProjectCard project={featuredProjects[0]} featured />
                </div>
              ) : (
                <div className="bg-white/60 border border-white/50 rounded-2xl p-6">
                  No featured project found.
                </div>
              )}
            </Reveal>
          </div>
        </section>

        {/* Featured Projects */}
        <Reveal className="mt-12" delay={0.05}>
          <section aria-labelledby="featured-projects">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h2 id="featured-projects" className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Featured Projects
                  </h2>
                  <p className="text-gray-600 mt-2 max-w-2xl">
                    Hand-picked work that demonstrates modern UI thinking, clean code structure, and real user flows.
                  </p>
                </div>
                <Link
                  to="/projects"
                  className="text-sm font-semibold text-indigo-700 hover:text-indigo-900 transition"
                >
                  See all →
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProjects.map((p) => (
                  <ProjectCard key={p.title} project={p} featured={true} />
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* Stats */}
        <Reveal className="mt-10" delay={0.1}>
          <section aria-labelledby="stats-heading">
            <div className="max-w-6xl mx-auto">
              <h2 id="stats-heading" className="sr-only">
                Portfolio stats
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl bg-white/60 border border-white/50 backdrop-blur p-5 shadow-sm"
                  >
                    <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">{s.value}</p>
                    <p className="text-sm text-gray-600 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* About */}
        <Reveal className="mt-12" delay={0.12}>
          <section aria-labelledby="about-heading">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <h2 id="about-heading" className="text-2xl sm:text-3xl font-bold text-gray-900">
                  About
                </h2>
                <p className="text-gray-600 mt-3 max-w-xl">
                  I’m a frontend-focused developer who loves turning requirements into polished interfaces—fast, responsive, and accessible.
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <ProfileAvatar name="Sarathkumar" />
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Sarathkumar</p>
                    <p className="text-sm text-gray-600">Frontend Developer • UI/UX-minded</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl bg-white/60 border border-white/50 p-5">
                    <h3 className="font-semibold text-gray-900">What I do</h3>
                    <ul className="mt-3 space-y-2 text-gray-700 text-sm">
                      <li>Build modern, recruiter-ready UI with React + Tailwind.</li>
                      <li>Design consistent spacing, typography, and interaction states.</li>
                      <li>Deliver responsive layouts that work great on mobile.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl bg-white/60 border border-white/50 p-6 backdrop-blur">
                  <h3 className="font-semibold text-gray-900">Why Hire Me</h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    Hiring me means you get UI polish, clean implementation, and quick iteration.
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                    <li>Pixel-focused design decisions (spacing, hierarchy, hover states).</li>
                    <li>Performance-aware UI (lazy loading + subtle motion).</li>
                    <li>Clear communication and collaboration-ready delivery.</li>
                  </ul>
                  <div className="mt-5">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 transition"
                    >
                      Hire Me
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Skills */}
        <Reveal className="mt-12" delay={0.14}>
          <section aria-labelledby="skills-heading">
            <div className="max-w-6xl mx-auto">
              <h2 id="skills-heading" className="text-2xl sm:text-3xl font-bold text-gray-900">
                Skills
              </h2>
              <p className="text-gray-600 mt-3 max-w-2xl">
                A quick snapshot of what I’m strongest at today, and what I’m actively improving.
              </p>

              <div className="mt-8">
                <SkillsBars skills={skills.slice(0, 5)} />
              </div>
            </div>
          </section>
        </Reveal>

        {/* Testimonials */}
        <Reveal className="mt-12" delay={0.16}>
          <section aria-labelledby="testimonials-heading">
            <div className="max-w-6xl mx-auto">
              <h2 id="testimonials-heading" className="text-2xl sm:text-3xl font-bold text-gray-900">
                Testimonials
              </h2>
              <p className="text-gray-600 mt-3 max-w-2xl">
                Sample testimonials (replace later with real feedback).
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((t) => (
                  <div
                    key={t.name}
                    className="rounded-2xl bg-white/60 border border-white/50 backdrop-blur p-6 shadow-sm"
                  >
                    <p className="text-sm font-semibold text-indigo-800">{t.role}</p>
                    <p className="font-bold text-gray-900 mt-1">{t.name}</p>
                    <p className="text-gray-700 mt-4 text-sm leading-relaxed">“{t.quote}”</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* Achievements / Certifications */}
        <Reveal className="mt-12" delay={0.18}>
          <section aria-labelledby="achievements-heading">
            <div className="max-w-6xl mx-auto">
              <h2 id="achievements-heading" className="text-2xl sm:text-3xl font-bold text-gray-900">
                Achievements / Certifications
              </h2>
              <p className="text-gray-600 mt-3 max-w-2xl">
                A focused view of your learning journey and growth milestones.
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {achievements.map((a) => (
                  <div
                    key={a.title}
                    className="rounded-2xl bg-white/60 border border-white/50 backdrop-blur p-6 shadow-sm"
                  >
                    <p className="text-sm font-semibold text-gray-900">{a.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{a.issuer}</p>
                    <p className="text-xs text-gray-500 mt-2">{a.date}</p>
                    <p className="text-sm text-gray-700 mt-3 leading-relaxed">{a.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* Final CTA */}
        <Reveal className="mt-12 mb-4" delay={0.2}>
          <section aria-labelledby="final-cta-heading">
            <div className="max-w-6xl mx-auto rounded-3xl bg-white/60 border border-white/50 backdrop-blur p-7 sm:p-10 shadow-sm">
              <h2 id="final-cta-heading" className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Ready to build something premium?
              </h2>
              <p className="text-gray-600 mt-3 max-w-2xl">
                If you need modern UI, responsive layout, and smooth UX, let’s talk. I respond quickly and iterate fast.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 transition"
                >
                  Hire Me
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-xl font-semibold text-gray-900 bg-white/70 border border-gray-200 hover:bg-white transition"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
};

export default Home;
