import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProfileAvatar from "../components/ProfileAvatar";
import Reveal from "../components/Reveal";
import "../App.css";

const About = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10">
      <motion.div
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-indigo-500/25 via-purple-500/20 to-pink-500/20 opacity-60"
        style={{ backgroundSize: "200% 200%" }}
        aria-hidden="true"
      />

      <div className="relative z-10 px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        <Reveal>
          <section aria-labelledby="about-title">
            <h2 id="about-title" className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              About
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl">
              I’m a frontend-first developer who builds premium-looking UIs with clean structure, responsive layout, and smooth interactions.
            </p>

            <div className="mt-8 grid lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-5">
                <div className="rounded-2xl bg-white/60 border border-white/50 backdrop-blur p-6 shadow-sm flex items-center gap-4">
                  <ProfileAvatar name="Sarathkumar" size={96} />
                  <div>
                    <p className="text-lg font-bold text-gray-900">Sarathkumar</p>
                    <p className="text-sm text-gray-600">Frontend Developer • UI/UX-minded</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/60 border border-white/50 backdrop-blur p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900">Skills</h3>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    <li>React + Tailwind for modern, consistent UI.</li>
                    <li>Framer Motion for subtle, professional animations.</li>
                    <li>Responsive design with accessibility in mind.</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white/60 border border-white/50 backdrop-blur p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900">Experience Highlights</h3>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    <li>Built portfolio + full app projects (e-commerce, booking, photo studio).</li>
                    <li>Worked with routing, state patterns, and API-style integration flows.</li>
                    <li>Delivered card-based UI and user-friendly interactions.</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-5">
                <div className="rounded-2xl bg-white/60 border border-white/50 backdrop-blur p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900">Goals</h3>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    <li>Ship production-quality interfaces that convert.</li>
                    <li>Improve backend + database depth to build complete solutions.</li>
                    <li>Keep learning modern frontend patterns and UX best practices.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900">Why Hire Me</h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    You’ll get clean implementation, quick iteration, and UI polish that looks premium.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700">
                    <li>Consistent typography + spacing and attention to interaction states.</li>
                    <li>Performance-aware UI decisions (lazy loading, lightweight motion).</li>
                    <li>Easy collaboration: clear progress and practical deliverables.</li>
                  </ul>

                  <div className="mt-5 flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 transition"
                    >
                      Hire Me
                    </Link>
                    <Link
                      to="/projects"
                      className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-gray-900 bg-white/70 border border-gray-200 hover:bg-white transition"
                    >
                      View Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
};

export default About;
