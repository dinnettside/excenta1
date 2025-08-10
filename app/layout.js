import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Excenta - Skreddersydde møbelløsninger",
  description: "Tidløs design og presisjonshåndverk. Vi skaper skreddersydde kjøkken, garderober, bad og møbler.",
  icons: {
    icon: "/favicon.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <head>
        <title>Excenta</title>
        <style>
          {`
            @font-face {
              font-family: 'Geist';
              src: url('/path-to-geist-font.woff2') format('woff2');
            }

            @font-face {
              font-family: 'Geist Mono';
              src: url('/path-to-geist-mono-font.woff2') format('woff2');
            }

            body {
              font-family: 'Geist', sans-serif;
            }

            code, pre {
              font-family: 'Geist Mono', monospace;
            }
          `}
        </style>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
