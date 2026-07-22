import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: {
    default: "Administración Rochas | Administración de Consorcios en Martínez",
    template: "%s | Administración Rochas",
  },
  description:
    "Administración de consorcios personalizada en Martínez, San Isidro. Gestión integral, transparente y profesional. Eficiencia, cercanía y tecnología al servicio de tu consorcio.",
  keywords: [
    "administración de consorcios",
    "consorcios Martínez",
    "administrador de consorcios San Isidro",
    "expensas",
    "mantenimiento edilicio",
    "propiedad horizontal",
  ],
  authors: [{ name: "Administración Rochas" }],
  metadataBase: new URL("https://administracionrochas.com.ar"),
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Administración Rochas",
    title: "Administración Rochas | Administración de Consorcios en Martínez",
    description:
      "Administración de consorcios personalizada. Gestión integral, transparente y profesional en Martínez, San Isidro.",
    url: "https://administracionrochas.com.ar",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
