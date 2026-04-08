import { Link } from "react-router-dom";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section className="space-y-10">
      <Reveal>
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            A curated set of work with modern UI, responsive layouts, and clean implementation. Featured items are optimized for quick recruiter scanning.
          </p>
          <div className="flex gap-3 flex-wrap pt-1">
            <Link to="/" className="text-sm font-semibold text-indigo-700 hover:text-indigo-900 transition">
              ← Back to Home
            </Link>
            <Link to="/contact" className="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-indigo-800 dark:hover:text-indigo-300 transition">
              Let’s collaborate
            </Link>
          </div>
        </div>
      </Reveal>

      {featured.length ? (
        <Reveal delay={0.06}>
          <div className="space-y-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Featured</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Your strongest, most recruiter-friendly work.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((p) => (
                <ProjectCard key={p.title} project={p} featured />
              ))}
            </div>
          </div>
        </Reveal>
      ) : null}

      <Reveal delay={0.12}>
        <div className="space-y-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">All Projects</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Everything in one place.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((p) => (
              <ProjectCard key={p.title} project={p} featured={false} />
            ))}

            {featured.length ? null : projects.map((p) => <ProjectCard key={p.title} project={p} featured={false} />)}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Projects;
