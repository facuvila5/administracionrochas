import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacte a Administración Rochas. Consultas sobre administración de consorcios en Martínez, San Isidro.",
  alternates: {
    canonical: "https://administracionrochas.com.ar/contacto",
  },
}

export default function ContactoPage() {
  return (
    <section className="pt-32 pb-24 bg-white min-h-[60vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-steel text-sm font-medium tracking-[0.2em] uppercase mb-3 block">
          Contacto
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-dark font-bold mb-6">
          Próximamente
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Esta sección está en desarrollo. Mientras tanto, podés contactarnos
          por email a info@administracionrochas.com
        </p>
      </div>
    </section>
  )
}
