import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexis Weber",
  description:
    "Full Stack Developer (frontend and backend developer) with experience on multiples tecnologies as like: Javascript, Typescript, React, Vite, Next.js, Node.js, Sequelize, Express.js, HTML, Css, Agile, SCRUM, React Native  ",
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
        {children}
      </body>
    </html>
  );
}
