import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de administración de consorcios: gestión administrativa, mantenimiento, asesoramiento legal y tecnología. Administración Rochas.",
  alternates: {
    canonical: "https://administracionrochas.com.ar/servicios",
  },
}

export default function ServiciosPage() {
  return (
    <section className="pt-32 pb-24 bg-white min-h-[60vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-steel text-sm font-medium tracking-[0.2em] uppercase mb-3 block">
          Servicios
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-dark font-bold mb-6">
          Próximamente
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Esta sección está en desarrollo. Mientras tanto, podés ver un
          resumen de nuestros servicios en la página de inicio.
        </p>
      </div>
    </section>
  )
}
