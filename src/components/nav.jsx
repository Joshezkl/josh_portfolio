import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import toggleStore from "../utils/toggleStore";
import { profile } from "../data/content";

const navLinks = [
  { name: "About", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Certificates", path: "/certificates" },
  { name: "Contact", path: "/contact" },
];

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Nav() {
  const { isDark, toggle } = toggleStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-[4.5rem]">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-3"
          >
            <span className="w-9 h-9 rounded-full bg-gradient-to-br from-brand to-accent flex items-center justify-center text-white text-sm font-bold shadow-glow">
              JD
            </span>
            <span className="hidden sm:block font-semibold text-ink dark:text-white text-sm tracking-tight group-hover:text-brand dark:group-hover:text-brand-light transition-colors">
              {profile.shortName}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-brand dark:text-brand-light bg-brand/8 dark:bg-brand-light/10"
                    : "text-ink-muted dark:text-ink-dark-muted hover:text-ink dark:hover:text-white hover:bg-ink/5 dark:hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggle}
              className="w-9 h-9 flex items-center justify-center rounded-full text-ink-muted dark:text-ink-dark-muted hover:bg-ink/5 dark:hover:bg-white/10 hover:text-brand dark:hover:text-brand-light transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex btn-primary text-xs !px-4 !py-2"
            >
              Resume
            </a>

            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-ink dark:text-white hover:bg-ink/5 dark:hover:bg-white/10"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-ink/5 dark:border-white/5 bg-surface/95 dark:bg-surface-dark/95 backdrop-blur-xl px-5 py-4 space-y-1 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-brand dark:text-brand-light bg-brand/8 dark:bg-brand-light/10"
                  : "text-ink-muted dark:text-ink-dark-muted"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="block btn-primary text-center mt-3"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
