"use client"

import Link from "next/link"
import {
  Building2,
  Wrench,
  Scale,
  Cpu,
  CheckCircle,
  Shield,
  Eye,
  Users,
  Zap,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ChevronRight,
  MessageCircle,
  ClipboardList,
  FileText,
  MessageSquare,
  CalendarCheck,
} from "lucide-react"

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center brushed-steel">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-px h-64 bg-gradient-to-b from-transparent via-silver/30 to-transparent" />
        <div className="absolute top-1/3 right-1/3 w-px h-48 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
        <div className="absolute top-1/2 right-1/5 w-px h-56 bg-gradient-to-b from-transparent via-silver/20 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-gold text-xs font-medium tracking-[0.3em] uppercase mb-6">
            <span className="w-8 h-px bg-gold" />
            Administración de Consorcios
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-[1.1] mb-8 tracking-tight">
            Tu consorcio,{" "}
            <span className="text-gold">en buenas manos</span>
          </h1>
          <p className="text-silver text-lg leading-relaxed mb-12 max-w-xl">
            Administración integral y personalizada. Eficiencia, transparencia
            y profesionalismo para que tu edificio esté siempre bien cuidado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-3 bg-gold text-dark px-8 py-4 rounded-full text-sm font-semibold hover:bg-gold-light transition-all duration-200 shadow-lg shadow-gold/20"
            >
              <div className="w-8 h-8 rounded-full bg-dark/10 flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </div>
              Solicitar asesoría
            </Link>
            <Link
              href="/quienes-somos"
              className="inline-flex items-center justify-center gap-2 border border-white/10 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-white/5 transition-all duration-200"
            >
              Conocer más
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function QuienesSomosSection() {
  return (
    <section className="py-28 bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-gold text-xs font-medium tracking-[0.3em] uppercase mb-6">
              <span className="w-8 h-px bg-gold" />
              Quiénes Somos
            </span>
            <h2 className="text-3xl sm:text-4xl text-white font-bold mb-8 tracking-tight leading-tight">
              Un equipo comprometido con tu consorcio
            </h2>
            <p className="text-silver leading-relaxed mb-5">
              Desde Administración Rochas brindamos un servicio de administración
              integral y personalizado, adaptado a las necesidades específicas de
              cada consorcio.
            </p>
            <p className="text-silver leading-relaxed mb-5">
              Nuestro enfoque se basa en eficiencia, transparencia y
              profesionalismo, asegurando una gestión ágil, ordenada y orientada
              a la prevención de conflictos.
            </p>
            <p className="text-silver leading-relaxed">
              Somos un equipo de profesionales con sólida experiencia en gestión
              administrativa, legal y contable, comprometidos con brindar un
              servicio que inspire tranquilidad, confianza y cercanía.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { icon: CheckCircle, label: "Administración integral", desc: "Gestión completa de tu consorcio" },
              { icon: Shield, label: "Transparencia total", desc: "Acceso digital a toda la información" },
              { icon: Users, label: "Atención personalizada", desc: "Cada consorcio es único" },
              { icon: Zap, label: "Respuesta rápida", desc: "Resolución ágil de problemas" },
            ].map((item) => (
              <div
                key={item.label}
                className="metal-surface rounded-2xl p-6 border border-white/5"
              >
                <div className="w-12 h-12 rounded-xl metal-inset flex items-center justify-center mb-4 border border-white/5">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-semibold text-white text-sm mb-1">{item.label}</h3>
                <p className="text-silver text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ValoresSection() {
  const values = [
    { icon: Shield, title: "Responsabilidad", desc: "Compromiso absoluto con la gestión de tu consorcio." },
    { icon: Users, title: "Atención personalizada", desc: "Orientación al cliente en cada paso." },
    { icon: Zap, title: "Efectividad", desc: "Rapidez en la resolución de problemas." },
    { icon: Scale, title: "Asesoramiento legal", desc: "Orientación técnica y legal especializada." },
    { icon: Eye, title: "Presencia constante", desc: "Visitas periódicas y de emergencia." },
    { icon: Building2, title: "Criterio estético", desc: "Atención al detalle en cada reparación." },
  ]

  return (
    <section className="py-28 brushed-steel border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-gold text-xs font-medium tracking-[0.3em] uppercase mb-4 justify-center">
            <span className="w-8 h-px bg-gold" />
            Nuestros Valores
            <span className="w-8 h-px bg-gold" />
          </span>
          <h2 className="text-3xl sm:text-4xl text-white font-bold tracking-tight">
            Lo que nos define
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="metal-surface rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-200">
              <div className="w-14 h-14 rounded-full metal-inset flex items-center justify-center mb-5 border border-white/5">
                <v.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{v.title}</h3>
              <p className="text-silver text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiciosSection() {
  const categories = [
    {
      icon: ClipboardList,
      number: "01",
      title: "Gestión Administrativa y Financiera",
      items: [
        "Elaboración de presupuestos anuales",
        "Liquidación de expensas con acceso digital",
        "Organización de asambleas",
        "Inscripción del consorcio en AFIP",
        "Control de personal y libros de actas",
        "Declaraciones juradas (SUTERH y FATERYH)",
      ],
    },
    {
      icon: Wrench,
      number: "02",
      title: "Mantenimiento y Conservación",
      items: [
        "Adaptación de ascensores a normativas",
        "Informes técnicos periódicos",
        "Supervisión de trabajos especializados",
        "Mantenimiento preventivo",
        "Atención de urgencias 24/7",
        "Selección de proveedores",
      ],
    },
    {
      icon: Scale,
      number: "03",
      title: "Asesoramiento Legal y Contable",
      items: [
        "Gestión de deudas e intimaciones",
        "Juicios por daños y perjuicios",
        "Mediación y resolución de conflictos",
        "Asesoramiento en propiedad horizontal",
        "Libro de remuneraciones",
      ],
    },
    {
      icon: Cpu,
      number: "04",
      title: "Tecnología y Transparencia",
      items: [
        "Plataforma OCTOPUS en tiempo real",
        "Comunicación digital con propietarios",
        "Votaciones online",
        "Reportes financieros actualizados",
      ],
    },
  ]

  return (
    <section className="py-28 bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-gold text-xs font-medium tracking-[0.3em] uppercase mb-4 justify-center">
            <span className="w-8 h-px bg-gold" />
            Nuestros Servicios
            <span className="w-8 h-px bg-gold" />
          </span>
          <h2 className="text-3xl sm:text-4xl text-white font-bold mb-4 tracking-tight">
            ¿Qué ofrecemos?
          </h2>
          <p className="text-silver max-w-xl mx-auto">
            Soluciones completas para la administración de tu consorcio.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="metal-surface rounded-2xl p-8 border border-white/5 hover:border-gold/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-full elevator-button flex items-center justify-center shrink-0 border border-white/5">
                  <span className="text-gold font-bold text-sm">{cat.number}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white leading-tight">{cat.title}</h3>
                </div>
              </div>
              <ul className="space-y-3 ml-[4.5rem]">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-silver text-sm">
                    <ChevronRight className="w-4 h-4 text-gold/60 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TecnologiaSection() {
  return (
    <section className="py-28 brushed-steel border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-gold text-xs font-medium tracking-[0.3em] uppercase mb-6">
              <span className="w-8 h-px bg-gold" />
              Tecnología
            </span>
            <h2 className="text-3xl sm:text-4xl text-white font-bold mb-8 tracking-tight leading-tight">
              Plataforma OCTOPUS
            </h2>
            <p className="text-silver leading-relaxed mb-10">
              Accedé a toda la información de tu consorcio en tiempo real.
              Nuestra plataforma digital te permite estar al día con las
              expensas, asambleas y estado del edificio desde cualquier
              dispositivo.
            </p>
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: Eye, title: "Información en tiempo real" },
                { icon: MessageSquare, title: "Comunicación digital" },
                { icon: CalendarCheck, title: "Votaciones online" },
                { icon: FileText, title: "Reportes financieros" },
              ].map((f) => (
                <div key={f.title} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full metal-inset flex items-center justify-center shrink-0 border border-white/5">
                    <f.icon className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-white/80 text-sm font-medium">{f.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="metal-surface rounded-3xl p-14 border border-white/5 text-center">
            <div className="w-28 h-28 rounded-full metal-inset flex items-center justify-center mx-auto mb-8 border border-white/5">
              <Cpu className="w-12 h-12 text-gold" />
            </div>
            <h3 className="text-3xl font-bold mb-3 tracking-tight">OCTOPUS</h3>
            <p className="text-silver text-sm">Tu consorcio conectado</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactoSection() {
  return (
    <section className="py-28 bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-gold text-xs font-medium tracking-[0.3em] uppercase mb-4 justify-center">
            <span className="w-8 h-px bg-gold" />
            Contacto
            <span className="w-8 h-px bg-gold" />
          </span>
          <h2 className="text-3xl sm:text-4xl text-white font-bold mb-4 tracking-tight">
            ¿Tenés un consorcio?
          </h2>
          <p className="text-silver max-w-xl mx-auto">
            Consultanos sin compromiso. Cada consorcio es único y nuestras
            soluciones también lo son.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a
            href="mailto:info@administracionrochas.com"
            className="metal-surface rounded-2xl p-8 text-center border border-white/5 hover:border-gold/20 transition-all duration-200"
          >
            <div className="w-14 h-14 rounded-full elevator-button flex items-center justify-center mx-auto mb-5 border border-white/5">
              <Mail className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-semibold text-white mb-1">Email</h3>
            <p className="text-silver text-xs">info@administracionrochas.com</p>
          </a>
          <a
            href="https://maps.google.com/?q=Córdoba+1109+Martinez+San+Isidro"
            target="_blank"
            rel="noopener noreferrer"
            className="metal-surface rounded-2xl p-8 text-center border border-white/5 hover:border-gold/20 transition-all duration-200"
          >
            <div className="w-14 h-14 rounded-full elevator-button flex items-center justify-center mx-auto mb-5 border border-white/5">
              <MapPin className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-semibold text-white mb-1">Dirección</h3>
            <p className="text-silver text-xs">Córdoba 1109<br />Martínez, San Isidro</p>
          </a>
          <a
            href="https://www.instagram.com/administracionrochas"
            target="_blank"
            rel="noopener noreferrer"
            className="metal-surface rounded-2xl p-8 text-center border border-white/5 hover:border-gold/20 transition-all duration-200"
          >
            <div className="w-14 h-14 rounded-full elevator-button flex items-center justify-center mx-auto mb-5 border border-white/5">
              <MessageCircle className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-semibold text-white mb-1">Instagram</h3>
            <p className="text-silver text-xs">@administracionrochas</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuienesSomosSection />
      <ValoresSection />
      <ServiciosSection />
      <TecnologiaSection />
      <ContactoSection />
    </>
  )
}
