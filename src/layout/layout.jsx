import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import AnimatedBackground from './Animation'


const Layout = () => {
    return (
        <div className="background ">
            {/* Firefly animation in the background */}
            {/* <FireflyBackground /> */}
            
            {/* Main content */}
            {/* <div className="min-h-screen flex flex-col bg-[rgba(179,226,240,0.8)] text-gray-900"> */}
                {/* <AnimatedBackground /> */}
            <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
                <Navbar />
                <main className="flex-1 w-full max-w-[var(--max-width)] mx-auto px-4 py-10">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    )
}
export default Layout;
