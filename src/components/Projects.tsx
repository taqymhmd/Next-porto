"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Nusacare Hospital",
    desc: "Platform manajemen rawat jalan modern berbasis Laravel & React untuk meningkatkan efisiensi pelayanan rumah sakit.",
    img: "/image/nusacare.png",
    link: "https://nusa-care-hospital.vercel.app/",
  },
  {
    title: "Catalyst Merch",
    desc: "Website e-commerce merchandise dengan tampilan clean dan interaksi sederhana berbasis HTML, CSS, dan JavaScript.",
    img: "/image/catalyst.png",
    link: "https://catalyst-tawny.vercel.app/",
  },
  {
    title: "Aromansa Coffee",
    desc: "Landing page coffee shop dengan desain hangat dan storytelling visual untuk menghadirkan suasana kedai kopi secara digital.",
    img: "/image/aromansa.png",
    link: "https://aromansa.vercel.app/",
  },
  {
    title: "Pokemon With API",
    desc: "Eksplorasi interaktif menggunakan PokeAPI, menghadirkan informasi Pokémon secara real-time dalam format landing page responsif.",
    img: "/image/pokemon.png",
    link: "https://pokemon-with-api.vercel.app/",
  },
  {
    title: "Simple Portfolio",
    desc: "Portofolio personal sederhana berbasis HTML & CSS untuk menampilkan identitas, karya, dan branding digital dengan ringkas.",
    img: "/image/portfolio.png",
    link: "https://my-porto-rho-eight.vercel.app/",
  },
  {
    title: "Simple Player Music",
    desc: "Music player interaktif berbasis web dengan desain intuitif dan kontrol pemutaran sederhana untuk pengalaman audio yang menyenangkan.",
    img: "/image/player-music.png",
    link: "https://three-music-delta.vercel.app/",
  },
];

const container: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut", 
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70 },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-darkbg text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-primary mb-12"
      >
        My Projects
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-primary/40 hover:shadow-2xl flex flex-col group"
          >
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow text-left">
              <p className="text-gray-400 text-sm flex-grow">{project.desc}</p>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 flex justify-center items-center w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-xl transition relative overflow-hidden"
              >
                <span className="relative z-10">Live Demo</span>
                <span className="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition duration-500"></span>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
