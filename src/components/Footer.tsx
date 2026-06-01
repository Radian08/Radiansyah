import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)]/60 py-8 text-center text-sm text-slate-500">
      <p>
        © {year} {site.name} · Dibangun dengan Next.js & Tailwind
      </p>
    </footer>
  );
}
