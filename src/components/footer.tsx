import Link from "next/link"
import { Mail, MapPin, Phone, Instagram, ArrowUpRight } from "lucide-react"

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
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                <span className="text-white font-serif font-bold text-2xl leading-none">R</span>
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-white">Administración Rochas</span>
                <span className="block text-[10px] tracking-[0.2em] text-white/50 uppercase -mt-1">
                  Consorcios
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Administración integral y personalizada de consorcios.
              Eficiencia, transparencia y profesionalismo al servicio de tu edificio.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/administracionrochas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@administracionrochas.com"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-white/60 text-sm hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {s.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Navegación</h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=Córdoba+1109+Martinez+San+Isidro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/60 text-sm hover:text-white transition-colors"
                >
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>Córdoba 1109<br />Martínez, San Isidro</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@administracionrochas.com"
                  className="flex items-center gap-3 text-white/60 text-sm hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 shrink-0" />
                  <span>info@administracionrochas.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Administración Rochas. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-white/40 text-xs">
            <span>Martínez, San Isidro</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
