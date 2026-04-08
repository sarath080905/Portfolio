import { motion } from "framer-motion"
import services from '../data/Services'
import { Code2, Palette, Server } from "lucide-react";


const Services = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/40 dark:border-slate-700 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/60 px-4 sm:px-6 lg:px-10 py-10">
      {/* Soft abstract blobs (subtle, premium) */}
      <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-indigo-200/30 dark:bg-indigo-500/20 blur-3xl" aria-hidden="true" />
      <div className="absolute top-10 -right-20 h-72 w-72 rounded-full bg-purple-200/30 dark:bg-purple-500/20 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-pink-200/25 dark:bg-pink-500/20 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 space-y-8">
        <div className="space-y-3 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Services</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Clean, minimal, recruiter-friendly UI—built with modern Tailwind patterns and responsive layout best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon =
              service.icon === "palette"
                ? Palette
                : service.icon === "server"
                  ? Server
                  : Code2;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white/70 dark:bg-slate-900/75 backdrop-blur border border-white/50 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10 border border-gray-200/60 dark:border-slate-700 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-indigo-700 dark:text-indigo-300" />
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <motion.div
                  className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-70"
                  whileHover={{ scaleX: 1.7, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  aria-hidden="true"
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
