import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ReservationProvider } from "@/providers/ReservationProvider";
import { PwaRegister } from "@/components/PwaRegister";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#050505",
};

export const metadata: Metadata = {
  title: "MatiStudio | Premium Barbershop",
  description: "Barbería premium y salón de cuidado masculino. Elevando el estándar del estilo personal.",
  icons: {
    icon: "/Mati_Studio_vector-2.svg",
    apple: "/Mati_Studio_vector-2.svg"
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "MatiStudio",
  },
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
        <PwaRegister />
        <ReservationProvider>
          {children}
        </ReservationProvider>
      </body>
    </html>
  );
}
