// import { useState } from 'react'
// import Button from './Button'


// const initial = { name: 'Sarathkumar', email: 'Sarath2036@gmail.com', message: '' }


// const ContactForm = () => {
//     const [form, setForm] = useState(initial)
//     const [sent, setSent] = useState(false)


//     const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })


//     const onSubmit = e => {
//         e.preventDefault()
//         // TODO: Integrate EmailJS / backend later
//         console.log('Form submitted', form)
//         setSent(true)
//         setForm(initial)
//     }


//     return (
//         <form onSubmit={onSubmit} className="space-y-4">
//             <div>
//                 <label className="block text-sm mb-1" htmlFor="name">Name</label>
//                 <input id="name" name="name" value={form.name} onChange={onChange} required className="w-full border rounded-xl px-3 py-2" />
//             </div>
//             <div>
//                 <label className="block text-sm mb-1" htmlFor="email">Email</label>
//                 <input id="email" type="email" name="email" value={form.email} onChange={onChange} required className="w-full border rounded-xl px-3 py-2" />
//             </div>
//             <div>
//                 <label className="block text-sm mb-1" htmlFor="message">Message</label>
//                 <textarea id="message" name="message" rows="5" value={form.message} onChange={onChange} required className="w-full border rounded-xl px-3 py-2" />
//             </div>
//             <Button type="submit">Send Message</Button>
//             {sent && <p className="text-sm text-green-600">Thanks! I will reply soon.</p>}
//         </form>
//     )
// }
// export default ContactForm


// ================================================

import { useState } from 'react'
import emailjs from 'emailjs-com'
import Button from './Button'

// Initial form values
const initial = { name: '', email: '', message: '' }

const ContactForm = () => {
  const [form, setForm] = useState(initial)
  const [sent, setSent] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  // Handle input changes
  const onChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value })

  // Handle form submit
  const onSubmit = e => {
    e.preventDefault()
    setIsSending(true)

    // Send email via EmailJS
    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        () => {
          setSent(true)
          setErrorMsg('')
          setForm(initial)
          setIsSending(false)
        },
        error => {
          console.error('FAILED...', error)
          setErrorMsg('Failed to send. Please try again later.')
          setIsSending(false)
        }
      )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm mb-1 text-gray-700 dark:text-gray-200" htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={onChange}
          required
          placeholder="Your name"
          className="w-full bg-white/80 border border-gray-200/80 rounded-xl px-3 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/40 transition dark:bg-slate-900/80 dark:border-slate-700 dark:text-gray-100 dark:placeholder-gray-500"
        />
      </div>

      <div>
        <label className="block text-sm mb-1 text-gray-700 dark:text-gray-200" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          required
          placeholder="your@email.com"
          className="w-full bg-white/80 border border-gray-200/80 rounded-xl px-3 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/40 transition dark:bg-slate-900/80 dark:border-slate-700 dark:text-gray-100 dark:placeholder-gray-500"
        />
      </div>

      <div>
        <label className="block text-sm mb-1 text-gray-700 dark:text-gray-200" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={form.message}
          onChange={onChange}
          required
          placeholder="Tell me about your project..."
          className="w-full bg-white/80 border border-gray-200/80 rounded-xl px-3 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/40 transition dark:bg-slate-900/80 dark:border-slate-700 dark:text-gray-100 dark:placeholder-gray-500"
        />
      </div>

      <Button
        type="submit"
        disabled={isSending}
        className="w-full sm:w-auto transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSending ? "Sending..." : "Send Message"}
      </Button>

      {/* Success / Error Messages */}
      {sent && (
        <p className="text-sm text-green-600" role="status">
          Thanks! Your message has been sent.
        </p>
      )}
      {errorMsg && (
        <p className="text-sm text-red-600" role="alert">
          {errorMsg}
        </p>
      )}
    </form>
  )
}

export default ContactForm
