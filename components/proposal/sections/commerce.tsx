import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  CircleCheck,
  CreditCard,
  Globe2,
  Mail,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Store,
  Truck,
} from 'lucide-react'
import { Reveal } from '@/components/proposal/motion'
import { TechnologyStack } from '@/components/proposal/interactive'
import { Eyebrow, Pill, SectionFrame, SectionHeading } from '@/components/proposal/primitives'

const trafficChannels = [
  { title: 'Search', subtitle: 'SEO · local discovery', icon: Search },
  { title: 'Social', subtitle: 'Posts · reels · links', icon: BarChart3 },
  { title: 'Paid media', subtitle: 'Search · social ads', icon: CreditCard },
  { title: 'Email', subtitle: 'Updates · repeat visits', icon: Mail },
]

const paymentSteps = [
  ['01', 'Provider selection', 'Shortlist and select suitable payment gateway based on requirements.'],
  ['02', 'Account setup', 'Client creates/owns merchant account with selected payment provider.'],
  ['03', 'API credentials', 'Obtain and configure API keys from payment provider.'],
  ['04', 'Integration', 'Integrate payment gateway into checkout flow.'],
  ['05', 'Test transactions', 'Test in sandbox/test mode (success/failure/refund scenarios).'],
  ['06', 'Security verification', 'Verify SSL, secure connection, and payment flow.'],
  ['07', 'Go-live activation', 'Switch to live mode after successful testing.'],
  ['08', 'Verification', 'Final testing with real transactions and order confirmation.'],
]

const growthTactics = [
  {
    number: '01',
    title: 'SEO Optimization',
    text: 'On-page SEO, meta tags, product schema, site structure, and technical SEO setup.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Google Business Profile',
    text: 'Setup and optimization of Google Business Profile for local visibility.',
    icon: Globe2,
  },
  {
    number: '03',
    title: 'Social Media Integration',
    text: 'Social sharing, product catalog integration, and social media links.',
    icon: Smartphone,
  },
  {
    number: '04',
    title: 'Content Marketing',
    text: 'Blog setup, product guides, and SEO-friendly content structure.',
    icon: Mail,
  },
  {
    number: '05',
    title: 'Paid Advertising Setup',
    text: 'Google Shopping, Meta ads setup guidance and tracking implementation.',
    icon: BarChart3,
  },
  {
    number: '06',
    title: 'Email Marketing',
    text: 'Email capture, abandoned cart recovery, and basic email automation setup.',
    icon: ArrowRight,
  },
]

export function PaymentSection() {
  return (
    <SectionFrame id="payments" tone="amber" className="payment-section">
      <div className="payment-intro-grid">
        <SectionHeading
          id="payments"
          number="05"
          label="Payment integration"
          title={<>Secure payment<br /><em>setup process.</em></>}
          description="Payment gateway integration process including setup, testing, and go-live activation."
        />
        <Reveal className="payment-provider-note">
          <div className="payment-note-icon"><CreditCard size={20} aria-hidden="true" /></div>
          <div>
            <Eyebrow>Provider choice is operational</Eyebrow>
            <p>Razorpay, Cashfree, PayU or Stripe may be considered subject to merchant eligibility, provider approval, supported markets and the agreed checkout model.</p>
            <span>Gateway fees, settlement timing and dispute rules are set by the provider.</span>
          </div>
        </Reveal>
      </div>

      <div className="payment-flow-layout">
        <div className="payment-flow-label"><span>How the connection works</span><span>01 — 08</span></div>
        <ol className="payment-flow-list">
          {paymentSteps.map(([number, title, description], index) => (
            <li className="payment-flow-step" key={number}>
              <div className="payment-step-number">{number}</div>
              <div className="payment-step-copy"><h3>{title}</h3><p>{description}</p></div>
              {index < paymentSteps.length - 1 ? <ArrowDown className="payment-step-arrow" size={15} aria-hidden="true" /> : <CircleCheck className="payment-step-check" size={17} aria-hidden="true" />}
            </li>
          ))}
        </ol>
      </div>

      <div className="payment-assurance-row">
        <div><ShieldCheck size={17} aria-hidden="true" /><span>Gateway-hosted payment handling</span></div>
        <div><Check size={17} aria-hidden="true" /><span>Test mode before live activation</span></div>
        <div><Store size={17} aria-hidden="true" /><span>Order status recorded in the store</span></div>
        <div><Truck size={17} aria-hidden="true" /><span>Settlement reconciled by the business</span></div>
      </div>
    </SectionFrame>
  )
}

