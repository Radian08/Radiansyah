"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/site";
import { SectionHeading } from "./AboutSection";

export function ProjectsSection() {
  return (
    <section id="proyek" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Proyek"
        title="Studi kasus singkat — bukti cara berpikir Anda"
      />
      <p className="mt-4 max-w-2xl text-slate-400">
        Beda dari portofolio UI/UX murni: tiap kartu menonjolkan logika teknis dan
        dampak terukur. Ganti konten di{" "}
        <code className="rounded bg-slate-800 px-1.5 py-0.5 text-xs text-sky-300">
          src/data/site.ts
        </code>
        .
      </p>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={`bento-card flex flex-col p-6 sm:p-8 ${
              index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-8" : ""
            }`}
          >
            <div>
              <span className="text-xs font-medium uppercase tracking-wider text-amber-300/90">
                {project.category}
              </span>
              <h3 className="mt-2 text-2xl font-bold text-slate-100">
                {project.title}
              </h3>
              <p className="mt-2 text-slate-400">{project.summary}</p>

              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="font-mono text-xs text-sky-400">Masalah</dt>
                  <dd className="mt-1 text-slate-300">{project.problem}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-sky-400">Pendekatan</dt>
                  <dd className="mt-1 text-slate-300">{project.approach}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-emerald-400/90">Hasil</dt>
                  <dd className="mt-1 text-slate-300">{project.outcome}</dd>
                </div>
              </dl>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6">
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md bg-slate-900/80 px-2 py-1 text-xs text-slate-400"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="flex gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-[var(--color-border)] p-2 text-slate-400 transition hover:border-sky-500/50 hover:text-sky-300"
                    aria-label={`GitHub ${project.title}`}
                  >
                    <Github size={18} />
                  </a>
                )}
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-[var(--color-border)] p-2 text-slate-400 transition hover:border-sky-500/50 hover:text-sky-300"
                    aria-label={`Demo ${project.title}`}
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
