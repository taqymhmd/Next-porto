"use client";

import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import { motion, Variants, Transition } from "framer-motion";

export default function Contact() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 } as Transition,
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  const socials = [
    {
      href: "mailto:Taqy.mutu@gmail.com",
      icon: <Mail size={24} />,
      glow: "hover:shadow-[0_0_20px_#eab308] hover:text-yellow-400",
    },
    {
      href: "https://www.linkedin.com/in/taqymhmd",
      icon: <Linkedin size={24} />,
      glow: "hover:shadow-[0_0_20px_#2563eb] hover:text-blue-500",
    },
    {
      href: "https://github.com/taqymhmd",
      icon: <Github size={24} />,
      glow: "hover:shadow-[0_0_20px_#a855f7] hover:text-purple-400",
    },
    {
      href: "https://www.instagram.com/taqymhmd",
      icon: <Instagram size={24} />,
      glow: "hover:shadow-[0_0_20px_#ec4899] hover:text-pink-500",
    },
  ];

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-20 bg-darkbg flex items-center justify-center px-6"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="w-full max-w-3xl text-center p-10 rounded-2xl 
                   bg-gradient-to-br from-black/80 via-purple-900/70 to-black/80 
                   border border-purple-700 shadow-lg"
      >
        <motion.h2
          variants={item}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-primary"
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          variants={item}
          className="text-gray-300 mb-10 text-lg leading-relaxed"
        >
          Always open for exciting collaborations, freelance projects, or even
          just a friendly chat. Don’t hesitate to reach out!
        </motion.p>

        <motion.a
          variants={item}
          href="mailto:Taqy.mutu@gmail.com"
          className="relative px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center gap-3
                     text-white overflow-hidden border border-purple-500 shadow-md hover:bg-purple-500 hover:text-black transition"
        >
          <Mail size={22} />
          <span>Say Hello</span>
        </motion.a>

        <motion.div
          variants={container}
          className="flex justify-center gap-8 mt-12"
        >
          {socials.map((s, i) => (
            <motion.a
              key={i}
              variants={item}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-14 h-14 flex items-center justify-center rounded-full border border-purple-500 
                          text-gray-300 backdrop-blur-md bg-white/5 transition-all transform hover:scale-110 ${s.glow}`}
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
