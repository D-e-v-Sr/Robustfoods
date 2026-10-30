import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Database,
  FileKey2,
  Fingerprint,
  KeyRound,
  LifeBuoy,
  LockKeyhole,
  RefreshCw,
  ShieldCheck,
  UserRoundCheck,
} from 'lucide-react'
import { Reveal } from '@/components/proposal/motion'
import {  Pill, SectionFrame, SectionHeading } from '@/components/proposal/primitives'

const funnelStages = [
  { label: 'Landing', detail: 'Attract targeted traffic to the website.' },
  { label: 'Browse', detail: 'Easy product discovery through categories and search.' },
  { label: 'Product View', detail: 'Clear product information builds confidence.' },
  { label: 'Add to Cart', detail: 'Simple cart functionality with clear pricing.' },
  { label: 'Checkout', detail: 'Streamlined checkout with minimal steps.' },
  { label: 'Purchase', detail: 'Secure payment and order confirmation.' },
]

const ownershipPrinciples = [
  { icon: UserRoundCheck, title: 'Full website access', text: 'All login credentials, admin access, and source files transferred to client.' },
  { icon: KeyRound, title: 'Domain & hosting', text: 'Domain, hosting, and all connected accounts transferred to client ownership.' },
  { icon: Database, title: 'Complete data transfer', text: 'All products, orders, customers, and content exported and handed over.' },
  { icon: FileKey2, title: 'Documentation', text: 'User manual, admin guide, and step-by-step instructions for managing the store.' },
  { icon: Fingerprint, title: 'Training session', text: 'Comprehensive training on product management, orders, and site maintenance.' },
  { icon: RefreshCw, title: 'Support clarification', text: 'Clear explanation of ongoing maintenance, updates, and support terms.' },
]

const reliabilityItems = [
  { icon: LockKeyhole, title: 'SSL Certificate', text: 'HTTPS enabled with SSL certificate for secure connections.' },
  { icon: RefreshCw, title: 'Responsive Design', text: 'Mobile-friendly design that works across all devices and screen sizes.' },
  { icon: Database, title: 'Backup Setup', text: 'Website backup solution configured for data protection.' },
  { icon: UserRoundCheck, title: 'Security Measures', text: 'Security best practices, spam protection, and secure login setup.' },
  { icon: BadgeCheck, title: 'Speed Optimization', text: 'Image optimization, caching, and performance tuning.' },
  { icon: LifeBuoy, title: 'Browser Compatibility', text: 'Tested across modern browsers for consistent experience.' },
]

export function ConversionSection() {
  return (
    <SectionFrame id="conversion" tone="cream" className="conversion-section">
      <div className="conversion-heading-grid">
        <SectionHeading
          id="conversion"
          number="08"
          label="Getting more sales"
          title={<>Conversion<br /><em>optimization.</em></>}
          description="Strategies to convert visitors into customers through improved user experience and sales funnels."
        />
        <Reveal className="conversion-side-note">
          <span>Design principle</span>
          <p>Make it easy to choose, easy to trust, and easy to complete.</p>
          <ArrowRight size={18} aria-hidden="true" />
        </Reveal>
      </div>

      <div className="funnel-layout">
        <div className="funnel-visual" aria-hidden="true">
          <span className="funnel-topline">A considered journey</span>
          <div className="funnel-shape">
            {funnelStages.map((stage, index) => (
              <div className={`funnel-shape-step funnel-shape-step-${index + 1}`} key={stage.label}>
                <span>{String(index + 1).padStart(2, '0')}</span><span>{stage.label}</span>
              </div>
            ))}
          </div>
          <div className="funnel-bottomline"><span>Useful follow-through</span><span>↗</span></div>
        </div>

        <ol className="funnel-stage-list">
          {funnelStages.map((stage, index) => (
            <li className="funnel-stage" key={stage.label}>
              <span className="funnel-stage-index">{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{stage.label}</h3><p>{stage.detail}</p></div>
              {index < funnelStages.length - 1 ? <ArrowDown size={15} aria-hidden="true" /> : <span className="funnel-stage-finish" aria-label="End of journey">✓</span>}
            </li>
          ))}
        </ol>
      </div>
      <div className="conversion-footer"><Pill tone="dark">UX principle</Pill><span>Respect the customer’s time. Answer questions before asking for commitment.</span></div>
    </SectionFrame>
  )
}

export function OwnershipSection() {
  return (
    <SectionFrame id="ownership" tone="green" className="ownership-section">
      <div className="ownership-heading-grid">
        <SectionHeading
          id="ownership"
          number="09"
          label="Handover & ownership"
          title={<>Complete handover<br /><em>of the website.</em></>}
          description="Full ownership transfer with all credentials, files, and training."
        />
        <div className="ownership-statement"><span className="ownership-bracket">[</span><p>Nothing essential should depend on an agency-owned account.</p><span className="ownership-bracket">]</span></div>
      </div>

      <div className="ownership-principles-grid">
        {ownershipPrinciples.map(({ icon: Icon, title, text }, index) => (
          <Reveal className="ownership-principle" key={title} delay={index * 0.035}>
            <div className="ownership-principle-top"><span>{String(index + 1).padStart(2, '0')}</span><Icon size={18} aria-hidden="true" /></div>
            <h3>{title}</h3>
            <p>{text}</p>
          </Reveal>
        ))}
      </div>

      <div className="ownership-boundary">
        <ShieldCheck size={18} aria-hidden="true" />
        <p><strong>Clear boundary:</strong> third-party hosting, domain, plugin, email and payment services may have their own subscriptions or usage charges; those are set by the respective providers and are not included in this presentation.</p>
      </div>
    </SectionFrame>
  )
}

export function ReliabilitySection() {
  return (
    <SectionFrame id="reliability" tone="paper" className="reliability-section">
      <div className="reliability-heading-grid">
        <SectionHeading
          id="reliability"
          number="10"
          label="Technical specifications"
          title={<>Security,<br /><em>performance &amp; setup.</em></>}
          description="Technical requirements and best practices for a secure, fast e-commerce website."
        />
        <Reveal className="reliability-note">
          <span className="reliability-note-index">13 / 15</span>
          <p>Good practice reduces risk; no website can promise zero risk or uninterrupted availability.</p>
        </Reveal>
      </div>

      <div className="reliability-grid">
        {reliabilityItems.map(({ icon: Icon, title, text }, index) => (
          <Reveal className="reliability-item" delay={index * 0.035} key={title}>
            <span className="reliability-number">{String(index + 1).padStart(2, '0')}</span>
            <span className="reliability-icon"><Icon size={18} aria-hidden="true" /></span>
            <div><h3>{title}</h3><p>{text}</p></div>
          </Reveal>
        ))}
      </div>

      <div className="reliability-endnote"><span className="tiny-dot" /><p>Performance depends on hosting, image weight, extension choices, traffic and ongoing maintenance—not design alone.</p></div>
    </SectionFrame>
  )
}
