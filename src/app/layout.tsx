import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";

import FooterGlow from "@/components/FooterGlow";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio de David",
  description: "Desarrollador Web - React, Next.js, Tailwind",
  icons: {
    icon: "/DavidCortesLogo.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-black text-white`}>
        <CustomCursor />
        <FooterGlow />
        <Navbar />
        <main className="pt-28">{children}</main>
      </body>
    </html>
  );
}
