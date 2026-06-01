"use client";

import { motion } from "framer-motion";
import { education, experiences } from "@/data/site";

export function AboutSection() {
  return (
    <section id="tentang" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Tentang"
        title="Engineering mindset, bukan sekadar galeri desain"
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-12">
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card col-span-12 p-8 lg:col-span-7"
        >
          <p className="text-lg leading-relaxed text-slate-300">
            Saya mahasiswa{" "}
            <strong className="font-medium text-slate-100">
              Teknik Informatika
            </strong>{" "}
            yang senang menerjemahkan masalah nyata menjadi sistem yang bisa
            diuji, di-deploy, dan dijelaskan dengan jelas. Setiap proyek di
            bawah ini memakai kerangka{" "}
            <span className="text-sky-300">Masalah → Pendekatan → Hasil</span>{" "}
            — pola yang disarankan portofolio engineer modern (mirip case study,
            bukan sekadar screenshot).
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Di luar kuliah, saya aktif mencoba mempelajari tentang dunia IT, belajar dari code
            review, dan terus merapikan dokumentasi README serta demo live.
          </p>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="bento-card col-span-12 p-6 lg:col-span-5"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Pendidikan
          </h3>
          <p className="mt-3 text-xl font-semibold text-slate-100">
            {education.program}
          </p>
          <p className="text-sky-300/90">{education.school}</p>
          <p className="mt-2 text-sm text-slate-500">
            {education.period} · IPK {education.gpa}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {education.courses.map((course) => (
              <li
                key={course}
                className="rounded-lg border border-[var(--color-border)] px-2.5 py-1 text-xs text-slate-400"
              >
                {course}
              </li>
            ))}
          </ul>
        </motion.article>

        {experiences.map((exp, index) => (
          <motion.article
            key={exp.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="bento-card col-span-12 p-6 sm:col-span-6 lg:col-span-6"
          >
            <p className="text-xs text-slate-500">{exp.period}</p>
            <h3 className="mt-2 font-semibold text-slate-100">{exp.title}</h3>
            <p className="text-sm text-sky-300/80">{exp.org}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {exp.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-400/80">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export { SectionHeading };
