import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ClipboardCheck,
  FileText,
  LayoutTemplate,
  Rocket,
  ShieldCheck,
  ShoppingBag,
} from 'lucide-react'
import { Reveal } from '@/components/proposal/motion'
import { Eyebrow, Pill, SectionFrame, SectionHeading, Wordmark } from '@/components/proposal/primitives'

const phases = [
  {
    number: '01',
    title: 'Requirements & Planning',
    icon: ClipboardCheck,
    detail: 'Gather requirements, review products, plan page structure and define features.',
    client: 'Provide product details, images, and requirements.',
  },
  {
    number: '02',
    title: 'Design & Wireframe',
    icon: LayoutTemplate,
    detail: 'Create wireframes and design mockups for all pages.',
    client: 'Review and approve design.',
  },
  {
    number: '03',
    title: 'E-commerce Setup',
    icon: ShoppingBag,
    detail: 'Install and configure e-commerce platform, add products, set up categories.',
    client: 'Provide product data and pricing.',
  },
  {
    number: '04',
    title: 'Payment & Shipping',
    icon: ShieldCheck,
    detail: 'Integrate payment gateway, configure shipping methods and tax settings.',
    client: 'Provide payment gateway details and shipping information.',
  },
  {
    number: '05',
    title: 'Testing & QA',
    icon: Check,
    detail: 'Test all functionality, cart/checkout, payments, and responsiveness.',
    client: 'Conduct acceptance testing and provide feedback.',
  },
  {
    number: '06',
    title: 'Launch & Handover',
    icon: Rocket,
    detail: 'Deploy website, setup tracking, train client, and complete handover.',
    client: 'Approve go-live and receive training/handover.',
  },
]

const readinessItems = [
  'Product list with names, prices, and descriptions',
  'Product images (high quality)',
  'Payment gateway account details (or create during project)',
  'Shipping information and rates',
  'Policy content (Privacy, Terms, Shipping, Returns)',
  'Logo and branding assets',
  'Domain and hosting details (or we will guide)',
]

export function RoadmapSection() {
  return (
    <SectionFrame id="roadmap" tone="cream" className="roadmap-section">
      <div className="roadmap-heading-grid">
        <SectionHeading
          id="roadmap"
          number="11"
          label="Project timeline"
          title={<>Development<br /><em>phases &amp; milestones.</em></>}
          description="Step-by-step development process from requirements to deployment and handover."
        />
        <Reveal className="roadmap-aside">
          <span className="roadmap-aside-mark"><ArrowDownRight size={21} aria-hidden="true" /></span>
          <div><strong>Collaborative by design</strong><p>Useful feedback, timely approvals and client-owned service accounts help the work move forward cleanly.</p></div>
        </Reveal>
      </div>

      <div className="roadmap-track">
        <div className="roadmap-track-line" aria-hidden="true" />
        {phases.map(({ number, title, icon: Icon, detail, client }, index) => (
          <Reveal className={`roadmap-phase roadmap-phase-${index + 1}`} key={number} delay={index * 0.04}>
            <div className="roadmap-phase-marker"><span>{number}</span><Icon size={17} aria-hidden="true" /></div>
            <div className="roadmap-phase-card">
              <p className="roadmap-phase-label">Phase {number}</p>
              <h3>{title}</h3>
              <p>{detail}</p>
              <div className="roadmap-client-role"><span>Client role</span><span>{client}</span></div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="readiness-panel">
        <div className="readiness-heading"><span className="readiness-icon"><Check size={18} aria-hidden="true" /></span><div><Eyebrow>Helpful before kickoff</Eyebrow><h3>What the project will need from Robust</h3></div></div>
        <ul>{readinessItems.map((item) => <li key={item}><Check size={14} aria-hidden="true" /><span>{item}</span></li>)}</ul>
      </div>
      <div className="roadmap-footnote"><span>Indicative sequence</span><span>Specific scope, responsibilities and milestones are agreed separately.</span></div>
    </SectionFrame>
  )
}

export function ClosingSection() {
  return (
    <SectionFrame id="closing" tone="green" className="closing-section">
      <div className="closing-orb closing-orb-one" aria-hidden="true" />
      <div className="closing-orb closing-orb-two" aria-hidden="true" />
      <div className="closing-inner">
        <Reveal className="closing-content">
          <div className="closing-brand"><Wordmark inverse /><span>DEVELOPER NAME</span></div>
          <div className="section-kicker closing-kicker"><span className="section-number">12</span><span className="kicker-line" aria-hidden="true" /><span>Ready to start</span></div>
          <h2 id="closing-title">Let's build your<br /><em>online store.</em></h2>
          <p className="closing-description">Complete e-commerce website with all pages, functionality, payment integration, and full handover.</p>
          <a className="button button-lime" href="#contact-details">Let’s discuss the next step <ArrowRight size={17} aria-hidden="true" /></a>
        </Reveal>

        <Reveal className="closing-contact-card" delay={0.1}>
          <div className="contact-card-top"><Eyebrow light>Prepared by</Eyebrow><Pill tone="lime">Proposal contact</Pill></div>
            <h3>Sharaf</h3>
            <div className="contact-card-rule" />
            <dl id="contact-details">
              <div><dt>Email</dt><dd>dev.sharafu@gmail.com</dd></div>
              <div><dt>Phone</dt><dd>+91 9048 85 85 58</dd></div>
              <div><dt>Website</dt><dd>devsr.vercel.app</dd></div>
            </dl>
            <span className="contact-placeholder-note">Update with actual contact details.</span>
        </Reveal>
      </div>

      <div className="closing-footer">
        <div><Wordmark inverse /><span>Believe, live healthy</span></div>
        <p>Commercial terms and formal quotation provided separately.</p>
        <a href="#cover">Back to cover <ArrowRight size={14} aria-hidden="true" /></a>
      </div>

      <p className="source-disclaimer">This proposal outlines the technical scope and implementation plan for an e-commerce website. Specific pricing and terms will be provided separately.</p>
    </SectionFrame>
  )
}
