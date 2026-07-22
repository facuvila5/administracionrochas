import Link from "next/link"
import { Mail, MapPin, ArrowUpRight } from "lucide-react"

const services = [
  { href: "/servicios", label: "Gestión Administrativa" },
  { href: "/servicios", label: "Mantenimiento" },
  { href: "/servicios", label: "Asesoramiento Legal" },
  { href: "/servicios", label: "Tecnología" },
]

const quickLinks = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/tecnologia", label: "Tecnología" },
  { href: "/contacto", label: "Contacto" },
]

export function Footer() {
  return (
    <footer className="bg-dark-light border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo-rochas.png"
                alt="Administración Rochas"
                className="w-11 h-11 rounded-full object-cover border border-white/10"
              />
              <div>
                <span className="font-semibold text-white text-lg tracking-tight">Administración Rochas</span>
                <span className="block text-[10px] tracking-[0.25em] text-silver uppercase -mt-0.5">
                  Consorcios
                </span>
              </div>
            </div>
            <p className="text-silver text-sm leading-relaxed mb-6">
              Administración integral y personalizada de consorcios.
              Eficiencia, transparencia y profesionalismo al servicio de tu edificio.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/administracionrochas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full metal-inset flex items-center justify-center hover:border-gold/20 border border-white/5 transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 text-silver" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a
                href="mailto:info@administracionrochas.com"
                className="w-10 h-10 rounded-full metal-inset flex items-center justify-center hover:border-gold/20 border border-white/5 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-silver" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white text-sm mb-6 tracking-wide">Servicios</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-silver text-sm hover:text-gold transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {s.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white text-sm mb-6 tracking-wide">Navegación</h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-silver text-sm hover:text-gold transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white text-sm mb-6 tracking-wide">Contacto</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=Córdoba+1109+Martinez+San+Isidro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-silver text-sm hover:text-gold transition-colors"
                >
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>Córdoba 1109<br />Martínez, San Isidro</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@administracionrochas.com"
                  className="flex items-center gap-3 text-silver text-sm hover:text-gold transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>info@administracionrochas.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-silver/60 text-xs">
            © {new Date().getFullYear()} Administración Rochas. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-silver/60 text-xs">
            <span>Martínez, San Isidro</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
