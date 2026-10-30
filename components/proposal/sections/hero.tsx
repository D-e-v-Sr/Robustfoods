'use client'

import Image from 'next/image'
import { ArrowDownRight, ArrowRight, Leaf } from 'lucide-react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { Pill, Wordmark } from '@/components/proposal/primitives'

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imageOffset = useTransform(scrollYProgress, [0, 1], [0, 36])

  return (
    <section className="hero-section" id="cover" ref={heroRef} aria-labelledby="cover-title">
      <div className="hero-backdrop-pattern" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-brand-lockup">
            <Wordmark inverse />
            <span className="hero-brand-tagline">believe, live healthy</span>
          </div>

          <p className="hero-eyebrow"><span /> Technical proposal</p>
          <motion.h1
            id="cover-title"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            E-commerce website development <em>proposal.</em>
          </motion.h1>
          <p className="hero-description">
            Detailed scope covering page structure, e-commerce setup, payment integration, SEO, traffic acquisition, and conversion optimization for an online store.
          </p>

          <div className="hero-actions">
            <a className="button button-lime" href="#understanding">
              Explore the proposal <ArrowDownRight size={17} aria-hidden="true" />
            </a>
            <a className="hero-text-link" href="#closing">The next step <ArrowRight size={15} aria-hidden="true" /></a>
          </div>

          <div className="hero-meta-grid">
            <div>
              <span>Project type</span>
              <strong>E-commerce Website Development</strong>
            </div>
            <div>
              <span>Focus areas</span>
              <strong>Pages, Setup, Payments, Traffic &amp; Sales</strong>
            </div>
            <div className="hero-meta-wide">
              <span>Scope</span>
              <strong>Complete online store implementation</strong>
            </div>
          </div>
        </div>

        <motion.div
          className="hero-visual"
          style={reduceMotion ? undefined : { y: imageOffset }}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
        >
          <div className="hero-image-frame">
            <Image
              src="/robust-hero.png"
              alt="Freshly split coconuts and golden coconut oil arranged on a forest-green surface"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 47vw"
              className="hero-image"
            />
            <div className="hero-image-shade" aria-hidden="true" />
            <div className="hero-image-caption">
              <span>From Kerala’s coconut heartland</span>
              <Leaf size={16} aria-hidden="true" />
            </div>
          </div>
          <div className="hero-stamp" aria-label="Brand values: purity, trust, harmony">
            <span>Purity</span><span>Trust</span><span>Harmony</span>
          </div>
          <div className="hero-visual-index"><Pill tone="lime">01 / 15</Pill><span>Brand-led commerce</span></div>
        </motion.div>
      </div>

      <a className="scroll-cue" href="#understanding" aria-label="Scroll to understand the business">
        <span>Scroll to explore</span><span className="scroll-cue-line" aria-hidden="true" />
      </a>
      <div className="hero-bottom-note"><span>KERAPURA PRODUCTS</span><span>ROBUST · BELIEVE, LIVE HEALTHY</span></div>
    </section>
  )
}
