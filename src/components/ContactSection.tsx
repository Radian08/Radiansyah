"use client";

import { motion } from "framer-motion";
import { Github, Mail, MessageCircle } from "lucide-react";
import { site } from "@/data/site";
import { SectionHeading } from "./AboutSection";

function whatsappHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}`;
}

export function ContactSection() {
  return (
    <section id="kontak" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="bento-card grid gap-8 p-8 md:grid-cols-2 md:p-10">
        <div>
          <SectionHeading
            eyebrow="Kontak"
            title="Mari diskusi proyek atau magang"
          />
          <p className="mt-4 text-slate-400">
            Respons tercepat via WhatsApp atau email. Sertakan link GitHub jika
            ingin kolaborasi.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center gap-4"
        >
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] px-4 py-3 transition hover:border-sky-500/50"
          >
            <Mail className="shrink-0 text-sky-300" size={20} />
            <span className="min-w-0 truncate text-slate-200">{site.email}</span>
          </a>
          {site.whatsapp ? (
            <a
              href={whatsappHref(site.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] px-4 py-3 transition hover:border-emerald-500/50"
            >
              <MessageCircle className="shrink-0 text-emerald-400" size={20} />
              <span className="text-slate-200">WhatsApp</span>
            </a>
          ) : null}
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] px-4 py-3 transition hover:border-sky-500/50"
          >
            <Github className="shrink-0 text-slate-300" size={20} />
            <span className="text-slate-200">GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
