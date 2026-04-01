import SectionHeader from '../components/SectionHeader.jsx'

export default function InstellingenPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Configuratie"
        title="Instellingen"
        description="Beheer printers, gebruikersrechten en operationele parameters voor je warehouse."
      />
      <div className="panel-surface text-main rounded-2xl border border-dashed border-emerald-300/40 p-6">
        Configuratiepanelen voor labelsjablonen, scanners en gebruikersrollen.
      </div>
    </div>
  )
}