import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader.jsx'

export default function PrintKlantkaartjesPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Print center"
        title="Klantkaartjes"
        description="Configureer klantgegevens, layout en oplage voor een nette kaartprint."
      />

      <motion.form
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="panel-surface mx-auto grid max-w-3xl gap-4 rounded-2xl p-6"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm">
            <span className="text-soft">Klantnummer</span>
            <input className="field-input" placeholder="Bijv. KL-20413" />
          </label>
          <label className="grid gap-2 text-sm">
            <span className="text-soft">Klantnaam</span>
            <input className="field-input" placeholder="Bijv. Van Dijk Retail" />
          </label>
        </div>

        <label className="grid gap-2 text-sm">
          <span className="text-soft">Adresregel</span>
          <input className="field-input" placeholder="Straat, huisnummer, postcode en plaats" />
        </label>

        <div className="grid gap-4 md:grid-cols-3">
          <label className="grid gap-2 text-sm">
            <span className="text-soft">Formaat</span>
            <select className="field-input">
              <option>A6</option>
              <option>A7</option>
              <option>Custom 100 x 70 mm</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm">
            <span className="text-soft">Aantal</span>
            <input type="number" min="1" defaultValue="20" className="field-input" />
          </label>
          <label className="grid gap-2 text-sm">
            <span className="text-soft">Printer</span>
            <select className="field-input">
              <option>Zebra ZT411</option>
              <option>Brother QL-820NWB</option>
              <option>HP LabelJet</option>
            </select>
          </label>
        </div>

        <div className="mt-2 flex flex-wrap gap-3">
          <button type="button" className="action-btn action-btn-primary">Preview</button>
          <button type="submit" className="action-btn action-btn-secondary">Print starten</button>
        </div>
      </motion.form>
    </div>
  )
}