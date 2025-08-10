// app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Excenta",
  description: "Skreddersydde løsninger i tre – design, produksjon og montering.",
  metadataBase: new URL("https://excenta.no"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Excenta",
    description: "Skreddersydde løsninger i tre – design, produksjon og montering.",
    url: "https://excenta.no",
    siteName: "Excenta",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="no" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
