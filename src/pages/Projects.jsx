import { motion } from "framer-motion"
import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import "../App.css";
import NavigationButtons from "../components/NavigationButtons";

const Projects = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6  ">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1, border: "2px solid rgba(96, 165, 250, 1)", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02, // subtle zoom
              boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.12)", // softer shadow
              borderColor: "rgba(59, 130, 246, 0.5)", // Tailwind blue-400 with 50% opacity
            }}
            Transition={{ type: "spring", stiffness: 200, damping: 15 }} // smooth hover
            className="border border-blue-300 rounded-2xl shadow-sm bg-white overflow-hidden"
          >
            <ProjectCard project={p} />
          </motion.div>

        ))}
      </div>

       {/* ✅ Fixed Navigation Buttons */}
        <div className="fixed bottom-14 left-0 right-0 flex justify-between px-6">
          <NavigationButtons />
        </div>
    </section>
  ) 
}
export default Projects
