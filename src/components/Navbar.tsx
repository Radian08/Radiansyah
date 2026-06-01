"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "#tentang", label: "Tentang" },
  { href: "#proyek", label: "Proyek" },
  { href: "#skill", label: "Skill" },
  { href: "#kontak", label: "Kontak" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 border-b border-[var(--color-border)]/60 bg-[var(--color-surface)]/85 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="font-mono text-sm font-semibold tracking-tight text-sky-300">
          Akmal.dev
        </a>

        <ul className="hidden gap-8 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition hover:text-sky-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#kontak"
          className="hidden rounded-full bg-sky-500/15 px-4 py-2 text-sm font-medium text-sky-300 ring-1 ring-sky-500/30 transition hover:bg-sky-500/25 md:inline-block"
        >
          Hubungi saya
        </a>

        <button
          type="button"
          className="md:hidden text-slate-300"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--color-border)] px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-3 text-sm text-slate-300">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  );
}
