"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const tools = [
  { name: "Visual Studio Code", category: "Code Editor", icon: "/icons/vscode.png" },
  { name: "React JS", category: "Library", icon: "/icons/react.png" },
  { name: "Next JS", category: "Framework", icon: "/icons/nextjs.png" },
  { name: "Tailwind CSS", category: "Framework", icon: "/icons/tailwind.png" },
  { name: "Typescript", category: "Language", icon: "/icons/typescript.png" },
  { name: "Javascript", category: "Language", icon: "/icons/javascript.png" },
  { name: "Node JS", category: "Javascript Runtime", icon: "/icons/nodejs.png" },
  { name: "Github", category: "Repository", icon: "/icons/github.png" },
  { name: "Git", category: "Version Control System", icon: "/icons/git.png" },
  { name: "Bun", category: "Javascript Runtime", icon: "/icons/bun.png" },
  { name: "Figma", category: "Design App", icon: "/icons/figma.png" },
  { name: "Styled Components", category: "CSS Library", icon: "/icons/styled.png" },
];

export default function Tools() {
  return (
    <motion.section
      id="tools"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 bg-darkbg flex flex-col items-center px-6"
    >
      <h2 className="text-3xl font-bold text-primary mb-12">Tools</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {tools.map((tool, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05, duration: 0.5 }}
            className="flex items-center gap-4 p-5 rounded-xl 
                       bg-darkcard border border-primary/30 shadow-md 
                       hover:border-primary hover:shadow-lg hover:shadow-primary/20 
                       transition"
          >
            <Image
              src={tool.icon}
              alt={tool.name}
              width={40}
              height={40}
              className="rounded-md"
            />
            <div>
              <h3 className="text-white font-semibold">{tool.name}</h3>
              <p className="text-gray-400 text-sm">{tool.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
