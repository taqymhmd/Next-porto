"use client";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import { useRef, useMemo } from "react";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });


  const yImage = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yTitle = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yDesc = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const yButton = useTransform(scrollYProgress, [0, 1], [20, -20]);


  const container: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
  };


  const particles = useMemo(
    () =>
      Array.from({ length: 12 }).map(() => ({
        width: Math.random() * 8 + 4,
        height: Math.random() * 8 + 4,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: 5 + Math.random() * 5,
        delay: Math.random() * 3,
      })),
    []
  );

  const stars = useMemo(
    () =>
      Array.from({ length: 40 }).map(() => ({
        width: Math.random() * 2 + 1,
        height: Math.random() * 2 + 1,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: 2 + Math.random() * 3,
        delay: Math.random() * 4,
      })),
    []
  );

  return (
    <motion.section
      id="about"
      ref={ref}
      variants={container}
      initial="hidden"
      animate="show"
      className="pt-10 flex justify-center relative overflow-hidden"
    >

      {particles.map((p, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-purple-400/40 blur-sm"
          style={{
            width: p.width,
            height: p.height,
            top: p.top,
            left: p.left,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      {stars.map((s, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            width: s.width,
            height: s.height,
            top: s.top,
            left: s.left,
          }}
          animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 1] }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: s.delay,
          }}
        />
      ))}


      <motion.div
        variants={item}
        whileHover={{ scale: 1.03, rotateX: 3, rotateY: -3 }}
        className="relative w-full max-w-2xl min-h-[500px] p-10 rounded-2xl border border-purple-700 shadow-2xl text-center flex flex-col items-center justify-center space-y-6 overflow-hidden"
      >
        
        <div className="absolute inset-0 rounded-2xl animate-gradient bg-[length:400%_400%] bg-gradient-to-br from-purple-900 via-black to-purple-700 opacity-80" />

        
        <div className="absolute inset-0 rounded-2xl bg-purple-600/10 blur-3xl" />

        
        <div className="relative z-10 flex flex-col items-center space-y-6">
          
          <motion.div
            style={{ y: yImage }}
            variants={item}
            whileHover={{ scale: 1.15, rotate: 8 }}
            className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl bg-purple-900"
          >
            <Image
              src="/logo.jpeg"
              alt="Profile Photo"
              width={128}
              height={128}
              className="rounded-full object-cover"
            />
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-purple-600 mix-blend-multiply"
            />
          </motion.div>

          
          <motion.h1
            style={{ y: yTitle }}
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="text-4xl font-extrabold text-white drop-shadow-lg"
          >
            Hello World! <br />
            <span className="text-purple-400">I’m Taqy</span>
          </motion.h1>

          
          <motion.p
            style={{ y: yDesc }}
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="text-gray-200 text-base md:text-lg max-w-lg leading-relaxed drop-shadow-md"
          >
            I’m a{" "}
            <span className="font-semibold text-purple-400">
              Frontend Developer
            </span>{" "}
            passionate about building modern, scalable, and beautiful web
            applications. I specialize in JavaScript, TypeScript, ReactJs, and
            NextJs.
          </motion.p>

          
          <motion.a
            style={{ y: yButton }}
            variants={item}
            whileHover={{
              scale: 1.15,
              boxShadow: "0px 0px 30px rgba(168,85,247,1)",
              backgroundColor: "#a855f7",
              color: "#000",
            }}
            whileTap={{ scale: 0.9 }}
            href="#projects"
            className="inline-block mt-4 px-8 py-3 rounded-full border border-purple-500 text-purple-400 transition-colors font-semibold shadow-md bg-black/40 backdrop-blur-sm"
          >
            View My Projects
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
}
