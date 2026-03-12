"use client";
import { Menu, Moon, Sun, Sword, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "motion/react";

const Navbar = ({
  theme,
  toggleTheme,
}: {
  theme: string;
  toggleTheme: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "The Path", href: "#path" },
    { name: "Pricing", href: "#pricing" },
    { name: "Community", href: "#community" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-[var(--glass-border)]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 rounded-full border-2 border-violet flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
            <Sword className="w-5 h-5 text-violet" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase italic text-[var(--text-primary)]">
            Ronin Focus
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-violet transition-colors"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-violet/10 text-[var(--text-secondary)] hover:text-violet transition-all"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="font-bold uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]/50 transition-all rounded-sm"
            >
              Login
            </Button>
            <Button className="bg-black text-white font-bold uppercase tracking-widest transition-all rounded-sm hover:bg-black/80 shadow-lg shadow-black/20 border border-white/10">
              Get Started
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-violet/10 text-[var(--text-secondary)]"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <button
            className="text-[var(--text-primary)]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 right-0 glass border-b border-[var(--glass-border)] p-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-[var(--text-secondary)]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-[var(--glass-border)]">
              <Button
                variant="outline"
                className="w-full py-6 text-[var(--text-primary)] font-bold uppercase tracking-widest rounded-sm"
              >
                Login
              </Button>
              <Button className="w-full py-6 bg-black text-white font-bold uppercase tracking-widest rounded-sm border border-white/10">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