export function TechnologySection() {
  return (
    <SectionFrame id="technology" tone="paper" className="technology-section">
      <div className="technology-heading-grid">
        <SectionHeading
          id="technology"
          number="06"
          label="E-commerce setup"
          title={<>Platform setup<br /><em>&amp; configuration.</em></>}
          description="Technical setup including platform installation, configuration, extensions, and store settings."
        />
        <div className="technology-stack-pills" aria-label="Recommended stack summary">
          <Pill tone="dark">WordPress</Pill>
          <Pill tone="dark">E-commerce</Pill>
          <Pill tone="dark">Custom theme</Pill>
          <Pill tone="dark">PHP · MySQL</Pill>
        </div>
      </div>
      <Reveal className="technology-stack-wrap">
        <TechnologyStack />
      </Reveal>
      <div className="technology-footnote"><span>Selected to fit the brief.</span><span>Final versions, extensions and hosting are confirmed during discovery.</span></div>
    </SectionFrame>
  )
}

export function VisitorGrowthSection() {
  return (
    <SectionFrame id="visitor-growth" tone="sage" className="visitor-growth-section">
      <div className="growth-heading-grid">
        <SectionHeading
          id="visitor-growth"
          number="07"
          label="Getting visitors"
          title={<>Traffic acquisition<br /><em>strategy.</em></>}
          description="Methods to drive targeted traffic to the online store through organic and paid channels."
        />
        <Reveal className="growth-quote">
          <p>“A strong digital presence starts with a useful story—and improves when each channel has a clear job.”</p>
          <span>Growth principle / Robust</span>
        </Reveal>
      </div>

      <div className="traffic-system">
        <div className="traffic-system-label"><Eyebrow>Connected acquisition routes</Eyebrow><span>Illustrative, not a volume forecast</span></div>
        <div className="traffic-diagram">
          <div className="traffic-channel-list">
            {trafficChannels.slice(0, 2).map(({ title, subtitle, icon: Icon }, index) => (
              <div className={`traffic-source traffic-source-${index + 1}`} key={title}>
                <span className="traffic-icon"><Icon size={17} aria-hidden="true" /></span>
                <span><strong>{title}</strong><small>{subtitle}</small></span>
              </div>
            ))}
          </div>
          <div className="traffic-lines traffic-lines-left" aria-hidden="true"><span /><span /></div>
          <div className="traffic-destination">
            <span className="destination-ring"><ShoppingBag size={24} aria-hidden="true" /></span>
            <strong>robustfoods.com</strong>
            <small>Brand · catalogue · store</small>
          </div>
          <div className="traffic-lines traffic-lines-right" aria-hidden="true"><span /><span /></div>
          <div className="traffic-channel-list">
            {trafficChannels.slice(2, 4).map(({ title, subtitle, icon: Icon }, index) => (
              <div className={`traffic-source traffic-source-${index + 3}`} key={title}>
                <span className="traffic-icon"><Icon size={17} aria-hidden="true" /></span>
                <span><strong>{title}</strong><small>{subtitle}</small></span>
              </div>
            ))}
          </div>
        </div>
        <div className="traffic-outcomes"><span>Discovery</span><span>Useful content</span><span>Product confidence</span><span>Order or enquiry</span></div>
      </div>

      <div className="growth-tactic-grid">
        {growthTactics.map(({ number, title, text, icon: Icon }, index) => (
          <Reveal className="growth-tactic" delay={index * 0.035} key={number}>
            <div className="growth-tactic-top"><span>{number}</span><Icon size={18} aria-hidden="true" /></div>
            <h3>{title}</h3>
            <p>{text}</p>
          </Reveal>
        ))}
      </div>
      <div className="growth-disclaimer"><span className="tiny-dot" /><p>Search rankings, advertising results and sales depend on competition, content, fulfilment, ongoing activity and other factors outside the website alone.</p></div>
    </SectionFrame>
  )
}
