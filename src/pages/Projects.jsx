import { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import Tag from "../components/ui/Tag";
import { projects } from "../data/content";

const categories = ["All", "UI/UX Design", "Web", "Mobile"];

const categoryColors = {
  "UI/UX Design": "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  Web: "bg-brand/10 text-brand dark:text-brand-light",
  Mobile: "bg-accent/10 text-accent dark:text-accent-light",
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = projects.filter((p) =>
    activeCategory === "All" ? true : p.category.includes(activeCategory),
  );

  return (
    <div className="page-container">
      <PageHeader
        label="Portfolio"
        title="Featured projects"
        description="A curated selection of my work across UI/UX design, web development, and mobile applications."
      />

      <div className="flex flex-wrap gap-2 mb-10 sm:mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-brand text-white dark:bg-brand-light dark:text-ink shadow-glow"
                : "bg-ink/5 dark:bg-white/5 text-ink-muted dark:text-ink-dark-muted hover:bg-ink/10 dark:hover:bg-white/10 hover:text-ink dark:hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 stagger-children">
        {filtered.map((project, idx) => (
          <article
            key={project.id}
            className={`group card-surface overflow-hidden ${
              idx === 0 && activeCategory === "All"
                ? "sm:col-span-2 sm:grid sm:grid-cols-2"
                : ""
            }`}
          >
            <div
              className={`relative overflow-hidden bg-ink/5 dark:bg-white/5 ${
                idx === 0 && activeCategory === "All" ? "sm:min-h-[280px]" : "h-52 sm:h-56"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 left-4 flex gap-2">
                {project.category.map((cat) => (
                  <span
                    key={cat}
                    className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-md ${categoryColors[cat]}`}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            <div className={`p-6 sm:p-7 flex flex-col ${idx === 0 && activeCategory === "All" ? "sm:justify-center" : ""}`}>
              <h3 className="text-xl font-semibold text-ink dark:text-white mb-3 group-hover:text-brand dark:group-hover:text-brand-light transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-ink-muted dark:text-ink-dark-muted leading-relaxed font-light mb-5 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-ink/5 dark:border-white/5">
                {project.tech.map((t) => (
                  <Tag key={t} variant="accent">{t}</Tag>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}