import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mb-8"
    >
      <p className="text-accent mb-2 text-xs font-semibold uppercase tracking-[0.2em]">{eyebrow}</p>
      <h1 className="text-main font-heading text-3xl font-semibold sm:text-4xl">{title}</h1>
      <p className="text-soft mt-2 max-w-2xl">{description}</p>
    </motion.div>
  )
}