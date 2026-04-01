import { motion } from 'framer-motion'
import { Activity, ChartSpline, PackageSearch } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const stats = [
  { label: 'Openstaande orders', value: '148', icon: PackageSearch },
  { label: 'Actieve pickers', value: '23', icon: Activity },
  { label: 'Fulfilment score', value: '98.7%', icon: ChartSpline },
]

export default function HomePage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Dashboard"
        title="Warehouse command center"
        description="Realtime inzicht in je operationele prestaties en lopende pick- en productieprocessen."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              className="panel-surface rounded-2xl border p-5 backdrop-blur-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <Icon className="mb-3 size-5 text-cyan-300" />
              <p className="text-soft text-sm">{stat.label}</p>
              <p className="text-main mt-1 font-heading text-4xl font-semibold">{stat.value}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}