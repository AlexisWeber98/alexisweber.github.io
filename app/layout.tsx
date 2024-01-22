import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexis Weber | Desarrollador Full Stack",
  description:
    "¡Hola! Soy Alexis Weber, un desarrollador Full Stack con experiencia en diversas tecnologías altamente demandadas, como desarrollador web frontend, backend y móvil tengo grán capacidad de agregar valor a cada proyecto. Descubre mi portafolio y proyectos destacados.",
  authors: {
    url: "https://www.alexisweber.com.ar",
    name: "Alexis Weber",
  },
  keywords: [
    "Alexis Weber",
    "AlexisWeber",
    "Desarrollador Full Stack",
    "React",
    "React Native",
    "Node.js",
    "Next.js",
    "Express",
    "Sequelize",
    "MySQL",
    "TypeScript",
    "Proyectos Web",
    "Programación",
  ].join(",")
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="navContain">
          <NavBar />
        </div>
        <hr />
        <div>{children}</div>
      </body>
    </html>
  );
}
