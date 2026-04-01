import {
  Cog,
  Factory,
  Home,
  PackageCheck,
  Printer,
  Settings,
  UserRound,
} from 'lucide-react'

export const navItems = [
  { label: 'Home', subtitle: 'Dashboard', icon: Home, to: '/' },
  { label: 'Orderpicken', subtitle: 'Pickflow', icon: PackageCheck, to: '/orderpicken' },
  { label: 'Productie', subtitle: 'Planning', icon: Factory, to: '/productie' },
  { label: 'Printlabels', subtitle: 'Label center', icon: Printer, to: '/printlabels' },
  { label: 'Instellingen', subtitle: 'Systeem', icon: Settings, to: '/instellingen' },
]

export const printCards = [
  {
    key: 'klantkaartjes',
    title: 'Klantkaartjes',
    text: 'Print informatie over een klant met order- en contactdetails.',
    icon: UserRound,
    gradient: 'from-cyan-500/20 to-emerald-500/10',
  },
  {
    key: 'productstickers',
    title: 'Productstickers',
    text: 'Print barcode labels voor producten, batches en locaties.',
    icon: Cog,
    gradient: 'from-blue-500/20 to-sky-500/10',
  },
]