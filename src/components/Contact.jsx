import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaHeart } from 'react-icons/fa';

function Contact() {
  return (
    <section className="py-10 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-orange-400 mb-6">Contact Me</h2>

      <div className="flex justify-center gap-8 text-3xl text-white">
        <a
          href="https://linkedin.com/in/kashinath-kesale"
          target="_blank"
          rel="noreferrer noopener"
          className="hover:text-orange-400 transition-colors duration-200"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Kashinath-Kesale"
          target="_blank"
          rel="noreferrer noopener"
          className="hover:text-orange-400 transition-colors duration-200"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:kashinathkesale1@gmail.com"
          className="hover:text-orange-400 transition-colors duration-200"
        >
          <FaEnvelope />
        </a>
        <a
          href="tel:+917507186684"
          className="hover:text-orange-400 transition-colors duration-200"
        >
          <FaPhone />
        </a>
      </div>

      {/* Divider */}
      <hr className="my-6 border-white w-1/4 mx-auto opacity-20" />

      {/* Thank You Message */}
      <p className="text-sm text-gray-400 mt-4">
        Thank you for visiting my personal portfolio website. Connect with me over socials.
        <br />
        <span>Keep Rising. 🚀</span>
      </p>

      {/* Designed By Text */}
      <p className="text-sm text-gray-400 flex justify-center items-center gap-1 mt-2">
        Designed with <FaHeart className="text-red-500 inline" /> by <span className="text-orange-400 font-semibold">Kashinath Kesale.</span>
      </p>
    </section>
  );
}

export default Contact;
