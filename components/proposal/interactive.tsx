'use client'

import { useState } from 'react'
import {
  Code2,
  CreditCard,
  Database,
  Gauge,
  Layers3,
  Search,
  ShieldCheck,
  ShoppingBag,
  Truck,
  type LucideIcon,
} from 'lucide-react'

const buildSteps = [
  { title: 'Business and brand analysis', group: 'Discover', detail: 'Translate the company profile, product range, brand values and operating realities into a clear digital brief. We will confirm which product and market details are current before they appear online.' },
  { title: 'Website planning', group: 'Discover', detail: 'Agree on the audiences, primary customer journeys and the actions the site should make easy, from product discovery to enquiry or purchase.' },
  { title: 'Information architecture', group: 'Discover', detail: 'Organize products, categories and supporting pages so customers can move through the store without needing to understand its internal structure.' },
  { title: 'UI/UX design direction', group: 'Design', detail: 'Create a visual system that carries Robust’s natural identity into a contemporary, accessible shopping experience across mobile and desktop.' },
  { title: 'WordPress installation', group: 'Build', detail: 'Configure the content platform, hosting environment and core settings for the agreed site structure and operational needs.' },
  { title: 'Custom theme development', group: 'Build', detail: 'Build or customize a brand-led WordPress theme, using reusable page patterns rather than forcing the business into a generic storefront template.' },
  { title: 'E-commerce integration', group: 'Build', detail: 'Set up the commerce engine and core store settings, including currency, tax approach and customer-facing store behavior as confirmed with the business.' },
  { title: 'Product catalogue setup', group: 'Commerce', detail: 'Structure approved product names, images, descriptions, categories, variations and prices supplied by the business.' },
  { title: 'Cart and checkout configuration', group: 'Commerce', detail: 'Configure the journey from basket to order confirmation, keeping required fields clear and removing unnecessary friction.' },
  { title: 'Payment gateway integration', group: 'Commerce', detail: 'Connect a gateway that is available to the business and approved for its operating country, account type and settlement requirements.' },
  { title: 'Shipping and delivery rules', group: 'Commerce', detail: 'Configure delivery zones, methods and rates from the business’s confirmed fulfilment coverage, packaging and carrier arrangements.' },
  { title: 'SEO-ready structure', group: 'Optimize', detail: 'Prepare crawlable page structures, descriptive metadata, clean URLs, image alternatives and structured product information where applicable.' },
  { title: 'Performance and security setup', group: 'Optimize', detail: 'Apply practical image, caching, HTTPS, backup and access-control measures appropriate to the chosen hosting and plugin stack.' },
  { title: 'Testing and quality assurance', group: 'Launch', detail: 'Test responsive layouts, navigation, product data, cart, checkout, payment hand-off, order notifications and key accessibility behaviors.' },
  { title: 'Launch and handover', group: 'Launch', detail: 'Publish the approved site, walk the team through store operations and hand over agreed access, documentation and training.' },
]

interface StackItem {
  name: string
  family: string
  icon: LucideIcon
  purpose: string
  note: string
}

const stackItems: StackItem[] = [
  { name: 'WordPress', family: 'Content platform', icon: Layers3, purpose: 'The team-friendly system for publishing and maintaining brand pages.', note: 'Editorial access and publishing roles are configured around the people who will maintain the site.' },
  { name: 'E-commerce platform', family: 'Store engine', icon: ShoppingBag, purpose: 'Product catalogue, cart, checkout and order management.', note: 'Store settings are shaped around confirmed products, markets, taxes and fulfilment—not assumed defaults.' },
  { name: 'Theme + interface', family: 'Experience layer', icon: Code2, purpose: 'A tailored responsive design system for the Robust brand.', note: 'Elementor or custom-built components can be selected after design and maintenance needs are understood.' },
  { name: 'PHP + MySQL', family: 'Application layer', icon: Database, purpose: 'The server-side language and database used by the WordPress platform.', note: 'The final versions are determined by the hosting environment and supported platform requirements.' },
  { name: 'Payment provider', family: 'Transactions', icon: CreditCard, purpose: 'Razorpay, Cashfree, PayU or Stripe where eligible and approved.', note: 'Provider availability, account approval, supported payment methods, fees and settlement rules are provider-specific.' },
  { name: 'Shipping + orders', family: 'Operations', icon: Truck, purpose: 'Shipping rules and order processing tools.', note: 'Delivery regions, rates and notifications depend on the business’s actual fulfilment arrangements.' },
  { name: 'SEO + analytics', family: 'Discovery', icon: Search, purpose: 'Rank Math or Yoast, GA4, Search Console and Tag Manager where required.', note: 'Plugin and analytics choices are finalized against consent, reporting and compatibility requirements.' },
  { name: 'Security + speed', family: 'Reliability', icon: ShieldCheck, purpose: 'HTTPS, backups, updates, caching and image optimization.', note: 'Hosting, licensing and appropriate CDN support are selected for the agreed traffic and service requirements.' },
]

