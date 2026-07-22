import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tecnología",
  description:
    "Plataforma OCTOPUS: información accesible en tiempo real. Comunicación digital, votaciones online y reportes financieros.",
  alternates: {
    canonical: "https://administracionrochas.com.ar/tecnologia",
  },
}

export default function TecnologiaPage() {
  return (
    <section className="pt-32 pb-24 bg-white min-h-[60vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-steel text-sm font-medium tracking-[0.2em] uppercase mb-3 block">
          Tecnología
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-dark font-bold mb-6">
          Próximamente
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Esta sección está en desarrollo. Conocé más sobre nuestra
          plataforma OCTOPUS en la página de inicio.
        </p>
      </div>
    </section>
  )
}
