import SectionHeader from '../components/SectionHeader.jsx'

export default function OrderpickenPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Pickflow"
        title="Orderpicken"
        description="Bekijk en prioriteer picktaken op basis van route, urgentie en beschikbare capaciteit."
      />
      <div className="panel-surface text-main rounded-2xl border border-dashed border-cyan-300/40 p-6">
        Start hier met batch picking, wave picking of single-order picking.
      </div>
    </div>
  )
}