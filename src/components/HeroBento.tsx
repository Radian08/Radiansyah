"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, MapPin, Sparkles } from "lucide-react";
import { highlights, site } from "@/data/site";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45 },
  }),
};

export function HeroBento() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
      <div className="grid gap-4 lg:grid-cols-12">
        <motion.div
          custom={0}
          initial="hidden"
          animate="show"
          variants={fade}
          className="bento-card flex flex-col justify-between p-6 sm:p-8 lg:col-span-8 lg:p-10"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              {site.status}
            </span>
            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
              Halo, saya{" "}
              <span className="gradient-text">{site.name}</span>
            </h1>
            <p className="mt-2 text-base text-sky-200/90 sm:text-lg">{site.role}</p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
              {site.tagline}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#proyek"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              Lihat proyek
              <ArrowUpRight size={16} />
            </a>
            <a
              href={site.resumeUrl}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-sky-500/50 hover:text-sky-200"
            >
              <Download size={16} />
              Unduh CV
            </a>
          </div>
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          animate="show"
          variants={fade}
          className="bento-card p-6 lg:col-span-4"
        >
          <div className="flex items-start gap-3 text-slate-400">
            <MapPin className="mt-0.5 shrink-0 text-amber-300/80" size={18} />
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Lokasi
              </p>
              <p className="mt-1 font-medium text-slate-200">{site.location}</p>
            </div>
          </div>
          <div className="mt-6 flex items-start gap-3">
            <Sparkles className="mt-0.5 shrink-0 text-sky-300" size={18} />
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Fokus saat ini
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">
                Tugas kampus, open source kecil, dan persiapan magang
                software engineer.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          custom={2}
          initial="hidden"
          animate="show"
          variants={fade}
          className="bento-card p-4 sm:p-5 lg:col-span-12"
        >
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {highlights.map((item) => (
              <li
                key={item.label}
                className="flex min-h-[5.5rem] min-w-0 flex-col items-center justify-center rounded-xl border border-[var(--color-border)]/60 bg-slate-900/40 px-2 py-4 sm:min-h-[6rem] sm:px-3"
              >
                <p className="w-full text-center text-base font-bold leading-snug text-sky-300 sm:text-xl">
                  {item.value}
                </p>
                <p className="mt-2 text-center text-[11px] leading-tight text-slate-500 sm:text-xs">
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
