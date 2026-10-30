import Image from 'next/image'
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  CircleCheck,
  FileText,
  LayoutGrid,
  Package,
  Search,
  ShieldCheck,
  ShoppingBag,
} from 'lucide-react'
import { Reveal } from '@/components/proposal/motion'
import { BuildTimeline } from '@/components/proposal/interactive'
import { Eyebrow, Pill, SectionFrame, SectionHeading } from '@/components/proposal/primitives'

const pageGroups = [
  {
    number: '01',
    title: 'Home & Information',
    pages: [
      ['Home', 'Hero section, featured products, categories, trust badges, call-to-action'],
      ['About Us', 'Company information, mission/vision (if provided), values'],
      ['Contact', 'Contact form, business details, map (if needed)'],
    ],
  },
  {
    number: '02',
    title: 'Shop & Products',
    pages: [
      ['Shop/All Products', 'Product grid, filters, sorting, pagination'],
      ['Category Pages', 'Category-wise product listing with filters'],
      ['Product Detail', 'Images, price, description, specs, add to cart, related products'],
      ['Search Results', 'Search functionality with results and filters'],
    ],
  },
  {
    number: '03',
    title: 'Cart, Checkout & Account',
    pages: [
      ['Cart', 'Cart items, quantity update, coupon code, cart totals'],
      ['Checkout', 'Billing/shipping details, payment method selection, order review'],
      ['My Account', 'Login/register, order history, addresses, account details'],
      ['Order Confirmation', 'Order success page with details'],
    ],
  },
  {
    number: '04',
    title: 'Policies & Support',
    pages: [
      ['Privacy Policy', 'Privacy policy content'],
      ['Terms & Conditions', 'Terms of service'],
      ['Shipping Policy', 'Shipping methods, rates, delivery info'],
      ['Returns & Refunds', 'Return policy and process'],
      ['FAQ', 'Frequently asked questions'],
    ],
  },
]

const featureGroups = [
  {
    id: '01',
    title: 'Product Management',
    intro: 'Catalogue setup and organization.',
    icon: Search,
    items: ['Product listing with categories', 'Product details & variations', 'Product images & gallery', 'SKU, price & stock management', 'Product search & filters', 'Related products'],
  },
  {
    id: '02',
    title: 'Cart & Checkout',
    intro: 'Seamless purchasing experience.',
    icon: ShoppingBag,
    items: ['Shopping cart functionality', 'Guest & registered checkout', 'Coupon/discount code support', 'Shipping method selection', 'Order summary & review', 'Order confirmation emails'],
  },
  {
    id: '03',
    title: 'Store Operations',
    intro: 'Admin tools and integrations.',
    icon: LayoutGrid,
    items: ['Order management dashboard', 'Customer account system', 'Payment gateway integration', 'Shipping & tax configuration', 'Email notifications', 'Basic SEO & analytics setup'],
  },
]

export function BuildProcessSection() {
  return (
    <SectionFrame id="build" tone="paper" className="build-process-section">
      <div className="build-heading-grid">
        <SectionHeading
          id="build"
          number="05"
          label="Build process"
          title={<>Development<br /><em>approach.</em></>}
          description="Systematic approach to building your e-commerce website."
        />
        <Reveal className="process-note">
          <div className="process-note-mark"><CircleCheck size={21} aria-hidden="true" /></div>
          <div>
            <strong>One agreed source of truth</strong>
            <p>Product, policy, payment and fulfilment details are confirmed with the Robust team before they are published.</p>
          </div>
        </Reveal>
      </div>
      <Reveal className="build-timeline-wrap">
        <BuildTimeline />
      </Reveal>
      <div className="build-bottomline">
        <span><span className="tiny-dot" /> Scope is confirmed before development begins.</span>
        <span>15 steps · 5 connected phases</span>
      </div>
    </SectionFrame>
  )
}

