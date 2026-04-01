import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'
import { printCards } from '../data/navigation.js'

export default function PrintlabelsPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Print center"
        title="Wat wil je printen?"
        description="Kies een type label en start direct met printen voor jouw warehouse flow."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:max-w-3xl">
        {printCards.map((card, index) => {
          const Icon = card.icon

          return (
            <Link key={card.key} to={`/printlabels/${card.key}`} className="block">
              <motion.article
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.35 }}
              whileHover={{ y: -8 }}
              className="panel-surface group relative overflow-hidden rounded-2xl border p-6 backdrop-blur-lg"
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 transition group-hover:opacity-100`} />
                <div className="relative flex items-start justify-between">
                  <span className="inline-flex rounded-xl border border-white/15 bg-white/5 p-2 text-main">
                    <Icon className="size-6" />
                  </span>
                  <ArrowRight className="text-soft size-6 transition group-hover:translate-x-1 group-hover:text-cyan-200" />
                </div>
                <h2 className="text-main relative mt-8 text-3xl font-semibold">{card.title}</h2>
                <p className="text-soft relative mt-2 text-lg">{card.text}</p>
              </motion.article>
            </Link>
          )
        })}
      </div>
    </div>
  )
}