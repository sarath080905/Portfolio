import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const Footer = () => {
  return (

    <footer className="border-t mt-10 bg-[rgba(161,176,183,0.8)]">
      <div className="max-w-[var(--max)] mx-auto py-4 px-20 text-sm flex flex-col md:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} Designed & developed by Sarath.</p>
        
        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>

          <a
            href="mailto:you@example.com"
            className="hover:underline flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
