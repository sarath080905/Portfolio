import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
 
const getPreferredTheme = () => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const Layout = () => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        setTheme(getPreferredTheme())
    }, [])

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark')
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

    return (
        <div className="min-h-screen flex flex-col bg-[radial-gradient(circle_at_top_left,_rgba(191,219,254,0.5),_transparent_45%),radial-gradient(circle_at_80%_10%,_rgba(233,213,255,0.45),_transparent_40%),radial-gradient(circle_at_40%_90%,_rgba(251,207,232,0.45),_transparent_38%),linear-gradient(160deg,_#f8fafc,_#f5f3ff,_#eef2ff)] text-gray-900 transition-colors duration-500 dark:bg-[radial-gradient(circle_at_top_left,_rgba(30,64,175,0.18),_transparent_45%),radial-gradient(circle_at_80%_10%,_rgba(126,34,206,0.2),_transparent_40%),radial-gradient(circle_at_40%_90%,_rgba(190,24,93,0.16),_transparent_38%),linear-gradient(180deg,_#020617,_#0f172a,_#111827)] dark:text-gray-100">
            <div className="absolute inset-0 pointer-events-none opacity-60 dark:opacity-80">
                <div className="absolute -top-28 -left-24 h-72 w-72 rounded-full bg-indigo-300/25 blur-3xl dark:bg-indigo-500/15" />
                <div className="absolute top-32 right-0 h-80 w-80 rounded-full bg-pink-300/20 blur-3xl dark:bg-fuchsia-500/15" />
            </div>

            <div className="relative min-h-screen flex flex-col">
                <Navbar theme={theme} onToggleTheme={toggleTheme} />
                <main className="flex-1 w-full max-w-[var(--max-width)] mx-auto px-4 py-10">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    )
}
export default Layout;
