"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/site";
import { SectionHeading } from "./AboutSection";

export function SkillsSection() {
  return (
    <section id="skill" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading eyebrow="Skill" title="Stack yang sedang saya asah" />

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.03 }}
            className="bento-card group p-5 transition hover:border-sky-500/40"
          >
            <p className="font-semibold text-slate-100 group-hover:text-sky-200">
              {skill.name}
            </p>
            <p className="mt-2 text-xs text-slate-500">{skill.level}</p>
            <div className="mt-4 h-1 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-300"
                style={{
                  width:
                    skill.level === "Menengah"
                      ? "72%"
                      : skill.level.includes("Dasar")
                        ? "48%"
                        : "88%",
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
