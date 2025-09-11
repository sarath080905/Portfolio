import { Routes, Route } from 'react-router-dom'
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Services from './pages/Services.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Layout from './layout/layout.jsx';


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="services" element={<Services />} />
                <Route path="blog" element={<Blog />} />
                <Route path="contact" element={<Contact />} />
                {/* Fallback route */}
                <Route path="*" element={<Home />} />
            </Route>
        </Routes>
    )
}
export default App