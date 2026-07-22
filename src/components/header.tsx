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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-dark flex items-center justify-center">
                <span className="text-white font-serif font-bold text-2xl leading-none">R</span>
              </div>
              <div className="hidden sm:block">
                <span className={cn("font-serif font-bold text-xl transition-colors duration-300", scrolled ? "text-dark" : "text-white")}>
                  Administración Rochas
                </span>
                <span className="block text-[10px] tracking-[0.2em] text-gray-400 uppercase -mt-1">
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
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                    pathname === link.href
                      ? scrolled ? "text-dark bg-steel/5" : "text-white bg-white/10"
                      : scrolled ? "text-gray-600 hover:text-dark hover:bg-steel/5" : "text-white/80 hover:text-white hover:bg-white/10",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 bg-dark text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-dark-light transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Consultar
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn("lg:hidden p-2 rounded-lg transition-colors", scrolled ? "text-dark hover:bg-steel/5" : "text-white hover:bg-white/10")}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 bg-white z-[60] lg:hidden transition-transform duration-300 overflow-y-auto",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-lg text-dark hover:bg-steel/5"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col items-center gap-2 px-4 mt-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "w-full text-center py-3 rounded-xl text-lg font-medium transition-colors",
                pathname === link.href
                  ? "text-dark bg-steel/5"
                  : "text-gray-600 hover:text-dark hover:bg-steel/5",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setMobileOpen(false)}
            className="w-full text-center bg-dark text-white py-3 rounded-xl text-lg font-medium hover:bg-dark-light transition-colors mt-4"
          >
            Consultar
          </Link>
        </nav>
      </div>
    </>
  )
}
