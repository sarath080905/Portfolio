import { motion } from "framer-motion"
import ContactForm from '../components/ContactForm'
import { Mail, MapPin, Phone } from "lucide-react";


const Contact = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/40 dark:border-slate-700 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/60 px-4 sm:px-6 lg:px-10 py-10">
      {/* Soft abstract blobs */}
      <div className="absolute -top-24 -right-20 h-80 w-80 rounded-full bg-indigo-200/30 dark:bg-indigo-500/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-pink-200/25 dark:bg-pink-500/20 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:items-start justify-between">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Let’s work together
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed max-w-xl">
              Have a project in mind? Send a message and I’ll get back to you soon.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white/60 dark:bg-slate-900/70 border border-white/50 dark:border-slate-700 backdrop-blur p-4 shadow-sm flex items-start gap-3">
                <Mail className="h-5 w-5 text-indigo-700 dark:text-indigo-300 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Email</p>
                  <a
                    href="mailto:sarath2036@gmail.com"
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-300 transition break-words leading-snug"
                  >
                    sarath2036@gmail.com
                  </a>
                </div>
              </div>
              <div className="rounded-2xl bg-white/60 dark:bg-slate-900/70 border border-white/50 dark:border-slate-700 backdrop-blur p-4 shadow-sm flex items-start gap-3">
                <Phone className="h-5 w-5 text-indigo-700 dark:text-indigo-300 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Phone</p>
                  <a
                    href="tel:+91 8270836235"
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-300 transition"
                  >
                    +91 8270836235
                  </a>
                </div>
              </div>
              <div className="rounded-2xl bg-white/60 dark:bg-slate-900/70 border border-white/50 dark:border-slate-700 backdrop-blur p-4 shadow-sm flex items-start gap-3">
                <MapPin className="h-5 w-5 text-indigo-700 dark:text-indigo-300 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Location</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Remote / India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="flex-1"
          >
            <div className="rounded-2xl bg-white/70 dark:bg-slate-900/75 backdrop-blur border border-white/50 dark:border-slate-700 shadow-sm p-6 sm:p-8">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
