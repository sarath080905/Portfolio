import { motion } from "framer-motion"
import ContactForm from '../components/ContactForm'
import "../App.css";
import NavigationButtons from "../components/NavigationButtons";


const Contact = () => {
  return (
    <section className="relative max-w-2xl mx-auto space-y-8 py-16 px-6 overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-blue-50 via-blue-100 to-white">
      
      {/* 🎨 Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-100 opacity-40"
        style={{ backgroundSize: "200% 200%" }}
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      {/* 🌊 Subtle Floating Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-400 rounded-full opacity-10 blur-xl"
            style={{
              width: `${Math.random() * 60 + 30}px`,
              height: `${Math.random() * 60 + 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, Math.random() * 40 - 20, 0],
            }}
            transition={{
              duration: Math.random() * 12 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Foreground Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 space-y-3"
      >
        <h2 className="text-2xl font-bold text-gray-800">Contact Me</h2>
        <p className="text-gray-600">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10"
      >
        <ContactForm />
      </motion.div>

      {/* ✅ Fixed Navigation Buttons */}
      <div className="fixed bottom-14 left-0 right-0 flex justify-between px-6 z-20">
        <NavigationButtons />
      </div>
    </section>
  )
}

export default Contact