export function BuildTimeline() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeStep = buildSteps[activeIndex]

  return (
    <div className="interactive-timeline">
      <div className="timeline-selector" role="group" aria-label="Select a website development step">
        {buildSteps.map((step, index) => (
          <button
            type="button"
            className={`timeline-step ${activeIndex === index ? 'timeline-step-active' : ''}`}
            key={step.title}
            aria-pressed={activeIndex === index}
            aria-controls="timeline-detail"
            onClick={() => setActiveIndex(index)}
          >
            <span className="timeline-step-index">{String(index + 1).padStart(2, '0')}</span>
            <span className="timeline-step-title">{step.title}</span>
            <span className="timeline-step-group">{step.group}</span>
          </button>
        ))}
      </div>

      <article className="timeline-detail" id="timeline-detail" aria-live="polite">
        <p className="timeline-detail-kicker">Step {String(activeIndex + 1).padStart(2, '0')} <span>/ 15</span></p>
        <h3>{activeStep.title}</h3>
        <p>{activeStep.detail}</p>
        <div
          className="timeline-progress-track"
          role="progressbar"
          aria-label="Selected development step"
          aria-valuemin={1}
          aria-valuemax={buildSteps.length}
          aria-valuenow={activeIndex + 1}
        >
          <span style={{ width: `${((activeIndex + 1) / buildSteps.length) * 100}%` }} />
        </div>
        <div className="timeline-detail-footer">
          <span>{activeStep.group} phase</span>
          <span>{String(activeIndex + 1).padStart(2, '0')} — {String(buildSteps.length).padStart(2, '0')}</span>
        </div>
      </article>
    </div>
  )
}

const stackLayers = [
  { label: '01 / Experience', items: 'WordPress · Custom theme · Responsive interface' },
  { label: '02 / Commerce', items: 'E-commerce platform · Product catalogue · Cart & checkout' },
  { label: '03 / Operations', items: 'Payments · Shipping rules · Order management' },
  { label: '04 / Growth & care', items: 'SEO · Analytics · Security · Performance' },
]

export function TechnologyStack() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = stackItems[activeIndex]
  const ActiveIcon = activeItem.icon

  return (
    <div className="technology-explorer">
      <div className="stack-architecture" aria-label="Recommended website technology architecture">
        <div className="stack-architecture-label">
          <span>Recommended architecture</span>
          <span>Layered for change</span>
        </div>
        {stackLayers.map((layer) => (
          <div className="stack-layer" key={layer.label}>
            <span className="stack-layer-name">{layer.label}</span>
            <span className="stack-layer-items">{layer.items}</span>
          </div>
        ))}
        <div className="stack-foundation"><Gauge size={15} aria-hidden="true" /> Hosting, HTTPS and maintainable operations</div>
      </div>

      <div className="stack-detail-wrap">
        <div className="stack-card-grid" role="group" aria-label="Explore technology choices">
          {stackItems.map((item, index) => {
            const Icon = item.icon
            return (
              <button
                type="button"
                className={`stack-card ${activeIndex === index ? 'stack-card-active' : ''}`}
                key={item.name}
                aria-pressed={activeIndex === index}
                aria-controls="stack-detail"
                onClick={() => setActiveIndex(index)}
              >
                <Icon size={17} aria-hidden="true" />
                <span>{item.name}</span>
                <small>{item.family}</small>
              </button>
            )
          })}
        </div>
        <div className="stack-detail" id="stack-detail" aria-live="polite">
          <div className="stack-detail-icon"><ActiveIcon size={22} aria-hidden="true" /></div>
          <div>
            <p className="stack-detail-kicker">{activeItem.family}</p>
            <h3>{activeItem.name}</h3>
            <p>{activeItem.purpose}</p>
            <p className="stack-detail-note">{activeItem.note}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

