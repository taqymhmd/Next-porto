import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Tools";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main className="bg-[#0a0a0a] text-white">

      <section id="about" className="py-20 container mx-auto px-4">
        <About />
      </section>

      <section id="projects" className="py-20 container mx-auto px-4">
        <Projects />
      </section>

      <section id="tools" className="py-20 container mx-auto px-4">
        <Experience />
      </section>

      <section id="contact" className="py-20 container mx-auto px-4">
        <Contact />
      </section>
    </main>
  );
}
