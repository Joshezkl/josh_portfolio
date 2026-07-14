import PageHeader from "../components/ui/PageHeader";
import Tag from "../components/ui/Tag";
import { skillCategories } from "../data/content";

const iconMap = {
  layout: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),
  server: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  cloud: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  shield: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  palette: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" /><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" /><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" /><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  ),
};

export default function Skills() {
  return (
    <div className="page-container">
      <PageHeader
        label="Expertise"
        title="Skills & technologies"
        description="A breakdown of the languages, frameworks, and tools I use to build digital products — choosing the right tool for each challenge across web, mobile, and design."
      />

      <div className="grid sm:grid-cols-2 gap-5 lg:gap-6 stagger-children">
        {skillCategories.map((category, idx) => (
          <article
            key={category.title}
            className={`card-surface-hover p-7 sm:p-8 flex flex-col ${
              idx === 0 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-11 h-11 rounded-xl bg-brand/8 dark:bg-brand-light/10 text-brand dark:text-brand-light flex items-center justify-center shrink-0">
                {iconMap[category.icon]}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink dark:text-white">
                  {category.title}
                </h3>
                <p className="text-sm text-ink-muted dark:text-ink-dark-muted mt-1 leading-relaxed font-light">
                  {category.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-ink/5 dark:border-white/5">
              {category.skills.map((skill) => (
                <Tag key={skill} variant={idx % 2 === 0 ? "brand" : "accent"}>
                  {skill}
                </Tag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
