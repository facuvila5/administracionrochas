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
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-dark via-dark-light to-steel overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-silver blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-chrome blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <span className="inline-block text-silver text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Administración de Consorcios
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6">
            Tu consorcio, en{" "}
            <span className="text-silver">buenas manos</span>
          </h1>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
            Administración integral y personalizada. Eficiencia, transparencia
            y profesionalismo para que tu edificio esté siempre bien cuidado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-white text-dark px-8 py-4 rounded-xl text-sm font-semibold hover:bg-silver-light transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Solicitar asesoría
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/quienes-somos"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-xl text-sm font-medium hover:bg-white/10 transition-all duration-200"
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-steel text-sm font-medium tracking-[0.2em] uppercase mb-3 block">
              Quiénes Somos
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-dark font-bold mb-6">
              Un equipo comprometido con tu consorcio
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Desde Administración Rochas brindamos un servicio de administración
              integral y personalizado, adaptado a las necesidades específicas de
              cada consorcio.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Nuestro enfoque se basa en eficiencia, transparencia y
              profesionalismo, asegurando una gestión ágil, ordenada y orientada
              a la prevención de conflictos.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Somos un equipo de profesionales con sólida experiencia en gestión
              administrativa, legal y contable, comprometidos con brindar un
              servicio que inspire tranquilidad, confianza y cercanía a los
              propietarios.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: CheckCircle, label: "Administración integral", desc: "Gestión completa de tu consorcio" },
              { icon: Shield, label: "Transparencia total", desc: "Acceso digital a toda la información" },
              { icon: Users, label: "Atención personalizada", desc: "Cada consorcio es único" },
              { icon: Zap, label: "Respuesta rápida", desc: "Resolución ágil de problemas" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-light rounded-2xl p-6 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-dark/5 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-dark" />
                </div>
                <h3 className="font-semibold text-dark text-sm mb-1">{item.label}</h3>
                <p className="text-gray-500 text-xs">{item.desc}</p>
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
    <section className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-steel text-sm font-medium tracking-[0.2em] uppercase mb-3 block">
            Nuestros Valores
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-dark font-bold">
            Lo que nos define
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="w-14 h-14 rounded-xl bg-dark/5 flex items-center justify-center mb-5">
                <v.icon className="w-7 h-7 text-dark" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-dark mb-2">{v.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-steel text-sm font-medium tracking-[0.2em] uppercase mb-3 block">
            Nuestros Servicios
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-dark font-bold mb-4">
            ¿Qué ofrecemos?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Soluciones completas para la administración de tu consorcio.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-light rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-dark flex items-center justify-center">
                  <cat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-dark">{cat.title}</h3>
              </div>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                    <ChevronRight className="w-4 h-4 text-steel shrink-0 mt-0.5" />
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
    <section className="py-24 bg-gradient-to-br from-dark to-dark-light text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-silver text-sm font-medium tracking-[0.2em] uppercase mb-3 block">
              Tecnología
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
              Plataforma OCTOPUS
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Accedé a toda la información de tu consorcio en tiempo real.
              Nuestra plataforma digital te permite estar al día con las
              expensas, asambleas y estado del edificio desde cualquier
              dispositivo.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Eye, title: "Información en tiempo real" },
                { icon: MessageSquare, title: "Comunicación digital" },
                { icon: CalendarCheck, title: "Votaciones online" },
                { icon: FileText, title: "Reportes financieros" },
              ].map((f) => (
                <div key={f.title} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-silver" />
                  </div>
                  <span className="text-white/80 text-sm font-medium">{f.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 rounded-3xl p-12 border border-white/10 text-center">
            <div className="w-24 h-24 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
              <Cpu className="w-12 h-12 text-silver" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-3">OCTOPUS</h3>
            <p className="text-white/50 text-sm">Tu consorcio conectado</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactoSection() {
  return (
    <section className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-steel text-sm font-medium tracking-[0.2em] uppercase mb-3 block">
            Contacto
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-dark font-bold mb-4">
            ¿Tenés un consorcio?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Consultanos sin compromiso. Cada consorcio es único y nuestras
            soluciones también lo son.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <a
            href="mailto:info@administracionrochas.com"
            className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
          >
            <div className="w-14 h-14 rounded-xl bg-dark/5 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-dark" />
            </div>
            <h3 className="font-semibold text-dark mb-1">Email</h3>
            <p className="text-gray-500 text-sm">info@administracionrochas.com</p>
          </a>
          <a
            href="https://maps.google.com/?q=Córdoba+1109+Martinez+San+Isidro"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
          >
            <div className="w-14 h-14 rounded-xl bg-dark/5 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-dark" />
            </div>
            <h3 className="font-semibold text-dark mb-1">Dirección</h3>
            <p className="text-gray-500 text-sm">Córdoba 1109<br />Martínez, San Isidro</p>
          </a>
          <a
            href="https://www.instagram.com/administracionrochas"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
          >
            <div className="w-14 h-14 rounded-xl bg-dark/5 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-7 h-7 text-dark" />
            </div>
            <h3 className="font-semibold text-dark mb-1">Instagram</h3>
            <p className="text-gray-500 text-sm">@administracionrochas</p>
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
