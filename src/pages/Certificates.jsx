import PageHeader from "../components/ui/PageHeader";
import { certificates } from "../data/content";

function CertificateCard({ cert }) {
  const cardClass = "group card-surface-hover p-7 sm:p-8 flex flex-col";

  const content = (
    <>
      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand/10 to-accent/10 dark:from-brand-light/15 dark:to-accent-light/15 flex items-center justify-center text-brand dark:text-brand-light group-hover:scale-110 transition-transform duration-300">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 15l-2 5l2-1l2 1l-2-5z" />
            <circle cx="12" cy="8" r="6" />
          </svg>
        </div>
        <span className="text-xs font-medium text-ink-muted dark:text-ink-dark-muted bg-ink/5 dark:bg-white/5 px-3 py-1.5 rounded-full">
          {cert.year}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-ink dark:text-white group-hover:text-brand dark:group-hover:text-brand-light transition-colors mb-1">
        {cert.title}
      </h3>
      <p className="text-sm font-medium text-accent dark:text-accent-light mb-4">
        {cert.issuer}
      </p>
      <p className="text-sm text-ink-muted dark:text-ink-dark-muted leading-relaxed font-light flex-1">
        {cert.description}
      </p>

      <div className="flex items-center gap-2 mt-6 pt-5 border-t border-ink/5 dark:border-white/5 text-sm font-semibold text-brand dark:text-brand-light">
        <span>View certificate</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="group-hover:translate-x-1 transition-transform"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </>
  );

  if (cert.file) {
    return (
      <a
        href={cert.file}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClass}
      >
        {content}
      </a>
    );
  }

  return <article className={cardClass}>{content}</article>;
}

export default function Certificates() {
  return (
    <div className="page-container">
      <PageHeader
        label="Credentials"
        title="Certifications"
        description="Professional certifications that complement my academic background in Information Technology. Click any certificate to view the full document."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
        {certificates.map((cert) => (
          <CertificateCard key={cert.id} cert={cert} />
        ))}
      </div>
    </div>
  );
}
