import { AnimatePresence, motion } from 'framer-motion'
import { LogOut, Menu, Moon, Sun } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { navItems } from '../data/navigation.js'
import useTheme from '../hooks/useTheme.js'

function Sidebar({ onNavigate, compact, onToggleTheme, theme }) {
  return (
    <aside className="panel-surface h-full w-[290px] rounded-r-3xl border-r p-4 backdrop-blur-xl">
      <div className="mb-6 border-b border-[color:var(--panel-border)] pb-5">
        <p className="text-xl font-semibold text-main">WMS Orderpick Demo</p>
        <p className="text-sm text-soft">ecBase Demo</p>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <div className="flex gap-2">
          <button className="surface-btn" aria-label="Thema wisselen" onClick={onToggleTheme}>
            {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
        </div>
        <button className="surface-btn" aria-label="Uitloggen">
          <LogOut className="size-4" />
        </button>
      </div>

      <p className="mb-3 text-sm font-medium text-soft">Modules</p>
      <nav className="space-y-2">
        {navItems.map(({ label, icon: Icon, to }) => (
          <NavLink
            key={to}
            to={to}
            onClick={onNavigate}
            className={({ isActive }) =>
              `group relative flex items-center gap-3 overflow-hidden rounded-xl px-3 py-3 text-sm transition duration-300 ${
                isActive
                  ? 'border border-cyan-400/40 bg-cyan-500/10 text-main'
                  : 'text-soft hover:bg-cyan-500/8 hover:text-main'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className={`absolute inset-y-0 left-0 w-1 rounded-r-full ${
                    isActive ? 'bg-gradient-to-b from-emerald-300 to-cyan-500' : 'bg-transparent'
                  }`}
                />
                <Icon className="size-4" />
                {!compact && <span className="text-[1.9rem] leading-none">{label}</span>}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(true)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onResize = () => {
      setIsDesktop(window.innerWidth >= 1024)
      if (window.innerWidth >= 1024) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const pageTitle = useMemo(() => {
    const page = navItems.find((item) => location.pathname === item.to || location.pathname.startsWith(`${item.to}/`))
    return page?.label ?? 'Dashboard'
  }, [location.pathname])

  const handleMenuToggle = () => {
    if (isDesktop) {
      setDesktopMenuOpen((current) => !current)
      return
    }
    setMenuOpen((current) => !current)
  }

  return (
    <div className="theme-shell relative min-h-screen text-main">
      <div className="theme-overlay pointer-events-none absolute inset-0" />

      <div className="relative flex min-h-screen">
        <motion.div
          className="hidden overflow-hidden lg:block"
          animate={{ width: desktopMenuOpen ? 290 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          <Sidebar compact={!desktopMenuOpen} onToggleTheme={toggleTheme} theme={theme} />
        </motion.div>

        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                className="fixed inset-0 z-30 bg-slate-950/75"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
              />
              <motion.div
                className="fixed left-0 top-0 z-40 h-full lg:hidden"
                initial={{ x: -320 }}
                animate={{ x: 0 }}
                exit={{ x: -320 }}
                transition={{ type: 'spring', damping: 26, stiffness: 260 }}
              >
                <Sidebar onNavigate={() => setMenuOpen(false)} onToggleTheme={toggleTheme} theme={theme} />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <main className="flex min-w-0 flex-1 flex-col">
          <header className="panel-surface sticky top-0 z-20 flex h-[72px] items-center justify-between border-b px-4 backdrop-blur-xl sm:px-6 lg:px-8">
            <button
              className="surface-btn"
              aria-label="Menu openen of sluiten"
              onClick={handleMenuToggle}
            >
              <Menu className="size-4" />
            </button>
            <div className="mx-auto text-lg font-semibold tracking-wide text-main sm:text-2xl">
              {pageTitle}
            </div>
            <button className="surface-btn" aria-label="Thema wisselen" onClick={toggleTheme}>
              {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
          </header>

          <motion.section
            key={location.pathname}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="flex-1 p-4 sm:p-6 lg:p-10"
          >
            <Outlet />
          </motion.section>
        </main>
      </div>
    </div>
  )
}