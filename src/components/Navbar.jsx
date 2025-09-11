import { NavLink, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import pages from './pagesList' // Use default import


const nav = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/services', label: 'Services' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
]


const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
            <div className="max-w-[var(--max)] mx-auto px-4 py-3 flex items-center justify-between">
                <Link to="/" className="group relative inline-block text-xl sm:text-xl font-bold tracking-tight text-gray-900 hover:text-blue-700 transition-colors duration-300">
                    SARATH • Portfolio
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 group-hover:w-full"></span>
                </Link>

                <button className="md:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
                    <Menu size={22} />
                </button>
                <nav className="hidden md:flex gap-6">
                    {nav.map(i => (
                        <NavLink
                            key={i.to}
                            to={i.to}
                            className={({ isActive }) => `text-sm hover:opacity-80 ${isActive ? 'font-semibold' : ''}`}
                        >{i.label}</NavLink>
                    ))}
                </nav>
            </div>
            {open && (
                <nav className="md:hidden border-t">
                    <div className="px-4 py-3 flex flex-col gap-3">
                        {nav.map(i => (
                            <NavLink key={i.to} to={i.to} onClick={() => setOpen(false)} className="py-1">
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