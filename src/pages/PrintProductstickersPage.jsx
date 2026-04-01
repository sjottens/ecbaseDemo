import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader.jsx'

export default function PrintProductstickersPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Print center"
        title="Productstickers"
        description="Genereer labels voor SKU, batch, locatie en barcode binnen jouw fulfilmentflow."
      />

      <motion.form
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="panel-surface mx-auto grid max-w-3xl gap-4 rounded-2xl p-6"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm">
            <span className="text-soft">SKU</span>
            <input className="field-input" placeholder="Bijv. SKU-9392-BL" />
          </label>
          <label className="grid gap-2 text-sm">
            <span className="text-soft">Batchnummer</span>
            <input className="field-input" placeholder="Bijv. BATCH-2026-04-01" />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <label className="grid gap-2 text-sm">
            <span className="text-soft">Barcode type</span>
            <select className="field-input">
              <option>Code128</option>
              <option>EAN-13</option>
              <option>QR</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm">
            <span className="text-soft">Aantal labels</span>
            <input type="number" min="1" defaultValue="120" className="field-input" />
          </label>
          <label className="grid gap-2 text-sm">
            <span className="text-soft">Printer</span>
            <select className="field-input">
              <option>Zebra GX430t</option>
              <option>Zebra ZD620</option>
              <option>TSC MB240</option>
            </select>
          </label>
        </div>

        <label className="grid gap-2 text-sm">
          <span className="text-soft">Locatiecode</span>
          <input className="field-input" placeholder="Bijv. A-03-14" />
        </label>

        <div className="mt-2 flex flex-wrap gap-3">
          <button type="button" className="action-btn action-btn-primary">Batch valideren</button>
          <button type="submit" className="action-btn action-btn-secondary">Print starten</button>
        </div>
      </motion.form>
    </div>
  )
}