import React from 'react';
import { Link } from 'react-scroll';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">
        <div className="text-2xl font-bold text-orange-500">portFolio</div>
        <ul className="flex gap-6 text-md font-medium">
          <li>
            <Link
              to="home"
              smooth={true}
              offset={-50}
              duration={500}
              className="hover:text-orange-400 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              offset={-50}
              duration={500}
              className="hover:text-orange-400 transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              offset={-50}
              duration={500}
              className="hover:text-orange-400 transition"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="education"
              smooth={true}
              offset={-50}
              duration={500}
              className="hover:text-orange-400 transition"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              offset={-50}
              duration={500}
              className="hover:text-orange-400 transition"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-50}
              duration={500}
              className="hover:text-orange-400 transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
