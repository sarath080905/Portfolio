import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer className="border-t mt-10 bg-white/50 backdrop-blur border-white/60 dark:bg-slate-950/50 dark:border-slate-800">
      <div className="max-w-[var(--max-width)] mx-auto py-4 px-4 sm:px-6 lg:px-12 text-sm flex flex-col md:flex-row items-center justify-between gap-2 text-gray-700 dark:text-gray-300">
        <p>© {new Date().getFullYear()} Designed & developed by Sarath.</p>
        
        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/sarath080905/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-700 dark:hover:text-indigo-300 transition flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sarathkumar-s-293440356/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BTr29U6T1QF6zBUk4AAurMw%3D%3D"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-700 dark:hover:text-indigo-300 transition flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>

          <a
            href="mailto:sarath2036@gmail.com"
            className="hover:text-indigo-700 dark:hover:text-indigo-300 transition flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
