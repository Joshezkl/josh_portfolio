export default function PageHeader({ label, title, description, children }) {
  return (
    <header className="mb-12 sm:mb-16 animate-fade-up">
      {label && (
        <p className="section-label">
          <span className="w-8 h-px bg-brand dark:bg-brand-light" />
          {label}
        </p>
      )}
      <h1 className="section-title mb-4">{title}</h1>
      {description && (
        <p className="text-base sm:text-lg text-ink-muted dark:text-ink-dark-muted leading-relaxed max-w-2xl font-light">
          {description}
        </p>
      )}
      {children}
    </header>
  );
}
