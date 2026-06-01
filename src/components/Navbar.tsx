import { useState } from 'react'
import { navItems } from '../data/dashboard'
import { Icon } from './Icon'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8" aria-label="Navegación principal">
        <a className="flex items-center gap-3" href="#inicio" onClick={() => setIsOpen(false)}>
          <span className="rounded-xl bg-blue-600 p-2.5 text-white shadow-lg shadow-blue-600/25">
            <Icon name="cloud" className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-sm font-bold text-slate-950">Microsoft Azure</span>
            <span className="block text-[11px] text-slate-500">Guía de despliegue web</span>
          </span>
        </a>

        <button
          aria-expanded={isOpen}
          aria-label="Abrir menú"
          className="rounded-lg border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
        </button>

        <div className={`${isOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-1 border-b border-slate-200 bg-white p-4 shadow-soft md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
          {navItems.map((item) => (
            <a
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
              href={item.href}
              key={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
