import { Link } from "react-router-dom";
import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-ink/5 dark:border-white/5 mt-16">
      <div className="page-container !py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-display text-lg text-ink dark:text-white">
              {profile.shortName}
            </p>
            <p className="text-sm text-ink-muted dark:text-ink-dark-muted mt-1">
              {profile.title} · {profile.location}
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm font-medium text-ink-muted dark:text-ink-dark-muted">
            <a
              href={profile.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand dark:hover:text-brand-light transition-colors"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand dark:hover:text-brand-light transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={profile.resume}
              target="_blank"
              className="hover:text-brand dark:hover:text-brand-light transition-colors"
            >
              Resume
            </a>
            <Link
              to="/contact"
              className="hover:text-brand dark:hover:text-brand-light transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-ink/5 dark:border-white/5 text-center">
          <p className="text-xs text-ink-faint dark:text-ink-dark-faint">
            © {new Date().getFullYear()} {profile.name}. Designed & built with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
