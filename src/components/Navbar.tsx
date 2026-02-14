"use client";
import Link from "next/link";
import { useState } from "react";

interface NavLink {
  href: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#tools", label: "Tools" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed w-full bg-darkbg/5 backdrop-blur-md text-primary px-6 py-4 flex justify-between items-center shadow-md top-0 z-50">
      
      <h1 className="text-2xl font-bold tracking-wide cursor-pointer select-none">
        <Link href="#home">MyPortfolio</Link>
      </h1>

      <ul className="hidden md:flex space-x-8 text-lg font-medium">
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="relative px-2 py-1 hover:text-secondary transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {label}
              <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-secondary transition-[width] duration-300 hover:w-full" />
            </Link>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className="md:hidden flex flex-col justify-center items-center gap-1 w-8 h-8 focus:outline-none"
      >
        <span
          className={`block w-8 h-0.5 rounded-sm bg-primary transition-transform duration-300 origin-left ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-8 h-0.5 rounded-sm bg-primary transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block w-8 h-0.5 rounded-sm bg-primary transition-transform duration-300 origin-left ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-darkbg/90 shadow-lg flex flex-col items-center py-4 space-y-4 z-40">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-primary hover:text-secondary text-lg font-medium transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
