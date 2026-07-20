import { Link } from "react-router-dom";
import Tag from "../components/ui/Tag";
import {
  profile,
  engineeringSkills,
  productSkills,
  securitySkills,
  experience,
  education,
} from "../data/content";

export default function Home() {
  return (
    <div className="page-container">
      {/* Hero */}
      <section className="relative mb-20 sm:mb-28 lg:mb-32">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 animate-fade-up">
            <p className="section-label">
              <span className="w-8 h-px bg-brand dark:bg-brand-light" />
              Portfolio
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-ink dark:text-white leading-[1.1] mb-6">
              Hi, I'm{" "}
              <span className="gradient-text italic">Josh</span>
            </h1>

            <p className="text-lg sm:text-xl text-ink-muted dark:text-ink-dark-muted font-light leading-relaxed max-w-xl mb-8">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-primary">
                View Resume
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <Link to="/projects" className="btn-outline">
                See My Work
              </Link>
              <Link to="/contact" className="btn-outline">
                Get in Touch
              </Link>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Web Dev", "Mobile Dev", "UI/UX", "Full-Stack"].map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-brand/20 via-accent/10 to-brand-light/20 blur-2xl animate-float" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full p-1.5 bg-gradient-to-br from-brand via-accent to-brand-light shadow-glow dark:shadow-glow-dark">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-full h-full rounded-full object-cover border-4 border-surface dark:border-surface-dark"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 sm:bottom-2 sm:right-0 card-surface px-4 py-2.5 shadow-card">
                <p className="text-xs font-semibold text-brand dark:text-brand-light">Available</p>
                <p className="text-[11px] text-ink-muted dark:text-ink-dark-muted">for opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="mb-20 sm:mb-28">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="section-label">
              <span className="w-8 h-px bg-brand dark:bg-brand-light" />
              Summary
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink dark:text-white leading-tight">
              Who I am & what I build
            </h2>
          </div>
          <div className="lg:col-span-3">
            <p className="text-base sm:text-lg text-ink-muted dark:text-ink-dark-muted leading-relaxed font-light">
              BSIT graduate specializing in Web & Mobile Technologies, with Cisco
              certifications in Cybersecurity, Python Essentials, Networking Basics,
              Computer Hardware, and Hardware Support. I bridge{" "}
              <span className="text-brand dark:text-brand-light font-medium">
                full-stack development
              </span>{" "}
              and{" "}
              <span className="text-accent dark:text-accent-light font-medium">
                user-centered design
              </span>{" "}
              through hands-on work on web, mobile, and AR projects. Experienced
              with{" "}
              <span className="text-brand dark:text-brand-light font-medium">
                React.js
              </span>
              ,{" "}
              <span className="text-brand dark:text-brand-light font-medium">
                Flutter
              </span>
              ,{" "}
              <span className="text-brand dark:text-brand-light font-medium">
                Laravel
              </span>
              , and{" "}
              <span className="text-brand dark:text-brand-light font-medium">
                Node.js
              </span>{" "}
              from academic leadership roles, capstone research, and a full-stack
              internship at When In Baguio Inc. Adaptable and committed to
              delivering reliable, thoughtful digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-20 sm:mb-28">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="section-label">
              <span className="w-8 h-px bg-brand dark:bg-brand-light" />
              Experience
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink dark:text-white">
              Where I've built & learned
            </h2>
          </div>
          <p className="text-sm text-ink-muted dark:text-ink-dark-muted max-w-xs">
            Academic projects, capstone leadership, and professional internship experience.
          </p>
        </div>

        <div className="relative space-y-0">
          <div className="absolute left-[19px] sm:left-6 top-3 bottom-3 w-px bg-gradient-to-b from-brand/40 via-accent/30 to-transparent dark:from-brand-light/40 dark:via-accent-light/30 hidden sm:block" />

          <div className="space-y-6 stagger-children">
            {experience.map((job) => (
              <article
                key={job.id}
                className={`relative sm:pl-16 card-surface-hover p-6 sm:p-8 ${
                  job.featured ? "ring-1 ring-brand/10 dark:ring-brand-light/10" : ""
                }`}
              >
                <div className="hidden sm:flex absolute left-3 top-8 w-6 h-6 rounded-full bg-surface dark:bg-surface-elevated-dark border-2 border-brand dark:border-brand-light items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-brand dark:bg-brand-light" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-ink dark:text-white">
                      {job.role}
                    </h3>
                    <p className="text-sm text-brand dark:text-brand-light font-medium mt-1">
                      {job.company}
                    </p>
                    <p className="text-xs text-ink-faint dark:text-ink-dark-faint mt-0.5">
                      {job.location}
                    </p>
                  </div>
                  <span className="self-start text-xs font-medium text-ink-muted dark:text-ink-dark-muted bg-ink/5 dark:bg-white/5 px-3 py-1.5 rounded-full whitespace-nowrap">
                    {job.period}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-ink-muted dark:text-ink-dark-muted leading-relaxed font-light mb-5">
                  {job.description}
                </p>

                {job.tech && (
                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <Tag key={t} variant="accent">{t}</Tag>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Education Bento */}
      <section className="mb-8">
        <p className="section-label">
          <span className="w-8 h-px bg-brand dark:bg-brand-light" />
          Highlights
        </p>
        <h2 className="font-display text-3xl sm:text-4xl text-ink dark:text-white mb-10">
          Skills & background
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="card-surface p-6 sm:p-8 sm:col-span-2 lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand dark:text-brand-light mb-5">
              Engineering
            </h3>
            <div className="flex flex-wrap gap-2">
              {engineeringSkills.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>

          <div className="card-surface p-6 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent dark:text-accent-light mb-5">
              Design
            </h3>
            <div className="flex flex-wrap gap-2">
              {productSkills.map((s) => (
                <Tag key={s} variant="accent">{s}</Tag>
              ))}
            </div>
          </div>

          <div className="card-surface p-6 sm:p-8 sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand dark:text-brand-light mb-5">
              Security & Networking
            </h3>
            <div className="flex flex-wrap gap-2">
              {securitySkills.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>

          <div className="card-surface p-6 sm:p-8 lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand dark:text-brand-light mb-3">
              Education
            </h3>
            <p className="text-lg font-semibold text-ink dark:text-white">
              {education.degree}
            </p>
            <p className="text-sm text-ink-muted dark:text-ink-dark-muted mt-1">
              {education.major}
            </p>
            <p className="text-xs text-ink-faint dark:text-ink-dark-faint mt-2">
              {education.school} · {education.year}
            </p>
          </div>

          <div className="card-surface-hover p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent dark:text-accent-light mb-3">
                Certifications
              </h3>
              <p className="text-sm text-ink-muted dark:text-ink-dark-muted leading-relaxed">
                Cisco Networking Academy — Cybersecurity, Python, Networking,
                Computer Hardware & Upgrade Support
              </p>
            </div>
            <Link
              to="/certificates"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand dark:text-brand-light mt-6 hover:gap-3 transition-all"
            >
              View certificates
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
