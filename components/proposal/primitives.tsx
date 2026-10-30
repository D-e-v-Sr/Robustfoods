import type { ReactNode } from 'react'

interface SectionFrameProps {
  id: string
  children: ReactNode
  tone?: 'paper' | 'cream' | 'green' | 'sage' | 'amber'
  className?: string
}

interface SectionHeadingProps {
  id: string
  number: string
  label: string
  title: ReactNode
  description?: ReactNode
  className?: string
}

export function SectionFrame({ id, children, tone = 'paper', className = '' }: SectionFrameProps) {
  return (
    <section
      id={id}
      className={`proposal-section tone-${tone} ${className}`.trim()}
      aria-labelledby={`${id}-title`}
    >
      {children}
    </section>
  )
}

export function SectionHeading({
  id,
  number,
  label,
  title,
  description,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${className}`.trim()}>
      <div className="section-kicker">
        <span className="section-number">{number}</span>
        <span className="kicker-line" aria-hidden="true" />
        <span>{label}</span>
      </div>
      <h2 id={`${id}-title`}>{title}</h2>
      {description ? <p className="section-deck">{description}</p> : null}
    </div>
  )
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`eyebrow ${light ? 'eyebrow-light' : ''}`}>{children}</p>
}

export function Pill({ children, tone = 'light' }: { children: ReactNode; tone?: 'light' | 'dark' | 'lime' }) {
  return <span className={`pill pill-${tone}`}>{children}</span>
}

export function Wordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`wordmark ${inverse ? 'wordmark-inverse' : ''}`} aria-label="Robust">
      <img src="/robust-logo.png" alt="Robust" className="wordmark-leaf" />
    </span>
  )
}

export function Rule({ className = '' }: { className?: string }) {
  return <span className={`fine-rule ${className}`.trim()} aria-hidden="true" />
}
