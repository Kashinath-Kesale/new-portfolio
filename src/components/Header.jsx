import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">
        <div className="text-2xl font-bold text-orange-500">portFolio</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-md font-medium">
          {navItems.map(item => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                offset={-50}
                duration={500}
                className="hover:text-orange-400 transition cursor-pointer"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-gray-900 text-md font-medium">
          {navItems.map(item => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                offset={-50}
                duration={500}
                className="block hover:text-orange-400 transition cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Header;













// import React from 'react';
// import { Link } from 'react-scroll';

// function Header() {
//   return (
//     <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
//       <nav className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">
//         <div className="text-2xl font-bold text-orange-500">portFolio</div>
//         <ul className="flex gap-6 text-md font-medium">
//           <li>
//             <Link
//               to="home"
//               smooth={true}
//               offset={-50}
//               duration={500}
//               className="hover:text-orange-400 transition"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="about"
//               smooth={true}
//               offset={-50}
//               duration={500}
//               className="hover:text-orange-400 transition"
//             >
//               About
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="skills"
//               smooth={true}
//               offset={-50}
//               duration={500}
//               className="hover:text-orange-400 transition"
//             >
//               Skills
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="education"
//               smooth={true}
//               offset={-50}
//               duration={500}
//               className="hover:text-orange-400 transition"
//             >
//               Education
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="projects"
//               smooth={true}
//               offset={-50}
//               duration={500}
//               className="hover:text-orange-400 transition"
//             >
//               Projects
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="contact"
//               smooth={true}
//               offset={-50}
//               duration={500}
//               className="hover:text-orange-400 transition"
//             >
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;
