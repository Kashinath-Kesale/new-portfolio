import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const contactMethods = [
  {
    label: 'LinkedIn',
    icon: <FaLinkedin />, 
    href: 'https://linkedin.com/in/kashinath-kesale',
    hover: 'hover:bg-blue-50 hover:text-[#0A66C2] hover:ring-[#0A66C2] dark:hover:bg-blue-950/40 dark:hover:text-[#0A66C2] dark:hover:ring-[#0A66C2]/60 hover:shadow-blue-500/20',
  },
  {
    label: 'GitHub',
    icon: <FaGithub />, 
    href: 'https://github.com/Kashinath-Kesale',
    hover: 'hover:bg-slate-900 hover:text-white hover:ring-slate-900 dark:hover:bg-zinc-700 dark:hover:text-white dark:hover:ring-zinc-400 hover:shadow-slate-500/20',
  },
  {
    label: 'Email',
    icon: <FaEnvelope />, 
    href: 'mailto:kashinathkesale1@gmail.com',
    hover: 'hover:bg-red-50 hover:text-[#EA4335] hover:ring-[#EA4335] dark:hover:bg-red-950/40 dark:hover:text-[#EA4335] dark:hover:ring-[#EA4335]/60 hover:shadow-red-500/20',
  },
  {
    label: 'Phone',
    icon: <FaPhone />, 
    href: 'tel:+917507186684',
    hover: 'hover:bg-emerald-50 hover:text-[#25D366] hover:ring-[#25D366] dark:hover:bg-emerald-950/40 dark:hover:text-[#22c55e] dark:hover:ring-[#22c55e]/60 hover:shadow-emerald-500/20',
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
    <section id="contact" className="relative bg-gradient-to-br from-slate-50 via-indigo-50/20 to-sky-50/30 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 py-16 px-4 flex flex-col items-center transition-colors duration-500 overflow-hidden">
      {/* Ambient Floating Glow Orbs */}
      <div aria-hidden className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-300/20 via-sky-200/20 to-blue-300/15 dark:from-indigo-950/30 dark:via-sky-950/20 dark:to-zinc-950/20 blur-3xl rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-10 right-1/4 w-[420px] h-[420px] bg-gradient-to-br from-blue-300/20 to-indigo-300/15 dark:from-zinc-900/40 dark:to-cyan-950/20 blur-3xl rounded-full"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-indigo-600 dark:text-sky-400 mb-2 flex items-center justify-center gap-3">
            <FaEnvelope className="text-indigo-600 dark:text-sky-400" />
            Contact
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-zinc-400 text-center max-w-xl">
            Let's connect! Feel free to reach out via any of the methods below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/80 dark:border-zinc-800 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.06)] dark:shadow-2xl hover:border-indigo-300 dark:hover:border-sky-400/60 px-8 py-10 max-w-md w-full flex flex-col items-center relative overflow-hidden transition-all duration-300"
        >
          <div className="relative z-10 w-full">
            <div className="flex justify-center gap-5 sm:gap-7 mb-9 pt-3">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.label === 'Email' || method.label === 'Phone' ? undefined : '_blank'}
                  rel={method.label === 'Email' || method.label === 'Phone' ? undefined : 'noreferrer noopener'}
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-50/90 text-slate-700 ring-2 ring-slate-200/80 shadow transition-all duration-300 group dark:bg-zinc-800/90 dark:text-zinc-300 dark:ring-zinc-700 ${method.hover}`}
                  title={method.label}
                >
                  <span className="text-xl sm:text-2xl transition-colors duration-200">{method.icon}</span>
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs text-slate-500 dark:text-zinc-400 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none whitespace-nowrap font-medium">
                    {method.label}
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="w-full grid grid-cols-1 gap-2.5 items-center mb-2">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 font-medium flex items-center gap-2 justify-center"
              >
                <FaEnvelope className="text-indigo-500 dark:text-sky-400 flex-shrink-0" />
                <span className="font-semibold text-indigo-600 dark:text-sky-300">kashinathkesale1@gmail.com</span>
                <button
                  onClick={() => handleCopy('kashinathkesale1@gmail.com', 'email')}
                  className="ml-2 px-2.5 py-0.5 rounded-md bg-indigo-50/90 dark:bg-zinc-800 text-indigo-600 dark:text-sky-300 border border-indigo-100 dark:border-zinc-700 text-xs font-semibold hover:bg-indigo-100 dark:hover:bg-zinc-700 transition-colors focus:outline-none"
                >
                  {copied === 'email' ? 'Copied!' : 'Copy'}
                </button>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 font-medium flex items-center gap-2 justify-center"
              >
                <FaPhone className="text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">+91 75071 86684</span>
                <button
                  onClick={() => handleCopy('+917507186684', 'phone')}
                  className="ml-2 px-2.5 py-0.5 rounded-md bg-emerald-50/90 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-zinc-700 text-xs font-semibold hover:bg-emerald-100 dark:hover:bg-zinc-700 transition-colors focus:outline-none"
                >
                  {copied === 'phone' ? 'Copied!' : 'Copy'}
                </button>
              </motion.p>
            </div>
          </div>
        </motion.div>
        <div className="w-full flex flex-col items-center mt-8">
          <hr className="my-6 border-indigo-200 dark:border-zinc-800 w-1/4 mx-auto opacity-40" />
          <p className="text-sm text-slate-500 dark:text-zinc-400 text-center">
            Thank you for visiting my portfolio. Connect with me over socials.<br />
            <span className="text-indigo-600 dark:text-sky-400 font-semibold">Keep Rising. 🚀</span>
          </p>
          <p className="text-sm text-slate-400 dark:text-zinc-500 flex justify-center items-center gap-1 mt-2">
            Designed with <FaHeart className="text-red-500 dark:text-red-400 inline" /> by <span className="text-indigo-600 dark:text-sky-400 font-semibold">Kashinath Kesale.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
