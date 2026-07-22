"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/tecnologia", label: "Tecnología" },
  { href: "/contacto", label: "Contacto" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5",
          scrolled
            ? "bg-dark/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/logo-rochas.png"
                alt="Administración Rochas"
                className="w-11 h-11 rounded-full object-cover border border-white/10"
              />
              <div className="hidden sm:block">
                <span className="font-semibold text-white text-lg tracking-tight">
                  Administración Rochas
                </span>
                <span className="block text-[10px] tracking-[0.25em] text-silver uppercase -mt-0.5">
                  Consorcios
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    pathname === link.href
                      ? "text-gold bg-white/5 border border-gold/20"
                      : "text-silver hover:text-white hover:bg-white/5",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 bg-gold text-dark px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gold-light transition-all duration-200 shadow-lg shadow-gold/10"
              >
                Consultar
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-full text-silver hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 bg-dark z-[60] lg:hidden transition-transform duration-300 overflow-y-auto border-r border-white/5",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-full text-silver hover:text-white hover:bg-white/5"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col items-center gap-2 px-6 mt-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "w-full text-center py-4 rounded-2xl text-lg font-medium transition-all duration-200",
                pathname === link.href
                  ? "text-gold metal-inset"
                  : "text-silver hover:text-white hover:bg-white/5",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setMobileOpen(false)}
            className="w-full text-center bg-gold text-dark py-4 rounded-2xl text-lg font-semibold hover:bg-gold-light transition-all mt-4 shadow-lg shadow-gold/10"
          >
            Consultar
          </Link>
        </nav>
      </div>
    </>
  )
}
