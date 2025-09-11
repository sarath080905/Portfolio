import { motion } from "framer-motion"
import SkillCard from '../components/SkillCard'
import skills from '../data/skills'
import "../App.css";
import NavigationButtons from "../components/NavigationButtons";

const About = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-b from-gray-50/90 to-white/90 border-2 border-blue-400 rounded-3xl shadow-lg">
      
      {/* 🎨 Animated Background Layer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-100 opacity-40"
        style={{ backgroundSize: "200% 200%" }}
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      ></motion.div>

      {/* 🌊 Extra floating elements (optional bubbles/shapes) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-400 rounded-full opacity-10 blur-2xl"
            style={{
              width: `${Math.random() * 60 + 40}px`,
              height: `${Math.random() * 60 + 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 space-y-16">
        
        {/* About Me Section */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 max-w-3xl mx-auto">
            I’m a <span className="font-semibold text-blue-600">Beginner developer</span> who loves building delightful web apps 🚀.
            As a fresher, I am continuously learning modern technologies like
            <strong className="text-gray-800"> HTML, CSS, Tailwind, JavaScript, React, Python, and SQL</strong>
            to build scalable web applications. 🌟
            I bring dedication, adaptability, and a strong will to grow in the tech field 🙌.
            I’m eager to contribute my skills, learn from real-world projects, and build a successful career in IT.
          </p>
        </div>

        {/* Skills Section */}
        <div className="space-y-10">
          <h3 className="text-2xl font-bold text-gray-800 text-center">
            Skills
          </h3>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {skills.map(s => (
              <motion.div
                key={s.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
              >
                <SkillCard
                  {...s}
                  className="p-5 bg-white shadow-md hover:shadow-xl rounded-2xl border border-gray-100 transition-transform transform hover:-translate-y-1"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ✅ Fixed Navigation Buttons */}
      <div className="fixed bottom-14 left-0 right-0 flex justify-between px-6 z-20">
        <NavigationButtons />
      </div>
    </section>
  )
}

export default About
