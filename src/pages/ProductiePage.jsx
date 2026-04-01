import SectionHeader from '../components/SectionHeader.jsx'

export default function ProductiePage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Planning"
        title="Productie"
        description="Stem assemblage en replenishment af op actuele orderdruk en voorraadniveaus."
      />
      <div className="panel-surface text-main rounded-2xl border border-dashed border-sky-300/40 p-6">
        Productie-overzicht met planning, machinebelasting en verwachte output.
      </div>
    </div>
  )
}