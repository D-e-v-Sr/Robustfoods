'use client'

import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'

export function Reveal({
  children,
  className = '',
  delay = 0,
  distance = 22,
}: {
  children: ReactNode
  className?: string
  delay?: number
  distance?: number
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.68, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
