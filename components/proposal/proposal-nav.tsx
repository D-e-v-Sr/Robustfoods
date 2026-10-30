'use client'

import { useEffect, useState } from 'react'
import { ArrowUp, Menu, X } from 'lucide-react'
import { motion, useMotionValueEvent, useScroll, useSpring } from 'motion/react'
import { Wordmark } from '@/components/proposal/primitives'

const navItems = [
  { id: 'understanding', label: 'Overview' },
  { id: 'opportunity', label: 'Scope' },
  { id: 'pages', label: 'Pages' },
  { id: 'features', label: 'Features' },
  { id: 'payments', label: 'Payments' },
  { id: 'technology', label: 'Setup' },
  { id: 'visitor-growth', label: 'Traffic' },
  { id: 'conversion', label: 'Sales' },
  { id: 'ownership', label: 'Handover' },
  { id: 'reliability', label: 'Technical' },
  { id: 'roadmap', label: 'Timeline' },
]

export function ProposalNav() {
  const [activeSection, setActiveSection] = useState('understanding')
  const [menuOpen, setMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const { scrollY, scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: 0.001 })

  useMotionValueEvent(scrollY, 'change', (value) => setShowBackToTop(value > 680))

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-26% 0px -60% 0px', threshold: [0, 0.2, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to proposal</a>
      <motion.div className="reading-progress" style={{ scaleX: progress }} aria-hidden="true" />
      <header className="site-nav" data-no-print>
        <a className="nav-brand" href="#cover" onClick={closeMenu} aria-label="Robust proposal, back to cover">
          <Wordmark />
          <span className="nav-brand-divider" aria-hidden="true" />
          <span className="nav-brand-caption">Digital commerce<br />proposal</span>
        </a>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="proposal-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav
          id="proposal-navigation"
          className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}
          aria-label="Proposal sections"
        >
          {navItems.map((item) => (
            <a
              href={`#${item.id}`}
              key={item.id}
              className={activeSection === item.id ? 'nav-link nav-link-active' : 'nav-link'}
              aria-current={activeSection === item.id ? 'location' : undefined}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>

      </header>

      <a
        className={`back-to-top ${showBackToTop ? 'back-to-top-visible' : ''}`}
        href="#cover"
        aria-label="Back to top"
        aria-hidden={!showBackToTop}
        tabIndex={showBackToTop ? 0 : -1}
        data-no-print
      >
        <ArrowUp size={18} aria-hidden="true" />
      </a>
    </>
  )
}
