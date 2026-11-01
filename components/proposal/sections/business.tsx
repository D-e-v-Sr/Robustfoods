import Image from 'next/image'
import {
  ArrowRight,
  Globe2,
  Heart,
  Leaf,
  Search,
  ShieldCheck,
  ShoppingBag,
  Store,
  UsersRound,
} from 'lucide-react'
import { Reveal } from '@/components/proposal/motion'
import { Eyebrow, SectionFrame, SectionHeading } from '@/components/proposal/primitives'

const products = [
  'Robust Coconut Oil',
  'Robustea',
  'Robust Gingelly Oil',
  'Robust Sarsaparilla',
  'Robust Ginger Coffee',
  'Robust Desiccated Coconut Powder',
  'Robust Tamarind',
]

const opportunities = [
  'Give the brand a destination beyond any single marketplace or social platform.',
  'Make the catalogue discoverable to shoppers across Kerala and India—and, where fulfilment supports it, international audiences.',
  'Present the product range and the company story in one consistent, professional identity.',
  'Create product pages that can be indexed and discovered through relevant Google searches.',
  'Keep product information and enquiries accessible beyond business hours.',
  'Use clear product detail, transparent policies and authentic business information to support trust.',
  'Build a direct route to customers alongside third-party marketplaces and social channels.',
  'Connect customer questions to the right contact or buying journey.',
  'Create a foundation for measurable search, content and digital marketing activity.',
]

const storeBenefits = [
  {
    icon: Store,
    title: 'Online Storefront',
    text: 'Complete online store with product catalog, cart, and checkout functionality.',
  },
  {
    icon: Search,
    title: 'Product Management',
    text: 'Easy product addition, categorization, pricing, and inventory management.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Shopping',
    text: 'Secure checkout, SSL encryption, and safe payment processing.',
  },
  {
    icon: UsersRound,
    title: 'Customer Accounts',
    text: 'User registration, order history, and account management.',
  },
  {
    icon: ShoppingBag,
    title: 'Order Management',
    text: 'Complete order tracking, notifications, and status management.',
  },
  {
    icon: Heart,
    title: 'Payment Integration',
    text: 'Multiple payment gateway options with secure processing.',
  },
  {
    icon: Globe2,
    title: 'Responsive Design',
    text: 'Mobile-friendly design that works on all devices.',
  },
  {
    icon: ArrowRight,
    title: 'SEO Ready',
    text: 'Search engine optimized structure for better visibility.',
  },
]

export function BusinessSection() {
  return (
    <SectionFrame id="understanding" tone="paper" className="business-section">
      <div className="understanding-layout">
        <div className="understanding-copy">
          <SectionHeading
            id="understanding"
            number="01"
            label="Project overview"
            title={<>E-commerce store<br /><em>implementation scope.</em></>}
            description="This document outlines the technical scope for building a complete online store - page structure, e-commerce configuration, payment integration, traffic acquisition, and conversion optimization."
          />
        </div>

        <Reveal className="understanding-visual" delay={0.08}>
          <figure className="editorial-photo editorial-photo-tall">
            <Image
              src="/website.png"
              alt="E-commerce website"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              className="editorial-photo-image"
              style={{ objectFit: 'contain' }}
            />
            <figcaption className="photo-caption">
              <span>Complete online store solution</span>
              <span>Pages · Setup · Payments · Growth</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </SectionFrame>
  )
}

export function OpportunitySection() {
  return (
    <SectionFrame id="opportunity" tone="sage" className="opportunity-section">
      <div className="opportunity-topline">
        <SectionHeading
          id="opportunity"
          number="02"
          label="Implementation plan"
          title={<>Pages, setup,<br /><em>and go-live scope.</em></>}
          description="Complete breakdown of website pages, e-commerce configuration, payment integration, traffic acquisition, and sales optimization."
        />
      </div>

      <div className="opportunity-content">
        <ol className="opportunity-list">
          {['Home & landing pages', 'Product catalogue & detail pages', 'Cart, checkout & account pages', 'Policy pages (Privacy, Terms, Shipping, Returns)', 'E-commerce platform setup & configuration', 'Payment gateway integration', 'Shipping & tax setup', 'SEO setup & on-page optimization', 'Traffic acquisition strategy', 'Conversion tracking & sales optimization'].map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>

        <Reveal className="discovery-diagram" delay={0.1}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image
              src="/checkout.png"
              alt="E-commerce checkout page"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </Reveal>
      </div>
    </SectionFrame>
  )
}

export function StoreBenefitsSection() {
  return (
    <SectionFrame id="storefront" tone="green" className="store-benefits-section">
      <div className="store-benefits-heading">
        <SectionHeading
          id="storefront"
          number="04"
          label="Store features"
          title={<>E-commerce<br /><em>capabilities.</em></>}
          description="Key features and benefits of the online store implementation."
        />
        <div className="ownership-quote"><span>“</span><p>Your catalogue. Your customer journey. Your next chapter.</p></div>
      </div>

      <div className="store-benefits-grid">
        {storeBenefits.map(({ icon: Icon, title, text }, index) => (
          <Reveal className="store-benefit-row" delay={index * 0.035} key={title}>
            <span className="benefit-index">{String(index + 1).padStart(2, '0')}</span>
            <span className="benefit-icon"><Icon size={18} aria-hidden="true" /></span>
            <div><h3>{title}</h3><p>{text}</p></div>
          </Reveal>
        ))}
      </div>
      <div className="store-benefits-footnote"><span>Built for ownership.</span><span>Configured around real operations.</span></div>
    </SectionFrame>
  )
}
