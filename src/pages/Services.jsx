import { motion } from "framer-motion"
import "../App.css";
import services from '../data/Services'
import NavigationButtons from "../components/NavigationButtons";


const Services = () => {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Services</h2>
        <p className="text-gray-600">💡 “As a beginner developer, I’m learning and exploring different areas of web development. <br />
          Here are the skills and services I’m practicing to bring ideas to life while growing in my journey.”</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="border-2 border-blue-400 rounded-2xl p-6 bg-from-gray-50/90 to-white/90 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            <span className="text-4xl mb-4 block">{service.icon}</span>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
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

export default Services
