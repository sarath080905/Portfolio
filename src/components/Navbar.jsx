import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import { Menu, Moon, Sun } from 'lucide-react'


const nav = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/services', label: 'Services' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
]


const Navbar = ({ theme = 'light', onToggleTheme }) => {
    const [open, setOpen] = useState(false)
    return (
        <header className="sticky top-0 z-50 border-b border-white/60 bg-white/65 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/55 transition-colors duration-500">
            <div className="max-w-[var(--max-width)] mx-auto px-4 py-3 flex items-center justify-between">
                <Link to="/" className="group relative inline-block text-xl sm:text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 hover:text-blue-700 dark:hover:text-indigo-300 transition-colors duration-300">
                    SARATH • Portfolio
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 group-hover:w-full"></span>
                </Link>

                <div className="flex items-center gap-2">
                <button
                    onClick={onToggleTheme}
                    className="rounded-xl p-2 border border-gray-200 bg-white/80 text-gray-800 hover:text-indigo-700 hover:border-indigo-200 transition dark:border-slate-700 dark:bg-slate-900/80 dark:text-gray-200 dark:hover:text-indigo-300"
                    aria-label="Toggle light and dark mode"
                >
                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                <button className="md:hidden p-2 rounded-xl border border-gray-200 dark:border-slate-700" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
                    <Menu size={22} />
                </button>
                </div>

                <nav className="hidden md:flex gap-6">
                    {nav.map(i => (
                        <NavLink
                            key={i.to}
                            to={i.to}
                            className={({ isActive }) => `text-sm text-gray-700 dark:text-gray-200 hover:opacity-80 ${isActive ? 'font-semibold text-indigo-700 dark:text-indigo-300' : ''}`}
                        >{i.label}</NavLink>
                    ))}
                </nav>
            </div>
            {open && (
                <nav className="md:hidden border-t border-white/50 dark:border-slate-700/70">
                    <div className="px-4 py-3 flex flex-col gap-3">
                        {nav.map(i => (
                            <NavLink key={i.to} to={i.to} onClick={() => setOpen(false)} className="py-1 text-gray-700 dark:text-gray-100">
                                {i.label}
                            </NavLink>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    )
}
export default Navbar