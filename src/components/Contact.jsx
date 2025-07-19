import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const contactMethods = [
  {
    label: 'LinkedIn',
    icon: <FaLinkedin />, 
    href: 'https://linkedin.com/in/kashinath-kesale',
    color: 'bg-blue-100 text-blue-700 ring-blue-200',
    hover: 'hover:bg-blue-200 hover:text-blue-800',
  },
  {
    label: 'GitHub',
    icon: <FaGithub />, 
    href: 'https://github.com/Kashinath-Kesale',
    color: 'bg-gray-100 text-gray-800 ring-gray-200',
    hover: 'hover:bg-gray-200 hover:text-black',
  },
  {
    label: 'Email',
    icon: <FaEnvelope />, 
    href: 'mailto:kashinathkesale1@gmail.com',
    color: 'bg-indigo-100 text-indigo-700 ring-indigo-200',
    hover: 'hover:bg-indigo-200 hover:text-indigo-800',
  },
  {
    label: 'Phone',
    icon: <FaPhone />, 
    href: 'tel:+917507186684',
    color: 'bg-green-100 text-green-700 ring-green-200',
    hover: 'hover:bg-green-200 hover:text-green-800',
  },
];

function Contact() {
  const [copied, setCopied] = useState('');
  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 1200);
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-indigo-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-14 px-4 flex flex-col items-center transition-colors duration-500">
      <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-yellow-400 mb-2 flex items-center justify-center gap-2">
        <FaEnvelope className="text-indigo-600 dark:text-yellow-400" />
        Contact
      </h2>
      <p className="text-base text-slate-500 dark:text-slate-200 mb-8 text-center max-w-xl">
        Let's connect! Feel free to reach out via any of the methods below.
      </p>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-white/90 dark:bg-slate-800/90 border border-indigo-100 dark:border-slate-700 rounded-2xl shadow-lg px-8 py-10 max-w-md w-full flex flex-col items-center relative overflow-hidden transition-colors"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat z-0" />
        <div className="relative z-10 w-full">
          <div className="flex justify-center gap-8 mb-8">
            {contactMethods.map((method, i) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.label === 'Email' || method.label === 'Phone' ? undefined : '_blank'}
                rel={method.label === 'Email' || method.label === 'Phone' ? undefined : 'noreferrer noopener'}
                whileHover={{ scale: 1.18 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col items-center justify-center w-16 h-16 rounded-full ring-2 ${method.color} ${method.hover} shadow transition-all duration-300 group dark:bg-slate-800 dark:text-indigo-400 dark:ring-indigo-500 dark:hover:bg-indigo-900 dark:hover:text-yellow-300`}
                title={method.label}
              >
                <span className="text-2xl">{method.icon}</span>
                <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-slate-500 dark:text-slate-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 pointer-events-none">
                  {method.label}
                </span>
              </motion.a>
            ))}
          </div>
          <div className="w-full grid grid-cols-1 gap-2 items-center mb-4">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base text-slate-700 dark:text-slate-100 font-medium flex items-center gap-2 justify-center"
            >
              <FaEnvelope className="text-indigo-400 dark:text-indigo-400" />
              <span className="font-semibold text-indigo-600 dark:text-indigo-300">kashinathkesale1@gmail.com</span>
              <button onClick={() => handleCopy('kashinathkesale1@gmail.com', 'email')} className="ml-2 px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-200 text-xs font-semibold hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors focus:outline-none">
                {copied === 'email' ? 'Copied!' : 'Copy'}
              </button>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-base text-slate-700 dark:text-slate-100 font-medium flex items-center gap-2 justify-center"
            >
              <FaPhone className="text-green-400 dark:text-green-400" />
              <span className="font-semibold text-green-700 dark:text-green-300">+91 75071 86684</span>
              <button onClick={() => handleCopy('+917507186684', 'phone')} className="ml-2 px-2 py-0.5 rounded bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-200 text-xs font-semibold hover:bg-green-100 dark:hover:bg-green-800 transition-colors focus:outline-none">
                {copied === 'phone' ? 'Copied!' : 'Copy'}
              </button>
            </motion.p>
          </div>
        </div>
      </motion.div>
      <div className="w-full flex flex-col items-center mt-8">
        <hr className="my-6 border-indigo-200 dark:border-indigo-500 w-1/4 mx-auto opacity-30" />
        <p className="text-sm text-slate-500 dark:text-slate-300 text-center">
          Thank you for visiting my portfolio. Connect with me over socials.<br />
          <span className="text-indigo-600 dark:text-yellow-400">Keep Rising. 🚀</span>
        </p>
        <p className="text-sm text-slate-400 dark:text-slate-400 flex justify-center items-center gap-1 mt-2">
          Designed with <FaHeart className="text-red-500 dark:text-yellow-400 inline" /> by <span className="text-indigo-600 dark:text-indigo-300 font-semibold">Kashinath Kesale.</span>
        </p>
      </div>
    </section>
  );
}

export default Contact;