export function PagesSection() {
  return (
    <SectionFrame id="pages" tone="cream" className="pages-section">
      <div className="pages-intro-grid">
        <SectionHeading
          id="pages"
          number="06"
          label="Website pages"
          title={<>Complete page<br /><em>structure &amp; content.</em></>}
          description="Detailed breakdown of all pages to be created with their specific content and functionality."
        />
        <Reveal className="sitemap-visual" delay={0.08}>
          <div className="sitemap-top-node"><BookOpen size={18} aria-hidden="true" /><span>ROBUST / ONLINE</span></div>
          <div className="sitemap-branches" aria-hidden="true"><span /><span /><span /></div>
          <div className="sitemap-subnodes"><span>Discover</span><span>Choose</span><span>Connect</span></div>
        </Reveal>
      </div>

      <div className="page-groups">
        {pageGroups.map((group) => (
          <Reveal className="page-group" key={group.number}>
            <div className="page-group-heading">
              <span className="page-group-number">{group.number}</span>
              <h3>{group.title}</h3>
            </div>
            <div className="page-group-list">
              {group.pages.map(([title, description]) => (
                <article className="page-item" key={title}>
                  <div className="page-item-icon"><FileText size={16} aria-hidden="true" /></div>
                  <div><h4>{title}</h4><p>{description}</p></div>
                  <ArrowDownRight className="page-item-arrow" size={16} aria-hidden="true" />
                </article>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <div className="legal-pages-band">
        <div className="legal-band-title"><ShieldCheck size={18} aria-hidden="true" /><span>Trust &amp; policy pages</span></div>
        <div className="legal-chip-list">
          {['Privacy policy', 'Terms & conditions', 'Shipping policy', 'Returns & refunds', 'Cookie information'].map((page) => (
            <span className="legal-chip" key={page}>{page}</span>
          ))}
        </div>
        <p>Final policy language and jurisdictional requirements are supplied or approved by the client.</p>
      </div>

      <div className="page-architecture-footer"><span>Navigation built around customer intent</span><ArrowRight size={16} aria-hidden="true" /><span>Flexible enough to grow with the catalogue</span></div>
    </SectionFrame>
  )
}

export function FeaturesSection() {
  return (
    <SectionFrame id="features" tone="green" className="features-section">
      <div className="features-top-grid">
        <SectionHeading
          id="features"
          number="07"
          label="E-commerce features"
          title={<>Core store<br /><em>functionality.</em></>}
          description="Essential e-commerce features for product management, cart/checkout, payments, and store operations."
        />
        <Reveal className="feature-image-wrap" delay={0.1}>
          <Image
            src="/robust-process.png"
            alt="Fresh coconut, dried copra and a small dish of golden coconut oil on a natural work surface"
            fill
            sizes="(max-width: 900px) 100vw, 35vw"
            className="feature-image"
          />
          <div className="feature-image-caption"><span>Product detail should be as considered as the product itself.</span><span>Explore / choose / buy</span></div>
        </Reveal>
      </div>

      <div className="feature-groups">
        {featureGroups.map(({ id, title, intro, icon: Icon, items }) => (
          <Reveal className="feature-group" key={id}>
            <div className="feature-group-heading">
              <span className="feature-group-number">{id}</span>
              <span className="feature-group-icon"><Icon size={18} aria-hidden="true" /></span>
              <div><h3>{title}</h3><p>{intro}</p></div>
            </div>
            <ul>
              {items.map((item) => <li key={item}><CircleCheck size={15} aria-hidden="true" /><span>{item}</span></li>)}
            </ul>
          </Reveal>
        ))}
      </div>

      <div className="features-note"><Package size={16} aria-hidden="true" /><p>Product copy, pack sizes, pricing, stock levels and product photography are provided or approved by Kerapura Products Pvt. Ltd.</p><Pill tone="lime">Client-verified content</Pill></div>
    </SectionFrame>
  )
}
