import PageHeader from "../components/ui/PageHeader";
import { contactLinks, profile } from "../data/content";

const iconMap = {
  GitHub: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  LinkedIn: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Email: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  Phone: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
};

export default function Contact() {
  return (
    <div className="page-container">
      <PageHeader
        label="Connect"
        title="Let's work together"
        description="I'm always open to discussing new projects, internship opportunities, or collaborations. Reach out through any of the channels below."
      />

      <div className="grid sm:grid-cols-2 gap-5 mb-12 stagger-children">
        {contactLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target={link.name === "Phone" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="group card-surface-hover p-6 sm:p-7 flex items-start gap-5"
          >
            <div className="w-12 h-12 rounded-2xl bg-brand/8 dark:bg-brand-light/10 text-brand dark:text-brand-light flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white dark:group-hover:bg-brand-light dark:group-hover:text-ink transition-all duration-300">
              {iconMap[link.name]}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-ink dark:text-white group-hover:text-brand dark:group-hover:text-brand-light transition-colors">
                {link.name}
              </h3>
              <p className="text-sm text-accent dark:text-accent-light font-medium mt-0.5 truncate">
                {link.handle}
              </p>
              <p className="text-xs text-ink-muted dark:text-ink-dark-muted mt-2 font-light">
                {link.description}
              </p>
            </div>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-ink-faint dark:text-ink-dark-faint opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 mt-1"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        ))}
      </div>

      <div className="card-surface p-8 sm:p-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-accent/5 dark:from-brand-light/5 dark:to-accent-light/5" />
        <div className="relative">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand dark:text-brand-light mb-3">
            Based in
          </p>
          <p className="font-display text-2xl sm:text-3xl text-ink dark:text-white mb-2">
            {profile.location}
          </p>
          <p className="text-sm text-ink-muted dark:text-ink-dark-muted font-light max-w-md mx-auto">
            Open to remote work, internships, and opportunities across the Philippines.
          </p>
        </div>
      </div>
    </div>
  );
}
