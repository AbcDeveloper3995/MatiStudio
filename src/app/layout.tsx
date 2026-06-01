import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ReservationProvider } from "@/providers/ReservationProvider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MatiStudio | Premium Barbershop",
  description: "Barbería premium y salón de cuidado masculino. Elevando el estándar del estilo personal.",
  icons: {
    icon: "/Mati_Studio_vector-2.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${outfit.variable} antialiased`}
      >
        <ReservationProvider>
          {children}
        </ReservationProvider>
      </body>
    </html>
  );
}
